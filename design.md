# Riverside Electric Inc. - Website Redesign Design Document

## 1. 项目概述 (Project Overview)

### 1.1 品牌信息
- **品牌名称**: Riverside Electric Inc.
- **Slogan**: "Never Feel Powerless"
- **成立年份**: 1945
- **经营模式**: 家族企业，第四代管理
- **定位**: 辛辛那提地区顶级 Generac PowerPro Premier 经销商，全方位商业电气服务承包商
- **服务区域**: Cincinnati, Columbus, Indianapolis (OH/KY/IN 三州执照)
- **客户类型**: 商业/工业/机构/住宅
- **核心优势**: 80+年经验、24/7服务、300+五星评价、全系列斗式卡车车队

### 1.2 网站语言
- **主要语言**: 英文 (English)
- **目标市场**: 美国俄亥俄州、印第安纳州、肯塔基州

---

## 2. 现有网站分析 (Current Site Analysis)

### 2.1 现有网站结构
```
Home
├── Commercial Electrical Services
│   ├── Commercial Electrical Contractor
│   ├── 24-Hour Commercial Electricians
│   ├── Commercial LED Lighting and Retrofits
│   ├── Commercial Lighting Management Programs
│   └── Outdoor Lighting
├── Generators
│   ├── Generator Installation
│   ├── Generator Service and Repair
│   ├── Remote Generator Monitoring and Warranties
│   ├── Affordable Home Standby Generators
│   └── Generac Generators
├── EV Chargers
├── Gallery
├── Reviews
├── Blog
├── About
├── Contact
│   └── Cincinnati, Columbus, Indianapolis (3个地点)
└── Locations
```

