"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/Header"
import { I18nProvider, useI18n } from "../lib/i18n";
import Hero from "../components/Hero"
import Starfield from "../components/Starfield";
import CyberEnergyBackground from "../components/CyberEnergyBackground";

export default function Home() {
  return (
    <I18nProvider>
      <main>
        <Header />
        <Hero />
        <ServicesSection />
        <CapabilitiesSection />
        <ProjectsSection />
        <AboutSection />
      </main>
    </I18nProvider>
  );
}

function ServicesSection() {
  const { t } = useI18n();

  return (
    <section
      id="services"
      className="dark-section"
      style={{
        ...s.section,
        ...s.darkSection,
        position: "relative", // 1. 确保父级是定位基准
        overflow: "hidden"
      }}
    >
      {/* 2. 背景放在最前面 */}
      <CyberEnergyBackground />
      <div style={{ ...s.container, position: "relative", zIndex: 10 }}>
        <div style={s.headerRow}>
          <div style={s.servicesMedia}>
            <img
              src="/yy11.png"
              alt="Services"
              style={s.servicesImg}
            />
          </div>
          <div>
            <div style={s.kicker}>SERVICES</div>
            <h2 style={{ ...s.h2, color: "white" }}>{t.services.title}</h2>
            <p style={{ ...s.p, ...s.darkText }}>{t.services.subtitle}</p>
          </div>

          <a href="#contact" style={s.primaryBtn}>
            {t.services.cta}
          </a>
        </div>

        <div className="grid-responsive" style={s.grid4}>
          <a
            href="#services-commissioning"
            style={{ ...s.card, ...s.serviceCardDark }}
          >
            <div style={{ ...s.cardTitle, color: "white" }}>{t.services.cards.commissioning.title}</div>
            <div style={{ ...s.cardDesc, ...s.darkText }}>{t.services.cards.commissioning.desc}</div>
            <div style={{ ...s.cardLink, ...s.darkLink }}>{t.services.viewDetail}</div>
          </a>

          <a href="#services-troubleshooting"
            style={{ ...s.card, ...s.serviceCardDark }}>
            <div style={{ ...s.cardTitle, color: "white" }}>{t.services.cards.troubleshooting.title}</div>
            <div style={{ ...s.cardDesc, ...s.darkText }}>{t.services.cards.troubleshooting.desc}</div>
            <div style={{ ...s.cardLink, ...s.darkLink }}>{t.services.viewDetail}</div>
          </a>

          <a href="#services-logistics"
            style={{ ...s.card, ...s.serviceCardDark }}>
            <div style={{ ...s.cardTitle, color: "white" }}>{t.services.cards.logistics.title}</div>
            <div style={{ ...s.cardDesc, ...s.darkText }}>{t.services.cards.logistics.desc}</div>
            <div style={{ ...s.cardLink, ...s.darkLink }}>{t.services.viewDetail}</div>
          </a>
        </div>

        <ServiceDetail
          id="services-commissioning"
          title={t.services.details.commissioning.title}
          bullets={t.services.details.commissioning.bullets}
          backText={t.services.back}
          mediaHint={t.services.mediaHint}
          imageSrc="/services/commissioning.png"
          imageAlt="Commissioning"
        />

        <ServiceDetail
          id="services-troubleshooting"
          title={t.services.details.troubleshooting.title}
          bullets={t.services.details.troubleshooting.bullets}
          backText={t.services.back}
          mediaHint={t.services.mediaHint}
          imageSrc="/services/troubleshooting.png"
          imageAlt="Troubleshooting"
        />

        <ServiceDetail
          id="services-logistics"
          title={t.services.details.logistics.title}
          bullets={t.services.details.logistics.bullets}
          backText={t.services.back}
          mediaHint={t.services.mediaHint}
          imageSrc="/services/logistics.png"
          imageAlt="Logistics"
        />
      </div>
    </section>
  );
}

