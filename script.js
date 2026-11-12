/* =========================================================
   东莞奶龙理工大学 · 整活主页脚本（纯静态、零依赖、图片自托管）
   ========================================================= */

/* 图片与台词一一对应：点击「形态切换」时，说的话跟着图一起换 */
var FROGS = [
  ['assets/frog/frog-hero.webp',     '学而不思则罔，托腮沉思中 🤔'],
  ['assets/frog/frog-grin.webp',     '哈哈哈今天也是元气满满的一天 🐸'],
  ['assets/frog/frog-chin.webp',     '这题我不会，但我很会装 🤔'],
  ['assets/frog/frog-confused.webp', '啊？这？不可能！🤯'],
  ['assets/frog/frog-pout.webp',     '哼，本蛙生气了 😤'],
  ['assets/frog/frog-peace.webp',    '比个耶，考试全都会 ✌️'],
  ['assets/frog/frog-heart.webp',    '比心！爱莞工 💛'],
  ['assets/frog/frog-blush.webp',    '被夸了，脸红 🥰'],
  ['assets/frog/frog-point.webp',    '说的就是你，还没学习 👉'],
  ['assets/frog/frog-annoyed.webp',  '论文二稿？还是三稿？😕'],
  ['assets/frog/frog-side.webp',     '在看手机，没在摸鱼 🫣'],
  ['assets/frog/frog-roll.webp',     '早八起不来，就地一滚 🌀'],
  ['assets/frog/frog-wave.webp',     '同学，今天也辛苦了 👋'],
  ['assets/frog/frog-belly.webp',    '卷不动了，本蛙先躺为敬 🛋️'],
  ['assets/frog/gh-holdhead.webp',   '抱头狂笑停不下来 😂'],
  ['assets/frog/gh-point.webp',      '就你，快去看官网 👆'],
  ['assets/frog/gh-peace.webp',      '查到绩点了！全 A！🎉'],
  ['assets/frog/gh-squint.webp',     '嘿嘿，被表扬了 😁'],
  ['assets/frog/gh-hands.webp',      '挂科的代价，你想过吗 😳'],
  ['assets/frog/gh-jump.webp',       '本蛙今日营业中 🈺']
];

/* ---------- 数字滚动统计 ---------- */
function animateCounts() {
  var nums = document.querySelectorAll('.stat .num[data-count]');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target, target = +el.dataset.count, start = null, dur = 1300;
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * target).toLocaleString('en-US');
        if (p < 1) requestAnimationFrame(step); else el.textContent = target.toLocaleString('en-US');
      }
      requestAnimationFrame(step);
      io.unobserve(el);
    });
  }, { threshold: 0.4 });
  nums.forEach(function (n) { io.observe(n); });
}

/* ---------- 跑马灯无缝循环 ----------
   文字条复制一份即可；动图条在触屏上只留一份并停掉自动滚动，
   否则十几张动图会持续解码，白吃电量和流量。 */
var isTouch = window.matchMedia('(hover: none)').matches;
function doubleTrack(el) {
  [].slice.call(el.children).forEach(function (k) { el.appendChild(k.cloneNode(true)); });
}
function loopMarquee() {
  var t = document.getElementById('marquee');
  if (t) doubleTrack(t);
  var g = document.getElementById('gifMarquee');
  if (!g) return;
  if (isTouch) g.parentElement.classList.add('swipe');
  else doubleTrack(g);
}

/* ---------- 触屏：点一下把动图定格，再点恢复 ---------- */
function initGifTapPause() {
  if (!isTouch) return;
  document.querySelectorAll('.gm-track img, .laugh-strip img').forEach(function (im) {
    im.addEventListener('click', function () {
      if (im.dataset.paused === '1') {
        im.src = im.dataset.still;
        delete im.dataset.paused;
        delete im.dataset.still;
        return;
      }
      if (!im.naturalWidth) return;
      var c = document.createElement('canvas');
      c.width = im.naturalWidth;
      c.height = im.naturalHeight;
      c.getContext('2d').drawImage(im, 0, 0);
      im.dataset.still = im.src;
      im.src = c.toDataURL('image/webp');
      im.dataset.paused = '1';
    });
  });
}

/* ---------- 奶蛙狂笑计数 ---------- */
function laughTicker() {
  var el = document.getElementById('laughCount'); if (!el) return;
  var n = 999; el.textContent = n.toLocaleString('en-US');
  setInterval(function () {
    if (document.hidden) return;
    n += 1 + Math.floor(Math.random() * 4);
    el.textContent = n.toLocaleString('en-US');
  }, 1500);
}

