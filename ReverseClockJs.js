const time = '8 july 2024'
document.getElementById("end").innerText = time;
let input = document.querySelectorAll("nav");
function day(){
    let moon = new Date(time);
    let star = new Date();
    let diff = (moon-star)/1000;
    if(diff < 0)return;
    input[0].innerHTML=(Math.floor(diff/3600/24));
    input[1].innerHTML=(Math.floor(diff/3600)%24);
    input[2].innerHTML=(Math.floor(diff/60)%60);
    input[3].innerHTML=(Math.floor(diff)%60)
}
day()
setInterval(()=>{
    day()
},1000)
/**
 //console.log('hii')
const alok = "7 September 2024"
document.getElementById("Enddate").innerText = alok;
let input = document.querySelectorAll("input")

function day() {
    let end = new Date(alok);
    let now = new Date();
    let diff = (end-now)/1000;
    if(diff<0)return;
    input[0].value=(Math.floor(diff/3600/24));
    input[1].value = (Math.floor(diff/3600)%24);
    input[2].value = (Math.floor(diff/60)%60);
    input[3].value =(Math.floor(diff)%60)
}

day()
setInterval(() => {
    day()
}, 1000);
/*function hour(){
    let end = new Date(alok);
    let now = new Date();
    let diff = (end-now)/1000;
    input[1].value = (Math.floor(diff/3600/24/60))
}*/

/* 
1day = 24 h
1hour = 60 m
60min = 3600sec
*/


