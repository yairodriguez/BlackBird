window.onload = function() {
  var logo = document.querySelector('.logo'),
      backBird = document.querySelector('.back-bird'),
      foreBird = document.querySelector('.fore-bird'),
      clothesPics = document.querySelector('.clothes-pics'),
      figures = Array.prototype.slice.call(document.querySelectorAll(".clothes-pics figure")),
      offsetY;

  window.addEventListener('scroll', function() {
    offsetY = this.pageYOffset;

    logo.style.webkitTransform = 'translate(0, ' + offsetY/2 + '%)';
    backBird.style.webkitTransform = 'translate(0, ' + offsetY/4 + '%)';
    foreBird.style.webkitTransform = 'translate(0, -' + offsetY/40 + '%)';

    if(offsetY > clothesPics.offsetTop - (window.innerHeight / 1.2)) {
      figures.forEach(function(value, i) {
        (function(i) {
          setTimeout(function() {
            figures[i].classList.add('is-showing');
          }, 150 * (i + 1));
        })(i);
      });
    }
  });
};
