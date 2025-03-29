START = document.getElementById("start").addEventListener("click", startTimer);
STOP = document.getElementById("stop").addEventListener("click", stopTimer);
RESET = document.getElementById("reset").addEventListener("click", resetTimer);
TIME = document.getElementById("time");
// let hours = 0;
// let minutes = 0;
// let seconds = 0;
// let time = 0;

let timer = 0;
let startTime;

function startTimer() {
    startTime = new Date().valueOf();

    clearInterval(timer);
    
    timer = setInterval(() => {
        // seconds += 1;
        // // if(seconds >= 60) {
        // //     minutes += 1;
        // //     seconds = 0;
        // // }
        // // if (minutes >= 60) {
        // //     hours += 1;
        // //     minutes = 0;
        // // }
        // const s = seconds % 60;
        // const h = Math.floor(seconds / 3600);
        // const m = Math.floor(seconds / 60) - h *60;

        let current = new Date().valueOf();
        let deltaTime = current -startTime;
        
        let seconds = Math.floor( deltaTime / 1000);
        const s = seconds % 60;
        const h = Math.floor(seconds / 3600);
        const m = Math.floor(seconds / 60) - h *60;
    

        TIME.innerHTML = `${("00"+h).slice(-2)}:${("00"+m).slice(-2)}:${("00"+s).slice(-2)}`;
    },1000);
    
    time = 1;
}

function stopTimer() {
    clearInterval(timer);
    time = 0;
}

function resetTimer() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    TIME.innerHTML = `${("00"+h).slice(-2)}:${("00"+m).slice(-2)}:${("00"+s).slice(-2)}`;
    time = 0;
}