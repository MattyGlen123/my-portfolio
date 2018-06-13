function classToggle() {
  const navs = document.querySelectorAll('.nav-items');
  navs.forEach(nav => nav.classList.toggle('nav-toggleShow'));
}

document.querySelector('.navbar-link-toggle').addEventListener('click', classToggle);