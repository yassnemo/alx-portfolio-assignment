import React, { useEffect, useRef } from 'react';

const GlowingDots = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const spacing = 30; // Space between dots
    let dots: { x: number; y: number; opacity: number }[][] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createDotGrid();
    };

    const createDotGrid = () => {
      dots = [];
      const cols = Math.floor(canvas.width / spacing);
      const rows = Math.floor(canvas.height / spacing);

      for (let i = 0; i < cols; i++) {
        dots[i] = [];
        for (let j = 0; j < rows; j++) {
          dots[i][j] = {
            x: i * spacing + spacing / 2,
            y: j * spacing + spacing / 2,
            opacity: 0
          };
        }
      }
    };

    const drawDots = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDarkMode = document.documentElement.classList.contains('dark');
      const dotColor = isDarkMode ? '255, 255, 255' : '0, 0, 0';

      dots.forEach(column => {
        column.forEach(dot => {
          // Calculate distance from mouse
          const dx = mouseRef.current.x - dot.x;
          const dy = mouseRef.current.y - dot.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 100;

          // Update dot opacity based on mouse proximity
          if (distance < maxDistance) {
            dot.opacity += (0.5 - dot.opacity) * 0.1;
          } else {
            dot.opacity += (0 - dot.opacity) * 0.1;
          }

          // Draw dot
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${dotColor}, ${0.15 + dot.opacity * 0.35})`;
          ctx.fill();
        });
      });

      frameRef.current = requestAnimationFrame(drawDots);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    resizeCanvas();
    drawDots();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
};

export default GlowingDots;