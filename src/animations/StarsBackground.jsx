'use client';

import React, { useEffect, useRef, useCallback } from 'react';

function GravityStarsBackground({
  starsCount = 75,
  starsSize = 2,
  starsOpacity = 0.75,
  glowIntensity = 15,
  glowAnimation = 'ease', // 'instant' | 'ease' | 'spring'
  movementSpeed = 0.6,
  mouseInfluence = 100,
  mouseGravity = 'attract', // 'attract' | 'repel'
  gravityStrength = 95,
  className = '',
  style = {},
  ...props
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const starsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  const dprRef = useRef(1);
  const sizeRef = useRef({ width: 0, height: 0 });

  /* ---------------- utils ---------------- */
  const readColor = useCallback(() => {
    if (!containerRef.current) return '#ffffff';
    return getComputedStyle(containerRef.current).color || '#ffffff';
  }, []);

  const initStars = useCallback((w, h) => {
    starsRef.current = Array.from({ length: starsCount }).map(() => {
      const angle = Math.random() * Math.PI * 2;
      const speed = movementSpeed * (0.5 + Math.random() * 0.5);
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * starsSize + 1,
        opacity: starsOpacity,
        baseOpacity: starsOpacity,
        mass: Math.random() * 0.5 + 0.5,
        glowMultiplier: 1,
        glowVelocity: 0,
      };
    });
  }, [starsCount, starsSize, starsOpacity, movementSpeed]);

  const redistributeStars = useCallback((w, h) => {
    starsRef.current.forEach(p => {
      p.x = Math.random() * w;
      p.y = Math.random() * h;
    });
  }, []);

  /* ---------------- resize ---------------- */
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const nextDpr = Math.min(window.devicePixelRatio || 1, 2);

    // Avoid unnecessary resize
    if (
      rect.width === sizeRef.current.width &&
      rect.height === sizeRef.current.height &&
      nextDpr === dprRef.current
    ) return;

    dprRef.current = nextDpr;
    sizeRef.current = { width: rect.width, height: rect.height };

    canvas.width = Math.floor(rect.width * nextDpr);
    canvas.height = Math.floor(rect.height * nextDpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    if (starsRef.current.length === 0) {
      initStars(rect.width, rect.height);
    } else {
      redistributeStars(rect.width, rect.height);
    }
  }, [initStars, redistributeStars]);

  /* ---------------- pointer ---------------- */
  const handlePointerMove = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const point = 'touches' in e ? e.touches[0] : e;
    if (!point) return;

    mouseRef.current = {
      x: point.clientX - rect.left,
      y: point.clientY - rect.top,
    };
  }, []);

  /* ---------------- physics ---------------- */
  const updateStars = useCallback(() => {
    const { width: w, height: h } = sizeRef.current;
    const mouse = mouseRef.current;

    for (let p of starsRef.current) {
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.hypot(dx, dy);

      if (dist < mouseInfluence && dist > 0) {
        const force = (mouseInfluence - dist) / mouseInfluence;
        const nx = dx / dist;
        const ny = dy / dist;
        const g = force * (gravityStrength * 0.001);

        if (mouseGravity === 'attract') {
          p.vx += nx * g;
          p.vy += ny * g;
        } else {
          p.vx -= nx * g;
          p.vy -= ny * g;
        }

        p.opacity = Math.min(1, p.baseOpacity + force * 0.4);

        const targetGlow = 1 + force * 2;
        if (glowAnimation === 'instant') p.glowMultiplier = targetGlow;
        else if (glowAnimation === 'ease') p.glowMultiplier += (targetGlow - p.glowMultiplier) * 0.15;
        else {
          p.glowVelocity = p.glowVelocity * 0.85 + (targetGlow - p.glowMultiplier) * 0.2;
          p.glowMultiplier += p.glowVelocity;
        }
      } else {
        p.opacity = Math.max(p.baseOpacity * 0.3, p.opacity - 0.02);
        p.glowMultiplier += (1 - p.glowMultiplier) * 0.08;
      }

      // movement
      p.x += p.vx;
      p.y += p.vy;

      p.vx *= 0.999;
      p.vy *= 0.999;

      // maintain minimum speed
      const speed = Math.hypot(p.vx, p.vy);
      const minSpeed = movementSpeed * 0.3;
      if (speed < minSpeed && speed > 0) {
        const scale = minSpeed / speed;
        p.vx *= scale;
        p.vy *= scale;
      }

      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;
    }
  }, [mouseGravity, mouseInfluence, gravityStrength, glowAnimation, movementSpeed]);

  /* ---------------- draw ---------------- */
  const drawStars = useCallback((ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const color = readColor();

    for (const p of starsRef.current) {
      ctx.save();
      ctx.shadowColor = color;
      ctx.shadowBlur = glowIntensity * p.glowMultiplier * 2;
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(p.x * dprRef.current, p.y * dprRef.current, p.size * dprRef.current, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }, [readColor, glowIntensity]);

  /* ---------------- animation ---------------- */
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    updateStars();
    drawStars(ctx);
    animRef.current = requestAnimationFrame(animate);
  }, [updateStars, drawStars]);

  /* ---------------- lifecycle ---------------- */
  useEffect(() => {
    resizeCanvas();

    const ro = new ResizeObserver(() => requestAnimationFrame(resizeCanvas));
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [resizeCanvas]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [animate]);

  /* ---------------- render ---------------- */
  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        color: 'white',
        ...style
      }}
      className={className}
      onMouseMove={handlePointerMove}
      onTouchMove={handlePointerMove}
      {...props}
    >
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  );
}

export default GravityStarsBackground;
