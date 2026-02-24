// ===== Multilingual Texts =====
const texts = {
  en: { home: "Home", about: "About", courses: "Courses", blog: "Blog", resources: "Resources", contact: "Contact", community: "Community", admin: "Admin", exploreBtn: "Explore Courses" },
  fr: { home: "Accueil", about: "À propos", courses: "Cours", blog: "Blog", resources: "Ressources", contact: "Contact", community: "Communauté", admin: "Admin", exploreBtn: "Explorer les cours" },
  es: { home: "Inicio", about: "Acerca de", courses: "Cursos", blog: "Blog", resources: "Recursos", contact: "Contacto", community: "Comunidad", admin: "Admin", exploreBtn: "Explorar Cursos" }
};

// ===== Language Switch =====
const languageSelect = document.getElementById('language-select');
if(languageSelect){
  languageSelect.addEventListener('change', ()=>{
    const lang = languageSelect.value;
    document.querySelectorAll('nav ul li a').forEach(link=>{
      const key = link.getAttribute('data-text');
      if(texts[lang][key]) link.textContent = texts[lang][key];
    });
    if(document.querySelector('.hero-btn')) {
      document.querySelector('.hero-btn').textContent = texts[lang].exploreBtn;
    }
  });
}

// ===== Smooth Scroll for Buttons =====
document.querySelectorAll('.hero-btn, nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if(href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if(target){
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ===== Dynamic Cards =====
const placeholderCards = document.querySelectorAll('.card');
placeholderCards.forEach((card, index)=>{
  card.querySelector('h3').textContent = `Dynamic Title ${index+1}`;
  card.querySelector('p').textContent = `Dynamic description placeholder for card ${index+1}.`;
  card.querySelector('.btn').textContent = "Learn More";
});

// ===== Admin Forms (Placeholder Alerts) =====
document.querySelectorAll('.admin-panel form').forEach(form=>{
  form.addEventListener('submit', e=>{
    e.preventDefault();
    alert('This is a placeholder. Your content will be updated dynamically here.');
  });
});

// ===== Scroll-Highlight Active Nav =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');
window.addEventListener('scroll', ()=>{
  let current = '';
  sections.forEach(section=>{
    const sectionTop = section.offsetTop - 80;
    if(pageYOffset >= sectionTop) current = section.getAttribute('id');
  });
  navLinks.forEach(link=>{
    link.classList.remove('active');
    if(link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
});
