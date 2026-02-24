const texts = {
  en: {
    home: "Home",
    about: "About",
    courses: "Courses",
    blog: "Blog",
    resources: "Resources",
    contact: "Contact",
    community: "Community",
    admin: "Admin",
    heroTitle: "Empowering the Next Generation of Tech Minds",
    heroDesc: "Learn, Connect, and Grow in Technology",
    exploreBtn: "Explore Courses"
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    courses: "Cours",
    blog: "Blog",
    resources: "Ressources",
    contact: "Contact",
    community: "Communauté",
    admin: "Admin",
    heroTitle: "Autonomiser la prochaine génération de talents tech",
    heroDesc: "Apprenez, connectez-vous et développez vos compétences",
    exploreBtn: "Explorer les cours"
  },
  es: {
    home: "Inicio",
    about: "Acerca de",
    courses: "Cursos",
    blog: "Blog",
    resources: "Recursos",
    contact: "Contacto",
    community: "Comunidad",
    admin: "Admin",
    heroTitle: "Empoderando a la próxima generación de mentes tecnológicas",
    heroDesc: "Aprende, Conéctate y Crece en Tecnología",
    exploreBtn: "Explorar Cursos"
  }
};

// Change language dynamically
const languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', () => {
  const lang = languageSelect.value;

  document.querySelectorAll('nav ul li a').forEach(link => {
    const key = link.getAttribute('data-text');
    link.textContent = texts[lang][key];
  });

  document.querySelector('.hero h1').textContent = texts[lang].heroTitle;
  document.querySelector('.hero p').textContent = texts[lang].heroDesc;
  document.querySelector('.hero .btn').textContent = texts[lang].exploreBtn;
});
