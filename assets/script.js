const $ = (selector) => document.querySelector(selector);

function normalize(str){ return (str || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }

function renderResearch(){
  const q = normalize($("#research-search").value);
  $("#research-grid").innerHTML = researchLines
    .filter(item => normalize(item.title + item.tag + item.text).includes(q))
    .map(item => `<article class="card"><span class="tag">${item.tag}</span><h3>${item.title}</h3><p>${item.text}</p></article>`)
    .join("");
}

let activeYear = "Todos";
function renderYearTabs(){
  const years = ["Todos", ...new Set(publications.map(p => p.year).sort((a,b)=>b-a))];
  $("#year-tabs").innerHTML = years.map(y => `<button class="${y===activeYear?'active':''}" data-year="${y}">${y}</button>`).join("");
  document.querySelectorAll("#year-tabs button").forEach(btn => btn.addEventListener("click", () => {
    activeYear = btn.dataset.year === "Todos" ? "Todos" : Number(btn.dataset.year);
    renderYearTabs(); renderPublications();
  }));
}

function renderPublications(){
  const q = normalize($("#pub-search").value);
  $("#publications-list").innerHTML = publications
    .filter(p => activeYear === "Todos" || p.year === activeYear)
    .filter(p => normalize(`${p.title} ${p.journal} ${p.doi} ${p.year}`).includes(q))
    .map(p => `<article class="pub-item"><strong>${p.title}</strong><div class="pub-meta">${p.journal} · ${p.year} · DOI: ${p.doi}</div></article>`)
    .join("");
}

function initials(name){ return name.split(" ").filter(Boolean).slice(0,2).map(n=>n[0]).join("").toUpperCase(); }

function renderTeam(){
  const q = normalize($("#team-search").value);
  $("#team-grid").innerHTML = team
    .filter(p => normalize(`${p.name} ${p.role} ${p.area}`).includes(q))
    .map(p => `<article class="person-card"><div class="avatar">${initials(p.name)}</div><span class="role">${p.role}</span><h3>${p.name}</h3><p>${p.area}</p></article>`)
    .join("");
}

function formatDate(date){
  return new Date(date + "T12:00:00").toLocaleDateString("pt-BR", {day:"2-digit", month:"long", year:"numeric"});
}

function renderNews(){
  const cards = news.map(n => `<article class="card"><span class="tag">${formatDate(n.date)}</span><h3>${n.title}</h3><p>${n.text}</p></article>`).join("");
  $("#news-list").innerHTML = cards;
  $("#news-preview").innerHTML = news.slice(0,2).map(n => `<div class="mini-news"><p class="tag">${formatDate(n.date)}</p><h3>${n.title}</h3><p>${n.text}</p></div>`).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  $("#current-year").textContent = new Date().getFullYear();
  renderResearch(); renderYearTabs(); renderPublications(); renderTeam(); renderNews();
  $("#research-search").addEventListener("input", renderResearch);
  $("#pub-search").addEventListener("input", renderPublications);
  $("#team-search").addEventListener("input", renderTeam);
  $(".menu-toggle").addEventListener("click", () => $(".nav-links").classList.toggle("open"));
});