function ServiceDetail({
  id,
  title,
  bullets,
  backText,
  mediaHint,
  imageSrc,
  imageAlt,
}: {
  id: string;
  title: string;
  bullets: readonly string[];   // 这里用 readonly，避免你之前那个 TS 报错
  backText: string;
  mediaHint: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section id={id} style={{ ...s.detail, scrollMarginTop: 90 }}>
      <div style={s.detailHead}>
        <h3 style={s.h3}>{title}</h3>
        <a href="#services" style={s.backTop}>{backText} ↑</a>
      </div>

      <div style={s.detailBody}>
        <ul style={s.ul}>
          {bullets.map((x) => (
            <li key={x} style={s.li}>{x}</li>
          ))}
        </ul>

        <div style={s.mediaBox}>
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt || title}
              style={s.mediaImg}
            />
          ) : (
            <div style={s.mediaHint}>{mediaHint}</div>
          )}
        </div>
      </div>
    </section>
  );
}

const s: Record<string, React.CSSProperties> = {



  darkSection: {
    position: "relative",
    overflow: "hidden",
    color: "white",
    background:
      "radial-gradient(1200px 600px at 10% -10%, rgba(255,255,255,.06), transparent 40%)," +
      "radial-gradient(900px 500px at 90% 20%, rgba(120,160,255,.10), transparent 45%)," +
      "linear-gradient(180deg, #070a12, #0a0f1c)",
  },

  darkText: { color: "rgba(255,255,255,.75)" },

  darkCard: {
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(255,255,255,.14)",
    backdropFilter: "blur(8px)",
    color: "white",
  },

  darkLink: { color: "rgba(170,205,255,.95)" },

  serviceCardDark: {
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(255,255,255,.12)",
    backdropFilter: "blur(6px)",
    color: "white",
    transition: "transform .2s ease, box-shadow .2s ease",
  },
  serviceCardDarkHover: {
    transform: "translateY(-4px)",
    boxShadow: "0 20px 40px rgba(0,0,0,.45)",
  },

  servicesTitle: {
    color: "white",
  },

  servicesText: {
    color: "rgba(255,255,255,.75)",
  },

  servicesDark: {
    position: "relative",
    background:
      "radial-gradient(1200px 600px at 10% -10%, rgba(255,255,255,.06), transparent 40%)," +
      "radial-gradient(800px 400px at 90% 20%, rgba(120,160,255,.08), transparent 45%)," +
      "linear-gradient(180deg, #0b0f1a, #0a0d14)",
    color: "white",
    overflow: "hidden",
  },

  servicesMedia: {
    marginTop: 18,
    borderRadius: 18,
    overflow: "hidden",
    border: "1px solid rgba(0,0,0,.08)",
    background: "rgba(0,0,0,.02)",
  },

  servicesImg: {
    width: "100%",
    height: "360px",
    objectFit: "cover",
    display: "block",
  },

  section: { padding: "72px 0", background: "#fff" },
  container: { maxWidth: 1180, margin: "0 auto", padding: "0 20px" },

  headerRow: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, marginBottom: 22 },
  kicker: { fontSize: 12, letterSpacing: "2px", fontWeight: 900, opacity: 0.7 },
  h2: { margin: "6px 0 6px", fontSize: 34, fontWeight: 900, letterSpacing: "-0.5px" },
  p: { margin: 0, maxWidth: 720, opacity: 0.75, lineHeight: 1.7 },

  primaryBtn: { textDecoration: "none", background: "#111827", color: "#fff", fontWeight: 900, padding: "12px 16px", borderRadius: 12 },

  grid4: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 18 },

  card: { textDecoration: "none", color: "inherit", border: "1px solid rgba(0,0,0,.08)", borderRadius: 18, padding: 16, background: "rgba(0,0,0,.02)" },
  cardTitle: { fontWeight: 900, fontSize: 16, marginBottom: 6 },
  cardDesc: { fontSize: 13, opacity: 0.75, lineHeight: 1.6, minHeight: 44 },
  cardLink: { marginTop: 10, fontWeight: 900, fontSize: 13, opacity: 0.9 },

  detail: { marginTop: 26, paddingTop: 26, borderTop: "1px solid rgba(0,0,0,.08)" },
  detailHead: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 12 },
  h3: { margin: 0, fontSize: 20, fontWeight: 900 },
  backTop: { textDecoration: "none", fontWeight: 800, fontSize: 13, opacity: 0.75 },

  detailBody: { display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: 16, alignItems: "start" },
  ul: { margin: 0, paddingLeft: 18, lineHeight: 1.9, opacity: 0.85 },
  li: { marginBottom: 6 },

  mediaBox: {
    width: "100%",
    maxWidth: 520,
    borderRadius: 14,
    overflow: "hidden",
    background: "rgba(255,255,255,.04)",
    border: "1px solid rgba(255,255,255,.08)",
  },

  mediaImg: {
    width: "100%",
    height: "auto",
    display: "block",
    objectFit: "cover",
  },

  mediaHint: { fontSize: 13, opacity: 0.65, textAlign: "center" },

  filterRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
    marginBottom: 16,
    flexWrap: "wrap",
  },
  filterLabel: { fontSize: 12, fontWeight: 900, opacity: 0.75, letterSpacing: "1px" },
  tagRow: { display: "flex", gap: 8, flexWrap: "wrap" },
  tagPill: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,.10)",
    background: "rgba(0,0,0,.02)",
    borderRadius: 999,
    padding: "8px 12px",
    cursor: "pointer",
    fontWeight: 800,
    fontSize: 12,
  },

  tagPillActive: {
    background: "rgba(0,0,0,.85)",
    color: "white",
    borderColor: "rgba(0,0,0,.35)", // 你想高亮边框就改这里
  },

  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 14,
    marginTop: 10,
  },
  projectCard: {
    // 背景色：深灰 + 透明度 (你可以调 0.1 到 0.2 让它更灰或更黑)
    background: "rgba(255, 255, 255, 0.08)",
    // 边框：淡淡的白色描边
    border: "1px solid rgba(255, 255, 255, 0.15)",
    borderRadius: 18,
    padding: 24, // 稍微加大内边距，更大气
    backdropFilter: "blur(12px)", // 磨砂模糊效果
    color: "white", // 强制文字变白
    transition: "transform 0.3s ease, background 0.3s ease",
    cursor: "default",
  },
  projectTop: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 12 },
  projectTitle: {
    fontWeight: 900,
    fontSize: 16,
    lineHeight: 1.4,
    color: "white", // 确保标题是纯白
    letterSpacing: "0.5px"
  },
  projectBadge: {
    fontSize: 11,
    fontWeight: 800,
    borderRadius: 6,
    padding: "4px 8px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.1)", // 半透明白
    color: "rgba(255,255,255,0.9)",
    whiteSpace: "nowrap",
  },
  projectUl: { margin: "0", paddingLeft: 18, opacity: 0.85, lineHeight: 1.7, fontSize: 14, color: "rgba(255,255,255,0.8)" },
  projectLi: { marginBottom: 6 },
  projectHint: { marginTop: 14, fontSize: 12, opacity: 0.5, color: "white" },

  aboutWrap: {
    padding: "64px 0",
    background: "#f5f7fb",
  },
  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr 1.2fr 1.2fr",
    gap: 28,
  },
  aboutTitle: {
    fontSize: 15,
    fontWeight: 700,
    color: "#111827",
    marginBottom: 12,
  },
  aboutItem: {
    fontSize: 14,
    lineHeight: 1.7,
    color: "#374151",
    marginBottom: 6,
  },
  aboutLink: {
    display: "block",
    fontSize: 14,
    color: "#1f2937",   // ✅ 深灰
    textDecoration: "none",
    marginBottom: 8,
  },
  socialRow: { display: "flex", gap: 10, marginTop: 14 },
  socialDot: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "#ffffff",
    border: "1px solid #d1d5db",
    color: "#111827",   // ✅ 字母清楚
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    textDecoration: "none",
  },

  newsList: { display: "grid", gap: 12 },
  newsItem: { display: "flex", gap: 12, alignItems: "center" },
  newsThumb: {
    width: 48,
    height: 36,
    borderRadius: 10,
    background: "rgba(0,0,0,.08)",
  },
  newsTitleText: {
    fontSize: 14,
    fontWeight: 600,
    color: "#111827",   // ✅ 新闻标题必须清晰
  },

  newsDate: {
    fontSize: 12,
    color: "#6b7280",   // 次级信息
  },

  subscribeForm: { marginTop: 12, display: "grid", gap: 10 },
  subscribeInput: {
    width: "100%",
    height: 42,
    borderRadius: 12,
    border: "1px solid rgba(0,0,0,.10)",
    padding: "0 12px",
    outline: "none",
    background: "white",
  },
  subscribeBtn: {
    height: 44,
    borderRadius: 12,
    border: "1px solid rgba(0,0,0,.10)",
    background: "rgba(0,0,0,.85)",
    color: "white",
    fontWeight: 900,
    cursor: "pointer",
  },

  aboutBottom: { marginTop: 28 },
  aboutBottomLine: { height: 1, background: "rgba(0,0,0,.08)" },
  aboutBottomText: {
    fontSize: 13,
    color: "#6b7280",   // 灰但清晰
    textAlign: "center",
  },

};