### 2.2 现有视觉设计分析
- **平台**: Hibu 模板化网站（典型小企业建站平台）
- **配色**: 深蓝色(#0C3C78) + 红色(#C41E3A) + 白色 - 传统电工行业配色，但缺乏现代感
- **布局**: 长页面滚动结构，内容密集，缺乏呼吸空间
- **排版**: 字体大小不一致，层级模糊，正文段落过长
- **图片**: 真实场景照片（服务车辆、发电机安装等），但质量参差不齐
- **CTA**: 红色按钮突出但位置不够固定，缺乏粘性CTA
- **Hero**: 图片+标题+表单，但表单视觉权重过大，分散了视觉焦点
- **导航**: 双层导航，但下拉菜单项过多，移动端体验差

### 2.3 现有问题诊断
1. **视觉过时**: 模板感强，缺乏品牌独特性，与"80年老品牌"的历史底蕴不匹配
2. **转化漏斗不清晰**: 多个CTA分散注意力，缺乏单一明确的转化路径
3. **移动端体验差**: 长页面在小屏幕上难以浏览，表单在手机上操作困难
4. **加载性能**: 大量图片未优化，可能影响 Core Web Vitals
5. **信任信号不足**: 4.7星评分、BBB A+认证等关键信任元素被埋没在页面底部
6. **内容密度过高**: 每个段落过长，缺乏模块化设计，用户难以快速扫描
7. **缺乏故事性**: 80年家族企业历史是一个强大的品牌故事，但网站未能有效传达
8. **SEO结构薄弱**: 标题层级混乱，内部链接结构不够清晰

---

## 3. 设计目标 (Design Goals)

### 3.1 核心目标
1. **建立信任**: 通过视觉设计和内容布局强化"80年老牌、值得信赖"的品牌形象
2. **提升转化**: 明确转化路径（Request Service → Quote → Call），减少用户决策摩擦
3. **现代专业感**: 从"模板化小企业网站"升级为"专业电气服务商"的行业标杆形象
4. **响应式体验**: 确保在移动端、平板、桌面端都有出色的浏览体验

### 3.2 次级目标
1. **服务展示**: 清晰展示6大核心业务线，让用户快速找到所需服务
2. **品牌故事**: 有效传达"第四代家族企业"的故事和价值观
3. **SEO友好**: 结构清晰的语义化HTML，支持本地SEO优化
4. **可维护性**: 设计系统组件化，便于后续内容更新和扩展

---

## 4. 目标用户画像 (Target Audience)

### 4.1 主要用户群体
1. **商业物业经理** (Property Managers)
   - 需求: 可靠的照明管理、应急维修、批量照明改造
   - 决策因素: 24/7响应、固定费率、合同条款
   - 触点: 搜索"commercial electrician near me"

2. **企业设施管理者** (Facility Managers)
   - 需求: 工业电气工程、发电机安装、LED改造
   - 决策因素: 经验、资质、项目规模承接能力
   - 触点: 搜索"industrial electrical contractor Cincinnati"

3. **住宅业主** (Homeowners)
   - 需求: 家用发电机、EV充电桩安装
   - 决策因素: 品牌声誉（Generac授权）、融资选项、价格透明
   - 触点: 搜索"home standby generator installation" / "EV charger installer"

4. **机构投资者/REITs** (Institutional Investors)
   - 需求: 大规模照明管理项目、全国性服务
   - 决策因素: 服务覆盖范围、项目管理能力、报告能力
   - 触点: 搜索"lighting management program" / "national electrical contractor"

### 4.2 用户行为特征
- 紧急需求: 很多电气故障是紧急的，用户需要快速找到联系方式
- 信任导向: 电气服务涉及安全和合规，用户高度依赖信任信号
- 比较行为: 用户会同时查看多个电气承包商网站
- 本地搜索: 大部分通过"near me"或城市名+服务类型搜索

---

## 5. 视觉识别系统 (Visual Identity System)

### 5.1 设计理念
**"Heritage meets Modern"** — 传统底蕴与现代专业感的融合。80年的家族传承需要通过经典、稳重的视觉元素体现，同时现代交互和排版传递技术专业性和服务可靠性。

### 5.2 色彩系统 (Color Palette)

#### 主色 (Primary Colors)
| Token | Hex | Usage | Notes |
|-------|-----|-------|-------|
| --color-primary | #1A3C6E | 主色、导航背景、重要标题 | 深蓝色，比现有更沉稳 |
| --color-primary-dark | #0F2547 | 深色背景、页脚、深色区块 | 更深的 navy |
| --color-primary-light | #E8F0FE | 浅色背景、卡片背景、hover状态 | 浅蓝灰 |

#### 强调色 (Accent Colors)
| Token | Hex | Usage | Notes |
|-------|-----|-------|-------|
| --color-accent | #E84627 | CTA按钮、重要通知、紧急元素 | 活力橙红，比现有红色更现代 |
| --color-accent-hover | #D13B1F | 按钮hover状态 | 更深一点的橙红 |
| --color-accent-light | #FFF0EB | 轻量背景、标签背景 | 浅橙色 |

#### 功能色 (Functional Colors)
| Token | Hex | Usage | Notes |
|-------|-----|-------|-------|
| --color-success | #2E8B57 | 成功状态、绿色能源元素 | 森林绿，传递环保/节能 |
| --color-warning | #F5A623 | 警告、24/7服务提示 | 琥珀色 |
| --color-text-primary | #1A1A2E | 正文标题 | 近黑色，深蓝灰 |
| --color-text-secondary | #5A5A6E | 副标题、描述 | 中灰 |
| --color-text-muted | #8A8A9E | 辅助信息、日期、标签 | 浅灰 |
| --color-background | #FFFFFF | 页面背景 | 纯白 |
| --color-surface | #F5F7FA | 卡片、区块交替背景 | 浅灰蓝 |
| --color-border | #E2E5E9 | 边框、分割线 | 浅灰 |

#### 色彩使用规则
- **深色区块**: 用于展示信任信号（评分、认证、历史数据）、CTA区域、服务概览
- **浅色区块**: 用于内容阅读、服务详情、博客内容
- **交替背景**: 长页面中交替使用白色和浅灰蓝(#F5F7FA)以区分内容模块
- **红色/橙色**: 仅用于CTA按钮和紧急服务提示，保持克制以最大化冲击力
- **绿色**: 用于LED/节能/环保相关内容，传递绿色能源理念

### 5.3 字体系统 (Typography)

#### 字体选择
- **标题字体**: "DM Sans" or "Geist" — 现代、几何、清晰，传递专业可靠感
- **正文字体**: "Inter" or "DM Sans" — 高可读性，适合长文本阅读
- **中文字体后备**: 系统默认中文字体（如有中文内容）

#### 字体层级 (Type Scale)
| Level | Font Size | Weight | Line Height | Letter Spacing | Usage |
|-------|-----------|--------|-------------|----------------|-------|
| Display | 56px / 3.5rem | 700 | 1.1 | -0.02em | Hero 主标题 |
| H1 | 40px / 2.5rem | 700 | 1.15 | -0.01em | 页面标题 |
| H2 | 32px / 2rem | 600 | 1.2 | -0.01em | 区块标题 |
| H3 | 24px / 1.5rem | 600 | 1.25 | 0 | 卡片标题 |
| H4 | 20px / 1.25rem | 500 | 1.3 | 0 | 小标题 |
| Body Large | 18px / 1.125rem | 400 | 1.6 | 0 | 引导段落 |
| Body | 16px / 1rem | 400 | 1.6 | 0 | 正文 |
| Small | 14px / 0.875rem | 400 | 1.5 | 0 | 描述、标签 |
| Caption | 12px / 0.75rem | 500 | 1.4 | 0.02em | 辅助信息、时间戳 |

**移动端响应式调整**:
- Display: 56px → 36px (mobile)
- H1: 40px → 28px
- H2: 32px → 24px
- Body: 保持16px

#### 排版规则
- 标题使用字间距微压缩 (-0.01em ~ -0.02em) 以提升紧凑感和冲击力
- 正文行高1.6确保舒适的阅读体验
- 段落最大宽度: 65ch (约65个字符)，避免过长行
- 重要数据/数字使用 Display 尺寸 + 粗体，配合小号标签文字形成"数据卡片"
- 引用/证言使用斜体或引号装饰

### 5.4 间距系统 (Spacing Scale)

基于 8px 网格:
| Token | Value | Usage |
|-------|-------|-------|
| space-1 | 4px | 图标间距、内联元素 |
| space-2 | 8px | 小间距、标签内边距 |
| space-3 | 12px | 按钮内边距-垂直 |
| space-4 | 16px | 标准组件内边距、卡片padding |
| space-5 | 20px | 小模块间距 |
| space-6 | 24px | 卡片内部块间距 |
| space-8 | 32px | 标准区块间距 |
| space-10 | 40px | 大模块间距 |
| space-12 | 48px | 页面区块间距 |
| space-16 | 64px | 大区块间距 (desktop) |
| space-20 | 80px | 主要区块间距 |
| space-24 | 96px | 大区块间距 |

**区块间距规则**:
- 相邻内容区块: 80px-96px (desktop) / 48px-64px (mobile)
- 卡片内部padding: 24px-32px
- 网格间隙: 16px-24px
- 容器最大宽度: 1280px (xl: 1280px)
- 内容边距: 页面两侧留白 16px (mobile) → 24px (tablet) → 32px (desktop)

### 5.5 圆角与阴影 (Border Radius & Shadows)

| Token | Value | Usage |
|-------|-------|-------|
| radius-sm | 4px | 按钮、标签、小元素 |
| radius-md | 8px | 卡片、输入框、图片 |
| radius-lg | 16px | 大卡片、图片容器、modal |
| radius-xl | 24px | 特色区块、Hero图片容器 |

| Token | Value | Usage |
|-------|-------|-------|
| shadow-sm | 0 1px 2px rgba(0,0,0,0.05) | 卡片默认、按钮 |
| shadow-md | 0 4px 6px -1px rgba(0,0,0,0.1) | 悬浮卡片、下拉菜单 |
| shadow-lg | 0 10px 15px -3px rgba(0,0,0,0.1) | 模态框、sticky导航 |
| shadow-card | 0 2px 8px rgba(0,0,0,0.08) | 标准卡片 |

---

## 6. 网站架构 (Site Architecture)

### 6.1 页面结构
```
 riverside-elec.com (主页)
├── /services (服务总览)
│   ├── /commercial-electrical (商业电气服务)
│   ├── /generators (发电机服务)
│   ├── /ev-chargers (EV充电桩)
│   ├── /led-lighting (LED照明与改造)
│   ├── /lighting-management (照明管理项目)
│   └── /emergency-service (24小时紧急服务)
├── /about (关于我们)
│   └── /our-team (团队)
├── /reviews (客户评价)
├── /gallery (项目展示)
├── /blog (博客/资源)
│   └── /[slug] (文章详情)
├── /contact (联系我们)
│   ├── /cincinnati (辛辛那提)
│   ├── /columbus (哥伦布)
│   └── /indianapolis (印第安纳波利斯)
├── /locations (服务地点)
└── /request-quote (请求报价) *[表单落地页]*
```

### 6.2 导航结构 (Navigation)

#### 主导航 (Desktop)
```
[Logo]                                    [Services ▾] [Generators ▾] [EV Chargers] [About] [Reviews] [Blog] [Contact]  [(513) 936-0100] [Request Service]
```

#### 服务下拉菜单
```
Services
├── Commercial Electrical Contractor
├── 24-Hour Emergency Service
├── LED Lighting & Retrofits
├── Lighting Management Programs
└── Outdoor Lighting
```

#### 发电机下拉菜单
```
Generators
├── Generator Installation
├── Generator Service & Repair
├── Remote Monitoring & Warranties
├── Affordable Home Standby Generators
└── Generac Generators
```

#### 移动端导航
- 汉堡菜单展开全屏覆盖
- 层级：主菜单 → 点击展开子菜单 → 三级返回
- 底部固定条：Call Now + Request Service

#### 粘性CTA
- 滚动超过 Hero 后，导航栏底部显示固定条（或导航栏本身变为sticky并融入CTA按钮）
- 移动端：底部固定悬浮按钮组 [Call Now] [Request Service]

---

## 7. 页面设计详情 (Page Designs)

### 7.1 首页 (Homepage)

#### 区块结构
1. **Hero Section** (主视觉区)
2. **Trust Bar** (信任信号条)
3. **Services Overview** (服务概览)
4. **Why Choose Us** (为什么选择我们)
5. **Generator Spotlight** (发电机特色)
6. **Stats & Heritage** (数据与传承)
7. **Testimonials** (客户证言)
8. **Blog/Resources** (最新资源)
9. **CTA Section** (行动号召)
10. **Footer** (页脚)

---

##### 1. Hero Section (主视觉区)

**布局**:
- 全宽，最小高度: 90vh (desktop) / 80vh (mobile)
- 左侧内容区 (60%) + 右侧图片/表单区 (40%)
- 移动端：堆叠布局，内容在上，图片在下

**背景**:
- 使用深色渐变叠加在真实工作场景照片上（服务车辆、电工现场作业、发电机安装场景）
- 或：纯色深蓝背景 + 右侧产品图
- 渐变: `linear-gradient(135deg, rgba(15, 37, 71, 0.92) 0%, rgba(15, 37, 71, 0.75) 100%)`

**内容**:
- 小标签: "Trusted Electrical Contractors Since 1945" (白色背景pill，主色文字)
- 主标题: "Electrical Services You Can Trust" (56px, 白色, 粗体)
- 副标题: "Family-owned and operated for 4 generations. Serving Cincinnati, Columbus & Indianapolis with 24/7 commercial and residential electrical services." (18px, 白色/85%透明度)
- 关键卖点列表（3个图标+文字）:
  - ⚡ 24/7 Emergency Service Available
  - 🏆 Cincinnati's Top-Rated Generac Dealer
  - ✅ Licensed in OH, KY & IN
- CTA组:
  - 主按钮: "Request Free Quote" (橙色，大按钮)
  - 次按钮: "Call (513) 936-0100" (白色边框按钮)
- 右侧：联系表单或主视觉图片（视实现方式而定）

**表单 (如果放右侧)**:
- 标题: "Get a Free Quote Today"
- 字段: Name, Phone, Email, Service Type (下拉), Message (可选)
- 按钮: "Request Callback"
- 隐私提示: "We respect your privacy. No spam."

**Hero图片建议**:
- 主图：专业电工团队在商业建筑前的工作照（展示真实团队，而非库存图）
- 或：Riverside 服务车队的高质量照片（展示实力）
- 风格：真实、专业、有温度

---

##### 2. Trust Bar (信任信号条)

**布局**:
- 全宽，背景色 #0F2547 (深色)
- 水平排列，居中对齐
- 移动端：2x2网格

**内容** (4个数据点):
```
[★ 4.7]           [80+]           [300+]           [24/7]
4.7 Star Rating   Years of        5-Star Reviews   Emergency
(703 Reviews)     Experience      Across Platforms Service Available
```

**视觉**:
- 数字使用Display尺寸 (48px)，白色
- 标签文字使用 Caption 尺寸，白色/70%透明度
- 之间用细竖线分隔（移动端隐藏）
- 数据点带有微妙图标（星形、时钟、奖杯等）

---

##### 3. Services Overview (服务概览)

**布局**:
- 背景: 白色
- 区块标题居中
- 2x3 卡片网格 (desktop) → 1列 (mobile)

**内容**:
- 区块标题: "Our Services" (H2, 居中)
- 区块描述: "From routine maintenance to complex installations, we deliver reliable electrical solutions for homes and businesses across Ohio, Kentucky, and Indiana." (Body Large, 居中, max-width: 640px)

**6个服务卡片**:
```
┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐
│ [Icon]              │  │ [Icon]              │  │ [Icon]              │
│ Commercial          │  │ Generator           │  │ EV Charger          │
│ Electrical          │  │ Installation        │  │ Installation        │
│                     │  │ & Service           │  │                     │
│ Full-service        │  │ Residential &        │  │ Home & commercial  │
│ contracting for     │  │ commercial standby   │  │ EV charging         │
│ offices, retail,    │  │ generators. Top-     │  │ stations. Ensure    │
│ warehouses &        │  │ rated Generac        │  │ proper electrical  │
│ industrial.         │  │ dealer.              │  │ capacity.           │
│                     │  │                     │  │                     │
│ Learn More →        │  │ Learn More →        │  │ Learn More →        │
└─────────────────────┘  └─────────────────────┘  └─────────────────────┘
┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐
│ [Icon]              │  │ [Icon]              │  │ [Icon]              │
│ LED Lighting        │  │ Lighting            │  │ 24/7 Emergency    │
│ & Retrofits         │  │ Management          │  │ Service           │
│                     │  │ Programs            │  │                     │
│ Energy-efficient    │  │ Comprehensive        │  │ Around-the-clock   │
│ LED upgrades with   │  │ exterior lighting    │  │ emergency          │
│ energy audits &     │  │ management, night    │  │ response for       │
│ rebate assistance.  │  │ audits & flat-rate.  │  │ electrical issues. │
│                     │  │                     │  │                     │
│ Learn More →        │  │ Learn More →        │  │ Learn More →        │
└─────────────────────┘  └─────────────────────┘  └─────────────────────┘
```

**卡片设计**:
- 背景: 白色，带阴影 `shadow-card`
- 边框: 1px solid #E2E5E9
- 圆角: 16px (radius-lg)
- Padding: 32px
- 图标: 48px，使用主色或强调色
- 标题: H3, 24px
- 描述: Body, 16px, 2-3行
- 链接: 主色 + 箭头图标，hover时向右移动
- Hover效果: 卡片轻微上浮(-4px)，阴影加深，边框颜色变为主色

**图标建议**:
- Commercial: Building/Office icon
- Generator: Lightning bolt + shield icon
- EV Charger: Plug + car icon
- LED Lighting: Light bulb icon
- Lighting Management: Sun/moon cycle icon
- Emergency: 24/7 clock icon

---

##### 4. Why Choose Us (为什么选择我们)

**布局**:
- 背景: 主色 #1A3C6E (深蓝色) 或渐变
- 左侧: 内容区 (50%) | 右侧: 图片 (50%)
- 移动端：堆叠

**内容**:
- 小标签: "Why Choose Riverside Electric" (橙色pill标签)
- 标题: "Your Partner for Power & Light" (H2, 白色)
- 描述: "For over 80 years, businesses and homeowners across the Tri-State area have trusted Riverside Electric for reliable, professional electrical services. Here's why:" (Body Large, 白色/80%)

**6个特色列表** (2列 x 3行):
```
┌─────────────────────┐  ┌─────────────────────┐
│ [Icon] 24/7 Service │  │ [Icon] PowerPro     │
│ Available           │  │ Premier Dealer      │
│ Round-the-clock      │  │ Cincinnati's top-    │
│ commercial &         │  │ rated Generac        │
│ generator support.   │  │ dealer.              │
├─────────────────────┤  ├─────────────────────┤
│ [Icon] 80+ Years    │  │ [Icon] 300+ 5-Star  │
│ Experience          │  │ Reviews             │
│ 4th-generation      │  │ Trusted on Google,   │
│ family business.     │  │ Angi & Generac.     │
├─────────────────────┤  ├─────────────────────┤
│ [Icon] Flat-Rate    │  │ [Icon] OH/KY/IN     │
│ Pricing             │  │ Licensed            │
│ Transparent pricing. │  │ Fully licensed in    │
│ No surprises.        │  │ three states.        │
└─────────────────────┘  └─────────────────────┘
```

**每个特色**:
- 图标: 40px, 白色/带圆形背景
- 标题: H4, 白色, 20px
- 描述: Small, 白色/70%

**右侧图片**:
- 展示Riverside电工团队或服务车队的真实照片
- 圆角: 16px
- 可带一层微妙的边框或阴影

---

##### 5. Generator Spotlight (发电机特色专区)

**布局**:
- 背景: 浅灰蓝 #F5F7FA
- 两列: 左侧产品图片 (50%) | 右侧内容 (50%)
- 移动端：堆叠

**内容**:
- 小标签: "Generators" (绿色pill标签，传递环保/能源概念)
- 标题: "Never Feel Powerless" (H2, 使用品牌Slogan)
- 副标题: "Cincinnati's Top-Rated, PowerPro Premier Generac Dealer" (H3, 主色)
- 描述: "PowerPro Premier is the most comprehensive designation in the Generac dealer network. No other dealer in Cincinnati has more 5-star ratings than Riverside Electric." (Body Large)
- 关键数据:
  - "300+" / "5-Star Reviews on Google, Angi & Generac"
  - "PowerPro Premier" / "Top Dealer Designation"
- CTA: "Get a Free Generator Quote" (橙色主按钮) + "Learn More About Generators" (文字链接)

**图片**:
- 展示 Generac 发电机产品照片（高质量、产品级别渲染）
- 或 Riverside 团队安装发电机的现场照片

---

##### 6. Stats & Heritage (数据与传承)

**布局**:
- 全宽，背景: 使用一张纹理图片或深色背景图（旧照片或电工工作场景）+ 深色叠加
- 内容居中

**内容**:
```
                    [Since 1945]
"Built on 80 Years of Trust & Excellence"

        [1945]        [4th Gen]        [3 Cities]        [24/7]
     Founded in     Family-Owned    Serving        Always On
     Cincinnati     & Operated      Cincinnati,    Call
                                 Columbus,      
                                 Indianapolis

"From a single electrician's truck to a full fleet serving 
the Tri-State area — our commitment to excellence hasn't changed."
```

**视觉**:
- 年份 "1945" 和 "2025" 大字体展示，中间用箭头或时间线连接
- 使用黑白/棕色调的旧照片作为背景，与深色叠加层结合，传递历史感
- 文字使用白色
- 底部可加入创始人或家族照片（如果可用）

---

##### 7. Testimonials (客户证言)

**布局**:
- 背景: 白色
- 标题居中
- 3列卡片 (desktop) → 1列 (mobile)
- 或：轮播/滑动组件 (mobile)

**内容**:
- 区块标题: "What Our Customers Say" (H2)
- 显示3条精选评价（来自Google/Angi/Generac）

**示例卡片**:
```
┌─────────────────────┐
│ ★★★★★               │
│                     │
│ "Riverside Electric,│
│  the best in the    │
│  business. We had  │
│  a whole house      │
│  generator installed│
│  and love it!"      │
│                     │
│ — Michael D.        │
│ Google Review       │
└─────────────────────┘
```

**卡片设计**:
- 背景: 白色，带阴影
- 圆角: 16px
- 星星：5颗橙色星
- 引用文字：斜体，Body Large
- 客户名：Bold, H4
- 来源：Small, 灰色

---

##### 8. Blog/Resources (最新资源)

**布局**:
- 背景: #F5F7FA
- 标题 + "View All" 链接
- 3列卡片 (desktop) → 1列 (mobile)

**内容**:
- 标题: "Latest from Our Blog" (H2)
- 展示最新的3篇博客文章
- 每张卡片: 缩略图 + 分类标签 + 标题 + 摘要 + 日期 + "Read More →"

**示例**:
```
[Image: LED lighting retrofit]
[LED Lighting]        ← 标签
Energy Efficient LED 
Retrofits to Modernize 
Your Building
July 1, 2026 | Krista Mahon
Read More →
```

---

##### 9. CTA Section (行动号召)

**布局**:
- 全宽，背景: 深色渐变或主色
- 内容居中，紧凑
- 强烈对比

**内容**:
```
[小标签: "Ready to Get Started?"]
[标题: "Request Your Free Quote Today"]
[描述: "Call (513) 936-0100 or fill out the form and we'll get back to you within 24 hours."]

[      Request Free Quote      ]  [  Call (513) 936-0100  ]
     (橙色主按钮)                    (白色边框按钮)

[Service Areas: Cincinnati, OH | Columbus, OH | Indianapolis, IN]
```

**设计**:
- 按钮使用大尺寸 (padding: 16px 32px)
- 按钮组之间增加间隔
- 底部添加服务区域标签

---

##### 10. Footer (页脚)

**布局**:
- 背景: #0F2547 (最深色)
- 4列 (desktop) → 1列 (mobile)
- 顶部: 公司信息 + 快速链接 + 服务 + 联系
- 底部: 版权 + 法律链接 + 社交图标

**内容**:

**Column 1 - Company Info**:
- Logo (白色版本)
- "Riverside Electric Inc."
- "Trusted electrical contractors since 1945. Serving Cincinnati, Columbus & Indianapolis."
- 社交图标: Facebook, LinkedIn

**Column 2 - Quick Links**:
- Home, About Us, Services, Reviews, Gallery, Blog, Contact, Request Quote

**Column 3 - Services**:
- Commercial Electrical, Generators, EV Chargers, LED Lighting, Lighting Management, Emergency Service

**Column 4 - Contact**:
- **Cincinnati, OH**
- 680 Redna Terrace, Cincinnati, OH 45215
- (513) 936-0100
- **Columbus, OH**
- 3045 Scioto Darby Executive Ct, Ste C, Hilliard, OH 43026
- **Indianapolis, IN**
- 5367 West 86th Street, Indianapolis, IN 46268
- Toll Free: (866) 548-3766
- Email: info@riverside-elec.com
- Hours: 24/7 Emergency Services Available

**Bottom Bar**:
- "© 2026 Riverside Electric Inc. All rights reserved."
- Privacy Policy | Terms of Service | Sitemap
- BBB A+ Logo | Generac PowerPro Premier Logo

**设计**:
- 文字: 白色/80% 用于正文，白色/50% 用于辅助
- 链接: 白色/80%，hover时白色+下划线
- 列标题: 白色，加粗，14px uppercase，带letter-spacing
- 分割线: 1px solid rgba(255,255,255,0.1)
- Logo: 白色/单色版本

---

### 7.2 服务页面 (Services Page)

**布局**: 类似首页的Services Overview，但每个服务有详细展开

**结构**:
1. **Hero**: 标题"Comprehensive Electrical Services" + 简介 + CTA
2. **Service Grid**: 6个服务卡片（同首页设计）
3. **每个服务详情** (可展开/锚点链接):
   - 服务图标 + 标题
   - 详细描述
   - 包含的具体服务列表 (bullet points)
   - 相关图片 (工作场景)
   - CTA: "Request Service" / "Learn More"
4. **Service Area Map**: 展示服务区域 (Cincinnati, Columbus, Indianapolis)
5. **CTA**: 底部行动号召

**服务详情页 (每个服务单独页面)**:
- 如 `/commercial-electrical`, `/generators`, `/ev-chargers` 等
- 结构: Hero + 详情 + 流程/步骤 + 案例展示 + FAQ + CTA
- 包含：该服务包含的具体内容、为什么选Riverside、客户案例、常见问题

---

### 7.3 关于页面 (About Page)

**结构**:
1. **Hero**: "About Riverside Electric" + 品牌故事引言
2. **Our Story**: 历史时间线 (1945 → 1964 → 1994 → 2007 → 现在)
   - 时间线设计：左侧年份，右侧内容，带图片
3. **Our Values**: 4个核心价值观卡片
   - Safety First, Customer Excellence, Family Legacy, Continuous Innovation
4. **Leadership**: 管理团队/家族介绍（如果可用）
5. **Certifications**: BBB A+、Generac PowerPro Premier、三州执照展示
6. **Our Fleet**: 服务车队/设备展示（bucket trucks等）
7. **Community**: 社区参与/本地服务承诺
8. **CTA**: 联系/报价

---

### 7.4 联系页面 (Contact Page)

**结构**:
1. **Hero**: "Get in Touch" + 多渠道联系方式
2. **Contact Info Cards** (3列):
   - **Phone**: (513) 936-0100, Toll-Free: (866) 548-3766, 24/7
   - **Email**: info@riverside-elec.com, sales@riverside-elec.com, service@riverside-elec.com
   - **Office Hours**: 24/7 Emergency Services Available
3. **Location Cards** (3列):
   - Cincinnati, OH (含地图嵌入)
   - Columbus, OH
   - Indianapolis, IN
   - 每个地点：地址、电话、地图链接、导航按钮
4. **Contact Form**:
   - 姓名、电话、邮箱、服务类型（下拉）、消息、地点偏好
   - 提交按钮: "Request a Callback"
   - 隐私声明
5. **Service Area Map**: 嵌入Google Map显示三州服务区域
6. **FAQ**: 常见问题快速回答

---

### 7.5 请求报价页面 (Request Quote Landing Page)

**目的**: 作为广告/营销活动的落地页，提供无干扰的转化体验

**结构**:
1. **Hero**: "Get Your Free Electrical Service Quote" + 简短价值主张
2. **Trust Bar**: 评分、经验、评价数量
3. **Form**: 完整的表单（服务类型、项目描述、时间要求、地点）
4. **Why Riverside**: 3-4个关键优势（带图标）
5. **Social Proof**: 2-3条客户评价
6. **FAQ**: 关于报价流程的常见问题
7. **Contact Info**: 底部联系方式（不离开页面即可获取）

**设计**:
- 去除完整导航，仅保留logo + 电话
- 高对比度CTA
- 表单字段精简，避免流失
- 移动端优化：单页，无滚动，所有内容在首屏

---

### 7.6 博客页面 (Blog Page)

**结构**:
1. **Hero**: "Electrical Tips & Industry Insights" + 简介
2. **Featured Post**: 大图+精选文章
3. **Category Filter**: 分类标签（LED Lighting, Generators, EV Chargers, Commercial, Safety）
4. **Post Grid**: 3列卡片布局
   - 缩略图、标题、摘要、作者、日期、分类
5. **Pagination**: 分页加载
6. **CTA**: 订阅newsletter或Request Service

---

### 7.7 评价页面 (Reviews Page)

**结构**:
1. **Hero**: "Customer Reviews" + 总体评分展示
2. **Rating Summary**:
   - 大评分数字 (4.7/5.0)
   - 星星可视化
   - 703 Reviews
   - 来源分布：Google, Angi, Generac
3. **Filter**: 按服务类型筛选评价
4. **Review Cards**: 3列网格
   - 星级、评论内容、客户名、日期、服务类型、来源平台
5. **CTA**: "Leave a Review" / "Join Our Satisfied Customers"

---

---

## 8. 组件设计规范 (Component Design System)

### 8.1 按钮 (Buttons)

| Variant | Background | Text | Border | Hover | Usage |
|---------|------------|------|--------|-------|-------|
| Primary | #E84627 | #FFFFFF | none | #D13B1F | 主CTA |
| Secondary | transparent | #1A3C6E | 2px #1A3C6E | bg #1A3C6E, text white | 次要操作 |
| Ghost | transparent | #FFFFFF | 2px #FFFFFF | bg white, text #1A3C6E | 深色背景上的按钮 |
| Text Link | transparent | #1A3C6E | none | underline + color #D13B1F | 文字链接 |

**尺寸**:
- Small: padding 8px 16px, font 14px
- Medium: padding 12px 24px, font 16px
- Large: padding 16px 32px, font 18px (Hero CTA)

**圆角**: 4px (radius-sm)

**图标**: 右侧箭头，hover时右移4px

---

### 8.2 卡片 (Cards)

**标准卡片**:
- 背景: #FFFFFF
- 边框: 1px solid #E2E5E9
- 圆角: 16px
- 阴影: shadow-card
- Padding: 32px
- Hover: translateY(-4px), shadow-lg, border-color → #1A3C6E

**深色卡片**:
- 背景: #0F2547
- 文字: 白色
- 圆角: 16px
- Padding: 32px

**图片卡片**:
- 顶部图片 (圆角16px顶部)
- 下方内容区域
- 图片高度: 200px (object-fit: cover)

---

### 8.3 表单 (Forms)

**输入框**:
- 高度: 48px
- 背景: #FFFFFF
- 边框: 1px solid #E2E5E9
- 圆角: 8px
- Focus: border-color #1A3C6E, box-shadow: 0 0 0 3px rgba(26, 60, 110, 0.1)
- 标签: 14px, #5A5A6E, 在输入框上方
- 错误: 边框 #E84627, 下方红色提示文字

**下拉框**:
- 同输入框样式
- 右侧下拉箭头

**文本域**:
- 同输入框，最小高度 120px

**复选框/单选**:
- 自定义样式，选中时 #1A3C6E 背景

**表单布局**:
- 2列网格 (desktop) / 1列 (mobile)
- 标签在上，输入框在下
- 间距: 24px between fields

---

### 8.4 导航 (Navigation)

**Desktop Navigation**:
- 背景: 白色 (顶部) / 白色 + 阴影 (滚动后sticky)
- 高度: 80px
- Logo: 左侧
- 导航链接: 居中，16px, #1A1A2E
- 电话: 右侧，带电话图标
- CTA: 最右侧，橙色按钮

**Hover**: 链接下方出现2px橙色下划线，从中心向两边展开
**Active**: 当前页面链接加粗 + 橙色下划线

**Mobile Navigation**:
- 汉堡菜单：三线图标，点击变X
- 全屏覆盖：白色背景，从右侧滑入
- 菜单项：24px, 居中，每个之间有分割线
- 子菜单：点击展开，左侧缩进
- 底部：电话按钮 + Request Service按钮
- 关闭按钮：右上角X

**Sticky Behavior**:
- 滚动超过100px后，导航变为sticky
- 添加底部阴影 `shadow-lg`
- 可选：缩小高度到64px

---

### 8.5 标签/徽章 (Tags/Badges)

| Type | Background | Text | Usage |
|------|------------|------|-------|
| Category | #E8F0FE | #1A3C6E | 博客分类、服务标签 |
| Status | #FFF0EB | #E84627 | 紧急服务、新内容 |
| Certification | #F0F9F4 | #2E8B57 | 认证、绿色能源 |
| Year | #1A3C6E | #FFFFFF | 1945、历史年份标记 |

**样式**:
- 圆角: 100px (pill shape)
- Padding: 4px 12px (small) / 6px 16px (medium)
- Font: 12px / 14px, 500 weight
- 可选：带图标前缀

---

### 8.6 图标系统 (Iconography)

- **图标风格**: 线性 (outline) + 实心 (fill) 混合，2px 线宽
- **图标来源**: Lucide React / Phosphor Icons (开源，一致性强)
- **图标尺寸**: 24px (导航/内联), 32px (卡片), 48px (特色/功能), 64px (hero)
- **图标颜色**: 跟随上下文（主色、强调色、白色、灰色）

**核心图标清单**:
- 服务: Zap (电气), Shield (安全), Truck (服务), Sun (照明), Battery (储能), Plug (充电), Clock (24/7), Building (商业), Home (住宅)
- 通用: Phone, Mail, MapPin, ChevronRight, Star, Check, Menu, X, ArrowRight, Calendar, User, ExternalLink
- 信任: Award, Certificate, BadgeCheck, ThumbsUp

---

---

## 9. 交互与动画 (Interactions & Animations)

### 9.1 动画理念
- **克制**: 动画是为了引导注意力、提供反馈，而不是炫技
- **流畅**: 使用 ease-out 曲线，让动画感觉自然、响应式
- **性能**: 使用 CSS transforms 和 opacity，避免触发重排的动画
- **无障碍**: 尊重 `prefers-reduced-motion` 设置

### 9.2 页面级动画

**页面加载**:
- Hero 内容从下方淡入 (fade-in + translateY(20px) → 0)，持续 600ms，ease-out
- 元素依次出现，间隔 100ms (stagger)
- 导航在内容之前先出现

**滚动触发动画** (IntersectionObserver):
- 内容区块从下方淡入 (fade-in + translateY(30px) → 0)，持续 500ms
- 卡片依次出现，stagger 100ms
- 数字统计 (80+, 300+) 使用计数动画 (从0到目标值，持续 1.5s)
- 触发阈值: 元素进入视口20%时触发

### 9.3 组件级动画

**按钮 Hover**:
- 背景色过渡: 200ms ease
- 箭头图标右移: 4px, 200ms ease
- 轻微阴影增强

**卡片 Hover**:
- 上浮: translateY(-4px), 200ms ease
- 阴影加深: 200ms ease
- 边框颜色变化: 200ms ease

**导航链接 Hover**:
- 下划线从中心展开: scaleX(0) → scaleX(1), 200ms ease

**下拉菜单**:
- 展开: opacity 0→1, translateY(-8px) → 0, 200ms ease-out
- 箭头旋转 180deg

**移动端菜单**:
- 从右侧滑入: translateX(100%) → translateX(0), 300ms ease-out
- 遮罩层: opacity 0 → 0.5, 300ms ease

**图片加载**:
- 图片加载时从模糊到清晰 (blur-up effect)
- 或：淡入效果 opacity 0 → 1, 400ms ease

### 9.4 微交互 (Micro-interactions)

**表单**:
- Focus: 边框颜色变化 + 阴影环出现, 150ms
- 输入时标签上浮 (floating label) - 可选
- 验证通过: 绿色对勾图标淡入
- 验证失败: 红色边框 + 抖动 (shake), 300ms

**加载状态**:
- 按钮提交时显示spinner，文字变为 "Submitting..."
- 页面加载时骨架屏 (skeleton) - 用于博客/评价列表

---

## 10. 响应式设计 (Responsive Design)

### 10.1 断点 (Breakpoints)
| Name | Width | Target |
|------|-------|--------|
| sm | 640px | 大手机 |
| md | 768px | 平板竖屏 |
| lg | 1024px | 平板横屏/小桌面 |
| xl | 1280px | 标准桌面 |
| 2xl | 1536px | 大桌面 |

### 10.2 各断点调整

**Mobile (< 768px)**:
- 导航: 汉堡菜单，底部固定CTA条
- Hero: 堆叠布局，标题36px，表单移至内容下方或折叠
- 卡片: 1列，全宽
- 信任条: 2x2网格
- 页脚: 单列堆叠，手风琴展开
- 间距: 减少40%
- 按钮: 全宽

**Tablet (768px - 1024px)**:
- 导航: 保留主导航，但可能简化
- Hero: 保持双列但比例调整 (55/45)
- 卡片: 2列
- 信任条: 4列水平排列
- 间距: 减少20%

**Desktop (1024px+)**:
- 完整布局，如设计文档所示
- 最大容器宽度: 1280px
- 导航完整显示
- 卡片: 3列

### 10.3 触摸优化
- 按钮最小触摸区域: 44px x 44px
- 卡片点击区域全卡片
- 轮播/滑动支持触摸手势
- 表单输入框在聚焦时自动放大 (iOS适配)

---

## 11. 内容策略 (Content Strategy)

### 11.1 内容优先级
1. **高优先级** (必须首屏可见):
   - 品牌标识 + Slogan
   - 核心服务 (6大类)
   - 电话号码 + 主要CTA
   - 信任信号 (评分、年数、评价数)

2. **中优先级** (前3屏内):
   - 为什么选择我们
   - 服务详情
   - 客户证言
   - 品牌故事/传承

3. **低优先级** (后续滚动或次级页面):
   - 博客文章
   - 详细的服务流程
   - 团队介绍
   - 详细的公司历史

### 11.2 内容语调
- **专业但亲和**: 展示专业性但不失人情味（家族企业故事）
- **行动导向**: 每个服务区块都指向明确的下一步（Request Quote / Call）
- **本地化**: 强调 "Cincinnati", "Columbus", "Indianapolis" 以支持本地SEO
- **信任感**: 使用数据、认证、客户评价来建立信任

### 11.3 图片策略
- **真实照片**: 优先使用Riverside实际的工作场景照片（服务车辆、电工作业、发电机安装、LED改造前后对比）
- **人物照片**: 使用真实员工照片（而非库存图），增强信任感
- **产品照片**: Generac发电机、LED灯具、EV充电桩等高质量产品图
- **本地场景**: 辛辛那提/哥伦布/印第安纳波利斯的地标或街景，增强本地关联
- **图片处理**: 统一色调（偏蓝/暖色平衡），可加微妙暗角提升质感

### 11.4 SEO 内容建议
- 每个服务页面包含: 标题(H1) + 描述 + 服务列表 + 地点提及 + FAQ
- 使用 Schema.org LocalBusiness 标记
- 地址/电话在所有页面保持一致 (NAP consistency)
- 页面加载速度优化（图片压缩、代码分割）
- 移动端优先索引

---

## 12. 技术建议 (Technical Notes)

### 12.1 技术栈建议
- **框架**: Next.js (React) — 支持SSR/SSG，利于SEO，性能优秀
- **样式**: Tailwind CSS — 快速开发，设计系统一致性好
- **动画**: Framer Motion — 声明式动画，React生态原生
- **图标**: Lucide React — 轻量，一致性强
- **表单**: React Hook Form + Zod — 表单验证
- **图片**: Next.js Image组件 — 自动优化、懒加载、响应式
- **地图**: Google Maps Embed API 或 Leaflet — 服务区域展示
- **CMS**: 可选 Contentful/Prismic 或 Sanity — 博客内容管理
- **分析**: Google Analytics 4 + Google Search Console

### 12.2 性能目标
- **Lighthouse Performance**: 90+
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **TTI (Time to Interactive)**: < 3.5s

### 12.3 关键实现要点
- 使用 `next/image` 优化所有图片（WebP/AVIF格式，响应式尺寸）
- 字体预加载：Inter 和 DM Sans 的关键字重
- 代码分割：按页面路由自动分割
- 预加载关键页面：从首页预加载 `/services` 和 `/contact`
- 服务端渲染：首页和关键页面使用SSG，博客/评价使用ISR
- 安全性：HTTPS，Content Security Policy，表单CSRF保护

---

## 13. 设计交付清单 (Design Deliverables Checklist)

### 13.1 设计文件 (Ardot)
- [ ] 首页 (Homepage) - 完整10个区块
- [ ] 服务总览页 (Services)
- [ ] 服务详情页 (Service Detail) - 任选一个作为模板
- [ ] 关于页面 (About)
- [ ] 联系页面 (Contact)
- [ ] 请求报价页面 (Request Quote)
- [ ] 博客列表页 (Blog)
- [ ] 博客详情页 (Blog Post)
- [ ] 评价页面 (Reviews)
- [ ] 导航组件 (Desktop + Mobile)
- [ ] 页脚组件 (Footer)
- [ ] 卡片组件 (多种变体)
- [ ] 按钮组件 (多种变体)
- [ ] 表单组件 (输入框、下拉框、文本域)

### 13.2 代码实现 (Next.js + Tailwind)
- [ ] 项目初始化 (Next.js 14 + App Router)
- [ ] Tailwind CSS 配置 (自定义设计系统token)
- [ ] 全局布局 (Layout: Navigation + Footer)
- [ ] 首页实现 (所有区块)
- [ ] 服务页面实现
- [ ] 关于页面实现
- [ ] 联系页面实现 (含表单)
- [ ] 博客系统实现 (列表+详情)
- [ ] 响应式适配 (所有断点)
- [ ] 动画实现 (Framer Motion)
- [ ] 表单验证与提交
- [ ] SEO 优化 (Meta标签、结构化数据)
- [ ] 性能优化 (图片、字体、代码分割)
- [ ] 部署 (Vercel/Netlify)

---

## 14. 确认问题 (Questions for Confirmation)

以下问题需要确认，以确保设计方向准确：

1. **语言**: 网站是否保持英文，还是你需要中英双语版本？当前分析假设保持英文。

2. **品牌色彩**: 是否接受我提出的新配色方案（深蓝+橙红），还是希望保持现有品牌色（现有深蓝色+红色）？可以基于现有颜色进行优化微调。

3. **图片资源**: 是否有 Riverside 的原创照片（服务车辆、团队、工作场景）可以替代模板图片？这些真实照片对建立信任非常重要。

4. **设计范围**: 你是否需要完整实现所有页面（Services, About, Contact, Blog, Reviews），还是优先实现首页+联系页面作为MVP？

5. **功能需求**: 联系表单是否需要真实提交功能（接入邮件服务如SendGrid/Resend），还是仅前端展示？

---

## 15. 附录 (Appendix)

### 15.1 现有品牌资产清单
- **Logo**: Riverside Electric Inc.（文字+图标）
- **Slogan**: "Never Feel Powerless"
- **Mission**: "Exceeding Customer Expectations By Providing World-Class Services Through Lighting & Power Solutions"
- **认证**: BBB A+、Generac PowerPro Premier、三州执照 (OH/KY/IN)
- **品牌**: Generac, Sylvania, TCP Lighting, GE Lighting, Lithonia Lighting, Zlight Technology, Keystone Technologies
- **支付**: Amex, Cash, Check, Discover, MasterCard, Visa

### 15.2 联系信息完整汇总
| 地点 | 地址 | 电话 | 邮箱 |
|------|------|------|------|
| Cincinnati, OH | 680 Redna Terrace, Cincinnati, OH 45215 | (513) 936-0100 | info@riverside-elec.com |
| Columbus, OH | 3045 Scioto Darby Executive Ct, Ste C, Hilliard, OH 43026 | (866) 548-3766 | sales@riverside-elec.com |
| Indianapolis, IN | 5367 West 86th Street, Indianapolis, IN 46268 | (866) 548-3766 | service@riverside-elec.com |

**通用**: Toll-Free (866) 548-3766 | Fax (513) 936-0014 | 24/7 Emergency Service

### 15.3 导航完整结构
```
Home
├── Commercial Electrical Services
│   ├── Commercial Electrical Contractor
│   ├── 24-Hour Commercial Electricians
│   ├── Commercial LED Lighting and Retrofits
│   ├── Commercial Lighting Management Programs
│   └── Outdoor Lighting
├── Generators
│   ├── Generator Installation
│   ├── Generator Service and Repair
│   ├── Remote Generator Monitoring and Warranties
│   ├── Affordable Home Standby Generators
│   └── Generac Generators
├── EV Chargers
├── Gallery
├── Reviews
├── Blog
├── About
├── Contact
│   ├── Cincinnati, OH
│   ├── Columbus, OH
│   └── Indianapolis, IN
└── Locations
```

### 15.4 博客文章清单 (最新10篇)
1. Energy Efficient LED Retrofits to Modernize Your Existing Building Lighting (2026-07-01)
2. Expert Commercial LED Repair Services for Bright and Efficient Workspaces (2026-06-13)
3. Features of Top-Quality Home Standby Generators for 2026 (2026-06-04)
4. Outdoor Lighting Repair: Switching to Smart, Energy-Efficient Lighting Solutions (2026-05-28)
5. How to Vet Commercial Electrical Services for Large-Scale Facility Upgrades (2026-05-27)
6. Commercial Electrical Service Provider: Top Electrical Upgrades in 2026 (2026-05-12)
7. The Dark Side of Neglect: Why Broken Parking Lot Lights Are a Liability Nightmare (2026-05-05)
8. Unpacking the Surge in Electrical Services (2026-05-04)
9. Debunking Seven Common Myths About Automatic Standby Generators (2026-01-21)
10. What Property Managers Should Know About Generator Installation (2025-12-26)

---

*文档版本: 1.0*
*生成日期: 2026-07-20*
*作者: WorkBuddy Intelligent Design Assistant*
*状态: 待确认 (Pending Confirmation)*
