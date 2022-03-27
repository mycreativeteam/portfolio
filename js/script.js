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

});