let hours = 0;
let minutes = 0;
let seconds = 0;

let flag = 0;
let fFlag = 0;


let hoursInput = document.getElementsByTagName("input")[0];
let minutesInput = document.getElementsByTagName("input")[1];
let secondsInput = document.getElementsByTagName("input")[2];

let hoursError = document.getElementsByTagName("p")[0];
let minutesError = document.getElementsByTagName("p")[1];
let secondsError = document.getElementsByTagName("p")[2];


let startBtn = document.getElementsByTagName("button")[0];
let stopBtn = document.getElementsByTagName("button")[1];
let exitBtn = document.getElementsByTagName("button")[2];



let hoursHead = document.getElementsByTagName("h1")[1];
let minutesHead = document.getElementsByTagName("h1")[3];
let secondsHead = document.getElementsByTagName("h1")[5];


let countersDiv = document.getElementsByClassName("cont")[0];

let audio = document.querySelector("audio");

let x;


startBtn.addEventListener("click", function(){
    
    if(fFlag == 0){
        if(isNaN(hoursInput.value) == false && (+hoursInput.value >= 0) && (+hoursInput.value <= 12) && hoursInput.value != ""){
            hours = +hoursInput.value;
            hoursError.innerHTML = ""
            flag = 1;
        }
        
        else{
            flag = 0;
            hoursError.innerHTML = "Please enter a number in hours input from 0 to 12"
            fFlag == 0
        }
        
        
        if(isNaN(minutesInput.value) == false && (+minutesInput.value >= 0) && (+minutesInput.value <= 59 && minutesInput.value != "")){
            minutes = +minutesInput.value;
            flag = 1;
            minutesError.innerHTML = ""
        }
        
        else{
            flag = 0;
            minutesError.innerHTML = "Please enter a number in minutes input from 0 to 59"
            fFlag == 0
        }
        
        
        if(isNaN(secondsInput.value) == false && (+secondsInput.value >= 0) && (+secondsInput.value <= 59 && secondsInput.value != "")){
            seconds = +secondsInput.value;
            flag = 1;
            secondsError.innerHTML = ""
            fFlag == 0
        }
        
        else{
            flag = 0;
            secondsError.innerHTML = "Please enter a number in seconds input from 0 to 59"
            fFlag == 0
        }
    }
    
    if(flag == 1){
        fFlag = 1;
        countersDiv.classList.remove("hide");
        stopBtn.classList.remove("hide");
        exitBtn.classList.remove("hide");
        startBtn.setAttribute("disabled", true);
        
        hoursInput.classList.add("hide");
        minutesInput.classList.add("hide");
        secondsInput.classList.add("hide");
        
        
        hoursHead.innerHTML = hours;
        minutesHead.innerHTML = minutes;
        secondsHead.innerHTML = seconds;
        
        x = setInterval(function(){
        
            hoursHead.innerHTML = hours;
            minutesHead.innerHTML = minutes;
            secondsHead.innerHTML = seconds;
            
            seconds--;
            
            
            if(hours > 0){
                if(minutes == 0 && seconds < 0){
                    hours--;
                    minutes = 60;
                }
            }
            
            if(minutes > 0){
                if(seconds < 0){
                    seconds = 59;
                    minutes--;
                }
            }
            
            if(hours == 0 && minutes == 0 && seconds < 0){
                stopBtn.classList.add("hide");
                startBtn.classList.add("hide");
                clearInterval(x);
                audio.play();
            }
            
        }, 50)
        
    }
    
    
})




stopBtn.addEventListener("click", function(){
    clearInterval(x);
    startBtn.removeAttribute("disabled")
})


exitBtn.addEventListener("click", function(){
    startBtn.removeAttribute("disabled")
    clearInterval(x);
    countersDiv.classList.add("hide");
    stopBtn.classList.add("hide");
    exitBtn.classList.add("hide");
    startBtn.classList.remove("hide");
    
    hoursInput.classList.remove("hide");
    minutesInput.classList.remove("hide");
    secondsInput.classList.remove("hide");
    
    hoursInput.value = ""
    minutesInput.value = ""
    secondsInput.value = ""
    
    audio.pause();
    
    flag = 0;
    fFlag = 0;
})