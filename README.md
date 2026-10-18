# 东莞奶龙理工大学 · 整活主页

纯静态、零后端的 **奶龙主题（Parody）首页**，托管在 **GitHub Pages**，
绑定域名 `东莞奶龙理工.xyz`（Punycode：`xn--xhqq0zkqdo52ai0r8l2b.xyz`）。
页面把真实的 **东莞理工学院（www.dgut.edu.cn）** 作为导流终点：学校简介、校训、数据、新闻与链接均摘自其官网。

> ⚠️ 本站为网友自制整活页面，与东莞理工学院、动画《奶龙》及其版权方**均无任何官方关联**，不代表任何机构立场。

## 图片来源（非 AI 生成，均取自互联网）
站内所有奶蛙图片来自公开的社区素材仓库 **「奶蛙艺术圣殿」素材仓库**（MIT License，官方说明「素材免费拿，快乐不限量」）：
- 仓库：<https://github.com/Nailong-Studio/wallpaper>
- 分支/目录：`emotes/`（表情包）、`laugh-gallery/`（大笑藏馆）、`classic/`（名画再创作）
- 说明：站内图片均为 **jsDelivr CDN 外链（hotlink）** 引用上述仓库（`https://cdn.jsdelivr.net/gh/Nailong-Studio/wallpaper@main/...`，失败自动切换 `testingcf` 镜像），本仓库不再依赖本地副本。
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
└── assets/img/        # 历史备份图片（页面已全部改为 jsDelivr 外链，不再引用）
    ├── frog-hero.png frog-biglaugh.png frog-pointlaugh.png
    ├── meme-laugh / -think / -confused / -pout / -peace / -heart / -blush / -point .png
    └── art-freedom / -nightwatch / -creation / -parting .jpg   # 名画再创作（自由引导奶蛙 / 奶蛙夜巡 / 创造奶蛙 / 奶西分海）
```


9c209b (奶蛙图片改为 jsDelivr CDN 外链；表情包扩充至 20 个（含 GIF），加镜像兜底)

##对网站的建议与意见可以提交到Issue
