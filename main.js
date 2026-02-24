// ===== Multilingual Texts =====
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
    exploreBtn: "Explore Courses",
    aboutTitle: "About Tech World Networking",
    aboutDesc: "This is a placeholder for your about text. Admin panel can replace this text dynamically.",
    coursesSection: "Available Courses",
    blogSection: "Latest Blog Posts",
    resourcesSection: "Resources & Downloads",
    contactSection: "Contact Us",
    communitySection: "Community Groups & Forum",
    adminPanelTitle: "Admin Panel",
    subscribePlaceholder: "Enter your email",
    subscribeBtn: "Subscribe"
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
    exploreBtn: "Explorer les cours",
    aboutTitle: "À propos de Tech World Networking",
    aboutDesc: "Ceci est un texte de remplacement. Le panneau admin peut le remplacer dynamiquement.",
    coursesSection: "Cours Disponibles",
    blogSection: "Derniers Articles",
    resourcesSection: "Ressources & Téléchargements",
    contactSection: "Contactez-nous",
    communitySection: "Groupes et Forum de la Communauté",
    adminPanelTitle: "Panneau d'administration",
    subscribePlaceholder: "Entrez votre email",
    subscribeBtn: "S'abonner"
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
    exploreBtn: "Explorar Cursos",
    aboutTitle: "Acerca de Tech World Networking",
    aboutDesc: "Este es un texto de marcador de posición. El panel de administración puede reemplazarlo dinámicamente.",
    coursesSection: "Cursos Disponibles",
    blogSection: "Últimas Publicaciones",
    resourcesSection: "Recursos & Descargas",
    contactSection: "Contáctanos",
    communitySection: "Grupos y Foro de la Comunidad",
    adminPanelTitle: "Panel de Administración",
    subscribePlaceholder: "Ingresa tu email",
    subscribeBtn: "Suscribirse"
  }
};

// ===== Language Switch =====
const languageSelect = document.getElementById('language-select');

if (languageSelect) {
  languageSelect.addEventListener('change', () => {
    const lang = languageSelect.value;

    // Update nav menu
    document.querySelectorAll('nav ul li a').forEach(link => {
      const key = link.getAttribute('data-text');
      if (texts[lang][key]) link.textContent = texts[lang][key];
    });

    // Update homepage sections
    if (document.querySelector('.hero-title')) {
      document.querySelector('.hero-title').textContent = texts[lang].heroTitle;
      document.querySelector('.hero-desc').textContent = texts[lang].heroDesc;
      document.querySelector('.hero-btn').textContent = texts[lang].exploreBtn;
    }

    // Update About page
    if (document.querySelector('.about .section-title')) {
      document.querySelector('.about .section-title').textContent = texts[lang].aboutTitle;
      document.querySelector('.about .placeholder-text').textContent = texts[lang].aboutDesc;
    }

    // Update section titles dynamically if they exist
    if (document.querySelector('.courses .section-title')) {
      document.querySelector('.courses .section-title').textContent = texts[lang].coursesSection;
    }
    if (document.querySelector('.blogs .section-title')) {
      document.querySelector('.blogs .section-title').textContent = texts[lang].blogSection;
    }
    if (document.querySelector('.resources .section-title')) {
      document.querySelector('.resources .section-title').textContent = texts[lang].resourcesSection;
    }
    if (document.querySelector('.contact .section-title')) {
      document.querySelector('.contact .section-title').textContent = texts[lang].contactSection;
    }
    if (document.querySelector('.community .section-title')) {
      document.querySelector('.community .section-title').textContent = texts[lang].communitySection;
    }
    if (document.querySelector('.admin-panel .section-title')) {
      document.querySelector('.admin-panel .section-title').textContent = texts[lang].adminPanelTitle;
    }

    // Newsletter
    if (document.querySelector('#newsletter-form input')) {
      document.querySelector('#newsletter-form input').placeholder = texts[lang].subscribePlaceholder;
      document.querySelector('#newsletter-form button').textContent = texts[lang].subscribeBtn;
    }
  });
}

// ===== Placeholder Admin Forms =====
document.querySelectorAll('.admin-panel form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('This is a placeholder. Admin panel will handle real uploads.');
  });
});
