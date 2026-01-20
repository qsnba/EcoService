"use client";

import React, { useMemo, useState, useRef, useEffect } from "react";
import { useI18n } from "../lib/i18n";
import { usePathname } from "next/navigation";

// ✅ 1. 核心配置
const REPO_PATH = "";

type MenuLink = { label: string; href: string; desc?: string };
type MenuItem =
  | { type: "link"; label: string; href: string }
  | { type: "dropdown"; label: string; columns: { title: string; links: MenuLink[] }[] };

function buildMenu(lang: "zh" | "en", pathname: string): MenuItem[] {
  const isZh = lang === "zh";

  // 兼容本地开发(/) 和 线上部署(/EcoService)
  const isHome = pathname === "/" || pathname === REPO_PATH || pathname === `${REPO_PATH}/`;

  const getLink = (anchorId: string) => {
    if (anchorId.startsWith("/about")) {
      return `${REPO_PATH}${anchorId}`;
    }
    return isHome ? anchorId : `${REPO_PATH}/${anchorId}`;
  };

  return [
    { type: "link", label: isZh ? "首页" : "Home", href: isHome ? "#top" : `${REPO_PATH}/#top` },

    {
      type: "dropdown",
      label: isZh ? "服务" : "Services",
      columns: [
        {
          title: isZh ? "核心服务" : "Core Services",
          links: [
            {
              label: isZh ? "调试投运" : "Commissioning",
              href: getLink("#services-commissioning"),
              desc: isZh ? "上电、配置、投运验证" : "Energization, configuration, validation",
            },
            {
              label: isZh ? "维护保养" : "Maintenance",
              href: getLink("#services-maintenance"),
              desc: isZh ? "巡检、预防性维护" : "Inspection & preventive maintenance",
            },
            {
              label: isZh ? "故障处理" : "Troubleshooting",
              href: getLink("#services-troubleshooting"),
              desc: isZh ? "定位与恢复、应急" : "Isolation & recovery, onsite response",
            },
            {
              label: isZh ? "仓储物流与交付" : "Warehouse & Logistics",
              href: getLink("#services-logistics"),
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
              href: getLink("#cap-network"),
              desc: isZh ? "北欧八国 + 欧洲多国覆盖" : "Nordic 8 + multi-country coverage",
            },
            {
              label: isZh ? "团队与资质" : "Team & Certificates",
              href: getLink("#cap-team"),
              desc: isZh ? "工程师团队与电气资质" : "Engineer team & electrical certificates",
            },
            {
              label: isZh ? "场地与设备" : "Site & Tools",
              href: getLink("#cap-tools"),
              desc: isZh ? "车间、仓库与测试设备" : "Workshop, warehouse & test tools",
            },
          ],
        },
      ],
    },

    { type: "link", label: isZh ? "案例" : "Projects", href: getLink("#projects") },

    {
      type: "dropdown",
      label: isZh ? "关于我们" : "About",
      columns: [
        {
          title: isZh ? "公司" : "Company",
          links: [
            {
              label: isZh ? "公司简介" : "Company Profile",
              href: `${REPO_PATH}/about/company`,
              desc: isZh ? "业务范围与定位" : "Who we are & what we do"
            },
            {
              label: isZh ? "合作品牌" : "Partners",
              href: `${REPO_PATH}/about/partners`,
              desc: "CATL / CRRC / Sigenergy / Huawei"
            },
          ],
        },
      ],
    },
  ];
}

