import React, { useState } from "react";
import { PopupButton, PopupModal } from "react-calendly";
import { logEvent } from "../lib/analytics";

interface ScheduleCallButtonProps {
  btnStyle?: string;
}

const ScheduleCallButton: React.FC<ScheduleCallButtonProps> = ({
  btnStyle,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    logEvent("schedule_call_click", "Calendly", "Schedule a Call Button");
    setIsOpen(true);
  };

  return (
    <>
      <button
        className={`px-6 py-3 ${btnStyle ?? ""} text-secondary-foreground rounded-xl shadow-lg hover:bg-secondary/90 transition`}
        onClick={() => handleClick()}
      >
        Schedule a Call
      </button>
      <PopupModal
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        url="https://calendly.com/raj-dumbpotato/30min"
        rootElement={document.getElementById("root") as HTMLElement}
      />
    </>
  );
};

export default ScheduleCallButton;
