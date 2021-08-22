// handle navbar ons scroll
const navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    navbarDiv.classList.add('navbar-cng');
  } else {
    navbarDiv.classList.remove('navbar-cng');
  }
});

// handle navbar show and collapse
const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');
// show navbar
navbarShowBtn.addEventListener('click', () => {
  console.log('clicked');
  navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});
// hide navbar
navbarCloseBtn.addEventListener('click', () => {
  navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});
// hide navbar clicking anywhere!
document.addEventListener('click', (e) => {
  if (
    e.target.id != 'navbar-collapse' &&
    e.target.id != 'navbar-show-btn' &&
    e.target.parentElement.id != 'navbar-show-btn'
  ) {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
  }
});
