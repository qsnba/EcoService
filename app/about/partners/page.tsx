"use client";

import React, { useState } from "react";
import Header from "../../../components/Header";
// import Starfield from "../../../components/Starfield"; // 移除旧背景
import CyberEnergyBackground from "../../../components/CyberEnergyBackground"; // ✅ 引入新背景
import { I18nProvider, useI18n } from "../../../lib/i18n";

// ✅ 核心配置：完全保留您之前的设置
const REPO_PATH = "/EcoService";

export default function PartnersPage() {
  return (
    <I18nProvider>
      <PartnersPageInner />
    </I18nProvider>
  );
}

function PartnersPageInner() {
  const { t, lang } = useI18n();
  const isZh = lang === "zh";

  // --- 合作伙伴数据 (完全保留原样) ---
  const partners = [
    {
      id: "catl",
      name: "CATL",
      logo: `${REPO_PATH}/catl.svg`,
      fullName: isZh ? "宁德时代" : "Contemporary Amperex Technology Co. Limited",
      desc: isZh
        ? "全球领先的锂离子电池研发制造公司。我们作为 CATL 在欧洲的服务伙伴，执行了包括 90MW 电站 BMU 软件升级、CSC 更换及日常维护等关键任务。"
        : "A global leader in lithium-ion battery development. As a service partner in Europe, we execute critical tasks including 90MW plant BMU upgrades, CSC replacements, and routine maintenance.",
      tags: ["Utility ESS", "Maintenance", "Software Upgrade"],
    },
    {
      id: "crrc",
      name: "CRRC",
      logo: `${REPO_PATH}/crrc.png`,
      fullName: isZh ? "中国中车" : "CRRC Corporation Limited",
      desc: isZh
        ? "全球规模领先的轨道交通装备供应商。我们在欧洲与其在新能源商用车及储能系统领域展开深度技术合作，提供本地化交付与测试服务。"
        : "The world's largest supplier of rail transit equipment. We collaborate extensively in new energy commercial vehicles and energy storage systems in Europe, providing localized delivery and testing.",
      tags: ["Rail Transit", "New Energy", "E-Mobility"],
    },
    {
      id: "sigenergy",
      name: "Sigenergy",
      logo: `${REPO_PATH}/sigenergy.svg`,
      fullName: isZh ? "海博思创 / Sigenergy" : "Sigenergy",
      desc: isZh
        ? "专注于家庭与工商业储能。我们提供从 10kW 家庭分布式储能系统的现场安装、调试到技术支持的全流程服务。"
        : "Focusing on Home & C&I storage. We provide end-to-end services from onsite installation and commissioning of 10kW distributed systems to technical support.",
      tags: ["Residential ESS", "Installation", "Technical Support"],
    },
    {
      id: "huawei",
      name: "Huawei",
      logo: `${REPO_PATH}/huawei.png`,
      fullName: isZh ? "华为数字能源" : "Huawei Digital Power",
      desc: isZh
        ? "全球领先的数字能源产品与解决方案提供商。我们与华为在智能光伏与储能领域保持紧密的技术服务合作。"
        : "Leading provider of digital power products. We maintain close technical service cooperation in smart PV and ESS sectors.",
      tags: ["Smart PV", "Digital Power", "Integration"],
    },
    {
      id: "h3c",
      name: "H3C",
      logo: `${REPO_PATH}/h3c.png`,
      fullName: isZh ? "新华三" : "H3C",
      desc: isZh
        ? "数字化解决方案领导者。Eco Service 为其提供欧洲区域的 ICT 基础设施及数据中心相关的技术落地支持。"
        : "Leader in digital solutions. Eco Service provides technical implementation support for ICT infrastructure and data centers in Europe.",
      tags: ["ICT Infrastructure", "Data Center", "Service"],
    },
  ];

  const certifications = [
    { name: "TUV NORD", desc: isZh ? "高压电气安全认证 (DGUV Info 209-093)" : "HV Electrical Safety (DGUV)" },
    { name: "RelyOn Nutec", desc: isZh ? "GWO 急救与安全操作认证" : "GWO First Aid & Manual Handling" },
    { name: "IHK", desc: isZh ? "德国工商业联合会职业资格认证" : "Professional Qualification Recognition" },
  ];

  return (
    <main style={S.page}>
      <Header />

      {/* 🔥 1. 新背景：固定在底层 */}
      <CyberEnergyBackground />

      {/* 🔥 2. 内容容器：提权 (zIndex) 并允许滚动 */}
      <div style={s.contentWrapper}>

        {/* --- HERO SECTION --- */}
        <section style={S.hero}>
          <div style={S.container}>
            <div style={S.heroContent}>
              <div style={S.kicker}>{isZh ? "PARTNER NETWORK" : "PARTNER NETWORK"}</div>
              <h1 style={S.h1}>
                {isZh ? "携手行业领袖" : "Collaborating with"} <br />
                <span style={S.textGradient}>{isZh ? "共建能源生态" : "Industry Leaders"}</span>
              </h1>
              <p style={S.p}>
                {isZh
                  ? "作为 CATL, CRRC, Sigenergy 等巨头的欧洲落地服务商，我们用专业的技术能力连接产品与现场。"
                  : "As the European service landing partner for giants like CATL, CRRC, and Sigenergy, we bridge products and onsite reality with technical expertise."}
              </p>
            </div>
          </div>
        </section>

        {/* --- PARTNERS GRID --- */}
        <section style={S.section}>
          <div style={S.container}>
            <div style={S.grid}>
              {partners.map((partner) => (
                <HoverCard key={partner.id} style={S.card}>
                  <div style={S.cardHeader}>
                    <div style={S.logoBox}>
                      <img src={partner.logo} alt={partner.name} style={S.logoImg} />
                    </div>
                  </div>

                  <div style={S.cardFullname}>{partner.fullName}</div>
                  <div style={S.divider} />
                  <p style={S.cardDesc}>{partner.desc}</p>

                  <div style={S.tagRow}>
                    {partner.tags.map(tag => (
                      <span key={tag} style={S.tag}>{tag}</span>
                    ))}
                  </div>
                </HoverCard>
              ))}
            </div>
          </div>
        </section>

        {/* --- CERTIFICATIONS STRIP --- */}
        <section style={S.certSection}>
          <div style={S.container}>
            <div style={S.certFlex}>
              <div style={S.certIntro}>
                <h3 style={S.h3}>{isZh ? "权威认证与培训" : "Certified & Qualified"}</h3>
                <p style={{ ...S.p, fontSize: 13, maxWidth: 400 }}>
                  {isZh
                    ? "我们的工程师持有 TUV NORD 高压电工证及 GWO 安全作业证书，符合欧盟严格的准入标准。"
                    : "Our engineers hold TUV NORD HV electrical certificates and GWO safety passes, compliant with strict EU standards."}
                </p>
              </div>
              <div style={S.certList}>
                {certifications.map(c => (
                  <div key={c.name} style={S.certItem}>
                    <div style={S.certName}>{c.name}</div>
                    <div style={S.certDesc}>{c.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA --- */}
        <section style={S.ctaSection}>
          <div style={S.container}>
            <div style={S.ctaBox}>
              <h2 style={S.ctaTitle}>{isZh ? "成为我们的合作伙伴" : "Become a Partner"}</h2>
              <p style={S.ctaText}>
                {isZh
                  ? "无论您是设备制造商还是项目业主，Eco Service 都能为您提供可靠的欧洲本地化交付支持。"
                  : "Whether you are a manufacturer or asset owner, Eco Service provides reliable local delivery support in Europe."}
              </p>
              <div style={S.btnRow}>
                <a href={`${REPO_PATH}/#contact`} style={S.primaryBtn}>{isZh ? "联系商务团队" : "Contact Business Team"}</a>
              </div>
            </div>
          </div>
        </section>

        {/* --- FOOTER BACK --- */}
        <div style={{ ...S.container, padding: "40px 20px 80px" }}>
          <a href={`${REPO_PATH}/#top`} style={S.backHome}>
            ← {isZh ? "返回首页" : "Back to Home"}
          </a>
        </div>
      </div>
    </main>
  );
}

// --- 交互组件：HoverCard ---
function HoverCard({ children, style }: { children: React.ReactNode; style: React.CSSProperties }) {
  const [hover, setHover] = useState(false);

  const finalStyle = {
    ...style,
    transform: hover ? "translateY(-6px)" : "translateY(0)",
    boxShadow: hover
      ? "0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(59,130,246,0.15)" // 悬停发光
      : "0 10px 30px rgba(0,0,0,0.2)",
    borderColor: hover ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.15)", // 边框变亮
    background: hover ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)", // 背景变亮
  };

  return (
    <div
      style={finalStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </div>
  );
}

// --- 样式表 ---
// 注意：我稍微调整了部分透明度，让文字在赛博背景上更清晰
const S: Record<string, React.CSSProperties> = {
  page: {
    background: "#020617", // 底色改为深黑，匹配背景组件
    color: "white",
    minHeight: "100vh",
    fontFamily: "'Inter', sans-serif",
    position: "relative",
    overflowX: "hidden",
  },
  // 新增的内容包裹器
  contentWrapper: {
    position: "relative",
    zIndex: 10, // 确保内容在背景之上
  },
  container: { maxWidth: 1180, margin: "0 auto", padding: "0 20px", position: "relative" },

  hero: { paddingTop: 140, paddingBottom: 60, textAlign: "center" },
  heroContent: { maxWidth: 800, margin: "0 auto" },
  kicker: { fontSize: 13, letterSpacing: "3px", fontWeight: 900, color: "#60a5fa", marginBottom: 16 },
  h1: { fontSize: 48, fontWeight: 900, lineHeight: 1.1, marginBottom: 16, letterSpacing: "-1px" },
  textGradient: {
    background: "linear-gradient(90deg, #fff, #94a3b8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  p: { fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", margin: "0 auto" }, // 字体稍微调亮

  section: { padding: "40px 0" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
    gap: 24,
  },

  // Card 样式微调：更强的磨砂感
  card: {
    borderRadius: 24,
    padding: 28,
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(16px)", // 加强模糊
    background: "rgba(255,255,255,0.06)", // 半透明白
    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    display: "flex",
    flexDirection: "column",
    cursor: "default",
  },

  cardHeader: { display: "flex", alignItems: "center", gap: 14, marginBottom: 16 },

  logoBox: {
    width: 64,
    height: 64,
    borderRadius: 16,
    background: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    flexShrink: 0,
  },
  logoImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "block",
  },

  cardName: { fontSize: 20, fontWeight: 800 },
  cardFullname: { fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 16, fontStyle: "italic" },
  divider: { height: 1, background: "rgba(255,255,255,0.15)", marginBottom: 16 },
  cardDesc: { fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", flex: 1, marginBottom: 20 },

  tagRow: { display: "flex", gap: 8, flexWrap: "wrap" },
  tag: {
    fontSize: 11, fontWeight: 700, padding: "6px 10px", borderRadius: 99,
    background: "rgba(96, 165, 250, 0.15)", color: "#93c5fd", border: "1px solid rgba(96, 165, 250, 0.25)"
  },

  certSection: { margin: "60px 0", padding: "40px 0", borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.3)" },
  certFlex: { display: "flex", flexWrap: "wrap", gap: 40, alignItems: "center", justifyContent: "space-between" },
  certIntro: { flex: 1, minWidth: 300 },
  h3: { fontSize: 24, fontWeight: 800, marginBottom: 10 },
  certList: { display: "flex", gap: 20, flexWrap: "wrap" },
  certItem: {
    background: "rgba(255,255,255,0.08)", padding: "12px 16px", borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.15)", minWidth: 200, backdropFilter: "blur(8px)"
  },
  certName: { fontWeight: 900, fontSize: 14, color: "white", marginBottom: 4 },
  certDesc: { fontSize: 12, color: "rgba(255,255,255,0.7)" },

  ctaSection: { padding: "40px 0 20px" },
  ctaBox: {
    // 调整 CTA 背景，使其在粒子背景上不显得太突兀
    background: "radial-gradient(circle at center, rgba(30,41,59,0.9), rgba(15,23,42,0.95))",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: 30,
    padding: "50px 20px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  ctaTitle: { fontSize: 32, fontWeight: 900, marginBottom: 12 },
  ctaText: { fontSize: 15, color: "rgba(255,255,255,0.7)", maxWidth: 600, margin: "0 auto 24px" },
  btnRow: { display: "flex", justifyContent: "center" },
  primaryBtn: {
    textDecoration: "none", background: "white", color: "#0f172a", fontWeight: 900,
    padding: "14px 28px", borderRadius: 14, fontSize: 15,
    boxShadow: "0 4px 14px rgba(255,255,255,0.25)", transition: "transform 0.2s",
    display: "inline-block",
  },

  backHome: { color: "rgba(255,255,255,.6)", textDecoration: "none", fontWeight: 700, fontSize: 14, transition: "color 0.2s" },
};
// s 样式兼容
const s = { contentWrapper: S.contentWrapper };