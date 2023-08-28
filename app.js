const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading')

const currentYear = new Date().getFullYear('year');

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00` );


//set the background year

year.innerHTML = currentYear + 1;

//Countdown Update

function updateCountdown(){
    const currentTime = new Date();
    const diff = newYearTime - currentTime;


    // add values to the DOM
    const d =  Math.floor(diff / 1000 / 60 / 60/ 24);
    const h =  Math.floor(diff / 1000 / 60 / 60) % 24;
    const m =  Math.floor(diff / 1000 / 60) % 60;
    const s =  Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h <10 ? '0' + h : h;
    minutes.innerHTML = m <10 ? '0' + m : m;
    seconds.innerHTML = s <10 ? '0' + s : s;
}
//Show spiner before countdown
setTimeout(()=>{
    loading.remove();
    countdown.style.display = 'flex';
},1000)

// Runs every second
setInterval(updateCountdown, 1000);