import { useEffect, useRef, useState } from "react";

export default function useMagneticEffect(strength = 0.25) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const elCenterX = rect.left + rect.width / 2;
      const elCenterY = rect.top + rect.height / 2;

      const distX = e.clientX - elCenterX;
      const distY = e.clientY - elCenterY;

      const distance = Math.hypot(distX, distY);
      const threshold = 100; // Trigger radius

      if (distance < threshold) {
        setPosition({
          x: distX * strength,
          y: distY * strength,
        });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (el) {
        el.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [strength]);

  return { ref, position };
}
