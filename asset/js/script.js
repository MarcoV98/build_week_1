
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
];

// variabili globali
let arrayRisposteCorrette = [];
let arrayRisposteSbagliate = [];
let risposte = [];

let counter = 0;
let gameOver = false;

// bottone inizio 
let startBtn = document.getElementById("startBtn")
startBtn.addEventListener("click",inizioDomande)

//timer 
let timer;
//timer(da rendere meno console.log)

function startTimer(){
  let durataTimer = 10
  let tempoTrascorso  = 0
  let timerTesto = document.getElementById("timerTesto")

  if( tempoTrascorso !== 0){
    clearInterval(timer)
    tempoTrascorso = 0;
    timerTesto.innerHTML = " "
  }

  function tempoChePassa(){ 
    tempoTrascorso++
    timerTesto.innerHTML = tempoTrascorso
    let secondi = durataTimer - tempoTrascorso
    console.log(secondi)
    // creazioneCiambella(timer, 60)

    if(secondi <= 0){
      clearInterval(timer)
      console.log("timer scaduto")
      questionNumber();
      nextQuestion(domande)
    }
  }
  console.log(tempoTrascorso)
  timer = setInterval(tempoChePassa,1000);

  creazioneCiambella(timer, 60)
}

//funzione preparazione array domande.///////////////////////

//array è l'array di domande, num è il quantitativo preso poi con un input.number
function preparazioneDomande (array,num){
  //function separata?
  let sceltaDifficoltà = document.querySelectorAll("#sceltaDifficolta input")

  let difficoltà
  sceltaDifficoltà.forEach(element => {
    console.log(element.checked)
    if(element.checked){
      difficoltà = element.value
      console.log(difficoltà)
    }
  });


  if (num > array.length) {
    console.error("Il numero richiesto di domande supera la lunghezza dell'array delle domande.");
    return array;  // ritorna tutto l'array di domande disponibili
  }

  let domande = []

  // array domande - difficoltà 
  let domandeDifficoltà = []

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

//funzione inizio delle domande

function inizioDomande(){
  let preStart = document.getElementById("pre-start")

   //check quante domande vuoi (in realtà penso di modificarlo in base alla difficoltà)
  let value = checkValue();
  if(value !== ""){
    
  //rendi il pre-start invisibile
    preStart.style.opacity = 0;

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
  let nDomande = document.getElementById("nDomande");
  return value = nDomande.value;
}

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
    testoDomanda = document.querySelector("h2")
    testoDomanda.innerText = array[counter].question;

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

    //non ricordo
    nextBtn.style.opacity ="1"

    //aggiungere il testo delle risposte ai label
    for (let i=0; i<inputs.length;i++){
      //resetto il checked
      inputs[i].checked = false;

      labelRisposteArray[i].textContent = risposte[i]

      if(labelRisposteArray[i].textContent.length === 0){
        inputs[i].style.opacity = "0";
      }else{
        inputs[i].style.opacity = "1";
      }
    }

    startTimer();
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
  nextQuestion(domande)
})

//funzione endscreen 
function endScreen(){
  let divRisposte = document.getElementById("contenitore-domande")
  let endScreen = document.getElementById("endScreen")

  //estetica
  divRisposte.style.opacity="0";
  endScreen.style.opacity="1";

  console.log(arrayRisposteCorrette)
  //numero domande totale /numero risposte corrette

  let testoRecapCorrette = document.getElementById("testoRecapCorrette")

  testoRecapCorrette.textContent = " "

  // % domande corrette
  testoRecapCorrette.innerHTML += arrayRisposteCorrette.length + " / " + domande.length


  let testoRecapSbagliate = document.getElementById("testoRecapSbagliate")

  testoRecapSbagliate.textContent = " "

  // % domande sbagliate

  testoRecapSbagliate.innerHTML += arrayRisposteSbagliate.length + " / " + domande.length

  creazioneCiambella(arrayRisposteCorrette.length , arrayRisposteSbagliate.length)
}

function creazioneCiambella(data1, data2){
  const data = {
    datasets: [{
      label: 'My First Dataset',
      data: [data1, data2],
      backgroundColor: [
        '#C2128D',
        '#01FFFF',
      ],
      hoverOffset: 4,
      cutout: 280,
    }]
  };
  const ctx = document.getElementById('myChart')
  // ctx.style.boxShadow= "12px 21px 24px 0px rgba(0, 0, 0, 0.21)"
  ctx.style.boxShadow= "rgb(38, 57, 77) 0px 20px 30px -10px"
  ctx.style.borderRadius="1000px"
  
  new Chart(ctx, {
    type: 'doughnut',
    data: data,
  });
}









