let senecaEl = document.getElementById('seneca-point')
let platoneEl = document.getElementById('platone-point')
let leaderSEl = document.getElementById('s-leader')
let leaderPEl = document.getElementById('p-leader')


let senecaPoint = 0
let platonePoint = 0

function add1S() {
    senecaPoint += 1
    senecaEl.textContent = senecaPoint
    checkLeader()
}

function add3S() {
    senecaPoint += 3
    senecaEl.textContent = senecaPoint
    checkLeader()
}

function add5S() {
    senecaPoint += 5
    senecaEl.textContent = senecaPoint
    checkLeader()
}

function add1P() {
    platonePoint += 1
    platoneEl.textContent = platonePoint
    checkLeader()
}

function add3P() {
    platonePoint += 3
    platoneEl.textContent = platonePoint
    checkLeader()
}

function add5P() {
    platonePoint += 5
    platoneEl.textContent = platonePoint
    checkLeader()
}

function reset() {
    senecaPoint = 0
    platonePoint = 0
    senecaEl.textContent = senecaPoint
    platoneEl.textContent = platonePoint
    leaderSEl.style.visibility = "hidden";
    leaderPEl.style.visibility = "hidden";
}

function checkLeader() {
    if (senecaPoint > platonePoint) {
        leaderSEl.style.visibility = "visible"
        leaderPEl.style.visibility = "hidden"
        console.log('vince Seneca')
    }   else if (senecaPoint < platonePoint) {
        leaderSEl.style.visibility = "hidden"
        leaderPEl.style.visibility = "visible"
        console.log('vince Platone')
    }   else if (senecaPoint == platonePoint) {
        leaderSEl.style.visibility = "visible";
        leaderPEl.style.visibility = "visible";
        console.log('Parità assoluta')
    }
}

const timer = document.getElementById('timer');

const hr = 0
const min = 5
const sec = 0

const hours = hr * 3600000
const minutes = min * 60000
const seconds = sec * 1000
const setTime = hours + minutes + seconds
const starTime = Date.now()
const futureTime = starTime + setTime

const timerLoop = setInterval(countDownTimer)
countDownTimer()

function countDownTimer() {
    const currentTime = Date.now()
    const remainingTime = futureTime - currentTime

    const hrs = Math.floor((remainingTime / (1000 * 60 * 60)) % 24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    const mins = Math.floor((remainingTime / (1000 * 60)) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    const secs = Math.floor((remainingTime / 1000) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

    timer.innerHTML = `
    <div>${mins}</div>
    <div>:</div>
    <div>${secs}</div>
    `

    if(remainingTime < 0) {
        clearInterval(timerLoop)
        timer.innerHTML = `
        <div>00</div>
        <div class="colon">:</div>
        <div>00</div>
        `
    }
}

// function reset() {
//     senecaPoint = 0
//     platonePoint = 0
//     senecaEl.textContent = senecaPoint
//     platoneEl.textContent = platonePoint
//     leaderSEl.style.visibility = "hidden";
//     leaderPEl.style.visibility = "hidden";

//     const timer = document.getElementById('timer');

//     const hr = 0
//     const min = 0
//     const sec = 0

//     const hours = hr * 3600000
//     const minutes = min * 60000
//     const seconds = sec * 1000
//     const setTime = hours + minutes + seconds
//     const starTime = Date.now()
//     const futureTime = starTime + setTime

//     const timerLoop = setInterval(countDownTimer)
//     countDownTimer()

//     function countDownTimer() {
//         const currentTime = Date.now()
//         const remainingTime = futureTime - currentTime
    
//         const hrs = Math.floor((remainingTime / (1000 * 60 * 60)) % 24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
//         const mins = Math.floor((remainingTime / (1000 * 60)) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
//         const secs = Math.floor((remainingTime / 1000) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    
//         timer.innerHTML = `
//         <div>${mins}</div>
//         <div>:</div>
//         <div>${secs}</div>
//         `
    
//         if(remainingTime < 0) {
//             clearInterval(timerLoop)
//             timer.innerHTML = `
//             <div>00</div>
//             <div class="colon">:</div>
//             <div>00</div>
//             `
//         }
//     }
// }

// function countDownTimer() {
//     const currentTime = Date.now()
//     const remainingTime = futureTime - currentTime

//     const hrs = Math.floor((remainingTime / (1000 * 60 * 60)) % 24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
//     const mins = Math.floor((remainingTime / (1000 * 60)) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
//     const secs = Math.floor((remainingTime / 1000) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

//     timer.innerHTML = `
//     <div>${hrs}</div>
//     <div class="colon">:</div>
//     <div>${mins}</div>
//     <div>:</div>
//     <div>${secs}</div>
//     `

//     if(remainingTime < 0) {
//         clearInterval(timerLoop)
//         timer.innerHTML = `
//         <div>00</div>
//         <div class="colon">:</div>
//         <div>00</div>
//         <div class="colon">:</div>
//         <div>00</div>
//         `
//     }
// }

// function startTimer() {
//     const startingMinutes = 5;
//     let time = startingMinutes * 60;

//     const countdownEl = document.getElementById('timer');

//     setInterval (updateCountdown, 1000);

//     function updateCountdown() {
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;

//     seconds = seconds < 5 ? '0' + seconds : seconds;

//     countdownEl.innerHTML = `${minutes} : ${seconds}`;
//     time--;

//     }
// }


// if (senecaPoint == platonePoint) {
//     leaderSEl.style.visibility = "hidden";
//     leaderPEl.style.visibility = "hidden";
//     console.log('ma siamo uguali?')
// }   else if (senecaPoint > platonePoint) {
//     leaderSEl.style.visibility = "visible"
// }   else if (senecaPoint < platonePoint) {
//     leaderPEl.style.visibility = "visible"
// }   else {
//     console.log ('aiuto mammina')
// }

