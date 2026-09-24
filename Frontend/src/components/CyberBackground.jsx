import React, { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const CyberBackground = () => {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle nodes configuration - Adaptive Palette
    const particleCount = Math.min(48, Math.floor(window.innerWidth / 28));
    const particles = [];
    
    const darkColors = [
      "rgba(6, 182, 212, ",   // Electric Cyan
      "rgba(59, 130, 246, ",  // Cyber Blue
      "rgba(168, 85, 247, ",  // Neural Purple
      "rgba(16, 185, 129, ",  // Matrix Emerald
    ];

    const lightColors = [
      "rgba(37, 99, 235, ",   // Royal Blue
      "rgba(2, 132, 199, ",   // Sky Blue / Cobalt
      "rgba(79, 70, 229, ",   // Indigo
      "rgba(14, 165, 233, ",  // Vivid Cyan
    ];

    const colors = isDark ? darkColors : lightColors;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.85,
        vy: (Math.random() - 0.5) * 0.85,
        radius: isDark ? Math.random() * 2 + 1.2 : Math.random() * 1.8 + 1.2,
        colorPrefix: colors[Math.floor(Math.random() * colors.length)],
        baseAlpha: isDark ? Math.random() * 0.45 + 0.25 : Math.random() * 0.35 + 0.2,
        pulseSpeed: Math.random() * 0.03 + 0.015,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update & Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Bounce gently off canvas edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Subtle pulsing glow
        const alpha = p.baseAlpha + Math.sin(frame * p.pulseSpeed + p.pulseOffset) * 0.14;
        const currentAlpha = Math.max(0.1, Math.min(0.85, alpha));

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorPrefix}${currentAlpha})`;
        ctx.shadowBlur = isDark ? 8 : 5;
        ctx.shadowColor = `${p.colorPrefix}${isDark ? "0.6" : "0.35"})`;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect with nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 125) {
            const lineAlpha = (1 - dist / 125) * (isDark ? 0.22 : 0.16);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark 
              ? `rgba(6, 182, 212, ${lineAlpha})` 
              : `rgba(37, 99, 235, ${lineAlpha})`;
            ctx.lineWidth = isDark ? 0.85 : 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 overflow-hidden select-none transition-colors duration-500 ${
      isDark 
        ? "bg-gradient-to-b from-[#080c14] via-[#0b0f19] to-[#080c14]" 
        : "bg-gradient-to-b from-[#f8fafc] via-[#f0f7ff] to-[#f8fafc]"
    }`}>
      
      {/* 1. Ambient Glowing Orbs */}
      {isDark ? (
        <>
          <div className="absolute w-[650px] h-[650px] rounded-full bg-gradient-to-br from-blue-600/18 via-indigo-600/12 to-transparent blur-[140px] -top-32 -left-32 animate-aurora-fast pointer-events-none"></div>
          <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-500/18 via-sky-600/12 to-transparent blur-[140px] top-1/3 -right-32 animate-aurora-fast-reverse pointer-events-none"></div>
          <div className="absolute w-[550px] h-[550px] rounded-full bg-gradient-to-br from-purple-600/14 via-indigo-700/8 to-transparent blur-[130px] -bottom-32 left-1/3 animate-drift-fast pointer-events-none"></div>
        </>
      ) : (
        <>
          <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-400/12 via-indigo-400/8 to-transparent blur-[120px] -top-32 -left-32 animate-aurora-fast pointer-events-none"></div>
          <div className="absolute w-[550px] h-[550px] rounded-full bg-gradient-to-br from-cyan-400/14 via-sky-400/10 to-transparent blur-[130px] top-1/3 -right-32 animate-aurora-fast-reverse pointer-events-none"></div>
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-500/10 via-indigo-500/6 to-transparent blur-[110px] -bottom-32 left-1/3 animate-drift-fast pointer-events-none"></div>
        </>
      )}

      {/* 2. Animated Cyber Grid */}
      <div className={`absolute inset-0 cyber-grid-animated ${isDark ? "opacity-40" : "opacity-70"}`}></div>

      {/* 3. Neural Synapses & Floating Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

    </div>
  );
};

export default CyberBackground;


