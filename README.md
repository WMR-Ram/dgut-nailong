# 东莞奶龙理工大学 · 整活主页 🐸

纯静态、零后端的 **奶龙 / 奶蛙主题恶搞（Parody）首页**，托管在 **GitHub Pages**，
绑定域名 `东莞奶龙理工.xyz`（Punycode：`xn--xhqq0zkqdo52ai0r8l2b.xyz`）。
页面把真实的 **东莞理工学院（www.dgut.edu.cn）** 作为导流终点：学校简介、校训、数据、新闻与链接均摘自其官网。

> ⚠️ 本站为网友自制整活页面，与东莞理工学院、动画《奶龙》及其版权方**均无任何官方关联**，不代表任何机构立场。

## 图片来源（非 AI 生成，均取自互联网）
站内所有奶蛙图片来自公开的社区素材仓库 **「奶蛙艺术圣殿」素材仓库**（MIT License，官方说明「素材免费拿，快乐不限量」）：
- 仓库：<https://github.com/Nailong-Studio/wallpaper>
- 分支/目录：`emotes/`（表情包）、`laugh-gallery/`（大笑藏馆）、`classic/`（名画再创作）
- 说明：**奶蛙**是网友用 AI 把动画角色「奶龙」与青蛙二次融合而成的**网络二创抽象形象**，与官方《奶龙》并非同一角色。
- 授权：遵循其 **MIT License**，保留来源署名；若你认为某图仍需下架，请把问题发到本仓库 Issue。

> 版权说明：奶龙为受版权保护的动画 IP，本站不主张对其原型的任何权利；奶蛙二创素材遵循来源仓库的开源许可使用。本页面为戏仿/评论性质的粉丝整活站。

## 目录结构
```
dongguan-nailong/
├── index.html         # 首页
├── styles.css         # 奶龙主题样式
├── script.js          # 数字滚动 / 表情包形态切换 / 弹窗（零依赖）
├── CNAME              # 自定义域名（写 punycode）
├── .nojekyll          # 关闭 Jekyll
├── README.md
└── assets/img/        # 来自互联网的真实奶蛙图（已本地化，避免防盗链/墙内不稳定）
    ├── frog-hero.png frog-biglaugh.png frog-pointlaugh.png
    ├── meme-laugh / -think / -confused / -pout / -peace / -heart / -blush / -point .png
    └── art-freedom / -nightwatch / -creation / -parting .jpg   # 名画再创作（自由引导奶蛙 / 奶蛙夜巡 / 创造奶蛙 / 奶西分海）
```

## 本地预览
在本目录任选一种方式，然后浏览器打开 `http://localhost:8000`：
```bash
python -m http.server 8000     # 或
npx serve .
```
（直接双击 `index.html` 也能看，图片是本地路径不受影响；建议起个服务。）

## 部署到 GitHub Pages
1. 新建仓库（如 `dongguan-nailong-site`），把本目录所有文件推上去：
   ```bash
   cd dongguan-nailong
   git init && git add . && git commit -m "feat: 东莞奶龙理工整活主页"
   git branch -M main
   git remote add origin https://github.com/<你的用户名>/dongguan-nailong-site.git
   git push -u origin main
   ```
2. **Settings → Pages**：Source 选 `Deploy from a branch`，Branch 选 `main` / `/ (root)`，保存。
3. 仓库根已有 `CNAME`，Pages 会自动识别自定义域名。

## 绑定域名 东莞奶龙理工.xyz
1. 在域名 DNS 添加记录（中文 IDN 在 DNS/证书里用 **Punycode** `xn--xhqq0zkqdo52ai0r8l2b.xyz`）：
   - 根域（@）：`A` 记录 → `185.199.108.153 / 109.153 / 110.153 / 111.153`
   - 或用 `www`：`CNAME` → `<你的用户名>.github.io`
2. GitHub **Settings → Pages → Custom domain** 填 `xn--xhqq0zkqdo52ai0r8l2b.xyz`，勾 **Enforce HTTPS**（等证书签发）。
3. 生效有赖 DNS 传播（分钟到数小时不等）。

## 换图 / 自定义
- 想换某张图：从上面那个仓库 `emotes/`、`laugh-gallery/`、`classic/` 里挑别的 `.png/.jpg`，
  下载改名放进 `assets/img/`，改 `index.html` / `script.js`（`FROG_IMGS` 数组）里的文件名即可。
- 学校数据、新闻、链接都写死在 `index.html` 文本里，直接编辑。
- 若要“打开即跳转官网”的过场页版本：在 `script.js` 末尾加
  `// setTimeout(()=>location.replace('https://www.dgut.edu.cn'), 2600);`
  当前版本**刻意不自动跳转**，保留完整主页。
