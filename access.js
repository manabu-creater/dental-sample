window.addEventListener('DOMContentLoaded', function(){
  var _window = $(window),
      _header = $('.navigation'),
      heroBottom;
  
  _window.on('scroll',function(){     
      heroBottom = $('.header').height();
      if(_window.scrollTop() > heroBottom){
          _header.addClass('fixed');   
      }
      else{
          _header.removeClass('fixed');   
      }
  });

 
  _window.trigger('scroll');
});