export default function Header() {
  const { lang, setLang, t } = useI18n();
  const pathname = usePathname() || "";

  const menu: MenuItem[] = useMemo(() => buildMenu(lang, pathname), [lang, pathname]);

  const [open, setOpen] = useState<string | null>(null);
  const menuCloseTimer = useRef<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [navHover, setNavHover] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 稍微滚动一点点就开始变色
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ 核心修改：定义哪些页面支持透明头部
  // 1. 首页
  const isHome = pathname === "/" || pathname === REPO_PATH || pathname === `${REPO_PATH}/`;
  // 2. 关于页面的所有子页面 (公司简介、合作品牌)
  // 只要路径里包含 "/about/"，我们就认为它也是类似首页的 Banner 布局，需要透明
  const isAboutPage = pathname.includes("/about/");

  // 合并判断：当前页面是否支持透明背景？
  const isTransparentPage = isHome || isAboutPage;

  // 状态逻辑：
  // 只有当以下所有条件都为假时，才是透明的：
  // 1. 鼠标没悬停 (!navHover)
  // 2. 菜单没打开 (!open)
  // 3. 页面没滚动 (!isScrolled)
  // 4. 是支持透明的页面 (isTransparentPage)
  // 
  // 反之，只要有一个条件为真，就变实心 (solid)
  const solid = navHover || !!open || isScrolled || !isTransparentPage;

  const cancelMenuClose = () => {
    if (menuCloseTimer.current) window.clearTimeout(menuCloseTimer.current);
  };

  const scheduleMenuClose = () => {
    cancelMenuClose();
    menuCloseTimer.current = window.setTimeout(() => {
      setOpen(null);
    }, 200);
  };

  const langCloseTimer = useRef<number | null>(null);
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
    setMobileOpen(false);
  };

  return (
    <>
      <header
        style={{
          ...styles.header,
          ...(solid ? styles.headerSolid : styles.headerTransparent),
        }}
      >
        <div style={styles.container}>
          <div style={styles.row}>
            <a href={`${REPO_PATH}/#top`} style={styles.brand} onClick={close}>
              <span style={styles.dot} />
              <span style={styles.brandText}>
                <span style={solid ? styles.brandName : styles.brandNameLight}>ECO Service</span>
                <span style={solid ? styles.brandSub : styles.brandSubLight}>
                  Energy Storage Field Service
                </span>
              </span>
            </a>

            <nav className="desktop-nav"
              style={styles.nav}
              onMouseEnter={() => {
                setNavHover(true);
                cancelMenuClose();
              }}
              onMouseLeave={() => {
                setNavHover(false);
                scheduleMenuClose();
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
                    key={item.label}
                    style={styles.dropdownWrap}
                    onMouseEnter={() => {
                      cancelMenuClose();
                      setOpen(item.label);
                    }}
                    onMouseLeave={scheduleMenuClose}
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

                    <div
                      style={{ ...styles.dropdownPanel, ...(isOpen ? styles.dropdownOpen : {}) }}
                      onMouseEnter={cancelMenuClose}
                      onMouseLeave={scheduleMenuClose}
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

            <div style={styles.right}>
              <div style={styles.rightInner}>
                <button
                  className="mobile-btn"
                  type="button"
                  style={styles.mobileBtn}
                  onClick={() => setMobileOpen(v => !v)}
                >
                  ☰
                </button>

                <div
                  style={styles.langWrap}
                  onMouseEnter={openLang}
                  onMouseLeave={scheduleCloseLang}
                >
                  <button
                    type="button"
                    style={{
                      ...styles.langBtn,
                      color: solid ? "#111827" : "white",
                      ...(langOpen ? styles.langBtnActive : {})
                    }}
                    onClick={() => setLangOpen((v) => !v)}
                  >
                    {t.nav.language}: {lang.toUpperCase()}
                    <span style={styles.chevron}>▾</span>
                  </button>

                  <div style={{ ...styles.langPanel, ...(langOpen ? styles.langOpen : {}) }}>
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
              </div>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen ? (
        <div style={styles.mobilePanel}>
          {menu.map((item) =>
            item.type === "link" ? (
              <a key={item.label} href={item.href} style={styles.mobileLink} onClick={close}>
                {item.label}
              </a>
            ) : (
              <div key={item.label} style={styles.mobileGroup}>
                <div style={styles.mobileGroupTitle}>{item.label}</div>
                {item.columns
                  .flatMap((c) => c.links)
                  .map((l) => (
                    <a key={`${l.href}-${l.label}`} href={l.href} style={styles.mobileSubLink} onClick={close}>
                      {l.label}
                    </a>
                  ))}
              </div>
            )
          )}
        </div>
      ) : null}
    </>
  );
}

