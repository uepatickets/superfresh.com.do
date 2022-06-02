/**
 * Add shadow effect to fixed to top navigation bar
*/

const stickyNavbar = (() => {

  let navbar = document.querySelector('.navbar.fixed-top');

  if (navbar == null) return;

  let navbarClass = navbar.classList,
      scrollOffset = 20;

  window.addEventListener('scroll', (e) => {
    if (e.currentTarget.pageYOffset > scrollOffset) {
      navbar.classList.add('navbar-stuck');
    } else {
      navbar.classList.remove('navbar-stuck');
    }
  });
    
})();

export default stickyNavbar;
