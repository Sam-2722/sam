/* Header, footer, menu, dark mode, forms and tab routing. */
/* Header and footer */
const nav=[["Home","home"],["About","about"],["Skills","skills"],["Experience","experience"],["Projects","projects"],["Education","education"],["CV","cv"],["Contact","contact"]];
const canonical=document.querySelector('link[rel="canonical"]');
if(canonical)canonical.href=new URL("./",location.href).href;
$("#brand").innerHTML=`<img src="assets/skull-rose-icon-dark.png" alt=""><span>${P.name}</span>`;
$("#menu").innerHTML=nav.map(n=>`<a href="#${n[1]}">${n[0]}</a>`).join("");
const profileLinks=[["LinkedIn",P.linkedin],["GitHub",P.github],["Facebook",P.facebook],["Instagram",P.instagram]].filter(([,url])=>url);
$("#footer").innerHTML=`<div><p><strong>${P.name}</strong></p><p>${P.title}</p><p><a href="mailto:${P.email}">${P.email}</a></p><p class="social-links">${profileLinks.map(([label,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`).join(" ")}</p><p>&copy; ${new Date().getFullYear()} ${P.name}. All rights reserved.</p></div><nav aria-label="Footer" class="flinks">${nav.map(n=>`<a href="#${n[1]}">${n[0]}</a>`).join("")}</nav>`;

/* Mobile menu */
const burger=$("#burger"),menu=$("#menu");
burger.onclick=()=>{const o=menu.classList.toggle("open");burger.setAttribute("aria-expanded",o)};
menu.onclick=()=>{menu.classList.remove("open");burger.setAttribute("aria-expanded","false")};

/* Dark mode, saved in local storage */
const root=document.documentElement;
function setTheme(t){root.dataset.theme=t;$("#theme").innerHTML=t==="dark"?"&#9728;":"&#9790;";$("#brand img").src=t==="dark"?"assets/skull-rose-icon-light.png":"assets/skull-rose-icon-dark.png"}
let saved=null;try{saved=localStorage.getItem("theme")}catch(e){}
setTheme(saved||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"));
$("#theme").onclick=()=>{const t=root.dataset.theme==="dark"?"light":"dark";setTheme(t);try{localStorage.setItem("theme",t)}catch(e){}};

/* Contact form (bound when the Contact tab opens) */
function bindForm(){
  $("#cf").onsubmit=async e=>{
    e.preventDefault();const f=e.target,d=new FormData(f),s=$("#fs");
    if(d.get("website"))return; /* spam trap */
    if(P.formEndpoint){
      try{const r=await fetch(P.formEndpoint,{method:"POST",body:d,headers:{Accept:"application/json"}});if(!r.ok)throw 0;f.reset();s.textContent="Message sent. Thank you!"}
      catch(x){s.textContent="Message not sent. Please email me directly."}
    }else{
      location.href="mailto:"+P.email+"?subject="+encodeURIComponent(d.get("subject"))+"&body="+encodeURIComponent(d.get("message")+"\n\nFrom: "+d.get("name")+" ("+d.get("email")+")");
    }
  };
}
/* Project search and filter */
function bindSearch(){
  const run=()=>{
    const t=$("#q").value.toLowerCase().split(/\s+/).filter(Boolean),c=$("#cat").value,d=$("#date-nav").value;
    const r=PROJECTS.filter(p=>{
      const matchesType=!c||p.category===c;
      const matchesDate=!d||(p.dateGroup||p.year)===d;
      const matchesText=t.every(w=>[p.name,p.category,p.type,p.year,p.date,p.status,p.desc,...(p.tech||[]),...(p.tools||[])].join(" ").toLowerCase().includes(w));
      return matchesType&&matchesDate&&matchesText;
    });
    $("#res").innerHTML=r.map(card).join("");
    $("#count").textContent=r.length?r.length+(r.length>1?" projects found":" project found"):PROJECTS.length?"No projects match. Try another search, project type, or date.":"Project examples will appear here as they are added.";
  };
  $("#q").oninput=run;$("#cat").onchange=run;$("#date-nav").onchange=run;run();
}
const AFTER={contact:bindForm,projects:bindSearch};

/* Project detail page (opens in a new browser tab) */
const pv=$("#page-view"),hv=$("#home-view"),base=document.title;
function detailView(id){
  const p=PROJECTS.find(x=>x.id===id);
  if(!p){pv.innerHTML=`<section><h2>Project not found</h2><a class="btn" href="#projects">See all projects</a></section>`;return}
  document.title=p.name+" | "+P.name;
  const images=p.images?.length?p.images:p.image?[p.image]:[];
  const details=[["Category",p.category],["Project type",p.type],["Technologies / tools",p.tools||p.tech],["Creator's role",p.role],["Project date",p.date||p.year],["Status",p.status]].filter(([,v])=>v);
  pv.innerHTML=`<section class="detail"><header class="detail-heading"><p class="detail-kicker">Project · ${p.type||p.category}</p><h2>${p.name}</h2><p class="detail-lead">${p.desc||""}</p><p><a href="#projects">← Back to project albums</a></p></header>
  <div class="detail-layout"><div class="detail-content">
  ${p.overview||p.desc?`<section class="detail-block"><h3>Project Overview</h3><p>${p.overview||p.desc}</p></section>`:""}
  ${p.team?.length?`<section class="detail-block"><h3>Project Team</h3><ul>${p.team.map(member=>`<li>${member}</li>`).join("")}</ul></section>`:""}
  ${images.length?`<section class="detail-block" id="project-album"><h3>Project Album</h3><div class="project-album">${images.map((src,i)=>`<a href="${src}" target="_blank" rel="noopener" aria-label="Open ${p.name} image ${i+1}"><img src="${src}" alt="${p.name} image ${i+1}" loading="lazy"></a>`).join("")}</div></section>`:""}
  ${p.videos?.length?`<section class="detail-block"><h3>Animation &amp; VFX</h3><div class="project-videos">${p.videos.map(v=>`<figure class="project-video"><video controls preload="metadata" playsinline aria-label="${v.label} — ${v.role}"><source src="${v.src}" type="video/mp4">Your browser does not support embedded video.</video><figcaption><strong>${v.label}</strong><span>${v.role}</span></figcaption></figure>`).join("")}</div></section>`:""}
  ${p.objective?`<section class="detail-block"><h3>Objective</h3><p>${p.objective}</p></section>`:""}
  ${p.approach?`<section class="detail-block"><h3>Approach</h3><p>${p.approach}</p></section>`:""}
  ${p.features?.length?`<section class="detail-block"><h3>Features</h3><ul>${p.features.map(f=>`<li>${f}</li>`).join("")}</ul></section>`:""}
  ${p.problem?`<section class="detail-block"><h3>Problem</h3><p>${p.problem}</p></section>`:""}${p.solution?`<section class="detail-block"><h3>Solution</h3><p>${p.solution}</p></section>`:""}
  ${p.tech?.length?`<section class="detail-block"><h3>Technologies used</h3><p class="chips">${list(p.tech)}</p></section>`:""}
  </div><aside class="detail-sidebar"><h3>Project Details</h3><dl>${details.map(([label,value])=>`<div><dt>${label}</dt><dd>${Array.isArray(value)?value.join(", "):value}</dd></div>`).join("")}</dl>${images.length?`<a href="#project-album">View project album ↗</a>`:""}${p.url?ext(p.url,"Open Project","ghost"):""}${p.github?ext(p.github,"GitHub repository","ghost"):p.githubPending?`<p><button class="btn sm ghost" type="button" disabled>GitHub link coming soon</button></p>`:""}</aside></div></section>`;
}
/* Simple router: each menu item is its own tab */
function route(){
  let h=location.hash.slice(1)||"home";
  if(h==="all-projects")h="projects";
  let cur="home";
  if(h.startsWith("p-")){hv.hidden=true;pv.hidden=false;detailView(h.slice(2));cur="projects"}
  else if(h==="experience"){hv.hidden=false;pv.hidden=true;document.title=base;cur="experience";scrollTo(0,0);requestAnimationFrame(()=>$("#experience-home").scrollIntoView())}
  else if(V[h]){hv.hidden=true;pv.hidden=false;pv.innerHTML=V[h]();if(AFTER[h])AFTER[h]();cur=h;document.title=nav.find(n=>n[1]===h)[0]+" | "+P.name}
  else{hv.hidden=false;pv.hidden=true;document.title=base}
  document.querySelectorAll("#menu a").forEach(a=>a.getAttribute("href")==="#"+cur?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current"));
  if(h!=="experience")scrollTo(0,0);
}
addEventListener("hashchange",route);route();
