/* =========================================================
   东莞奶龙理工大学 · 整活主页脚本（纯静态、零依赖）
   ========================================================= */

var FROG_IMGS = [
  'assets/img/frog-hero.png',
  'assets/img/meme-laugh.png',
  'assets/img/meme-think.png',
  'assets/img/meme-confused.png',
  'assets/img/meme-pout.png',
  'assets/img/meme-peace.png',
  'assets/img/meme-heart.png',
  'assets/img/meme-blush.png',
  'assets/img/meme-point.png',
  'assets/img/frog-biglaugh.png',
  'assets/img/frog-pointlaugh.png'
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

/* ---------- 跑马灯无缝循环 ---------- */
function loopMarquee() { var t = document.getElementById('marquee'); if (t) t.innerHTML += t.innerHTML; }

/* ---------- 奶蛙狂笑计数 ---------- */
function laughTicker() {
  var el = document.getElementById('laughCount'); if (!el) return;
  var n = 999; el.textContent = n.toLocaleString('en-US');
  setInterval(function () { n += 1 + Math.floor(Math.random() * 4); el.textContent = n.toLocaleString('en-US'); }, 1500);
}

/* ---------- 表情包：点击「形态切换」换图 + 冒泡说话 ---------- */
var memeQuotes = [
  '哈哈哈今天也是元气满满的一天 🐸', '学而不思则罔，托腮沉思中 🤔', '啊？这？不可能！🤯',
  '哼，本蛙生气了 😤', '比个耶，考试全都会 ✌️', '比心！爱莞工 💛', '被夸了，脸红 🥰', '指你！就你还没学习 👉', '抱头狂笑停不下来 😂', '说的就是你，快去看官网 👆', '侧身一闪，躲过早八 🐸'
];
function initMemes() {
  var grid = document.getElementById('memeGrid'); if (!grid) return;
  grid.querySelectorAll('.meme').forEach(function (m, i) {
    var idx = i + 1;
    m.addEventListener('click', function () {
      var img = m.querySelector('.box img');
      idx = (idx + 1) % FROG_IMGS.length;
      if (img) img.src = FROG_IMGS[idx];
      m.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(1.1) rotate(-3deg)' }, { transform: 'scale(1)' }],
        { duration: 400, easing: 'ease-out' }
      );
      say('🐸 ' + (memeQuotes[i] || '奶蛙：嘿嘿'));
    });
  });
}

/* ---------- 轻量气泡 ---------- */
var bubbleTimer;
function say(text) {
  var b = document.getElementById('naiwaBubble');
  if (!b) {
    b = document.createElement('div'); b.id = 'naiwaBubble';
    b.style.cssText = 'position:fixed;left:50%;bottom:28px;transform:translateX(-50%) translateY(20px);background:#fff;color:#2a2622;padding:12px 22px;border-radius:999px;font-weight:700;font-size:15px;box-shadow:0 12px 30px rgba(0,0,0,.25);border:3px solid #ffcf33;z-index:1200;opacity:0;transition:.28s;max-width:88vw;text-align:center;';
    document.body.appendChild(b);
  }
  b.textContent = text;
  requestAnimationFrame(function () { b.style.opacity = '1'; b.style.transform = 'translateX(-50%) translateY(0)'; });
  clearTimeout(bubbleTimer);
  bubbleTimer = setTimeout(function () { b.style.opacity = '0'; b.style.transform = 'translateX(-50%) translateY(20px)'; }, 2200);
}

/* ---------- 弹窗 ---------- */
function openAbout() { document.getElementById('aboutModal').classList.add('on'); }
function closeAbout() { document.getElementById('aboutModal').classList.remove('on'); }
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAbout(); });

/* ---------- 官网入口点击提示（不强制跳转） ---------- */
function jumpTo() { say('🐸 正在为你打开东莞理工学院官网 www.dgut.edu.cn …'); }
function badgeJump() { window.open('https://www.dgut.edu.cn', '_blank'); }

/* ---------- 移动端菜单 ---------- */
function initMobileMenu() {
  var menu = document.getElementById('menu'); if (!menu) return;
  menu.querySelectorAll('.menu > li > a').forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (window.innerWidth > 960) return;
      var li = a.parentElement;
      if (li.querySelector('.sub') && !li.classList.contains('open')) { e.preventDefault(); li.classList.add('open'); }
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  animateCounts(); loopMarquee(); laughTicker(); initMemes(); initMobileMenu();
  setTimeout(function () { say('🐸 奶蛙：欢迎来到东莞奶龙理工大学！'); }, 900);
});
