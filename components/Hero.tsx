"use client";

import React from "react";
import { useI18n } from "../lib/i18n";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" style={s.wrap}>
      <video style={s.video} autoPlay muted loop playsInline preload="metadata">
        <source src="/EcoService/video1.mp4" type="video/mp4" />
      </video>

      <div style={s.overlay} />

      <div style={s.center}>
        <h1 style={s.title}>{t.hero.title}</h1>
        <p style={s.subtitle}>{t.hero.subtitle}</p>
      </div>
    </section>
  );
}

const s: Record<string, React.CSSProperties> = {
  wrap: {
    position: "relative",
    height: "78vh",
    minHeight: 520,
    overflow: "hidden",
    background: "#0b1220",
  },
  video: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.35), rgba(0,0,0,.55))",
    zIndex: 1,
  },
  center: {
    position: "relative",
    zIndex: 2,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    padding: "0 20px",
  },
  title: {
    fontSize: "clamp(34px, 6vw, 64px)",
    fontWeight: 900,
    letterSpacing: "-0.5px",
    lineHeight: 1.15,
    margin: 0,
    maxWidth: 1000,
  },
  subtitle: {
    marginTop: 14,
    fontSize: "clamp(14px, 2vw, 18px)",
    letterSpacing: "0.6px",
    opacity: 0.92,
    maxWidth: 980,
    lineHeight: 1.7,
  },
};

