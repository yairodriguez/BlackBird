window.onload = function() {
  var logo = document.querySelector('.logo'),
      backBird = document.querySelector('.back-bird'),
      foreBird = document.querySelector('.fore-bird'),
      clothesPics = document.querySelector('.clothes-pics'),
      figures = Array.prototype.slice.call(document.querySelectorAll(".clothes-pics figure")),
      offsetY, opacity, offsetPost,
      periscopeWindow = document.querySelector('.periscope'),
      promoBlock = document.querySelector('.promo'),
      blogContainer = document.querySelector('.blog-posts'),
      firstPost = document.querySelector('.post-1'),
      thirdPost = document.querySelector('.post-3'),
      birdBox = document.querySelector('.bird-box').clientHeight;

  window.addEventListener('scroll', function() {
    offsetY = this.pageYOffset;

    if (offsetY <= birdBox) {
      logo.style.webkitTransform = 'translate(0, ' + offsetY/2 + '%)';
      backBird.style.webkitTransform = 'translate(0, ' + offsetY/4 + '%)';
      foreBird.style.webkitTransform = 'translate(0, -' + offsetY/40 + '%)';
    }

    if(offsetY > clothesPics.offsetTop - (window.innerHeight / 1.2)) {
      figures.forEach(function(value, i) {
        (function(i) {
          setTimeout(function() {
            figures[i].classList.add('is-showing');
          }, 150 * (i + 1));
        })(i);
      });
    }

    if(offsetY > periscopeWindow.offsetTop - window.innerHeight) {
      periscopeWindow.style.backgroundPosition = "center " + (offsetY - periscopeWindow.offsetTop) + "px";
      opacity = (offsetY - periscopeWindow.offsetTop + window.innerHeight / 2) / (offsetY / 5);
      promoBlock.style.opacity = opacity;
    }

    if(offsetY > blogContainer.offsetTop - window.innerHeight) {
      offsetPost = Math.min(0, offsetY - blogContainer.offsetTop + window.innerHeight / 3);
      firstPost.style.webkitTransform = "translate(" + offsetPost + "px, " + Math.abs(offsetPost * .2) + "px)";
      thirdPost.style.webkitTransform = "translate(" + Math.abs(offsetPost) + "px, " + Math.abs(offsetPost * .2) + "px)";
    }
  });
};
