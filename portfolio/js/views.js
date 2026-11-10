/* Helpers, tab pages and homepage. Edit data.js for your content. */
const $=s=>document.querySelector(s);
const list=a=>a.map(x=>`<span>${x}</span>`).join("");
const sec=(id,t,h)=>`<section id="${id}"><div class="wrap"><h2>${t}</h2>${h}</div></section>`;
const projectImages=p=>p.images?.length?p.images:p.image?[p.image]:[];
const thumb=p=>`<div class="thumb">${projectImages(p).length?`<img src="${projectImages(p)[0]}" alt="${p.name} project preview" loading="lazy">`:`<span>${p.category}</span>`}</div>`;
const meta=p=>{const values=[p.date||p.year,p.role,p.status].filter(Boolean);return `${values.length?`<p class="meta">${values.map(v=>`<span>${v}</span>`).join("")}</p>`:""}${p.tools?.length?`<p class="chips">${list(p.tools)}</p>`:""}`};
const ext=(u,l,c="")=>`<a class="btn sm ${c}" href="${u}"${u.startsWith("#")?"":` target="_blank" rel="noopener noreferrer"`}>${l}</a>`;
const card=p=>`<article class="card proj">${thumb(p)}<div class="body"><span class="tag">${p.category}</span><p class="project-type-label">${p.type||""}</p><h3>${p.name}</h3>${p.desc?`<p>${p.desc}</p>`:""}${meta(p)}<div class="btns">${ext("#p-"+p.id,"View project details")}${p.url?ext(p.url,"Demo","ghost"):""}${p.github?ext(p.github,"GitHub","ghost"):p.githubPending?`<button class="btn sm ghost" type="button" disabled>GitHub link coming soon</button>`:""}</div></div></article>`;

/* Home page */
const ini=P.name.split(" ").map(w=>w[0]).join("").slice(0,2);
const page=(t,h)=>`<section><h2>${t}</h2>${h}</section>`;
const facts=[["Full name",P.name],["Title",P.title],["Occupation",P.occupation],["Project-based experience",P.yearsExperience],["Location",P.location],["Email",`<a href="mailto:${P.email}">${P.email}</a>`],["Phone",`<a href="tel:${P.phone}">${P.phone}</a>`],["Education",P.education],["Focus",P.focus],["Availability",P.availability]];
const cats=PROJECT_TYPES;
const homeSkillGroups=[
  {title:"Technical & Creative",categories:["Web and UI","Game development and animation","Security"]},
  {title:"Professional",categories:["Professional"]}
];
const featuredProjects=["skull-and-roses-brand-identity","dragon-fruit-colored-pencil-study","m1-combo-and-slash-vfx"].map(id=>PROJECTS.find(project=>project.id===id)).filter(Boolean);

