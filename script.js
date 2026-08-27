// Optional link configuration for future affiliate links.
// Instagram and Email also have direct hrefs in index.html,
// so they work even if JavaScript is disabled or fails to load.
const LINKS = {
  pixverse: 'https://pixverse.ai/',
  domoai: 'https://www.domoai.app/',
  instagram: 'https://www.instagram.com/endlessdestination.art/',
  email: 'mailto:endlessdestination.art@gmail.com?subject=Endless%20Destination%20contact'
};

// Only replace links when JavaScript is available.
document.querySelectorAll('[data-link]').forEach((el) => {
  const key = el.dataset.link;
  if (LINKS[key]) el.href = LINKS[key];
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
