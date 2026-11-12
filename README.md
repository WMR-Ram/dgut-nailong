# 东莞奶龙理工大学 · 整活主页

纯静态、零后端的 **奶龙主题（Parody）首页**，托管在 **GitHub Pages**，
绑定域名 `东莞奶龙理工.top`（Punycode：`xn--xhqq0zkqdo52ai0r8l2b.top`）。
页面把真实的 **东莞理工学院（www.dgut.edu.cn）** 作为导流终点：学校简介、校训、数据、新闻与链接均摘自其官网。
本网站使用qwen-3.8-flash辅助建设。
> ⚠️ 本站为网友自制整活页面，与东莞理工学院、动画《奶龙》及其版权方**均无任何官方关联**，不代表任何机构立场。

## 图片来源与授权
站内奶蛙形象来自公开的社区素材仓库 **「奶蛙艺术圣殿」**（MIT License，官方说明「素材免费拿，快乐不限量」）：

- 上游仓库：<https://github.com/Nailong-Studio/wallpaper>（`emotes/` 表情包、`laugh-gallery/` 大笑藏馆、`classic/` 名画再创作）
- **本站现为自托管**：图片已下载并转为 WebP 放在 `assets/frog/`，不再外链 CDN。
  早期使用 `cdn.jsdelivr.net/gh/...` 外链，实测该链路会 `301` 跳转到 `raw.githubusercontent.com`（大陆不可达），
  且上游改名/删除导致 5 张图破链，故改为随仓库发布。
- **奶蛙**是网友把动画角色「奶龙」与青蛙二次融合而成的网络二创抽象形象，与官方《奶龙》并非同一角色。
- 授权：遵循上游 **MIT License** 并保留来源署名（署名见页脚与「关于本站」）。
  若你认为某张图仍需下架，请提到本仓库 Issue，会直接删除对应文件。

> 版权说明：奶龙为受版权保护的动画 IP，本站不主张对其原型的任何权利；本站为戏仿/评论性质的粉丝整活站。

## 目录结构
```
dongguan-nailong/
├── index.html         # 首页
├── 404.html           # 自定义 404（奶蛙也找不到这一页）
├── styles.css         # 奶龙主题样式（断点 960 / 760 / 380 + 移动端底栏）
├── script.js          # 数字滚动 / 表情包形态切换 / 弹窗（零依赖，无内联 JS）
├── robots.txt         # 爬虫规则
├── sitemap.xml        # 站点地图
├── favicon.ico        # 多尺寸站点图标
├── CNAME              # 自定义域名（写 punycode）
├── .nojekyll          # 关闭 Jekyll
├── DEPLOY-NOTES.md    # 部署与图片维护说明
├── README.md
├── assets/frog/       # 全站图片（WebP，自托管）
└── assets/img/        # 旧的本地备份图，页面已不引用
```

## 反馈
对网站的建议与意见可以提交到 [Issue](https://github.com/WMR-Ram/dgut-nailong/issues)。
