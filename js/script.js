$(document).ready(function () {
  $('#menu').click(function () {

    $(this).toggleClass('fa-times');

    $('header').toggleClass('toggle');

  });



  $(window).on('scroll load', function () {



    $('#menu').removeClass('fa-times');

    $('header').removeClass('toggle');



    if ($(window).scrollTop() > 0) {

      $('.top').show();

    } else {

      $('.top').hide();

    }


  });



  // smooth scrolling 
  $('a[href*="#"]').on('click', function (e) {



    e.preventDefault();



    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top,
      },

      500,

      'linear'

    );


  });

  // counter function 


  // $('.counter').counterUp({
  //   delay: 10,
  //   time: 1000
  // });



});

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
  themeToggler.classList.toggle('fa-sun')
  if (themeToggler.classList.contains('fa-sun')) {
    document.body.classList.add('active');
  } else {
    document.body.classList.remove('active');
  }
}

function chngimg() {
  var img = document.getElementById('imgplus').src;
  if (img.indexOf('boostIcon.png') != -1) {
    document.getElementById('imgplus').src = 'Images/rocketIcon.png';
  } else {
    document.getElementById('imgplus').src = 'Images/boostIcon.png';
  }

}

// const counters = document.querySelectorAll('.counter');
// const speed = 1000;


// counters.forEach(counter => {
//   const updateCount = () => {
//     const target = +counter.getAttribute('data-target');
//     const count = +counter.innerText;

//     const inc = target / speed;

//     if(count < target){
//       counter.innerText = Math.ceil(count + inc);
//       setTimeout(updateCount, 1);
//     }else{
//       count.innerText = target;
//     }
//   }

//  updateCount();

// });


// let img = document.querySelector('#img');
// let btn = document.querySelector('#theme-toggler');

// if (img.src == '/images/boostIcon.png') {
//   btn.addEventListener('click', () => {
//     img.src = 'images/rocketIcon.png';
//   });
// } else {
//   btn.removeEventListener('click', () => {
//     img.src = 'images/boostIcon.png';
//   });
// }