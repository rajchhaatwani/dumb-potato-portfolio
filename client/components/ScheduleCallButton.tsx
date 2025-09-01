import React from "react";
import { PopupButton } from "react-calendly";

interface ScheduleCallButtonProps {
  btnStyle?: string;
}

const ScheduleCallButton: React.FC<ScheduleCallButtonProps> = ({ btnStyle }) => {
  return (
    <PopupButton
      url="https://calendly.com/raj-dumbpotato/30min" // 🔗 replace with your Calendly link
      rootElement={document.getElementById("root") as HTMLElement} // 👈 TS safe cast
      text="Schedule a Call"
      className={`px-6 py-3 ${btnStyle ?? ""} text-secondary-foreground rounded-xl shadow-lg hover:bg-secondary/90 transition`}
    />
  );
};

export default ScheduleCallButton;
