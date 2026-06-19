
const $ = (selector) => document.querySelector(selector);
function normalize(str){ return (str || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }
function currentPage(){ return location.pathname.split("/").pop() || "index.html"; }

function renderResearch(targetId, limit=null){
  const el = document.getElementById(targetId);
  if(!el) return;
  const input = document.getElementById("research-search");
  const q = normalize(input ? input.value : "");
  let items = researchLines.filter(item => normalize(item.title + item.tag + item.text).includes(q));
  if(limit) items = items.slice(0, limit);
  el.innerHTML = items.map(item => `<article class="card"><span class="tag">${item.tag}</span><h3>${item.title}</h3><p>${item.text}</p></article>`).join("");
}

let activeYear = "Todos";
function renderYearTabs(){
  const el = document.getElementById("year-tabs");
  if(!el) return;
  const years = ["Todos", ...new Set(publications.map(p => p.year).sort((a,b)=>b-a))];
  el.innerHTML = years.map(y => `<button class="${y===activeYear?'active':''}" data-year="${y}">${y}</button>`).join("");
  document.querySelectorAll("#year-tabs button").forEach(btn => btn.addEventListener("click", () => {
    activeYear = btn.dataset.year === "Todos" ? "Todos" : Number(btn.dataset.year);
    renderYearTabs(); renderPublicationsTimeline();
  }));
}

function renderPublicationsTimeline(){
  const el = document.getElementById("publications-timeline");
  if(!el) return;
  const input = document.getElementById("pub-search");
  const q = normalize(input ? input.value : "");
  const filtered = publications
    .filter(p => activeYear === "Todos" || p.year === activeYear)
    .filter(p => normalize(`${p.title} ${p.journal} ${p.doi} ${p.year}`).includes(q))
    .sort((a,b) => b.year - a.year || a.title.localeCompare(b.title));

  const groups = {};
  filtered.forEach(p => { if(!groups[p.year]) groups[p.year] = []; groups[p.year].push(p); });

  el.innerHTML = Object.keys(groups).sort((a,b)=>b-a).map(year => `
    <section class="year-group">
      <div class="year-label">${year}</div>
      <div class="year-items">
        ${groups[year].map(p => `<article class="pub-item"><strong>${p.title}</strong><div class="pub-meta">${p.journal} · DOI: ${p.doi}</div></article>`).join("")}
      </div>
    </section>
  `).join("");
}

function initials(name){ return name.split(" ").filter(Boolean).slice(0,2).map(n=>n[0]).join("").toUpperCase(); }
function renderTeam(){
  const el = document.getElementById("team-grid");
  if(!el) return;
  const input = document.getElementById("team-search");
  const q = normalize(input ? input.value : "");
  el.innerHTML = team
    .filter(p => normalize(`${p.name} ${p.role} ${p.area}`).includes(q))
    .map(p => `<article class="person-card"><div class="avatar">${initials(p.name)}</div><span class="role">${p.role}</span><h3>${p.name}</h3><p>${p.area}</p></article>`)
    .join("");
}

function formatDate(date){
  return new Date(date + "T12:00:00").toLocaleDateString("pt-BR", {day:"2-digit", month:"long", year:"numeric"});
}
function renderNews(){
  const list = document.getElementById("news-list");
  if(list) list.innerHTML = news.map(n => `<article class="card"><span class="tag">${formatDate(n.date)}</span><h3>${n.title}</h3><p>${n.text}</p></article>`).join("");
  const preview = document.getElementById("news-preview");
  if(preview) preview.innerHTML = news.slice(0,2).map(n => `<div class="mini-news"><p class="tag">${formatDate(n.date)}</p><h3>${n.title}</h3><p>${n.text}</p></div>`).join("");
}


function renderLeaders(){
  const el = document.getElementById("leaders-grid");
  if(!el || typeof leaders === "undefined") return;
  el.innerHTML = leaders.map(p => {
    const photo = p.image ? `<img src="${p.image}" alt="Foto de ${p.name}">` : initials(p.name);
    return `<article class="leader-card">
      <div class="leader-photo">${photo}</div>
      <div>
        <div class="leader-title">${p.title}</div>
        <h3>${p.name}</h3>
        <p class="leader-area">${p.area}</p>
        <p class="leader-bio">${p.bio}</p>
      </div>
    </article>`;
  }).join("");
}

function renderTeamGroups(){
  const el = document.getElementById("team-groups");
  if(!el) return;
  const input = document.getElementById("team-search");
  const q = normalize(input ? input.value : "");
  const order = ["Lab manager", "Pós-doc", "Doutoranda", "Doutorando", "Mestranda", "Apoio técnico de projeto", "Iniciação científica"];
  const groupLabels = {
    "Lab manager": "Gestão do laboratório",
    "Pós-doc": "Pós-doutorado",
    "Doutoranda": "Doutorado",
    "Doutorando": "Doutorado",
    "Mestranda": "Mestrado",
    "Apoio técnico de projeto": "Apoio técnico de projeto",
    "Iniciação científica": "Iniciação científica"
  };

  const filtered = team.filter(p => normalize(`${p.name} ${p.role} ${p.area}`).includes(q));
  const grouped = {};
  filtered.forEach(p => {
    const label = groupLabels[p.role] || p.role;
    if(!grouped[label]) grouped[label] = [];
    grouped[label].push(p);
  });

  const labelOrder = ["Gestão do laboratório", "Pós-doutorado", "Doutorado", "Mestrado", "Apoio técnico de projeto", "Iniciação científica"];
  el.innerHTML = labelOrder
    .filter(label => grouped[label] && grouped[label].length)
    .map(label => `<section class="team-group">
      <h3>${label}</h3>
      <div class="team-group-grid">
        ${grouped[label].map(p => `<article class="person-card"><div class="avatar">${initials(p.name)}</div><span class="role">${p.role}</span><h3>${p.name}</h3><p>${p.area}</p></article>`).join("")}
      </div>
    </section>`)
    .join("");
}


document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("current-year");
  if(year) year.textContent = new Date().getFullYear();

  renderResearch("research-grid");
  renderResearch("research-home", 3);
  renderYearTabs();
  renderPublicationsTimeline();
  renderTeam();
  renderLeaders();
  renderTeamGroups();
  renderNews();

  const rs = document.getElementById("research-search");
  if(rs) rs.addEventListener("input", () => renderResearch("research-grid"));

  const ps = document.getElementById("pub-search");
  if(ps) ps.addEventListener("input", renderPublicationsTimeline);

  const ts = document.getElementById("team-search");
  if(ts) ts.addEventListener("input", () => { renderTeam(); renderTeamGroups(); });

  const toggle = document.querySelector(".menu-toggle");
  if(toggle) toggle.addEventListener("click", () => document.querySelector(".nav-links").classList.toggle("open"));
});
