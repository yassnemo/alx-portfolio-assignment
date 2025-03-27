import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const GlowCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouseSpeedRef = useRef({ x: 0, y: 0 });
  const lastMousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let frameId: number;

    const updateCursorGlow = (e: MouseEvent) => {
      if (!cursorRef.current) return;

      // Calculate mouse speed
      mouseSpeedRef.current = {
        x: e.clientX - lastMousePosRef.current.x,
        y: e.clientY - lastMousePosRef.current.y,
      };

      lastMousePosRef.current = { x: e.clientX, y: e.clientY };

      // Calculate speed magnitude
      const speed = Math.hypot(mouseSpeedRef.current.x, mouseSpeedRef.current.y);
      const normalizedSpeed = Math.min(speed / 20, 1);

      // Update glow effect based on speed
      const hue = 280 + (normalizedSpeed * 40);
      const saturation = 70 + (normalizedSpeed * 30);
      const lightness = 50 + (normalizedSpeed * 20);

      cursorRef.current.style.background = `radial-gradient(circle at center, 
        hsla(${hue}, ${saturation}%, ${lightness}%, 0.3) 0%,
        hsla(${hue}, ${saturation}%, ${lightness}%, 0.1) 50%,
        transparent 70%)`;
    };

    const smoothUpdateCursor = () => {
      frameId = requestAnimationFrame(smoothUpdateCursor);
    };

    window.addEventListener('mousemove', updateCursorGlow);
    smoothUpdateCursor();

    return () => {
      window.removeEventListener('mousemove', updateCursorGlow);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed pointer-events-none z-50 w-64 h-64 mix-blend-overlay"
      animate={{
        x: lastMousePosRef.current.x - 128,
        y: lastMousePosRef.current.y - 128,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    />
  );
};

export default GlowCursor;