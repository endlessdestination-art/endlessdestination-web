// EDIT THESE VALUES with your real links before publishing.
const LINKS = {
  pixverse: 'https://pixverse.ai/',
  domoai: 'https://www.domoai.app/',
  instagram: 'https://www.instagram.com/endlessdestination.art/'
  email: 'mailto:endlessdestination.art@gmail.com'
};

document.querySelectorAll('[data-link]').forEach((el) => {
  const key = el.dataset.link;
  if (LINKS[key]) el.href = LINKS[key];
});
document.getElementById('year').textContent = new Date().getFullYear();
