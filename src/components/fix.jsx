"use client";

import React, { useState, useEffect } from "react";
import Typing from "./Typing";

const TypingSpeedIndicator = ({ sentence }) => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [typingSpeed, setTypingSpeed] = useState(null);

  const handleTypingStart = () => {
    setStartTime(new Date());
    setEndTime(null);
    setTypingSpeed(null);
  };

  const handleTypingEnd = () => {
    setEndTime(new Date());
  };

  useEffect(() => {
    if (startTime && endTime) {
      const timeDifference = endTime - startTime;
      const seconds = timeDifference / 1000;
      const words = sentence.trim().split(" ").length;
      const speed = Math.round((words / seconds) * 60);
      setTypingSpeed(speed);
    }
  }, [startTime, endTime, sentence]);

  const handleKeyClick = (key) => {
    // Handle key presses here
  };

  return (
    <div className="typing-simulator">
      <div className="sentence">
        <p className="m-20 rounded-2xl border border-solid border-slate-950 bg-green-300 p-10 text-4xl font-extrabold leading-snug tracking-tighter text-gray-600">
          {sentence}
        </p>
      </div>
      <div className="keyboard">
        <Typing />
      </div>
    </div>
  );
};

export default TypingSpeedIndicator;