function CapabilitiesSection() {
  const { t } = useI18n();

  return (
    <section id="capabilities" className="dark-section" style={{
      ...s.section,
      ...s.darkSection,
      position: "relative", // 1. 确保父级是定位基准
      overflow: "hidden"
    }}
    >
      {/* 2. 背景放在最前面 */}
      <CyberEnergyBackground />
      <div style={{ ...s.container, position: "relative", zIndex: 10 }}>
        <div style={s.headerRow}>
          <div>
            <div style={s.kicker}>CAPABILITIES</div>
            <h2 style={{ ...s.h2, color: "white" }}>{t.capabilities.title}</h2>
            <p style={{ ...s.p, ...s.darkText }}>{t.capabilities.subtitle}</p>
          </div>
        </div>

        <div className="grid-responsive" style={{ ...s.grid4, gridTemplateColumns: "repeat(3, 1fr)" }}>
          {/* ✅ 锚点 1 */}
          <div id="cap-network" style={{ scrollMarginTop: 90 }} />
          <a href="#cap-network" style={s.card}>
            <div style={s.cardTitle}>{t.capabilities.cards.network.title}</div>
            <div style={s.cardDesc}>{t.capabilities.cards.network.desc}</div>
            <div style={s.cardLink}>{t.capabilities.viewDetail}</div>
          </a>

          {/* ✅ 锚点 2 */}
          <div id="cap-team" style={{ scrollMarginTop: 90 }} />
          <a href="#cap-team" style={s.card}>
            <div style={s.cardTitle}>{t.capabilities.cards.team.title}</div>
            <div style={s.cardDesc}>{t.capabilities.cards.team.desc}</div>
            <div style={s.cardLink}>{t.capabilities.viewDetail}</div>
          </a>

          {/* ✅ 锚点 3 */}
          <div id="cap-tools" style={{ scrollMarginTop: 90 }} />
          <a href="#cap-tools" style={s.card}>
            <div style={s.cardTitle}>{t.capabilities.cards.tools.title}</div>
            <div style={s.cardDesc}>{t.capabilities.cards.tools.desc}</div>
            <div style={s.cardLink}>{t.capabilities.viewDetail}</div>
          </a>
        </div>
      </div>
    </section>
  );
}

