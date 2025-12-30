"use client";

import React, { useEffect, useMemo, useState, } from "react";
import { useI18n } from "../lib/i18n";

type MenuLink = { label: string; href: string; desc?: string };
type MenuItem =
  | { type: "link"; label: string; href: string }
  | { type: "dropdown"; label: string; columns: { title: string; links: MenuLink[] }[] };

function buildMenu(lang: "zh" | "en"): MenuItem[] {
  const isZh = lang === "zh";

  return [
    { type: "link", label: isZh ? "首页" : "Home", href: "#top" },

    {
      type: "dropdown",
      label: isZh ? "服务" : "Services",
      columns: [
        {
          title: isZh ? "核心服务" : "Core Services",
          links: [
            {
              label: isZh ? "调试投运" : "Commissioning",
              href: "#services-commissioning",
              desc: isZh ? "上电、配置、投运验证" : "Energization, configuration, validation",
            },
            {
              label: isZh ? "维护保养" : "Maintenance",
              href: "#services-maintenance",
              desc: isZh ? "巡检、预防性维护" : "Inspection & preventive maintenance",
            },
            {
              label: isZh ? "故障处理" : "Troubleshooting",
              href: "#services-troubleshooting",
              desc: isZh ? "定位与恢复、应急" : "Isolation & recovery, onsite response",
            },
            {
              label: isZh ? "仓储物流与交付" : "Warehouse & Logistics",
              href: "#services-logistics",
              desc: isZh ? "仓储、备件周转、交付支持" : "Warehousing, spares, delivery support",
            },
          ],
        },
      ],
    },

    {
      type: "dropdown",
      label: isZh ? "能力" : "Capabilities",
      columns: [
        {
          title: isZh ? "为什么选择我们" : "Why Eco Service",
          links: [
            {
              label: isZh ? "服务网络" : "Service Network",
              href: "#cap-network",
              desc: isZh ? "北欧八国 + 欧洲多国覆盖" : "Nordic 8 + multi-country coverage",
            },
            {
              label: isZh ? "团队与资质" : "Team & Certificates",
              href: "#cap-team",
              desc: isZh ? "工程师团队与电气资质" : "Engineer team & electrical certificates",
            },
            {
              label: isZh ? "场地与设备" : "Site & Tools",
              href: "#cap-tools",
              desc: isZh ? "车间、仓库与测试设备" : "Workshop, warehouse & test tools",
            },
          ],
        },
      ],
    },

    { type: "link", label: isZh ? "案例" : "Projects", href: "#projects" },

    {
      type: "dropdown",
      label: isZh ? "关于我们" : "About",
      columns: [
        {
          title: isZh ? "公司" : "Company",
          links: [
            { label: isZh ? "公司简介" : "Company Profile", href: "#about", desc: isZh ? "业务范围与定位" : "Who we are & what we do" },
            { label: isZh ? "合作品牌" : "Partners", href: "#partners", desc: "CATL / Sigenergy / Huawei / H3C" },
          ],
        },
      ],
    },
  ];
}


