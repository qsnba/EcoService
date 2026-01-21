export type Lang = "zh" | "en";

export const messages = {
  zh: {
    nav: {
      home: "首页",
      services: "服务",
      capabilities: "能力",
      projects: "案例",
      about: "关于我们",
      contact: "联系我们",
      language: "语言",
      zh: "中文",
      en: "English",
    },

    hero: {
      title: "欧洲储能现场服务",
      subtitle: "技术服务 · 管理咨询 · 仓储物流（工商业/家储/动力电池）",
    },

    services: {
      title: "服务",
      subtitle: "我们专注储能系统现场服务与交付支持：调试投运、维护保养、故障处理、仓储物流与交付。",
      cta: "联系我们",
      viewDetail: "查看详情 →",
      back: "返回服务总览 ↑",
      mediaHint: "",
      cards: {
        commissioning: { title: "调试投运", desc: "上电、参数配置、投运验证、现场联调" },
        maintenance: { title: "维护保养", desc: "巡检、预防性维护、计划性维保" },
        troubleshooting: { title: "故障处理", desc: "告警分析、定位与恢复、应急响应" },
        logistics: { title: "仓储物流与交付", desc: "仓储、备件周转、物流协调与交付支持" },
      },
      details: {
        commissioning: {
          title: "调试投运",
          bullets: [
            "现场上电与系统检查（含相序/辅源/绝缘等验证）",
            "参数配置与联调（BMS/PCS/EMS 侧）",
            "投运验证与记录（交付文档、日志、照片）",
          ],
        },
        maintenance: {
          title: "维护保养",
          bullets: [
            "定期巡检与预防性维护（PM）",
            "关键部件检查与健康状态评估",
            "维护报告输出与持续改进建议",
          ],
        },
        troubleshooting: {
          title: "故障处理",
          bullets: [
            "告警/事件分析与定位（现场/远程协助）",
            "现场恢复与临时处置方案",
            "根因复盘与修复建议（可追溯）",
          ],
        },
        logistics: {
          title: "仓储物流与交付",
          bullets: [
            "备件/物料仓储与周转管理",
            "物流协调与交付支持（到货、签收、清点）",
            "与客户流程对齐（记录、追溯、清关协助如需）",
          ],
        },
      },
    },


    capabilities: {
      title: "能力",
      subtitle: "覆盖欧洲多国的现场工程能力与交付体系：响应更快、流程更稳、结果可追溯。",
      viewDetail: "查看详情 →",
      cards: {
        network: {
          title: "欧洲现场覆盖",
          desc: "多国项目支持，快速到场与跨区域协同",
        },
        team: {
          title: "专业工程团队",
          desc: "储能现场调试/维保/故障经验，标准化作业流程",
        },
        tools: {
          title: "工具与交付体系",
          desc: "Checklist、日志、照片、报告可追溯，交付一致性强",
        },
      },
    },

    projects: {
      title: "项目案例",
      subtitle: "覆盖储能调试投运、维保、软件升级、培训与工程类交付。点击标签可筛选。",
      filterLabel: "筛选：",
      all: "全部",
      tags: {
        commissioning: "调试投运",
        maintenance: "维保维护",
        upgrade: "软件升级",
        training: "培训",
        engineering: "工程交付",
      },
      items: [
        {
          title: "Ebus 电池动力系统升级服务",
          tag: "upgrade",
          bullets: ["电池高压电缆线路更换作业", "电池更换安装"],
          image1: "/EBUS1.png",
        },
        {
          title: "空调 PTC 液热系统管道更换",
          tag: "maintenance",
          bullets: ["PTC 液热系统管道更换", "现场拆装与恢复验证"],
          image2: "/EBUS2.png",
        },
        {
          title: "储能产品维保培训（带客户模拟实操）",
          tag: "training",
          bullets: ["维保流程讲解", "现场模拟操作演练"],
        },
        {
          title: "服务站培训",
          tag: "training",
          bullets: ["服务站人员培训", "交付标准与安全规范"],
        },
        {
          title: "储能产品培训",
          tag: "training",
          bullets: ["产品结构/功能培训", "常见问题与处理流程"],
          image1: "",
          image2: "",
        },
        {
          title: "90MW 全面 BMU 软件升级 & CSC 更换",
          tag: "upgrade",
          bullets: ["BMU 软件升级", "CSC 更换与验证"],
          image1: "/90MW1.png",
          image2: "/90MW2.png",
        },
        {
          title: "液冷注液 & 电箱均衡",
          tag: "engineering",
          bullets: ["液冷注液", "电箱均衡"],
          image1: "/yeleng1.png",
          image2: "/yeleng2.png",
        },
        {
          title: "10kW 家庭分布式储能现场安装及调试",
          tag: "commissioning",
          bullets: ["现场安装", "系统调试与投运验证"],
          image1: "/10KW1.png",
          image2: "/10KW2.png",
        },
        {
          title: "100MW 储能项目调试",
          tag: "commissioning",
          bullets: ["系统联调", "投运验证与记录"],
          image1: "/100MW1.png",
          image2: "/100MW2.png",
        },
        {
          title: "55MW 储能项目调试",
          tag: "commissioning",
          bullets: ["现场调试", "运行验证与交付支持"],
          image1: "/55MW1.png",
          image2: "/55MW2.png",
        },
        {
          title: "55MW 储能项目维修/维护",
          tag: "maintenance",
          bullets: ["故障定位与恢复", "维护记录与报告输出"],
          image1: "/55MW3.png",
          image2: "/55MW4.png",
        },
        {
          title: "10MW 储能项目调试",
          tag: "commissioning",
          bullets: ["调试投运", "现场测试与验收支持"],
          image1: "/10KW3.png",
        },
        {
          title: "储能电柜焊接修补",
          tag: "engineering",
          bullets: ["焊接修补", "结构检查与恢复"],
          image1: "/chuneng1.png",
          image2: "/chuneng2.png",
        },
        {
          title: "厂房设备安装 / 管道焊接 / 吊装 / 钢平台搭建 / 光伏板安装",
          tag: "engineering",
          bullets: ["设备安装", "管道焊接与吊装", "钢平台/光伏安装等工程工作"],
          image1: "/changfang1.png",
          image2: "/changfang2.png",
        },
      ],
    },

    about: {
      title: "关于我们",
      contactTitle: "联系我们",
      quickTitle: "快速入口",
      newsTitle: "新闻",
      subscribeTitle: "通讯",
      subscribeHint: "订阅电子邮件并获取最新资讯和更新！",

      contact: {
        phone1: "电话：+49 1787310999",
        phone2: "电话：+49 17621594655",
        email: "电子邮件：info@eco-service.ltd",
        address: "地址：Hofer Str.11, 93057 Regensburg, Germany",
      },

      quickLinks: {
        services: "服务",
        capabilities: "能力",
        projects: "项目案例",
        contact: "联系我们",
        company: "公司简介",
        partners: "合作品牌",
      },

      news: [
        { title: "Eco Service 评估报告发布（2025/11/30）", date: "2025-11-30" },
        { title: "欧洲储能现场服务能力持续升级", date: "2025-12-01" },
      ],

      subscribe: {
        placeholder: "您的电子邮件",
        button: "提交",
        ok: "已提交（示例：你可以后续接邮件系统）",
      },

      bottom: "© Eco Service GmbH. All rights reserved.",
    },

  },

  en: {
    nav: {
      home: "Home",
      services: "Services",
      capabilities: "Capabilities",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      language: "Language",
      zh: "中文",
      en: "English",
    },

    hero: {
      title: "European Energy Storage Field Service",
      subtitle: "Technical Service · Management Consulting · Warehousing & Logistics (C&I / Residential / EV Battery)",
    },

    services: {
      title: "Services",
      subtitle:
        "We focus on on-site services and delivery support for energy storage systems, including commissioning, maintenance, troubleshooting, and logistics.",
      cta: "Contact Us",
      viewDetail: "View details →",
      back: "Back to Services ↑",
      mediaHint: "",

      cards: {
        commissioning: {
          title: "Commissioning",
          desc: "Power-on, parameter configuration, system validation, and on-site integration",
        },
        maintenance: {
          title: "Maintenance",
          desc: "Inspection, preventive maintenance, and scheduled servicing",
        },
        troubleshooting: {
          title: "Troubleshooting",
          desc: "Alarm analysis, fault localization, and system recovery",
        },
        logistics: {
          title: "Logistics & Delivery",
          desc: "Warehousing, spare parts circulation, logistics coordination, and delivery support",
        },
      },

      details: {
        commissioning: {
          title: "Commissioning",
          bullets: [
            "On-site power-on and system checks (phase sequence, auxiliary power, insulation, etc.)",
            "Parameter configuration and system integration (BMS / PCS / EMS)",
            "Commissioning validation and documentation (delivery records, logs, photos)",
          ],
        },
        maintenance: {
          title: "Maintenance",
          bullets: [
            "Regular inspection and preventive maintenance (PM)",
            "Key component checks and health status assessment",
            "Maintenance reports and continuous improvement recommendations",
          ],
        },
        troubleshooting: {
          title: "Troubleshooting",
          bullets: [
            "Alarm and event analysis with fault localization (on-site / remote support)",
            "On-site recovery and temporary mitigation solutions",
            "Root cause analysis and corrective recommendations (traceable)",
          ],
        },
        logistics: {
          title: "Logistics & Delivery",
          bullets: [
            "Spare parts and material warehousing and turnover management",
            "Logistics coordination and delivery support (arrival, inspection, acceptance)",
            "Alignment with customer processes (records, traceability, customs support if required)",
          ],
        },
      },
    },


    capabilities: {
      title: "Capabilities",
      subtitle:
        "A reliable on-site engineering and delivery system across Europe: faster response, standardized workflow, and traceable results.",
      viewDetail: "View details →",
      cards: {
        network: {
          title: "European On-site Coverage",
          desc: "Multi-country project support with fast dispatch and cross-region collaboration",
        },
        team: {
          title: "Experienced Engineering Team",
          desc: "Commissioning, maintenance, and troubleshooting with standardized procedures",
        },
        tools: {
          title: "Tools & Delivery System",
          desc: "Checklists, logs, photos, and reports for strong traceability and consistency",
        },
      },
    },

    projects: {
      title: "Project Cases",
      subtitle:
        "Covering ESS commissioning, maintenance, software upgrades, training, and engineering delivery. Use tags to filter.",
      filterLabel: "Filter:",
      all: "All",
      tags: {
        commissioning: "Commissioning",
        maintenance: "Maintenance",
        upgrade: "Upgrade",
        training: "Training",
        engineering: "Engineering",
      },
      items: [
        {
          title: "E-bus Battery Power System Upgrade Service",
          tag: "upgrade",
          bullets: ["High-voltage cable circuit replacement", "Battery replacement and installation"],
          image1: "/EBUS1.png",
        },
        {
          title: "Air Conditioning PTC Liquid Heat System Pipe Replacement",
          tag: "maintenance",
          bullets: ["PTC liquid heat pipe replacement", "On-site disassembly and verification"],
          image2: "/EBUS2.png",
        },
        {
          title: "ESS Maintenance Training (Hands-on simulation with customer)",
          tag: "training",
          bullets: ["Maintenance workflow training", "Hands-on simulation exercises"],
        },
        {
          title: "Training for Service Station",
          tag: "training",
          bullets: ["Service station staff training", "Delivery standards & safety practices"],
        },
        {
          title: "Energy Storage Product Training",
          tag: "training",
          bullets: ["Product structure & functions", "Common issues and handling procedures"],
        },
        {
          title: "90MW Comprehensive BMU Software Upgrade & CSC Replacement",
          tag: "upgrade",
          bullets: ["BMU software upgrade", "CSC replacement and verification"],
          image1: "/90MW1.png",
          image2: "/90MW2.png",
        },
        {
          title: "Liquid-cooled Injection & Electrical Cabinet Balancing",
          tag: "engineering",
          bullets: ["Liquid-cooled injection", "Electrical cabinet balancing"],
          image1: "/yeleng1.png",
          image2: "/yeleng2.png",
        },
        {
          title: "On-site Installation & Commissioning of 10kW Home ESS",
          tag: "commissioning",
          bullets: ["On-site installation", "Commissioning and go-live validation"],
          image1: "/10KW1.png",
          image2: "/10KW2.png",
        },
        {
          title: "Commissioning of 100MW Energy Storage Project",
          tag: "commissioning",
          bullets: ["System integration", "Validation and delivery records"],
          image1: "/100MW1.png",
          image2: "/100MW2.png",
        },
        {
          title: "Commissioning of 55MW Energy Storage Project",
          tag: "commissioning",
          bullets: ["On-site commissioning", "Operation validation & delivery support"],
          image1: "/55MW1.png",
          image2: "/55MW2.png",
        },
        {
          title: "55MW Energy Storage Project Maintenance",
          tag: "maintenance",
          bullets: ["Fault localization and recovery", "Maintenance logs & report output"],
          image1: "/55MW3.png",
          image2: "/55MW4.png",
        },
        {
          title: "Commissioning of 10MW Energy Storage Project",
          tag: "commissioning",
          bullets: ["Commissioning and go-live", "On-site testing and acceptance support"],
          image1: "/10KW3.png",
        },
        {
          title: "Welding Repair of Energy Storage Cabinet",
          tag: "engineering",
          bullets: ["Welding repair", "Structural inspection and recovery"],
          image1: "/chuneng1.png",
          image2: "/chuneng2.png",
        },
        {
          title:
            "Factory Installation / Pipeline Welding / Hoisting / Steel Platform Construction / PV Panel Installation",
          tag: "engineering",
          bullets: ["Equipment installation", "Welding & hoisting", "Steel platform / PV installation"],
          image1: "/changfang1.png",
          image2: "/changfang2.png",
        },
      ],
    },

    about: {
      title: "About Us",
      contactTitle: "Contact",
      quickTitle: "Quick Links",
      newsTitle: "News",
      subscribeTitle: "Newsletter",
      subscribeHint: "Subscribe to receive the latest updates and news.",

      contact: {
        phone1: "Tel: +49 1787310999",
        phone2: "Tel: +49 17621594655",
        email: "Email: info@eco-service.ltd",
        address: "Address: Hofer Str.11, 93057 Regensburg, Germany",
      },

      quickLinks: {
        services: "Services",
        capabilities: "Capabilities",
        projects: "Projects",
        contact: "Contact",
        company: "Company Profile",
        partners: "Partners",
      },

      news: [
        { title: "Eco Service Evaluation Report Released (2025/11/30)", date: "2025-11-30" },
        { title: "Continuous Upgrade of EU On-site ESS Service Capability", date: "2025-12-01" },
      ],

      subscribe: {
        placeholder: "Your email",
        button: "Submit",
        ok: "Submitted (demo: you can connect a mail system later)",
      },

      bottom: "© Eco Service GmbH. All rights reserved.",
    },

  },
} as const;
