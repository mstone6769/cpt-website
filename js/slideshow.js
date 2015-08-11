'use-strict';
var makeSlideshow = function(slideshowContainer, interval) {
  
  var elements = {
    container: slideshowContainer,
    slides: slideshowContainer.getElementsByTagName('li')
  };
  
  elements.slidesLength = elements.slides.length;
    
  var indexes = {
    current: 0
  };
  
  if (elements.slidesLength > 1 ) {
    indexes.next = 1;
    indexes.previous = elements.slidesLength-1;

    var updateClasses = function (cssClass, addIndex) {
      elements.slides[addIndex].className = elements.slides[addIndex].className + (' ' + cssClass);
    };
    var removeClasses = function(removeIndex) {
      elements.slides[removeIndex].className = elements.slides[removeIndex].className
           .replace(' slide-previous', '')
           .replace(' slide-next', '')
           .replace(' slide-current', '');
    };
    setInterval(function(){
     if (elements.slidesLength === 2) {
       removeClasses(0);
       removeClasses(1);
       if (indexes.current === 0) {
         
       }
       updateClasses('slide-current', indexes.current);
       indexes.current = (indexes.current === 0) ? 1 : 0;
     } else {
       for (i = 0; i < elements.slidesLength; i++) {
         removeClasses(i);
        }
        updateClasses('slide-previous', indexes.previous);
        updateClasses('slide-current', indexes.current);
        updateClasses('slide-next', indexes.next);

        indexes.previous = indexes.current;
        indexes.current = indexes.next;
        indexes.next = (indexes.current === (elements.slidesLength - 1)) ? 0 : (indexes.current + 1);
       }
     
    }, interval);
  }
  
};
var startSlideshows = function() {
  var slideshows = document.querySelectorAll('.slideshow');

  for (i = 0; i < slideshows.length; i++) {
    var interval = slideshows[i].getAttribute('data-slideshow-interval');
    makeSlideshow(slideshows[i], interval);
  }
};
