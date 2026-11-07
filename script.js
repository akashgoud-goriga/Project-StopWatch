console.log("Working....");
let hrs =document.querySelector("#Hours");
let min =document.querySelector("#Minutes");
let sec =document.querySelector("#sec");
let milsec =document.querySelector("#mc");
let stbtn=document.querySelector("#startbtn");
let stobtn=document.querySelector("#stopbtn");
let rebtn=document.querySelector("#Resetbtn");
let hourstime=0;
let minutetime=0;
let secondstime=0;
let millisecondstime=0;
let interval;

stbtn.addEventListener("click",()=>{
    console.log("w");
    interval=setInterval(()=>{
        millisecondstime++;
        if(millisecondstime===100){
            millisecondstime=0;
            secondstime++;
            if(secondstime===60){
                secondstime=0;
                minutetime++;
            }
            if(minutetime===60){
                minutetime=0;
                hourstime++
            }
            if(hourstime===12){
                hourstime=1;
            }
            
        }

        milsec.innerHTML=millisecondstime;
        sec.innerHTML=secondstime;
        min.innerHTML=minutetime;
        hrs.innerHTML=hourstime;
        
    },10)
    stbtn.disabled=true;
})
stobtn.addEventListener("click",()=>{
    clearInterval(interval);
    stbtn.disabled=false;

})
rebtn.addEventListener("click",()=>{
    milsec.innerHTML=0;
    sec.innerHTML=0;
    min.innerHTML=0;
    hrs.innerHTML=0;
})



