// === Gestion de la recherche Google Dorks ===
document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const site = document.getElementById("site").value.trim();
  const inurl = document.getElementById("inurl").value.trim();
  const intitle = document.getElementById("intitle").value.trim();
  const intext = document.getElementById("intext").value.trim();
  const filetype = document.getElementById("filetype").value.trim();
  const base = document.getElementById("base").value.trim();

  let query = "";

  if (site) query += `site:${site} `;
  if (inurl) query += `inurl:${inurl} `;
  if (intitle) query += `intitle:${intitle} `;
  if (intext) query += `intext:${intext} `;
  if (filetype) query += `filetype:${filetype} `;
  if (base) query += `${base}`;

  window.open(`https://www.google.fr/search?q= ${encodeURIComponent(query.trim())}`, "_blank");
});

// === Gestion des modales ===
const modal = document.getElementById("myModal");
const toolsBtn = document.getElementById("toolsButton");
const spanClose = document.querySelector(".close");

toolsBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});
spanClose.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

const aboutModal = document.getElementById("aboutModal");
const aboutBtn = document.getElementById("openAboutModal");
const spanAboutClose = document.querySelector(".close-about");

aboutBtn.addEventListener("click", () => {
  aboutModal.style.display = "flex";
});
spanAboutClose.addEventListener("click", () => {
  aboutModal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === aboutModal) aboutModal.style.display = "none";
});

// === Modale : Description commande Dork ===
const dorkModal = document.getElementById("dorkModal");
const dorkDescription = document.getElementById("dorkDescription");
const closeDork = document.querySelector(".close-dork");

document.querySelectorAll("#dorkList li").forEach(item => {
  item.addEventListener("click", () => {
    dorkDescription.textContent = item.getAttribute("data-desc");
    dorkModal.style.display = "flex";
  });
});

closeDork.addEventListener("click", () => {
  dorkModal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === dorkModal) dorkModal.style.display = "none";
});

// === Fermeture des modales avec Échap ===
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (modal.style.display === "flex") modal.style.display = "none";
    if (aboutModal.style.display === "flex") aboutModal.style.display = "none";
    if (dorkModal.style.display === "flex") dorkModal.style.display = "none";
  }
});