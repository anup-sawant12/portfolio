import React from "react";
import useMagneticEffect from "../hooks/useMagneticEffect";

export default function MagneticButton({ children, className = "", strength = 0.25, ...props }) {
  const { ref, position } = useMagneticEffect(strength);

  // Smooth return transition when magnetic attraction is reset (x=0, y=0)
  const isResetting = position.x === 0 && position.y === 0;
  const style = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: isResetting ? "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)" : "none",
  };

  return (
    <div
      ref={ref}
      style={style}
      className={`inline-block ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
