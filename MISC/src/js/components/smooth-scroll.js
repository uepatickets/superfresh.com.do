/**
 * Anchor smooth scrolling
 * @requires https://github.com/cferdinandi/smooth-scroll/
*/

const smoothScroll = (() => {

  let selector = '[data-scroll]',
  fixedHeader = '[data-scroll-header]',
  scroll = new SmoothScroll(selector, {
    speed: 800,
    speedAsDuration: true,
    offset: (anchor, toggle) => {
      // if (toggle) {
      //   return 20;
      // } else {
      //   return 40;
      // }
      return toggle.dataset.scrollOffset || 40;
    },
    header: fixedHeader,
    updateURL: false
  });

})();

export default smoothScroll;
