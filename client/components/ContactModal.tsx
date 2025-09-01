import { useState } from "react";
import { X, Send, Mail, User, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        alert(errorData.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleClose = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-dark-950/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-cream-50/95 backdrop-blur-md border border-cream-300/30 rounded-2xl shadow-2xl overflow-hidden">
        {/* Glass effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-100/80 to-cream-200/60 backdrop-blur-md" />

        {/* Content */}
        <div className="relative p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bricolage text-2xl font-bold !text-dark-950">
              Get in Touch
            </h2>
            {/* <button
              onClick={handleClose}
              className="p-2 rounded-lg hover:bg-cream-200/50 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 !text-dark-950" />
            </button> */}
          </div>

          {submitted ? (
            // Success State
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bricolage text-xl font-bold text-dark-950 mb-2">
                Message Sent!
              </h3>
              <p className="font-bricolage text-dark-950 mb-6">
                Thank you for reaching out. We'll get back to you within 24
                hours.
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-3 bg-orange-500 text-cream-50 font-bricolage text-sm rounded-xl hover:bg-orange-600 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          ) : (
            // Form
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block font-bricolage text-sm font-medium text-dark-950 mb-2">
                  Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-950/60" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={cn(
                      "w-full pl-11 pr-4 py-3 bg-white/50 border rounded-xl font-bricolage text-dark-950 placeholder-dark-950/60 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors",
                      errors.name ? "border-red-500" : "border-cream-300",
                    )}
                    placeholder="Your name"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 font-bricolage">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block font-bricolage text-sm font-medium text-dark-950 mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-950/60" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={cn(
                      "w-full pl-11 pr-4 py-3 bg-white/50 border rounded-xl font-bricolage text-dark-950 placeholder-dark-950/60 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors",
                      errors.email ? "border-red-500" : "border-cream-300",
                    )}
                    placeholder="your@email.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 font-bricolage">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label className="block font-bricolage text-sm font-medium text-dark-950 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-dark-950/60" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={cn(
                      "w-full pl-11 pr-4 py-3 bg-white/50 border rounded-xl font-bricolage !text-dark-950 placeholder-dark-950/60 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors resize-none",
                      errors.message ? "border-red-500" : "border-cream-300",
                    )}
                    placeholder="Tell us about your project..."
                  />
                </div>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 font-bricolage">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-orange-500 text-cream-50 font-bricolage text-base rounded-xl hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-cream-50/30 border-t-cream-50 rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-orange-200/30 to-orange-300/20 rounded-full blur-xl" />
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-cream-300/40 to-cream-400/30 rounded-full blur-lg" />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
