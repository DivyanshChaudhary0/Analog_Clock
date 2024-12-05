
let second_hand = document.querySelector(".second");
let minute_hand = document.querySelector(".minute");
let hour_hand = document.querySelector(".hour");

let dhour = document.querySelector(".dhours");
let dminute = document.querySelector(".dminute");
let dsecond = document.querySelector(".dsecond");


setInterval(function(){
    let seconds = new Date().getSeconds();
    let minute = new Date().getMinutes();
    let hour = new Date().getHours();
    dhour.innerHTML = `${hour%12 == 0 ? 12 : hour%12 || hour%12 < 0 ? "0"+hour%12 : hour%12}`;
    dminute.innerHTML = `${minute < 10 ? "0"+minute : minute}`;
    dsecond.innerHTML = `${seconds < 10 ? "0"+seconds : seconds}`;  // ${seconds < 10 ? "0"+seconds : seconds}
    second_hand.style.transform = `rotate(${seconds*6}deg) translateY(-50%)`;
    minute_hand.style.transform = `rotate(${minute*6}deg) translateY(-50%)`;
    hour_hand.style.transform = `rotate(${(hour%12)*30}deg) translateY(-50%)`;
    console.log(seconds,minute,hour);
},1000)