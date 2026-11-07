import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  alpha: number;
  decay: number;
  color: string;
}

export const MagicParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Only run if not prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let isVisible = true;
    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    let resizeTimer: number;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        if (!canvas) return;
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }, 250);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    const colors = ['#e6ca65', '#ffd700', '#fbf0b9'];
    const particles: Particle[] = [];
    const count = 22; // Reduced particle count for high frame rates and near-zero CPU

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.6,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: -Math.random() * 0.4 - 0.15,
        alpha: Math.random() * 0.6 + 0.1,
        decay: (Math.random() * 0.004 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // High performance render loop without costly shadowBlur
    let lastTime = performance.now();
    const render = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(render);

      // Throttle to max 30-40fps for ambient background to keep main thread completely idle
      if (currentTime - lastTime < 24) return;
      lastTime = currentTime;

      if (!isVisible) return;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < count; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha += p.decay;

        if (p.alpha > 0.7) {
          p.alpha = 0.7;
          p.decay = -Math.abs(p.decay);
        } else if (p.alpha < 0.1) {
          p.alpha = 0.1;
          p.decay = Math.abs(p.decay);
        }

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, 6.283);
        ctx.fill();
      }
    };

    // Defer start until browser is completely idle
    const startTimeout = setTimeout(() => {
      animationFrameId = requestAnimationFrame(render);
    }, 150);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(resizeTimer);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-50 will-change-transform"
    />
  );
};