export default function Header() {


  const { lang, setLang, t } = useI18n();
  const menu: MenuItem[] = useMemo(() => buildMenu(lang), [lang]);
  const [open, setOpen] = useState<string | null>(null);
  const menuCloseTimer = React.useRef<number | null>(null);

  const cancelMenuClose = () => {
    if (menuCloseTimer.current) window.clearTimeout(menuCloseTimer.current);
  };

  const scheduleMenuClose = () => {
    cancelMenuClose();
    menuCloseTimer.current = window.setTimeout(() => {
      setOpen(null);
    }, 200);
  };
  const [langOpen, setLangOpen] = useState(false);
  const [navHover, setNavHover] = useState(false);
  const solid = navHover || !!open;
  const langCloseTimer = React.useRef<number | null>(null);
  const openLang = () => {
    if (langCloseTimer.current) window.clearTimeout(langCloseTimer.current);
    setLangOpen(true);
  };

  const scheduleCloseLang = () => {
    if (langCloseTimer.current) window.clearTimeout(langCloseTimer.current);
    langCloseTimer.current = window.setTimeout(() => setLangOpen(false), 200);
  };
  const close = () => {
    setOpen(null);
    setLangOpen(false);
  };

  return (
    <>
      {/* 点击空白关闭（可选） */}
      {/* {open ? <div style={styles.backdrop} onClick={close} /> : null} */}

      <header
        style={{
          ...styles.header,
          ...(solid ? styles.headerSolid : styles.headerTransparent),
        }}
      >
        <div style={styles.container}>
          <div style={styles.row}>
            {/* Logo */}
            <a href="#top" style={styles.brand} onClick={close}>
              <span style={styles.dot} />
              <span style={styles.brandText}>
                <span style={solid ? styles.brandName : styles.brandNameLight}>ECO Service</span>
                <span style={solid ? styles.brandSub : styles.brandSubLight}>
                  Energy Storage Field Service
                </span>
              </span>
            </a>

            {/* 主导航 */}
            <nav
              style={styles.nav}
              onMouseEnter={() => {
                setNavHover(true);
                cancelMenuClose();
              }}
              onMouseLeave={() => {
                setNavHover(false);
                scheduleMenuClose();   //离开整个导航区才开始倒计时关闭
              }}
            >
              {menu.map((item) => {
                if (item.type === "link") {
                  return (
                    <a key={item.label} href={item.href} style={solid ? styles.navLink : styles.navLinkLight} onClick={close}>
                      {item.label}
                    </a>
                  );
                }

                const isOpen = open === item.label;

                return (
                  <div
                    style={styles.dropdownWrap}
                    onMouseEnter={() => {
                      cancelMenuClose();
                      setOpen(item.label);
                    }}
                    onMouseLeave={() => {
                      scheduleMenuClose();
                    }}
                  >
                    <button
                      type="button"
                      style={solid ? styles.dropdownBtn : styles.dropdownBtnLight}
                      onClick={() => {
                        cancelMenuClose();
                        setOpen((v) => (v === item.label ? null : item.label));
                      }}
                    >
                      {item.label} <span style={styles.chevron}>▾</span>
                    </button>

                    {/* 下拉面板 */}
                    <div
                      style={{ ...styles.dropdownPanel, ...(isOpen ? styles.dropdownOpen : {}) }}
                      onMouseEnter={cancelMenuClose}      //鼠标进面板，取消关闭
                      onMouseLeave={scheduleMenuClose}    //离开面板，延迟关闭
                    >
                      {item.columns.map((col) => (
                        <div key={col.title} style={styles.col}>
                          <div style={styles.colTitle}>{col.title}</div>
                          <div style={styles.colLinks}>
                            {col.links.map((l) => (
                              <a key={l.label} href={l.href} style={styles.megaLink} onClick={close}>
                                <div style={styles.megaLabel}>{l.label}</div>
                                {l.desc ? <div style={styles.megaDesc}>{l.desc}</div> : null}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </nav>

            {/* 右侧：语言 + CTA */}
            <div style={styles.right}>
              <div style={styles.right}>
                {/* 语言下拉 */}
                <div
                  style={styles.langWrap}
                  onMouseEnter={openLang}
                  onMouseLeave={scheduleCloseLang}
                >
                  <button
                    type="button"
                    style={{ ...styles.langBtn, ...(langOpen ? styles.langBtnActive : {}) }}
                    onClick={() => setLangOpen((v) => !v)}
                    aria-haspopup="menu"
                    aria-expanded={langOpen}
                  >
                    {t.nav.language}: {lang.toUpperCase()}
                    <span style={styles.chevron} aria-hidden="true">▾</span>
                  </button>

                  <div style={{ ...styles.langPanel, ...(langOpen ? styles.langOpen : {}) }}
                    onMouseEnter={openLang}
                    onMouseLeave={scheduleCloseLang}
                  >
                    <button
                      type="button"
                      style={{ ...styles.langItem, ...(lang === "zh" ? styles.langItemActive : {}) }}
                      onClick={() => { setLang("zh"); close(); }}
                    >
                      中文
                    </button>

                    <button
                      type="button"
                      style={{ ...styles.langItem, ...(lang === "en" ? styles.langItemActive : {}) }}
                      onClick={() => { setLang("en"); close(); }}
                    >
                      English
                    </button>
                  </div>
                </div>
                {/* CTA */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );

}

const styles: { [k: string]: React.CSSProperties } = {
  container: { maxWidth: 1180, margin: "0 auto", padding: "0 20px" },

  header: {
    position: "fixed",   // ← 关键点
    top: 0,
    left: 0,
    right: 0,
    zIndex: 60,
    transition: "background 180ms ease",
  },

  headerTransparent: {
    background: "transparent",      // ✅ 完全透明
    backdropFilter: "none",         // ✅ 透明态不要 blur
    borderBottom: "1px solid rgba(255,255,255,.18)", // 可选：细线更像官网
  },

  headerSolid: {
    background: "rgba(255,255,255,.92)",
    backdropFilter: "blur(10px)",
  },


  row: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18, padding: "14px 0" },

  // Backdrop overlay
  backdrop: {
    position: "fixed",
    left: 0,
    right: 0,
    top: 70,                 // 这里写你的 header 实际高度（比如 70）
    bottom: 0,
    background: "rgba(0,0,0,.06)",
    zIndex: 55,
  },


  brand: { display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "inherit" },
  dot: { width: 12, height: 12, borderRadius: 999, background: "#22c55e" },
  brandText: { display: "flex", flexDirection: "column" },
  brandName: {
    fontWeight: 900,
    fontSize: 20,
    letterSpacing: "1px",
    color: "rgba(0,0,0,.9)",    // ✅ 深黑
  },

  brandSub: {
    fontSize: 12,
    opacity: 0.7,
    color: "rgba(0,0,0,.6)",    // ✅ 灰黑
  },

  nav: { display: "flex", alignItems: "center", gap: 16 },
  navLink: {
    fontSize: 16,                  // 字体稍微大一点
    fontWeight: 500,
    letterSpacing: "0.5px",
    textDecoration: "none",
    color: "rgba(0,0,0,.75)", // 黑色
    padding: "10px 12px",
  },

  navLinkLight: {
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: "0.5px",
    textDecoration: "none",
    color: "rgba(255,255,255,.92)", // 白字
    padding: "10px 12px",
  },

  dropdownBtnLight: {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: "0.5px",
    color: "rgba(255,255,255,.92)", // 白字
    padding: "10px 12px",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
  },

  brandNameLight: {
    fontWeight: 900,
    fontSize: 20,
    letterSpacing: "1px",
    color: "rgba(255,255,255,.95)", // 白字
  },

  brandSubLight: {
    fontSize: 12,
    opacity: 0.8,
    color: "rgba(255,255,255,.75)",
  },

  dropdownPanel: {
    position: "absolute",
    top: "100%",
    left: 0,
    width: 520,
    padding: 14,
    marginTop: 8,
    background: "white",
    border: "1px solid rgba(0,0,0,.10)",
    borderRadius: 16,
    boxShadow: "0 18px 50px rgba(0,0,0,.15)",
    opacity: 0,
    pointerEvents: "none",
    transform: "translateY(-6px)",
    transition: "opacity 140ms ease, transform 140ms ease",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 12,
    zIndex: 80,
  },

  dropdownOpen: {
    opacity: 1,
    pointerEvents: "auto",
    transform: "translateY(0px)",
  },


  dropdownWrap: { position: "relative" },
  dropdownBtn: {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: "0.5px",
    color: "rgba(0,0,0,.75)", // 黑色
    padding: "10px 12px",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
  },

  dropdownBtnActive: {
    background: "rgba(0,0,0,.05)",
  },
  chevron: { fontSize: 12, opacity: 0.7 },

  // Full-width Mega Menu layer (fixed, full screen width)
  megaFull: {
    position: "fixed",
    left: 0,
    right: 0,
    top: 58, // 大致等于 header 高度；想更精确可以改成 64
    zIndex: 70,
    background: "white",
    borderTop: "1px solid rgba(0,0,0,.08)",
    boxShadow: "0 20px 60px rgba(0,0,0,.18)",
    opacity: 0,
    pointerEvents: "none",
    transform: "translateY(-6px)",
    transition: "opacity 140ms ease, transform 140ms ease",
  },
  megaOpen: {
    opacity: 1,
    pointerEvents: "auto",
    transform: "translateY(0px)",
  },

  megaShell: { maxWidth: 1180, margin: "0 auto", padding: "16px 20px 18px" },
  megaHeaderRow: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, paddingBottom: 10 },
  megaTitle: { fontWeight: 900, fontSize: 14, opacity: 0.85 },
  closeBtn: {
    border: "1px solid rgba(0,0,0,.12)",
    background: "white",
    borderRadius: 10,
    padding: "6px 10px",
    cursor: "pointer",
    fontWeight: 800,
  },

  megaInner: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, paddingTop: 6 },
  col: { padding: 6 },
  colTitle: { fontWeight: 900, fontSize: 13, opacity: 0.8, marginBottom: 10 },
  colLinks: { display: "grid", gap: 10 },

  megaLink: {
    textDecoration: "none",
    color: "inherit",
    padding: "12px 12px",
    borderRadius: 14,
    border: "1px solid rgba(0,0,0,.06)",
    background: "rgba(0,0,0,.02)",
  },
  megaLabel: { fontWeight: 900, fontSize: 13 },
  megaDesc: { marginTop: 4, fontSize: 12, opacity: 0.7, lineHeight: 1.5 },

  megaFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 14,
    paddingTop: 12,
    borderTop: "1px solid rgba(0,0,0,.06)",
  },
  megaCta: {
    textDecoration: "none",
    background: "#111827",
    color: "white",
    fontWeight: 900,
    padding: "10px 14px",
    borderRadius: 12,
  },
  megaHint: { fontSize: 12, opacity: 0.6 },

  langWrap: { position: "relative" },

  langBtn: {
    border: "none",
    background: "transparent",

    color: "white",          // ⭐ 关键：白色字体
    fontSize: 14,
    fontWeight: 700,

    cursor: "pointer",
    padding: "8px 10px",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
  },


  langBtnActive: {
    background: "rgba(0,0,0,.05)",
  },

  langPanel: {
    position: "absolute",
    right: 0,
    top: "100%",
    marginTop: 8,
    width: 180,
    padding: 8,
    borderRadius: 14,
    background: "white",
    border: "1px solid rgba(0,0,0,.10)",
    boxShadow: "0 18px 50px rgba(0,0,0,.15)",
    opacity: 0,
    pointerEvents: "none",
    transform: "translateY(-6px)",
    transition: "opacity 140ms ease, transform 140ms ease",
    zIndex: 90,
  },

  langOpen: {
    opacity: 1,
    pointerEvents: "auto",
    transform: "translateY(0px)",
  },

  langItem: {
    width: "100%",
    textAlign: "left",

    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255,255,255,.25)",

    background: "rgba(255,255,255,.10)",
    padding: "10px 12px",
    borderRadius: 12,
    cursor: "pointer",
    fontWeight: 800,
  },


  langItemActive: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(17,24,39,.45)",

    background: "rgba(17,24,39,.06)",
  },


  right: { display: "flex", alignItems: "center", gap: 10 },
  cta: {
    fontSize: 14,
    textDecoration: "none",
    padding: "10px 14px",
    borderRadius: 10,
    background: "#111827",
    color: "white",
    fontWeight: 900,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
  },
};

