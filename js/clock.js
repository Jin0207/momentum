const clock = document.querySelector("h2#clock");

function onClock(){
    const now = new Date();
    const hour = String(now.getHours()).padStart("2", "0");
    const second = String(now.getSeconds()).padStart("2", "0");
    const minute = String(now.getMinutes()).padStart("2", "0");
    clock.innerText = `${hour} : ${minute} : ${second}`;
    
}
onClock();
setInterval(onClock, 1000);