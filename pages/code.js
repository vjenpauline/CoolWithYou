AOS.init(); // animation on Scroll Library: https://michalsnik.github.io/aos/

var scroll = document.querySelectorAll('.scroll'); // calls variable

document.onscroll = function() { // creates fade in scroll function
  scroll.forEach(scroll => {
  var position = scroll.getBoundingClientRect();
  var height = position.top;
  
  if(height < 300) { 
    scroll.classList.add('scroll--show');
  }
 });
}