/* Each tab (page) of the site */
const V={
about:()=>page("About me",`<div class="two"><div><p>${P.bio}</p><p><strong>Creative direction:</strong> ${P.tagline}</p><p>${P.availability}</p><div class="btns"><a class="btn" href="#contact">Let’s work together</a><a class="btn ghost" href="${P.cv}" target="_blank" rel="noopener">View my CV</a></div></div><dl class="facts">${facts.map(f=>`<div><dt>${f[0]}</dt><dd>${f[1]}</dd></div>`).join("")}</dl></div>`),
skills:()=>page("Skills",`<div class="grid">${Object.entries(SKILLS).map(([c,l])=>`<div class="card"><h3>${c}</h3><p class="chips">${list(l)}</p>${c==="Security"?`<a href="${P.securityCertificate}" target="_blank" rel="noopener">View certificate (PDF)</a>`:""}</div>`).join("")}</div>`),
projects:()=>page("Project album",`<div class="project-toolbar"><div class="project-search"><label class="sr" for="q">Search projects</label><input id="q" type="search" placeholder="Search projects"></div><div class="project-type"><label class="sr" for="cat">Project category</label><select id="cat"><option value="">All categories</option>${cats.map(c=>`<option>${c}</option>`).join("")}</select></div><div class="project-type"><label class="sr" for="date-nav">Date navigator</label><select id="date-nav"><option value="">All dates</option>${[...new Set(PROJECTS.map(p=>p.dateGroup||p.year).filter(Boolean))].sort((a,b)=>a.localeCompare(b)).map(group=>`<option value="${group}">${group}</option>`).join("")}</select></div></div><p id="count" role="status"></p><div class="grid" id="res"></div>`),
education:()=>page("Education & Credentials",`<div class="grid">${EDU.map(e=>`<div class="card"><span class="tag">${e.level}</span><h3>${e.t}</h3><p>${e.o}</p><p class="meta"><span>${e.y}</span></p>${e.n?`<p>${e.n}</p>`:""}</div>`).join("")}${CREDENTIALS.map(c=>`<article class="card"><span class="tag">Certificate</span><h3>${c.name}</h3><p>${c.issuer}</p><p class="meta"><span>${c.date}</span></p><a href="${c.file}" target="_blank" rel="noopener noreferrer">View certificate (PDF)</a></article>`).join("")}</div>`),
cv:()=>page("Curriculum vitae",`<div class="card"><p>My latest CV in PDF format. Open it in a new tab or save a copy.</p><div class="btns"><a class="btn" href="${P.cv}" target="_blank" rel="noopener">View CV Online</a><a class="btn ghost" href="${P.cv}" download>Download CV</a></div></div><div class="card" style="margin-top:16px;"><h3>Highlights</h3><p class="chips">${list(ACHIEVEMENTS)}</p></div>`),
contact:()=>page("Contact",`<div class="two"><div>
  <p>Have a project or an opportunity in mind? Send a message or reach me here.</p>
  <p><strong>${P.availability}</strong></p>
  <dl class="facts"><div><dt>Email</dt><dd><a href="mailto:${P.email}">${P.email}</a></dd></div><div><dt>Phone</dt><dd><a href="tel:${P.phone}">${P.phone}</a></dd></div><div><dt>Location</dt><dd>${P.location}</dd></div></dl>
  <div class="social-links" aria-label="Social media">
    <a class="social-button" href="${P.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Visit Brian on Facebook">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.6 1.6-1.6h1.7V3.5c-.8-.1-1.6-.2-2.4-.2-2.4 0-4.1 1.5-4.1 4.2v2.4H7.6V13h2.7v8h3.2z"/></svg>
      <span>Facebook</span>
    </a>
    <a class="social-button" href="${P.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Visit Brian on Instagram">
      <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="ig-dot" cx="17.5" cy="6.8" r="1"/></svg>
      <span>Instagram</span>
    </a>
    ${P.linkedin?`<a class="social-button" href="${P.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>`:""}
    ${P.github?`<a class="social-button" href="${P.github}" target="_blank" rel="noopener noreferrer">GitHub</a>`:""}
  </div></div>
  <form class="form" id="cf"><h3>Send a message</h3>
    <div class="row"><div><label for="n">Full name</label><input id="n" name="name" required maxlength="80" autocomplete="name"></div>
    <div><label for="e">Email address</label><input id="e" name="email" type="email" required maxlength="120" autocomplete="email"></div></div>
    <label for="s">Subject</label><input id="s" name="subject" required maxlength="120">
    <label for="m">Message</label><textarea id="m" name="message" required maxlength="2000"></textarea>
    <input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
    <p class="note">Your details are used only to respond to your message. Please do not include sensitive personal information.</p>
    <button class="btn send" type="submit">Send message <span aria-hidden="true">&#8599;</span></button>
    <p id="fs" role="status"></p></form></div>`)
};

/* Home: profile, Contact Me button, and a short tease of each tab */
const TEASE=[["about","About me",P.focus],["skills","Skills",Object.values(SKILLS).flat().slice(0,3).join(", ")+" and more"],["projects","Project album","Browse projects by type"],["education","Education",EDU[0].t],["cv","Curriculum vitae","View it online or download a copy"]];
$("#home-view").innerHTML=`
<section id="home" class="hero"><div class="wrap hero-in"><div>
  <p class="role">${P.title}</p><h1>${P.name}</h1><p class="lead">${P.tagline}</p><p>${P.intro}</p>
  <p class="meta"><span>${P.location}</span><span>${P.focus}</span></p>
  <div class="btns"><a class="btn" href="#projects">View Projects</a><a class="btn ghost" href="${P.cv}" download>Download CV</a><a class="btn ghost" href="#contact">Contact Me</a></div>
  <p><strong>${P.availability}</strong></p>
</div><div class="photo">${P.photo?`<img src="${P.photo}" alt="Portrait of ${P.name}" width="270" height="270">`:`<span aria-hidden="true">${ini}</span>`}</div></div></section>
<section class="home-skills" aria-labelledby="home-skills-title"><div class="wrap"><h2 id="home-skills-title">Skills</h2><div class="home-skill-grid">${homeSkillGroups.map(group=>`<article class="card home-skill-card"><h3>${group.title}</h3><ul>${group.categories.flatMap(category=>SKILLS[category].map(skill=>`<li><span class="skill-mark" aria-hidden="true">${skill.slice(0,1)}</span><span>${skill}</span></li>`)).join("")}</ul></article>`).join("")}</div><div class="btns"><a class="btn ghost" href="#skills">Explore all skills</a></div></div></section>
<section id="experience-home"><div class="wrap"><h2>Experience</h2><div class="experience-list">${EXPERIENCE.map(e=>`<article class="card experience-card"><span class="tag">${e.period}</span><h3>${e.role}</h3><p><strong>${e.company}</strong> · ${e.location}</p><p>${e.summary}</p><h4>Responsibilities</h4><ul>${e.responsibilities.map(item=>`<li>${item}</li>`).join("")}</ul><h4>Highlights</h4><ul>${e.accomplishments.map(item=>`<li>${item}</li>`).join("")}</ul></article>`).join("")}</div></div></section>
<section id="projects-home"><div class="wrap"><h2>Featured Projects</h2>${featuredProjects.length?`<div class="grid">${featuredProjects.map(card).join("")}</div><div class="btns"><a class="btn ghost" href="#projects">View all projects</a></div>`:`<p>Project examples will be added here soon.</p><div class="btns"><a class="btn ghost" href="#projects">Browse project types</a></div>`}</div></section>
<section><div class="wrap"><h2>More about me</h2><div class="tease">${TEASE.map(t=>`<a class="card tz" href="#${t[0]}"><h3>${t[1]}</h3><p>${t[2]}</p></a>`).join("")}</div></div></section>`;
