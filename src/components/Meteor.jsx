import React from "react";

export default function Meteor(props) {
  const duration = props.duration || 1.2;
  const size = props.size || 2;
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  const delay = Math.random() * 1.2;

  return (
    <span
      className="absolute rounded-full bg-white shadow-lg animate-meteor-blink"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        top: `${top}%`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      
      }}
    />
  );
}
