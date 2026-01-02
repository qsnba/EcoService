"use client";

import React, { useEffect, useRef } from "react";

export default function CyberEnergyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    // 配置参数
    const PARTICLE_COUNT = 60;
    const CONNECTION_DIST = 150;
    const MOUSE_DIST = 250; // 增大一点感应范围

    const mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.size = Math.random() * 2 + 1;
        this.color = Math.random() > 0.5 ? "rgba(6, 182, 212, " : "rgba(168, 85, 247, ";
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + "0.8)";
        ctx.fill();
      }
    }

    const init = () => {
      // 这里的宽高必须匹配父容器的实际像素
      // 如果发现拉伸，可以用 canvas.clientWidth
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        width = canvas.width = rect.width;
        height = canvas.height = rect.height;
      } else {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }

      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, index) => {
        p.update();
        p.draw();

        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            ctx.beginPath();
            const opacity = 1 - dist / CONNECTION_DIST;
            ctx.strokeStyle = `rgba(100, 200, 255, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_DIST) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / MOUSE_DIST})`;
          ctx.lineWidth = 1.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();

          if (dist > 50) {
            p.x -= dx * 0.03;
            p.y -= dy * 0.03;
          }
        }
      });
      requestAnimationFrame(animate);
    };

    // ✅ 修复：将事件监听器挂载到 window 上，而不是 canvas 上
    // 这样即使鼠标在文字或图片上，背景也能感应到
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      // 计算鼠标相对于当前 canvas 的位置
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // 只有鼠标在当前 section 范围内才更新，否则移走
      if (x >= 0 && x <= width && y >= 0 && y <= height) {
        mouse.x = x;
        mouse.y = y;
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }
    };

    window.addEventListener("resize", init);
    // ✅ 监听 window 的移动
    window.addEventListener("mousemove", handleMouseMove);

    init();
    animate();

    return () => {
      window.removeEventListener("resize", init);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.vignette} />
      <canvas ref={canvasRef} style={styles.canvas} />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0, // 背景层级最低
    background: "#020617",
    overflow: "hidden",
  },
  canvas: {
    display: "block",
    width: "100%",
    height: "100%",
  },
  vignette: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(circle at 50% 50%, transparent 40%, #000 100%)",
    pointerEvents: "none",
    zIndex: 1,
  },
};