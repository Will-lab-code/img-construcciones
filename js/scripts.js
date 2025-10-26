// Navegación móvil
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
  }
});

// Detectar la sección activa al hacer scroll y marcarla en el menú
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');

  window.addEventListener('scroll', () => {
    let scrollY = window.scrollY + 200;

    sections.forEach(sec => {
      const id = sec.getAttribute('id');
      const offset = sec.offsetTop;
      const height = sec.offsetHeight;

      if (scrollY >= offset && scrollY < offset + height) {
        navLinks.forEach(link => link.classList.remove('active'));
        const current = document.querySelector(`.nav a[href="#${id}"]`);
        if (current) current.classList.add('active');
      }
    });
  });
});

// Desplazamiento suave
document.querySelectorAll('.nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});
