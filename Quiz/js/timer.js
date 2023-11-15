//timer
// let timer;

// function startTimer() {
//   let durataTimer = 60;
//   let tempoTrascorso = 0;
//   let timerTesto = document.getElementById("timerTesto");

//   if (tempoTrascorso !== 0) {
//     clearInterval(timer);
//     tempoTrascorso = 0;
//     timerTesto.innerHTML = " ";
//   }

//   function tempoChePassa() {
//     tempoTrascorso++;
//     let secondi = durataTimer - tempoTrascorso;
//     timerTesto.innerHTML = secondi;
//     if (secondi <= 0) {
//       clearInterval(timer);
//       console.log("timer scaduto");
//       questionNumber();
//       nextQuestion(domande);
//     }
//   }

//   timer = setInterval(tempoChePassa, 1000);
// }

// let timeLeft = 60;

// function isTimeLeft() {
//   return timeLeft > -1;
// }

// function runTimer(timerElement) {
//     const timerCircle = timerElement.querySelector('svg > circle + circle');
//     timerElement.classList.add('animatable');
//     timerCircle.style.strokeDashoffset = 1;

//     let countdownTimer = setInterval(function(){
//         if(isTimeLeft()){
//             const timeRemaining = timeLeft--;
//             const normalizedTime = (60 - timeRemaining) / 60;
//       // for clockwise animation
//       // const normalizedTime = (timeRemaining - 60) / 60;
//             timerCircle.style.strokeDashoffset = normalizedTime;
//       // timer.innerHTML = timeRemaining;
//         } else {
//             clearInterval(countdownTimer);
//             timerElement.classList.remove('animatable');
//         }
//     }, 1000);
// }

// runTimer(document.querySelector('.timer'));

// function runTimer(timerElement) {
//     const timerCircle = timerElement.querySelector('svg > circle + circle');
//     timerElement.classList.add('animatable');
//     timerCircle.style.strokeDashoffset = 1;
//     let timeLeft= 10

//     let countdownTimer = setInterval(function(){
//           let timeRemaining = timeLeft--;
//           timerTesto.innerHTML = timeRemaining;
//           const normalizedTime = (60 - timeRemaining) / 60
//           timerCircle.style.strokeDashoffset = normalizedTime;
//           if (timeRemaining <= 0) {
//             clearInterval(countdownTimer);
//             console.log("timer scaduto");
//             timerElement.classList.remove('animatable')
//             questionNumber();
//             nextQuestion(domande);
//           }
//     }, 1000);
// }

// runTimer(document.querySelector('.timer'));

// let timeLeft = 60;
// let timer = document.getElementById('timeLeft');

// function isTimeLeft() {
//   return timeLeft > -1;
// }

// function runTimer(timerElement) {
//     const timerCircle = timerElement.querySelector('svg > circle + circle');
//     timerElement.classList.add('animatable');
//     timerCircle.style.strokeDashoffset = 1;

//     let countdownTimer = setInterval(function(){
//         if(isTimeLeft()){
//             const timeRemaining = timeLeft--;
//             const normalizedTime = (60 - timeRemaining) / 60;
//       for clockwise animation
//       const normalizedTime = (timeRemaining - 60) / 60;
//             timerCircle.style.strokeDashoffset = normalizedTime;
//       timer.innerHTML = timeRemaining;
//         } else {
//             clearInterval(countdownTimer);
//             timerElement.classList.remove('animatable');
//         }
//     }, 1000);
// }

// runTimer(document.querySelector('.timer'));

// let timerOn = false;

// function runTimer(timerElement) {
//   const timerCircle = timerElement.querySelector('svg > circle + circle');
//   timerElement.classList.add('animatable');
//   timerCircle.style.strokeDashoffset = 1;
//   let timeLeft = 60;
//   let timeRemaining = 0;

// }

// setInterval(countdownTimer(timeLeft,timeRemaining,timerCircle),1000);

// function countdownTimer(timeLeft,timeRemaining,timerCircle) {
//     if (isTimeLeft(timeLeft)) {
//       console.log("banane");
//       timeRemaining = timeLeft--;
//       const normalizedTime = (60 - timeRemaining) / 60;
//       timerCircle.style.strokeDashoffset = normalizedTime;
//       timerOn = true;
//       timerTesto.innerHTML = timeRemaining;
//     } else {
//       // restart();
//     };
// }

// function isTimeLeft(timeLeft) {
//   return timeLeft > -1;
// }

// // function restart(){

// //   clearInterval(timerInterval); // Use timerInterval instead of countdownTimer
// //   console.log("timer scaduto");
// //   timerElement.classList.remove('animatable');
// //   questionNumber();
// //   nextQuestion(domande);
// // }

let timeLeft = 60;
let timer = document.getElementById("timeLeft");
let timerStop = false;

function isTimeLeft() {
	return timeLeft > -1;
}

function startTimer(timerElement) {
	const timerCircle = timerElement.querySelector("svg > circle + circle");
	timerElement.classList.add("animatable");
	timerCircle.style.strokeDashoffset = 1;

	let countdownTimer = setInterval(function () {
		if (isTimeLeft()) {
			console.log("banane");
			const timeRemaining = timeLeft--;
			const normalizedTime = (60 - timeRemaining) / 60;
			timerCircle.style.strokeDashoffset = normalizedTime;
			timer.innerHTML = timeRemaining;
		} else {
			resetTimer();
		}
	}, 1000);

	if (timerStop) {
		clearInterval(countdownTimer);
		timerElement.classList.remove("animatable");
		timerStop = false;
	}
}

function resetTimer() {
	timerStop = true;
	timeLeft = 60;
	runTimer(document.querySelector(".timer"));
	questionNumber();
	nextQuestion(domande);
}
