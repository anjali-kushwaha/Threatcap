let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
}

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});


/**/
const countdownDate = new Date('July 1, 2024 00:00:00').getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelectorAll('.count.days').forEach(element => {
        element.textContent = days < 10 ? '0' + days : days;
    });
    document.querySelectorAll('.count.hours').forEach(element => {
        element.textContent = hours < 10 ? '0' + hours : hours;
    });
    document.querySelectorAll('.count.minutes').forEach(element => {
        element.textContent = minutes < 10 ? '0' + minutes : minutes;
    });
    document.querySelectorAll('.count.seconds').forEach(element => {
        element.textContent = seconds < 10 ? '0' + seconds : seconds;
    });

    if (distance < 0) {
        clearInterval(countdown);
        document.querySelectorAll('.count').forEach(element => {
            element.textContent = '00';
        });
    }
}, 1000);
