# 部署说明 · dgut-nailong

纯静态站，GitHub Pages 直接从 `main` 分支根目录发布，无构建步骤。

## 线上信息
- 仓库：https://github.com/WMR-Ram/dgut-nailong （public，main 分支）
- 域名：`东莞奶龙理工.top` → Punycode `xn--xhqq0zkqdo52ai0r8l2b.top`（写在 `CNAME`）
- Pages 来源：main 分支 / (root)，`.nojekyll` 关闭 Jekyll 处理

## DNS（注册商后台）
```
A     @     185.199.108.153 / 109.153 / 110.153 / 111.153
AAAA  @     2606:50c0:8000::153 / 8001::153 / 8002::153 / 8003::153
CNAME www   WMR-Ram.github.io.
```
记录生效后 GitHub 会自动签发证书（约 5–30 分钟），随后在 Settings → Pages 勾选 Enforce HTTPS。
证书未签发时过早勾选 Enforce HTTPS，API 会返回 404，属正常现象。

## 目录结构
```
index.html          首页
styles.css          样式（断点 960 / 760 / 380 + 移动端底栏）
script.js           交互（零依赖、无内联 JS）
404.html            自定义 404
robots.txt          sitemap 入口
sitemap.xml         站点地图
favicon.ico         多尺寸图标（16/32/48）
assets/frog/        全站图片，WebP 自托管（约 2.1 MB）
assets/img/         旧的本地备份图，页面已不引用
```

## 图片维护
站内奶蛙图早期用 `cdn.jsdelivr.net/gh/Nailong-Studio/wallpaper` 外链，实测该 CDN 会
`301 → raw.githubusercontent.com`（大陆不可达），且上游已删改过 5 个文件名导致破图，
因此全部改为自托管。新增图片时：

1. 转成 WebP（单张控制在 100 KB 内，动图 ≤ 500 KB）；
2. 放进 `assets/frog/`，文件名用 ASCII；
3. `<img>` 补 `loading="lazy"` 与 `width`/`height`；首屏图例外，用 `fetchpriority="high"`。

## 待办
- [ ] 首页与「奶龙概况」的数据（建校年份、学院数、师生数、就业率）每年核对一次官网原文
- [ ] 校园资讯 4 条为摘编，会过期，需定期替换或改成"最近动态"外链
- [ ] ⚠️ 三处待核：连续 8 年应用型大学榜首 / 博士专任教师 999 人（占比 74%）/ 杨振宁先生名誉校长 1993–2025 表述
