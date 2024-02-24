//varibales
var seconds = 0o0;
var tens = 0o0;
var appendTens = document.getElementById('tens');
var appendSeconds = document.getElementById('seconds');
var startBtn = document.getElementById('startButton');
var stopBtn = document.getElementById('stopButton');
var resetBtn = document.getElementById('resetButton');
var watch = document.getElementById('watch');
var interval;

//function to start timer

 function startTImer(){
    tens++ ;
    if(tens<9){
        appendTens.innerHTML="0"+tens;
    }
    if(tens>9){
        appendTens.innerHTML=tens;
    }
    if(tens>99){
        seconds++
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0
        appendTens.innerHTML = "0" + tens;
    }

    if(seconds>9){
        appendSeconds.innerHTML = seconds;
    }
 }

 //functions to resize div

function circularShape(){
    watch.style.width='160px';
    watch.style.height='160px';
    watch.style.borderRadius='50%';
}

function normalShape(){
    watch.style.width='180px';
    watch.style.height='80px';
    watch.style.borderRadius='10px';
}


//adding event to start button

startBtn.addEventListener('click',(e)=>{
    circularShape();
    interval=setInterval(startTImer)
})

//adding event to stop button

stopBtn.addEventListener('click',(e)=>{
    clearInterval(interval)
})



//adding event to reset button

resetBtn.addEventListener('click',(e)=>{
    normalShape();
    clearInterval(interval);
    tens="00";
    seconds="00";
    appendSeconds.innerHTML=seconds;
    appendTens.innerHTML=tens;
})



