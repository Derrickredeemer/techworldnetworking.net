// ===== Multilingual Texts =====
const texts = {
  en: { home: "Home", about: "About", courses: "Courses", blog: "Blog", resources: "Resources", contact: "Contact", community: "Community", admin: "Admin" },
  fr: { home: "Accueil", about: "À propos", courses: "Cours", blog: "Blog", resources: "Ressources", contact: "Contact", community: "Communauté", admin: "Admin" },
  es: { home: "Inicio", about: "Acerca de", courses: "Cursos", blog: "Blog", resources: "Recursos", contact: "Contacto", community: "Comunidad", admin: "Admin" }
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
  });
}

// ===== Dynamic Content for Cards =====
const placeholderCards = document.querySelectorAll('.card');
placeholderCards.forEach((card, index)=>{
  // Example: You can dynamically replace content here
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