function CapabilityDetail({
  id,
  title,
  subtitle,
  bullets,
  stats,
}: {
  id: string;
  title: string;
  subtitle: string;
  bullets: string[];
  stats: { k: string; v: string }[];
}) {
  return (
    <section id={id} style={{ ...c.detail, scrollMarginTop: 90 }}>
      <div style={c.detailHead}>
        <div>
          <h3 style={c.h3}>{title}</h3>
          <div style={c.sub}>{subtitle}</div>
        </div>

        <a href="#capabilities" style={c.backTop}>返回能力总览 ↑</a>
      </div>

      <div style={c.detailBody}>
        <div>
          <ul style={c.ul}>
            {bullets.map((x) => (
              <li key={x} style={c.li}>{x}</li>
            ))}
          </ul>

          <div style={c.statsRow}>
            {stats.map((s) => (
              <div key={s.k} style={c.statCard}>
                <div style={c.statK}>{s.k}</div>
                <div style={c.statV}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 右侧媒体占位：下一步同样可以换图/视频 */}
        <div style={c.mediaBox}>
          <div style={c.mediaHint}>这里放能力相关图片/地图/仓库/团队照片</div>
        </div>
      </div>
    </section>
  );
}

const c: Record<string, React.CSSProperties> = {
  section: { padding: "72px 0", background: "rgba(0,0,0,.015)" },
  container: { maxWidth: 1180, margin: "0 auto", padding: "0 20px" },

  headerRow: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, marginBottom: 22 },
  kicker: { fontSize: 12, letterSpacing: "2px", fontWeight: 900, opacity: 0.7 },
  h2: { margin: "6px 0 6px", fontSize: 34, fontWeight: 900, letterSpacing: "-0.5px" },
  p: { margin: 0, maxWidth: 760, opacity: 0.75, lineHeight: 1.7 },

  primaryBtn: { textDecoration: "none", background: "#111827", color: "#fff", fontWeight: 900, padding: "12px 16px", borderRadius: 12, whiteSpace: "nowrap" },

  grid3: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 18 },

  card: { textDecoration: "none", color: "inherit", border: "1px solid rgba(0,0,0,.08)", borderRadius: 18, padding: 16, background: "rgba(255,255,255,.85)" },
  cardTitle: { fontWeight: 900, fontSize: 16, marginBottom: 6 },
  cardDesc: { fontSize: 13, opacity: 0.75, lineHeight: 1.6, minHeight: 44 },
  cardLink: { marginTop: 10, fontWeight: 900, fontSize: 13, opacity: 0.9 },

  detail: { marginTop: 26, paddingTop: 26, borderTop: "1px solid rgba(0,0,0,.08)" },
  detailHead: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 12 },
  h3: { margin: 0, fontSize: 20, fontWeight: 900 },
  sub: { marginTop: 4, fontSize: 12, letterSpacing: "1px", opacity: 0.65, fontWeight: 800 },
  backTop: { textDecoration: "none", fontWeight: 800, fontSize: 13, opacity: 0.75 },

  detailBody: { display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 16, alignItems: "start" },
  ul: { margin: 0, paddingLeft: 18, lineHeight: 1.9, opacity: 0.85 },
  li: { marginBottom: 6 },

  statsRow: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: 14 },
  statCard: { border: "1px solid rgba(0,0,0,.08)", borderRadius: 16, padding: "12px 12px", background: "rgba(255,255,255,.85)" },
  statK: { fontSize: 12, opacity: 0.7, fontWeight: 800, letterSpacing: "1px" },
  statV: { marginTop: 4, fontSize: 13, fontWeight: 900, opacity: 0.9 },

  mediaBox: { border: "1px solid rgba(0,0,0,.08)", borderRadius: 18, minHeight: 220, background: "rgba(255,255,255,.85)", display: "flex", alignItems: "center", justifyContent: "center", padding: 14 },
  mediaHint: { fontSize: 13, opacity: 0.65, textAlign: "center" },
};

