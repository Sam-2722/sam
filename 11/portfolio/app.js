const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

// ---- Fill in the page from data.js
document.title = `${SITE.name} | ${SITE.title}`;
$("#brand").textContent = SITE.name;
let j = 0;
$("#name").setAttribute("aria-label", SITE.name);
$("#name").innerHTML = SITE.name.split(" ").map(w => `<span class="w" aria-hidden="true">${[...w].map(c => `<i style="--j:${j++}">${esc(c)}</i>`).join("")}</span>`).join(" ");
$("#title").textContent = SITE.title;
$("#tagline").textContent = SITE.tagline;
$("#bio").textContent = SITE.bio;
$("#contactText").textContent = SITE.contactText;
$("#pfp").src = SITE.pfp;
$("#pfp").alt = `Profile photo of ${SITE.name}`;
$("#foot").textContent = `\u00A9 ${new Date().getFullYear()} ${SITE.name}. Please don't copy or repost these drawings without permission.`;

const links = [];
if (SITE.email) links.push(`<a class="btn" href="mailto:${esc(SITE.email)}">Email me</a>`);
(SITE.socials || []).filter(s => s.url).forEach(s =>
  links.push(`<a class="btn ghost" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`));
$("#links").innerHTML = links.join("");

// ---- Scroll reveal
const io = "IntersectionObserver" in window
  ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 })
  : { observe: e => e.classList.add("in") };
document.querySelectorAll(".wrap>h2,.wrap>.prose,.links").forEach(e => { e.classList.add("rv"); io.observe(e); });

// ---- Gallery with live search and filters
const cats = [...new Set(WORKS.map(w => w.category))].sort();
const yrs = [...new Set(WORKS.map(w => w.year))].sort((a, b) => b - a);
$("#cat").innerHTML = '<option value="">All mediums</option>' + cats.map(c => `<option>${esc(c)}</option>`).join("");
$("#yr").innerHTML = '<option value="">All years</option>' + yrs.map(y => `<option>${esc(y)}</option>`).join("");

function draw() {
  const q = $("#q").value.trim().toLowerCase(), c = $("#cat").value, y = $("#yr").value;
  const list = WORKS.filter(w =>
    (!c || w.category === c) && (!y || String(w.year) === y) &&
    (!q || [w.title, w.category, w.year, w.description, ...(w.tools || [])].join(" ").toLowerCase().includes(q)));
  $("#count").textContent = `Showing ${list.length} of ${WORKS.length} works`;
  $("#grid").innerHTML = list.map(w =>
    `<a class="card" href="#/works/${encodeURIComponent(w.slug)}">
       <div class="ph"><img src="${esc(w.image)}" alt="${esc(w.title)}" loading="lazy"></div>
       <h3>${esc(w.title)}</h3><p>${esc(w.category)}, ${esc(w.year)}</p></a>`).join("")
    || '<p class="muted">No works match. Clear the search or pick "All".</p>';
  $("#grid").querySelectorAll(".card").forEach((c, i) => { c.style.setProperty("--d", (i % 3) * 0.08); c.classList.add("rv"); io.observe(c); });
}
$(".filters").addEventListener("input", draw);
$(".filters").addEventListener("change", draw);
draw();

// ---- Detail page for one drawing (address: index.html#/works/slug)
function detail(slug) {
  const w = WORKS.find(x => x.slug === slug), v = $("#detailView");
  if (!w) { v.innerHTML = '<p>That work was not found.</p><a class="back" href="#works">Back to works</a>'; return; }
  document.title = `${w.title} | ${SITE.name}`;
  const rows = [["Medium", w.category], ["Year", w.year], ["Tools", (w.tools || []).join(", ")], ["Status", w.status]]
    .filter(r => r[1]).map(r => `<dt>${r[0]}</dt><dd>${esc(r[1])}</dd>`).join("");
  v.innerHTML = `<a class="back" href="#works">Back to works</a><h1>${esc(w.title)}</h1>
    <div class="mat"><img class="full" style="view-transition-name:work" src="${esc(w.image)}" alt="${esc(w.title)}"></div>
    <p class="prose">${esc(w.description)}</p><dl>${rows}</dl>`;
}

