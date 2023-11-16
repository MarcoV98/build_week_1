// array domande
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// variabili globali
let arrayRisposteCorrette = [];
let arrayRisposteSbagliate = [];
let risposte = [];
let valueDomande = 0;
let difficoltà ;
let diffCheck = false;

let counter = 0;
let gameOver = false;



//timer 
// function runTimer(timerElement) {
//   const timerCircle = timerElement.querySelector('svg > circle + circle');
//   timerElement.classList.add('animatable');
//   timerCircle.style.strokeDashoffset = 1;

//   let timeLeft = 60;
//   let timerOn = false; // Initialize timerOn
//   let setTimer; // Declare setTimer

//   function resetTimer() {
//     console.log("sono qui")
//     clearInterval(setTimer);
//     timerElement.classList.remove('animatable');
//     timeLeft = 60;
//     timerOn = false;
//     timerTesto.innerHTML = timeLeft; // Reset the displayed time
//     timerCircle.style.strokeDashoffset = 1; // Reset the circle
//   }

//   function countdownTimer() {
//     if (isTimeLeft()) {
//       const timeRemaining = timeLeft--;
//       const normalizedTime = (60 - timeRemaining) / 60;
//       timerCircle.style.strokeDashoffset = normalizedTime;
//       timerOn = true;
//       timerTesto.innerHTML = timeRemaining;
//     } else {
//       clearInterval(setTimer);
//       console.log("timer scaduto");
//       timerElement.classList.remove('animatable');
//       questionNumber();
//       nextQuestion(domande);
//     }
//   }

//   function isTimeLeft() {
//     console.log(timeLeft)
//     return timeLeft > -1;
//   }

//   // Sposta la chiamata a resetTimer() qui
//   resetTimer(); // Reset the timer when the function is called
//   console.log(timeLeft);

//   setTimer = setInterval(countdownTimer, 1000);
// }

let timeLeft = 60;
let timer = document.getElementById("timeLeft");
let timerStop = false;

function isTimeLeft() {
	return timeLeft > -1;
}