/* ---------- 表情包：点击「形态切换」换图 + 冒泡说话 ---------- */
function initMemes() {
  var grid = document.getElementById('memeGrid'); if (!grid) return;
  grid.querySelectorAll('.meme').forEach(function (m, i) {
    m.setAttribute('role', 'button');
    m.tabIndex = 0;
    var img = m.querySelector('.box img');
    /* 从当前显示的那张图接着往下换，否则首点会原地不动 */
    var slug = img ? img.src.replace(/^.*\/([a-z0-9-]+)\.webp.*$/, '$1') : '';
    var idx = FROGS.findIndex(function (f) { return f[0].indexOf('/' + slug + '.webp') >= 0; });
    if (idx < 0) idx = i - 1;
    function activate() {
      idx = (idx + 1) % FROGS.length;
      if (img) img.src = FROGS[idx][0];
      m.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(1.1) rotate(-3deg)' }, { transform: 'scale(1)' }],
        { duration: 400, easing: 'ease-out' }
      );
      say('🐸 ' + FROGS[idx][1]);
    }
    m.addEventListener('click', activate);
    m.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); activate(); }
    });
  });
}

/* ---------- 轻量气泡 ---------- */
var bubbleTimer;
function say(text) {
  var b = document.getElementById('naiwaBubble');
  if (!b) {
    b = document.createElement('div');
    b.id = 'naiwaBubble';
    b.setAttribute('role', 'status');
    b.style.cssText = 'position:fixed;left:50%;bottom:28px;transform:translateX(-50%) translateY(20px);background:#fff;color:#2a2622;padding:12px 22px;border-radius:999px;font-weight:700;font-size:15px;box-shadow:0 12px 30px rgba(0,0,0,.25);border:3px solid #ffcf33;z-index:1200;opacity:0;transition:.28s;max-width:88vw;text-align:center;';
    document.body.appendChild(b);
  }
  b.textContent = text;
  requestAnimationFrame(function () { b.style.opacity = '1'; b.style.transform = 'translateX(-50%) translateY(0)'; });
  clearTimeout(bubbleTimer);
  bubbleTimer = setTimeout(function () { b.style.opacity = '0'; b.style.transform = 'translateX(-50%) translateY(20px)'; }, 2200);
}

/* ---------- 弹窗：打开时接管焦点，关闭时还给触发元素 ---------- */
var aboutOpener = null;
function openAbout(e) {
  var mask = document.getElementById('aboutModal');
  aboutOpener = (e && e.currentTarget) || document.activeElement;
  mask.classList.add('on');
  mask.querySelector('.close').focus();
}
function closeAbout() {
  var mask = document.getElementById('aboutModal');
  if (!mask.classList.contains('on')) return;
  mask.classList.remove('on');
  if (aboutOpener && aboutOpener.focus) aboutOpener.focus();
}
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAbout(); });

/* ---------- 官网入口点击提示（不强制跳转） ---------- */
function jumpTo() { say('🐸 正在为你打开东莞理工学院官网 www.dgut.edu.cn …'); }

/* ---------- 交互绑定：HTML 里不写内联 JS ---------- */
function initUiHooks() {
  document.querySelectorAll('[data-about]').forEach(function (b) {
    b.addEventListener('click', openAbout);
  });
  var mask = document.querySelector('[data-about-mask]');
  if (mask) mask.addEventListener('click', function (e) { if (e.target === mask) closeAbout(); });
  var x = document.querySelector('.modal .close');
  if (x) x.addEventListener('click', closeAbout);
  // 所有通往 dgut 官网的新窗口都提示一句，并显式切断 opener
  document.querySelectorAll('a[target="_blank"]').forEach(function (a) {
    a.rel = (a.rel.indexOf('noopener') < 0 ? 'noopener ' : '') + a.rel;
    if (/dgut\.edu\.cn/.test(a.href)) a.addEventListener('click', jumpTo);
  });
}

/* ---------- 移动端菜单 ---------- */
function initMobileMenu() {
  var menu = document.getElementById('menu'); if (!menu) return;
  var burger = document.querySelector('.burger');
  if (burger) {
    burger.setAttribute('aria-controls', 'menu');
    burger.setAttribute('aria-expanded', 'false');
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  menu.querySelectorAll('.menu > li > a').forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (window.innerWidth > 960) return;
      var li = a.parentElement;
      if (li.querySelector('.sub') && !li.classList.contains('open')) { e.preventDefault(); li.classList.add('open'); }
    });
  });
}

/* ---------- 移动端底栏高亮（scroll spy） ---------- */
function initTabbar() {
  var bar = document.querySelector('.tabbar'); if (!bar) return;
  var links = [].slice.call(bar.querySelectorAll('a[href^="#"]'));
  var map = {};
  links.forEach(function (a) { var id = a.getAttribute('href').slice(1); var sec = document.getElementById(id); if (sec) map[id] = a; });
  function onScroll() {
    var y = window.scrollY + innerHeight * 0.4, cur = null;
    Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s.offsetTop <= y) cur = id; });
    links.forEach(function (a) { a.classList.toggle('active', map[cur] === a); });
  }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
}

document.addEventListener('DOMContentLoaded', function () {
  animateCounts(); loopMarquee(); laughTicker(); initMemes(); initMobileMenu(); initGifTapPause(); initTabbar(); initUiHooks();
  setTimeout(function () { say('🐸 奶蛙：欢迎来到东莞奶龙理工大学！'); }, 900);
});
