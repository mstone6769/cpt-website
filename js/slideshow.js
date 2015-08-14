'use-strict';
var makeSlideshow = function( slideshowContainer, interval ) {
  
  var elements = {
    container: slideshowContainer,
    slides: slideshowContainer.getElementsByTagName('li')
  };
  
  elements.slidesLength = elements.slides.length;
    
  var indexes = {
    current: 0
  };

  var getClass = function ( element ) {
    return element.getAttribute && element.getAttribute( 'class' ) || '';
  };

  var addClass = function ( element, cssClass ) {
    var currentValue, newValue, finalValue;

    currentValue = getClass(element);
    newValue = currentValue + ' ' + cssClass + ' ';

    finalValue = newValue.replace(/  +/g, ' ').trim();

    element.setAttribute( 'class', finalValue );

    return element;
  };

  var removeClass = function ( element, cssClass ) {
    var currentValue, newValue, finalValue;

    currentValue = getClass(element);
    newValue = (' ' + currentValue + ' ').replace(cssClass, ' ').replace(/  +/g, ' ');

    finalValue = newValue.trim();

    element.setAttribute( 'class', finalValue );

    return element;
  };
  
  if (elements.slidesLength > 1 ) {
    indexes.next = 1;
    indexes.previous = elements.slidesLength-1;
    indexes.old = {
      previous: 0,
      next: 0,
      current: (elements.slidesLength - 1)
    };
    if (elements.slidesLength === 2) {
      addClass(elements.slides[0], 'slide-toggle slide-previous');
      addClass(elements.slides[1], 'slide-toggle');
    } else {
      addClass(elements.slides[0], 'slide-current');
      addClass(elements.slides[1], 'slide-next');
    }

    
    setInterval(function(){

      if (elements.slidesLength === 2) {
       if (indexes.current === 1) {
        addClass(elements.slides[1], 'slide-toggle-on');
       } else {
        removeClass(elements.slides[1], 'slide-toggle-on');
       }
       
       indexes.current = (indexes.current === 0) ? 1 : 0;
      } else {

        indexes.old = {
          previous: indexes.previous,
          current: indexes.current,
          next: indexes.next
        };
        indexes.previous = indexes.current;
        indexes.current = indexes.next;
        indexes.next = (indexes.current === (elements.slidesLength - 1)) ? 0 : (indexes.current + 1);

        addClass(elements.slides[indexes.previous], 'slide-previous');
        addClass(elements.slides[indexes.current], 'slide-current');
        addClass(elements.slides[indexes.next], 'slide-next');

        removeClass(elements.slides[indexes.old.previous], 'slide-previous');
        removeClass(elements.slides[indexes.old.current], 'slide-current');
        removeClass(elements.slides[indexes.old.next], 'slide-next');
      }
     
    }, interval);
  }
  
};
var startSlideshows = function() {
  var slideshows = document.querySelectorAll('.slideshow');

  for (i = 0; i < slideshows.length; i++) {
    var interval = slideshows[i].getAttribute('data-slideshow-interval');
    makeSlideshow(slideshows[i], (interval) ? interval : 2000);
  }
};