function runTimer(timerElement) {
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


// bottone inizio 
let startBtn = document.getElementById("startBtn")
startBtn.addEventListener("click",function(){
  inizioDomande(), runTimer(document.querySelector('.timer'))
})


// // Esempio di chiamata della funzione
// runTimer(document.getElementById('ilTuoTimer'));

function selectRadio(parentId, i) {
  let parentDiv = document.getElementById(parentId);

  // Verifica se il div genitore esiste
  if (parentDiv) {
    // Trova tutti gli elementi con la classe "checkRadio" all'interno del div genitore
    let radioBtnArray = parentDiv.getElementsByClassName("checkRadio");

    // Verifica se l'indice fornito è valido
    if (i >= 0 && i < radioBtnArray.length) {
      // Rimuovi la classe "checkRadioChecked" da tutti gli elementi
      Array.from(parentDiv.getElementsByClassName("checkRadioLabel")).forEach(label => {
        label.classList.remove("checkRadioChecked");
      });

      // Imposta il radio button corrispondente all'indice come selezionato
      radioBtnArray[i].checked = true;

      // Aggiungi la classe "checkRadioChecked" al label corrispondente all'indice
      let labelRadioBtnArray = Array.from(parentDiv.getElementsByClassName("checkRadioLabel"));
      labelRadioBtnArray[i].classList.add("checkRadioChecked");

      if(radioBtnArray[i].name === "numDomande"){
        valueDomande = radioBtnArray[i].value ;
        inputChecked = radioBtnArray[i] 
      }  
      if(radioBtnArray[i].name === "difficoltà"){
        difficoltà = radioBtnArray[i].value;
        console.log(difficoltà)
      }
  }
}
}
//funzione preparazione array domande.///////////////////////

//array è l'array di domande, num è il quantitativo preso poi con un input.number
function preparazioneDomande (array,num){

    let domande = []

    if (num > array.length) {
      console.error("Il numero richiesto di domande supera la lunghezza dell'array delle domande.");
      return array;  // ritorna tutto l'array di domande disponibili
    }
    // array domande - difficoltà 
    let domandeDifficoltà = []
  
    console.log(difficoltà)
    array.forEach(element => {
      if(element.difficulty == difficoltà){
        domandeDifficoltà.push(element)
      }
    });

    while (domande.length < num) {
      let randomNum = Math.floor(Math.random() * domandeDifficoltà.length);
  
    // prendere domande random in base alla difficoltà
      if (!domande.includes(domandeDifficoltà[randomNum])) {
        domande.push(domandeDifficoltà[randomNum]);
      }
    }
    return domande;
}

function checkDifficoltà(){
  let sceltaDifficoltà = document.querySelectorAll("#sceltaDifficolta input")

  console.log(sceltaDifficoltà)

  sceltaDifficoltà.forEach(element => {
    console.log(element.checked)

    if(element.checked){
      diffCheck = true;
    }
    else{
      return
     }
  })
}

//funzione inizio delle domande

function inizioDomande(){
  //check difficoltà
  checkDifficoltà();

  if(!diffCheck){
    alert("scegli una difficoltà")
    return
  }


  let preStart = document.getElementById("pre-start")
  let cDomande = document.getElementById("contenitore-domande")

   //check quante domande vuoi (in realtà penso di modificarlo in base alla difficoltà)
  let value = checkValue();
  if(value !== ""){
    
  //rendi il pre-start invisibile
    preStart.style.display = "none";
  //rendi il contenitore domande visibile
  cDomande.style.display = "block";

  //rendere il contenitore visibile
  let contenitore = document.getElementById("contenitore-domande")
  contenitore.style.opacity = "1"

  //creazione array Domande
  domande = preparazioneDomande(questions,value)
  //prossima domanda
  nextQuestion(domande)
  return
  }
   //se non è stato stato segnato niente in quante domande manda una notifica a riguardo.
  console.log("inserisci un numero valido")
  return
}

//funzione per avere un tot definito dall'utente di domande (da cambiare probabilmente in base alla difficoltà)
function checkValue(){
  console.log(valueDomande)
  return value = parseInt(valueDomande);
}

 let inputChecked


//funzione next question per "settare" la nuova domanda prende l'array domande come valore.



function nextQuestion(array){
  //prendiamo il bottone NEXT
  let nextBtn = document.getElementById("prossimaBtn")

  //prendiamo il contatore domande e modifichiamo il testo in base alle domande
  let questionCounter = document.getElementById("contatoreDomande")
  questionCounter.textContent = ""

  //counter è il numero di domande attuali
  questionCounter.innerHTML = counter + " / " + domande.length
  clearInterval(timer);

  if(counter<array.length && !gameOver){
    //settiamo  testo della domanda 
    testoDomanda = document.getElementById("testoDomanda")

    testoDomanda.innerHTML = array[counter].question;

    console.log(testoDomanda)

    //settiamo risposte 
    risposte = []
 
    //push domande positive
    risposte.push(array[counter].correct_answer)

    //push domande negative
    for(let i = 0; i < array[counter].incorrect_answers.length ;i++){
      risposte.push(array[counter].incorrect_answers[i])
    }

    //qui ci starebbe uno shuffle
    shuffleArray(risposte);

    // prendiamo le varie label 
    let labelRisposteArray = document.querySelectorAll("#contenitore-risposte label")
    let inputs = document.querySelectorAll("#contenitore-risposte input")

    nextBtn.style.opacity ="1"

    //aggiungere il testo delle risposte ai label
    for (let i=0; i<inputs.length;i++){
      //resetto il checked
      inputs[i].checked = false;

      labelRisposteArray[i].textContent = risposte[i]

      if(labelRisposteArray[i].textContent.length === 0){
        labelRisposteArray[i].style.display = "none";
      }else{
        labelRisposteArray[i].style.display = "inlineBlock";
      }
    }
    return risposte

  }else{
    console.log("gameOver")
    gameOver = true;
    endScreen();
  }
}

function shuffleArray(array){
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function checkIfRight() {
  if (!gameOver) {
    let answers = document.querySelectorAll("#contenitore-risposte input");
    let rispostaCorretta = domande[counter].correct_answer;
    let rispostaCorrettaIndex = risposte.indexOf(rispostaCorretta)
    let rispostaData = "";

    answers.forEach(answer => {
      if (answer.checked) {
        rispostaData = answer.value;
      }
    })
    if (rispostaData == rispostaCorrettaIndex) {
      arrayRisposteCorrette.push([domande[counter].question, domande[counter].correct_answer])
      console.log("Risposta corretta");
    } else {
      arrayRisposteSbagliate.push([domande[counter]])
      //per mostrare la risposta data devo smanettare 
      console.log("Risposta sbagliata");
    }
    counter++; // Incrementa il contatore delle domande
  }
}
function questionNumber(){
  return counter++;
 }

//funzione pulsante next
let nextBtn = document.getElementById("prossimaBtn");
nextBtn.addEventListener("click",function(){
  checkIfRight();
  resetTimer();
})

// convertire in %

function convertiInPercentuale(numero,totale) {
  // Moltiplica per 100 per ottenere la percentuale e aggiungi il simbolo percentuale
  var percentuale = (numero/totale) * 100 + "%";
  return percentuale;
}


//funzione endscreen 
function endScreen(){
  let divRisposte = document.getElementById("contenitore-domande")
  let endScreen = document.getElementById("endScreen")

  //estetica
  divRisposte.style.display= "none";
  endScreen.style.display="block";

  //numero domande totale /numero risposte corrette

  let testoRecapCorrette = document.getElementById("testoRecapCorrette")

  testoRecapCorrette.textContent = " "
  testoRecapSbagliate.textContent = " "
  // % domande corrette
  corrette100 = convertiInPercentuale(arrayRisposteCorrette.length,domande.length)
  let testoC100 = document.getElementById("testoCorrette")
  console.log(testoC100)

  testoC100.innerHTML= corrette100;

  testoRecapCorrette.innerHTML += arrayRisposteCorrette.length + " / " + domande.length

  // % domande sbagliate
  sbagliate100 = convertiInPercentuale(arrayRisposteSbagliate.length,domande.length)
  let testoS100 = document.getElementById("testoSbagliate")
  console.log(testoS100)

  testoS100.innerHTML= sbagliate100;

  console.log(arrayRisposteSbagliate.length)


  testoRecapSbagliate.innerHTML += arrayRisposteSbagliate.length + " / " + domande.length

  creazioneCiambella(arrayRisposteCorrette.length , arrayRisposteSbagliate.length)
}


const ctx = document.getElementById('myChart');

function creazioneCiambella(data1, data2){
new Chart(ctx, {
  type: 'doughnut',
  data: {

    datasets: [{
      label: '',
      data: [data1, data2,],
      backgroundColor: [
        '#D20094',
        '#00ffff',
      ],
    }]
  },
});

}