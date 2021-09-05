const today = document.querySelector("#date");
const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',];

function now(){
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const day = now.getDay();

today.innerText = `${year}.${month}.${date}.(${week[day]}) `;
}

now();