// ---- Routing between gallery and detail page
function swap() {
  const h = location.hash, m = h.match(/^#\/works\/(.+)$/);
  $("#homeView").hidden = !!m;
  $("#detailView").hidden = !m;
  closeMenu();
  if (m) { detail(decodeURIComponent(m[1])); scrollTo(0, 0); return; }
  document.title = `${SITE.name} | ${SITE.title}`;
  const el = h.length > 1 ? document.getElementById(h.slice(1)) : null;
  el ? el.scrollIntoView() : scrollTo(0, 0);
}
function route(first) {
  const vt = document.startViewTransition && !first && !document.documentElement.classList.contains("calm");
  vt ? document.startViewTransition(swap) : swap();
}
addEventListener("hashchange", () => route());

// ---- Mobile menu and dark mode
const burger = $("#burger"), menu = $("#menu");
function closeMenu() { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
burger.addEventListener("click", () => burger.setAttribute("aria-expanded", menu.classList.toggle("open")));
$("#theme").addEventListener("click", () => {
  const d = document.documentElement;
  const cur = d.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  d.dataset.theme = cur === "dark" ? "light" : "dark";
  try { localStorage.setItem("theme", d.dataset.theme); } catch (e) {}
});
route(true);

// ---- Intro, marquee, progress bar, image morph
const root = document.documentElement;
const go = () => root.classList.add("go");
if (root.classList.contains("intro-on")) {
  let n = 0, done = false;
  $("#introName").innerHTML = SITE.name.split(" ").map(w => `<span class="iw">${[...w].map(c => `<i style="--i:${n++}">${esc(c)}</i>`).join("")}</span>`).join(" ");
  $("#introRole").textContent = SITE.title;
  const end = () => {
    if (done) return; done = true;
    try { sessionStorage.setItem("introSeen", "1"); } catch (e) {}
    root.classList.add("intro-done"); setTimeout(go, 600); setTimeout(() => $("#intro").remove(), 1500);
  };
  $("#intro").addEventListener("click", end);
  setTimeout(end, 2600);
} else go();

const grp = cats.map(c => `<span>${esc(c)}</span>`).join("").repeat(4);
const grp2 = WORKS.map(w => `<span>${esc(w.title)}</span>`).join("").repeat(4);
$("#marqueeTrack").innerHTML = grp + grp;
$("#marqueeTrack2").innerHTML = grp2 + grp2;

const prog = $("#progress");
addEventListener("scroll", () => {
  const m = root.scrollHeight - innerHeight;
  prog.style.transform = `scaleX(${m > 0 ? scrollY / m : 0})`;
}, { passive: true });

$("#grid").addEventListener("click", e => {
  const img = e.target.closest(".card")?.querySelector("img");
  if (!img) return;
  $("#grid").querySelectorAll("img").forEach(i => i.style.viewTransitionName = "");
  img.style.viewTransitionName = "work";
});

// ---- Moving doodles, confetti, cursor ring, card tilt
const reduce = root.classList.contains("calm");
const SH = {
  star: '<svg viewBox="0 0 24 24"><path d="M12 2l2.6 6.9L22 10l-5.6 4.7L18 22l-6-4-6 4 1.6-7.3L2 10l7.4-1.1z"/></svg>',
  wave: '<svg viewBox="0 0 60 20"><path fill="none" stroke-width="4" stroke-linecap="round" d="M3 10q6-12 12 0t12 0 12 0 12 0"/></svg>',
  ring: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke-width="3.5"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path fill="none" stroke-width="4.5" stroke-linecap="round" d="M12 3v18M3 12h18"/></svg>',
  tri: '<svg viewBox="0 0 24 24"><path fill="none" stroke-width="3.5" stroke-linejoin="round" d="M12 4l9 16H3z"/></svg>',
  dot: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11"/></svg>',
  pencil: '<svg viewBox="0 0 20 64"><rect x="3" y="2" width="14" height="10" rx="2"/><rect x="3" y="14" width="14" height="32"/><path d="M3 48h14l-7 14z"/></svg>',
  badge: `<svg class="spin" viewBox="0 0 120 120"><defs><path id="ring" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0"/></defs><text font-size="13" font-weight="700" stroke="none"><textPath href="#ring" textLength="285" lengthAdjust="spacing">${esc((SITE.title + " \u2022 " + SITE.name + " \u2022 ").toUpperCase())}</textPath></text><circle cx="60" cy="60" r="7"/></svg>`
};
// [shape, left %, top %, size px, color, parallax depth, float seconds, pop delay]
const DD = [
  ["badge", 68, 60, 124, "var(--b)", .3, 0, .6], ["star", 8, 24, 60, "var(--c)", .8, 7, .9],
  ["wave", 44, 10, 96, "var(--b)", .5, 9, 1], ["ring", 90, 16, 52, "var(--k)", 1.2, 8, 1.1],
  ["pencil", 56, 74, 36, "var(--b)", .6, 10, 1.2], ["plus", 5, 72, 40, "var(--k)", 1, 6, 1.3],
  ["tri", 30, 84, 48, "var(--c)", .7, 9, 1.4], ["dot", 66, 28, 24, "#fff", 1.4, 5, 1.5],
  ["star", 93, 78, 46, "var(--m)", 1.1, 8, 1.6], ["dot", 22, 52, 30, "var(--c)", .9, 6, 1.7]
];
$("#doodles").innerHTML = DD.map(([k, l, t, s, c, d, f, dl], i) =>
  `<span class="dd${/wave|ring|plus|tri/.test(k) ? " o" : ""}" data-d="${d}" style="left:${l}%;top:${t}%;width:${s}px;color:${c};--f:${f}s;--dl:${dl}s;--rot:${(i * 47) % 60 - 30}deg">${SH[k]}</span>`).join("");
const dds = [...document.querySelectorAll(".dd")];
$("#doodles").addEventListener("click", e => {
  const d = e.target.closest(".dd"); if (!d) return;
  d.classList.add("boom"); setTimeout(() => d.classList.remove("boom"), 450);
});

function burst(x, y) {
  const cols = ["var(--c)", "var(--b)", "var(--y)", "var(--m)"];
  for (let i = 0; i < 14; i++) {
    const p = document.createElement("b"), a = Math.random() * 6.283, d = 50 + Math.random() * 90;
    p.className = "pt";
    p.style.cssText = `left:${x}px;top:${y}px;--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d}px;--c:${cols[i % 4]};--r:${Math.random() * 360}deg;border-radius:${i % 3 ? "50%" : "2px"}`;
    document.body.append(p); setTimeout(() => p.remove(), 900);
  }
}

if (!reduce) {
  addEventListener("pointerdown", e => { if (!e.target.closest("input,select,textarea")) burst(e.clientX, e.clientY); });
  addEventListener("pointermove", e => {
    const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
    dds.forEach(d => { const k = d.dataset.d * 40; d.style.translate = `${-x * k}px ${-y * k}px`; });
  });
  $("#grid").addEventListener("pointermove", e => {
    const ph = e.target.closest(".ph"); if (!ph) return;
    const r = ph.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
    ph.style.transform = `perspective(700px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg)`;
  });
  $("#grid").addEventListener("mouseout", e => {
    const ph = e.target.closest(".ph"); if (ph && !ph.contains(e.relatedTarget)) ph.style.transform = "";
  });
  if (matchMedia("(pointer: fine)").matches) {
    const c = document.createElement("div"); c.id = "cursor"; document.body.append(c);
    let x = 0, y = 0, tx = 0, ty = 0;
    addEventListener("pointermove", e => { tx = e.clientX; ty = e.clientY; c.classList.add("on"); });
    document.addEventListener("pointerover", e => c.classList.toggle("big", !!e.target.closest("a,button,.dd,input,select")));
    (function tick() { x += (tx - x) * .18; y += (ty - y) * .18; c.style.transform = `translate(${x}px,${y}px)`; requestAnimationFrame(tick); })();
  }
}

// ---- Animations on/off button (saved in this browser)
const mb = $("#motion");
mb.setAttribute("aria-pressed", String(!root.classList.contains("calm")));
mb.addEventListener("click", () => {
  try { localStorage.setItem("calm", root.classList.contains("calm") ? "0" : "1"); } catch (e) {}
  location.reload();
});
