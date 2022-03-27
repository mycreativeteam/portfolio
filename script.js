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