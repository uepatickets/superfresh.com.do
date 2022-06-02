

/**
 * Lightbox component for presenting various types of media
 * @requires https://github.com/sachinchoolur/lightgallery.js
*/

const lightbox = (() => {

  let lightboxToogle = document.querySelectorAll('[data-bs-toggle="lightbox"]');
  if (lightboxToogle.length) {
    for (let i = 0; i < lightboxToogle.length; i++) {
      lightGallery(lightboxToogle[i], {
        selector: 'this',
        download: false,
        videojs: true,
        youtubePlayerParams: {
          modestbranding: 1,
          showinfo: 0,
          rel: 0
        },
        vimeoPlayerParams: {
          byline: 0,
          portrait: 0,
          color: 'fd5631'
        }
      });
    }
  }
})();

export default lightbox;
