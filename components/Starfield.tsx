"use client";
import React from "react";

export default function Starfield() {
  return (
    <>
      {/* 能量雾光 */}
      <div className="sf sf-glow" />
      {/* 低对比科技网格（很淡，不会“线条多”） */}
      <div className="sf sf-grid" />
      {/* 少量亮星（点缀科技质感） */}
      <div className="sf sf-stars" />

      <style jsx global>{`
        .sf {
          position: absolute;
          inset: -60px;
          pointer-events: none;
          will-change: transform;
        }

        /* 1) 能量雾光：科技感的“主体” */
        .sf-glow {
          background:
            radial-gradient(1000px 600px at 15% 10%, rgba(90,140,255,.20), transparent 60%),
            radial-gradient(900px 540px at 85% 30%, rgba(255,255,255,.10), transparent 62%),
            radial-gradient(760px 520px at 55% 95%, rgba(80,160,255,.16), transparent 62%),
            linear-gradient(180deg, rgba(5,8,14,.0), rgba(5,8,14,.35));
          filter: saturate(1.05);
          opacity: 1;
          animation: sfFloatGlow 46s ease-in-out infinite;
        }

        /* 2) 科技网格：非常淡的斜向网格 + 横向细线（低对比） */
        .sf-grid {
  background-image:
    linear-gradient(transparent 0, transparent 26px, rgba(170,210,255,.06) 27px),
    repeating-linear-gradient(
      135deg,
      rgba(160,200,255,.06) 0px,
      rgba(160,200,255,.06) 1px,
      transparent 1px,
      transparent 24px
    );
  background-size: 100% 28px, 240px 240px;
  opacity: 0.55;
  mix-blend-mode: screen;
  filter: blur(0.15px);

  animation: sfGridFlow 48s linear infinite;
}

@keyframes sfGridFlow {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(-40px, 30px, 0) scale(1.02);
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
}


        /* 3) 亮星点：少量、分散、但更亮（不密集不吵） */
        .sf-stars {
          background-image:
            radial-gradient(2px 2px at 12% 28%, rgba(255,255,255,.95), transparent 65%),
            radial-gradient(2px 2px at 28% 72%, rgba(170,210,255,.95), transparent 65%),
            radial-gradient(2px 2px at 62% 38%, rgba(255,255,255,.85), transparent 65%),
            radial-gradient(2px 2px at 78% 18%, rgba(130,190,255,.95), transparent 65%),
            radial-gradient(2px 2px at 88% 64%, rgba(255,255,255,.85), transparent 65%),
            radial-gradient(1px 1px at 45% 55%, rgba(255,255,255,.55), transparent 60%),
            radial-gradient(1px 1px at 55% 22%, rgba(140,190,255,.55), transparent 60%);
          opacity: 0.9;
          filter: drop-shadow(0 0 8px rgba(120,180,255,.18));
          animation: sfFloatStars 32s ease-in-out infinite;
        }

        @keyframes sfFloatGlow {
          0%   { transform: translate3d(0, 0, 0); }
          50%  { transform: translate3d(-26px, -10px, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }

        @keyframes sfDriftGrid {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-70px, 50px, 0); }
        }

        @keyframes sfFloatStars {
          0%   { transform: translate3d(0, 0, 0); }
          50%  { transform: translate3d(18px, -12px, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
      `}</style>
    </>
  );
}