const styles: { [k: string]: React.CSSProperties } = {
  mobileBtn: { display: "none", border: "1px solid rgba(255,255,255,.35)", background: "rgba(255,255,255,.12)", color: "white", borderRadius: 10, padding: "8px 10px", fontWeight: 900, cursor: "pointer" },
  mobilePanel: { position: "fixed", top: 64, left: 12, right: 12, maxWidth: 480, margin: "0 auto", zIndex: 80, borderRadius: 16, padding: 12, background: "rgba(10,14,25,.95)", border: "1px solid rgba(255,255,255,.12)", backdropFilter: "blur(12px)" },
  mobileLink: { display: "block", padding: "12px 12px", textDecoration: "none", color: "white", fontWeight: 800, borderRadius: 12 },
  mobileGroup: { padding: "6px 0" },
  mobileGroupTitle: { color: "rgba(255,255,255,.6)", fontWeight: 900, padding: "10px 10px 6px", fontSize: 12, letterSpacing: "1px" },
  mobileSubLink: { display: "block", padding: "10px 12px", textDecoration: "none", color: "rgba(255,255,255,.92)", borderRadius: 12, fontWeight: 700 },

  rightInner: { display: "flex", alignItems: "center", gap: 10 },
  container: { maxWidth: 1180, margin: "0 auto", padding: "0 20px" },
  header: { position: "fixed", top: 0, left: 0, right: 0, zIndex: 60, transition: "background 200ms ease, box-shadow 200ms ease" },

  headerTransparent: { background: "transparent", borderBottom: "1px solid rgba(255,255,255,.15)" },
  headerSolid: { background: "rgba(255,255,255,.95)", backdropFilter: "blur(12px)", boxShadow: "0 4px 20px rgba(0,0,0,.05)" },

  row: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18, padding: "14px 0" },
  brand: { display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "inherit" },
  dot: { width: 12, height: 12, borderRadius: 999, background: "#22c55e" },
  brandText: { display: "flex", flexDirection: "column" },
  brandName: { fontWeight: 900, fontSize: 20, letterSpacing: "1px", color: "#111827" },
  brandSub: { fontSize: 12, opacity: 0.7, color: "#4b5563" },

  nav: { display: "flex", alignItems: "center", gap: 16 },
  navLink: { fontSize: 15, fontWeight: 700, letterSpacing: "0.5px", textDecoration: "none", color: "#374151", padding: "10px 12px" },
  navLinkLight: { fontSize: 15, fontWeight: 700, letterSpacing: "0.5px", textDecoration: "none", color: "rgba(255,255,255,.95)", padding: "10px 12px" },

  brandNameLight: { fontWeight: 900, fontSize: 20, letterSpacing: "1px", color: "white" },
  brandSubLight: { fontSize: 12, opacity: 0.8, color: "rgba(255,255,255,.8)" },

  dropdownWrap: { position: "relative" },
  dropdownBtn: { border: "none", background: "transparent", cursor: "pointer", fontSize: 15, fontWeight: 700, letterSpacing: "0.5px", color: "#374151", padding: "10px 12px", display: "inline-flex", alignItems: "center", gap: 6 },
  dropdownBtnLight: { border: "none", background: "transparent", cursor: "pointer", fontSize: 15, fontWeight: 700, letterSpacing: "0.5px", color: "rgba(255,255,255,.95)", padding: "10px 12px", display: "inline-flex", alignItems: "center", gap: 6 },
  chevron: { fontSize: 10, opacity: 0.6, marginLeft: 2 },

  dropdownPanel: { position: "absolute", top: "100%", left: 0, width: 480, padding: 16, marginTop: 10, background: "white", border: "1px solid rgba(0,0,0,.08)", borderRadius: 16, boxShadow: "0 20px 40px rgba(0,0,0,.15)", opacity: 0, pointerEvents: "none", transform: "translateY(-6px)", transition: "opacity 140ms ease, transform 140ms ease", display: "grid", gridTemplateColumns: "1fr", gap: 12, zIndex: 80 },
  dropdownOpen: { opacity: 1, pointerEvents: "auto", transform: "translateY(0px)" },

  col: { padding: 4 },
  colTitle: { fontWeight: 900, fontSize: 12, color: "#9ca3af", marginBottom: 8, textTransform: "uppercase", letterSpacing: "1px" },
  colLinks: { display: "grid", gap: 6 },
  megaLink: { textDecoration: "none", display: "block", padding: "10px 12px", borderRadius: 10, border: "1px solid transparent", transition: "background 0.2s" },
  megaLabel: { fontWeight: 800, fontSize: 14, color: "#111827" },
  megaDesc: { marginTop: 2, fontSize: 12, color: "#6b7280", lineHeight: 1.4 },

  langWrap: { position: "relative" },
  langBtn: { border: "none", background: "transparent", fontSize: 14, fontWeight: 700, cursor: "pointer", padding: "8px 10px", display: "inline-flex", alignItems: "center", gap: 6 },
  langBtnActive: { background: "rgba(0,0,0,.05)", borderRadius: 8 },

  langPanel: { position: "absolute", right: 0, top: "100%", marginTop: 8, width: 140, padding: 6, borderRadius: 12, background: "white", border: "1px solid rgba(0,0,0,.08)", boxShadow: "0 10px 30px rgba(0,0,0,.15)", opacity: 0, pointerEvents: "none", transform: "translateY(-6px)", transition: "all 140ms ease", zIndex: 90 },
  langOpen: { opacity: 1, pointerEvents: "auto", transform: "translateY(0px)" },
  langItem: { width: "100%", textAlign: "left", border: "none", background: "transparent", color: "#374151", padding: "10px 12px", borderRadius: 8, cursor: "pointer", fontWeight: 700, fontSize: 14 },
  langItemActive: { background: "#f3f4f6", color: "#111827" },

  right: { display: "flex", alignItems: "center", gap: 10 },
};