function ProjectsSection() {
  const { t } = useI18n();

  // 1. 定义标签类型 (注意：这里已经没有 "all" 了)
  type Tag = "commissioning" | "maintenance" | "upgrade" | "training" | "engineering";

  const [active, setActive] = React.useState<Tag>("commissioning");

  const items = t.projects.items.filter((x) => x.tag === active);

  // ✅ 修正 1：去掉了类型定义中的 | "all"
  const tagList: { key: Tag; label: string }[] = [
    { key: "commissioning", label: t.projects.tags.commissioning },
    { key: "maintenance", label: t.projects.tags.maintenance },
    { key: "upgrade", label: t.projects.tags.upgrade },
    { key: "training", label: t.projects.tags.training },
    { key: "engineering", label: t.projects.tags.engineering },
  ];

  return (
    <section
      id="projects"
      className="dark-section"
      style={{
        ...s.section,
        ...s.darkSection,
        position: "relative",
        overflow: "hidden"
      }}
    >
      <CyberEnergyBackground />
      <div style={{ ...s.container, position: "relative", zIndex: 10 }}>
        <div style={s.headerRow}>
          <div>
            <div style={s.kicker}>PROJECTS</div>
            <h2 style={{ ...s.h2, color: "white" }}>{t.projects.title}</h2>
            <p style={{ ...s.p, ...s.darkText }}>{t.projects.subtitle}</p>
          </div>
        </div>

        <div style={s.filterRow}>
          <div style={s.filterLabel}>{t.projects.filterLabel}</div>
          <div style={s.tagRow}>
            {tagList.map((tg) => (
              <button
                key={tg.key}
                type="button"
                onClick={() => setActive(tg.key)}
                style={{ ...s.tagPill, ...(active === tg.key ? s.tagPillActive : {}) }}
              >
                {tg.label}
              </button>
            ))}
          </div>
        </div>

        <div style={s.projectsGrid}>
          {items.map((it) => (
            <article key={it.title} style={s.projectCard}>
              <div style={s.projectTop}>
                <div style={s.projectTitle}>{it.title}</div>
                <span style={s.projectBadge}>
                  {/* ✅ 修正 2：直接查找当前标签的名称，不再判断 active === "all" */}
                  {tagList.find((x) => x.key === it.tag)?.label}
                </span>
              </div>

              <ul style={s.projectUl}>
                {it.bullets.map((b: string) => (
                  <li key={b} style={s.projectLi}>
                    {b}
                  </li>
                ))}
              </ul>

              <div style={s.projectHint}>
                {t.services?.mediaHint ?? ""}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const { t, lang } = useI18n();
  const [email, setEmail] = React.useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里先做演示：后续你可以接 Mailchimp / Brevo / 自己的 API
    alert(t.about.subscribe.ok);
    setEmail("");
  };

  return (
    <section id="contact" style={s.aboutWrap}>
      <div style={s.container}>
        <div className="footer-grid" style={s.aboutGrid}>
          {/* 联系我们 */}
          <div>
            <div style={s.aboutTitle}>{t.about.contactTitle}</div>
            <div style={s.aboutItem}>{t.about.contact.phone1}</div>
            <div style={s.aboutItem}>{t.about.contact.phone2}</div>
            <div style={s.aboutItem}>{t.about.contact.email}</div>
            <div style={s.aboutItem}>{t.about.contact.address}</div>

            <div style={s.socialRow}>
              <a style={s.socialDot} href="#" aria-label="LinkedIn">in</a>
              <a style={s.socialDot} href="#" aria-label="YouTube">▶</a>
              <a style={s.socialDot} href="#" aria-label="X">x</a>
            </div>
          </div>

          {/* 快速入口 */}
          <div>
            <div style={s.aboutTitle}>{t.about.quickTitle}</div>
            <a href="/about/company" style={s.aboutLink}>{t.about.quickLinks.company}</a>
            <a href="/about/partners" style={s.aboutLink}>{t.about.quickLinks.partners}</a>
            <a href="#services" style={s.aboutLink}>{t.about.quickLinks.services}</a>
            <a href="#capabilities" style={s.aboutLink}>{t.about.quickLinks.capabilities}</a>
            <a href="#projects" style={s.aboutLink}>{t.about.quickLinks.projects}</a>
            <a href="#contact" style={s.aboutLink}>{t.about.quickLinks.contact}</a>
          </div>

          {/* 新闻 */}
          <div>
            <div style={s.aboutTitle}>
              {lang === "zh" ? "行业动态" : "Industry News"}
              <span style={s.liveBadge}>LIVE</span>
            </div>

            {/* ✅ 使用我们新写的组件 */}
            <NewsWidget lang={lang} />
          </div>

          {/* 通讯订阅 */}
          <div>
            <div style={s.aboutTitle}>{t.about.subscribeTitle}</div>
            <div style={s.aboutItem}>{t.about.subscribeHint}</div>

            <form onSubmit={submit} style={s.subscribeForm}>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.about.subscribe.placeholder}
                style={s.subscribeInput}
              />
              <button type="submit" style={s.subscribeBtn}>
                {t.about.subscribe.button}
              </button>
            </form>
          </div>
        </div>

        <div style={s.aboutBottom}>
          <div style={s.aboutBottomLine} />
          <div style={s.aboutBottomText}>{t.about.bottom}</div>
        </div>
      </div>
    </section>
  );
}

// --- 新增的新闻组件 ---
function NewsWidget({ lang }: { lang: "zh" | "en" }) {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟异步获取新闻（这里是为了演示，如果你有 API Key，可以在这里 fetch 真实数据）
    const fetchNews = async () => {
      setLoading(true);

      // ✅ 方案 A：模拟实时数据 (自动生成今天的日期，看起来像实时更新)
      // 获取当前日期 formatted: YYYY-MM-DD
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      const fmt = (d: Date) => d.toISOString().split('T')[0];

      // 模拟的新能源新闻库
      const mockNews = lang === "zh" ? [
        {
          title: "欧盟发布最新电池法案，对碳足迹提出新要求",
          date: fmt(today), // 永远显示今天
          source: "Energy Storage News"
        },
        {
          title: "宁德时代发布神行超充电池，开启储能新纪元",
          date: fmt(today),
          source: "TechCrunch"
        },
        {
          title: "2024年欧洲工商业储能装机量预计增长40%",
          date: fmt(yesterday), // 显示昨天
          source: "Bloomberg NEF"
        },
        {
          title: "德国光储补贴政策更新，利好户用储能市场",
          date: fmt(yesterday),
          source: "PV Magazine"
        }
      ] : [
        {
          title: "EU New Battery Regulation sets strict carbon footprint rules",
          date: fmt(today),
          source: "Energy Storage News"
        },
        {
          title: "CATL launches Shenxing Superfast Charging Battery",
          date: fmt(today),
          source: "TechCrunch"
        },
        {
          title: "European C&I Energy Storage market to grow by 40% in 2024",
          date: fmt(yesterday),
          source: "Bloomberg NEF"
        },
        {
          title: "Germany updates PV & Storage subsidy, boosting residential market",
          date: fmt(yesterday),
          source: "PV Magazine"
        }
      ];

      // 模拟网络延迟，让用户感觉真的在加载
      setTimeout(() => {
        setNews(mockNews);
        setLoading(false);
      }, 800);

      // ✅ 方案 B：如果你有真实的 API (例如 GNews 或 NewsAPI)
      /*
      try {
        const apiKey = "YOUR_API_KEY";
        const query = lang === "zh" ? "储能" : "Energy Storage";
        const res = await fetch(`https://gnews.io/api/v4/search?q=${query}&token=${apiKey}`);
        const data = await res.json();
        // 格式化 data.articles ...
        // setNews(data.articles);
      } catch (e) { console.error(e); }
      */
    };

    fetchNews();
  }, [lang]);

  if (loading) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {/* 骨架屏加载效果 */}
        {[1, 2, 3].map(i => (
          <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", opacity: 0.5 }}>
            <div style={{ width: 48, height: 36, background: "rgba(0,0,0,.05)", borderRadius: 8 }} />
            <div style={{ flex: 1 }}>
              <div style={{ height: 14, width: "80%", background: "rgba(0,0,0,.05)", marginBottom: 6, borderRadius: 4 }} />
              <div style={{ height: 10, width: "40%", background: "rgba(0,0,0,.05)", borderRadius: 4 }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={s.newsList}>
      {news.map((n, idx) => (
        <div key={idx} style={s.newsItem}>
          {/* 这里我用一个动态颜色的图标代替原来的纯色块 */}
          <div style={s.newsThumb}>
            <span style={{ fontSize: 10, fontWeight: 900, opacity: 0.3 }}>NEWS</span>
          </div>
          <div>
            <div style={s.newsTitleText}>{n.title}</div>
            <div style={s.newsMeta}>
              <span style={{ marginRight: 8 }}>{n.date}</span>
              <span style={{ opacity: 0.7 }}>• {n.source}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
