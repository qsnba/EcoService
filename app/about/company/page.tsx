"use client";

import React from "react";
import Header from "../../../components/Header";
import CyberEnergyBackground from "../../../components/CyberEnergyBackground"; // ✅ 引入新背景
import { I18nProvider, useI18n } from "../../../lib/i18n";

// 定义仓库路径 (如果你的 Header 里已经处理了，这里其实主要用于图片路径)
const REPO_PATH = "/EcoService";

export default function CompanyPage() {
  return (
    <I18nProvider>
      <CompanyPageInner />
    </I18nProvider>
  );
}

function CompanyPageInner() {
  const { t, lang } = useI18n();
  const isZh = lang === "zh";

  return (
    <main style={s.page}>
      {/* 1. 导航栏 */}
      <Header />

      {/* 2. 核心区域：包含背景和内容 */}
      <div style={s.mainWrapper}>

        {/* 🔥 A. 放入赛博能量背景 (固定在底层) */}
        <CyberEnergyBackground />

        {/* 🔥 B. 内容容器 (必须加 zIndex 和 relative) */}
        <div style={s.contentContainer}>

          {/* 标题区域 */}
          <section style={s.heroSection}>
            <div style={s.kicker}>{isZh ? "关于我们" : "WHO WE ARE"}</div>
            <h1 style={s.h1}>
              {isZh ? "驱动绿色能源的" : "Powering the Green Energy"} <br />
              <span style={s.textGradient}>{isZh ? "数字化未来" : "Digital Future"}</span>
            </h1>
            <p style={s.heroDesc}>
              {isZh
                ? "Eco Service 是欧洲领先的新能源现场技术服务商。我们结合深厚的电气工程经验与数字化交付能力，为电池储能、光伏及电动汽车充电基础设施提供全生命周期支持。"
                : "Eco Service is Europe's leading onsite technical service provider for new energy. We combine deep electrical engineering expertise with digital delivery capabilities to support ESS, PV, and EV charging infrastructure throughout their lifecycle."}
            </p>
          </section>

          {/* 详细内容卡片区 */}
          <section style={s.cardSection}>
            <div style={s.grid}>
              {/* 卡片 1 */}
              <div style={s.glassCard}>
                <div style={s.cardIcon}>🚀</div>
                <h3 style={s.cardTitle}>{isZh ? "我们的使命" : "Our Mission"}</h3>
                <p style={s.cardText}>
                  {isZh
                    ? "通过标准化的现场服务网络，消除新能源设备在欧洲落地的“最后一公里”障碍，确保每一度绿电都能安全、高效地流转。"
                    : "To eliminate the 'last mile' barriers for new energy equipment in Europe through a standardized field service network, ensuring every kWh of green power flows safely and efficiently."}
                </p>
              </div>

              {/* 卡片 2 */}
              <div style={s.glassCard}>
                <div style={s.cardIcon}>🌍</div>
                <h3 style={s.cardTitle}>{isZh ? "我们的足迹" : "Our Footprint"}</h3>
                <p style={s.cardText}>
                  {isZh
                    ? "总部位于德国，服务网络覆盖北欧、西欧及中东欧 12+ 国家。我们在法兰克福拥有 500㎡ 的备件中心与培训基地。"
                    : "Headquartered in Germany, our service network covers 12+ countries in Northern, Western, and Central Europe. We operate a 500㎡ spare parts center and training base in Frankfurt."}
                </p>
              </div>
            </div>

            {/* 底部数据条 */}
            <div style={s.statsRow}>
              <div style={s.statItem}>
                <div style={s.statNum}>500+</div>
                <div style={s.statLabel}>{isZh ? "完成项目" : "Projects Done"}</div>
              </div>
              <div style={s.statItem}>
                <div style={s.statNum}>2.5GW</div>
                <div style={s.statLabel}>{isZh ? "服务容量" : "Capacity Served"}</div>
              </div>
              <div style={s.statItem}>
                <div style={s.statNum}>100%</div>
                <div style={s.statLabel}>{isZh ? "安全交付" : "Safety Record"}</div>
              </div>
            </div>

            {/* 团队照片或公司环境图 (占位) */}
            <div style={s.imageBox}>
              <div style={s.imageHint}>
                {isZh ? "此处展示团队合影或公司大楼照片" : "Team Photo / Office Building Image Here"}
              </div>
              {/*<img src={`${REPO_PATH}/team.jpg`} style={s.realImg} alt="Team" />*/}
            </div>

          </section>

          {/* 底部返回链接 */}
          <div style={s.footerBack}>
            <a href={`${REPO_PATH}/#top`} style={s.backLink}>
              ← {isZh ? "返回首页" : "Back to Home"}
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}

// --- 样式表 ---
const s: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#020617", // 底色与背景组件一致
    fontFamily: "'Inter', sans-serif",
    color: "white",
  },

  // 核心包装器：限制高度，或者允许滚动
  mainWrapper: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    overflowX: "hidden", // 防止水平滚动条
  },

  // 内容容器：必须提权
  contentContainer: {
    position: "relative",
    zIndex: 10, // ✅ 关键：确保内容在 canvas 之上
    maxWidth: 1000,
    margin: "0 auto",
    padding: "140px 20px 80px", // 顶部留出导航栏的空间
  },

  // Hero 区域
  heroSection: {
    textAlign: "center",
    marginBottom: 60,
  },
  kicker: {
    fontSize: 13,
    fontWeight: 900,
    color: "#60a5fa", // 蓝色高亮
    letterSpacing: "3px",
    marginBottom: 16,
    textTransform: "uppercase",
  },
  h1: {
    fontSize: 48,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: 24,
    letterSpacing: "-1px",
  },
  textGradient: {
    background: "linear-gradient(90deg, #fff, #94a3b8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  heroDesc: {
    fontSize: 18,
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.7)",
    maxWidth: 700,
    margin: "0 auto",
  },

  // 玻璃卡片区
  cardSection: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 24,
  },
  glassCard: {
    // ✅ 磨砂玻璃风格，配合深色背景非常好看
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: 24,
    padding: 32,
    backdropFilter: "blur(12px)",
  },
  cardIcon: {
    fontSize: 32,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 800,
    marginBottom: 12,
    color: "white",
  },
  cardText: {
    fontSize: 15,
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.7)",
  },

  // 数据条
  statsRow: {
    display: "flex",
    justifyContent: "space-around",
    background: "rgba(0,0,0,0.3)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 20,
    padding: "30px 20px",
    flexWrap: "wrap",
    gap: 20,
  },
  statItem: {
    textAlign: "center",
  },
  statNum: {
    fontSize: 36,
    fontWeight: 900,
    color: "#38bdf8", // 赛博青
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 13,
    color: "rgba(255,255,255,0.6)",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "1px",
  },

  // 图片占位
  imageBox: {
    width: "100%",
    height: 300,
    background: "rgba(255,255,255,0.03)",
    border: "1px dashed rgba(255,255,255,0.15)",
    borderRadius: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    overflow: "hidden",
  },
  imageHint: {
    color: "rgba(255,255,255,0.3)",
    fontSize: 14,
  },
  realImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  footerBack: {
    marginTop: 60,
    textAlign: "center",
  },
  backLink: {
    color: "rgba(255,255,255,0.5)",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 600,
    transition: "color 0.2s",
  },
};

