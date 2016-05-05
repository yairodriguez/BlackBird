window.onload = function() {
  var logo = document.querySelector('.logo'),
      backBird = document.querySelector('.back-bird'),
      foreBird = document.querySelector('.fore-bird');

  window.addEventListener('scroll', function() {
    var offsetY = this.pageYOffset;

    logo.style.webkitTransform = 'translate(0, ' + offsetY/2 + '%)';
    backBird.style.webkitTransform = 'translate(0, ' + offsetY/4 + '%)';
    foreBird.style.webkitTransform = 'translate(0, -' + offsetY/40 + '%)';
  });
};
