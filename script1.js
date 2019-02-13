// jumbotron
// $(window).scroll(function(){
//   var wScroll = $(this).scrollTop();

//   $('header').css({
//     'transform' : 'translate(0px, '+ wScroll +'px)'
//   });
// });

$(document).ready(function(){
  // ini header height
  var headerHight = $('header').outerHight();

  $('.nav-link').click(function(){
    var linkHref = $(this).attr('href');

    $('body').animete({
      scrollTop: $(linkHref).offset().top - headerHight
    }, 1000);
    
    // e.preventDefault();
  });
});



// $(document).ready(function(){
//   $('.nav-link').click(function(){
//     $(this).toggleClass('active');
//   });
// });


// navbarMenu.addEventListener('click', toggleMenu);

// function toggleMenu() {
//     if (!showMenu) {
//       navbarMenu.classList.add('close');
//       menu.classList.add('show');
//       menuNav.classList.add('show');
//       menuBranding.classList.add('show');
//       navItems.forEach(item => item.classList.add('show'));

//       // Set Menu State
//       showMenu = true;
//     }else {
//       navbarMenu.classList.remove('close');
//       menu.classList.remove('show');
//       menuNav.classList.remove('show');
//       menuBranding.classList.remove('show');
//       navItem.forEach(item => item.classList.remove('show'));

//       // Set Menu State
//       showMenu = false;
//     }
//   }

// function smoothScroll(target,duration){
//   var target = document.querySelector(target);
//   var targetPosition = target.getBoundingClientRect().top;
//   var starPosition = window.pageYOffset;
//   var distance = targetPosition - starPosition;
//   var starTime = null;

//   function animation(currentTime){
//     if(starTime === null ) starTime = currentTime;
//     var run = ease(timeElapsed,starPosition,distance,duration);
//     window.scrollTo(0,run);
//     if(timeElapsed < duration) requestAnimationFrame(animation);
//   }

//   function ease(t,b,c,d) {
//     t /= d / 2;
//     if (t < 1) return c / 2 * t * t + b;
//     t--;
//     return -c / 2 * (t* (t - 2) - 1) + b;
//   }
//   requestAnimationFrame(animation);
// }

// var section1 = document.querySelector('#sect1');
// var section3 = document.querySelector('#sect3');
// var section4 = document.querySelector('#sect4');
// var section5 = document.querySelector('#sect5');

// section1.addEventListener('click',function(){
//   smoothScroll('#sec1', 4000);
// });
// section3.addEventListener('click',function(){
//   smoothScroll('#sec3', 4000);
// });
// section4.addEventListener('click',function(){
//   smoothScroll('#sec4', 4000);
// });
// section5.addEventListener('click',function(){
//   smoothScroll('#sec5', 4000);
// });

