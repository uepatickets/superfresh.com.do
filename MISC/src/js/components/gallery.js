

/**
 * Gallery like styled lightbox component for presenting various types of media
 * @requires https://github.com/sachinchoolur/lightgallery.js
*/

const gallery = (() => {

  let gallery = document.querySelectorAll('.gallery');
  if (gallery.length) {
    for (let i = 0; i < gallery.length; i++) {
      let thumbnails = gallery[i].dataset.thumbnails ? true : false;
      lightGallery(gallery[i], {
        selector: '.gallery-item',
        download: false,
        thumbnail: thumbnails,
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

export default gallery;
