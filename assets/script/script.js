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
			"In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
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
		incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
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
		question: "Cereal is a soup.",
		correct_answer: "False",
		incorrect_answers: ["True"],
	},
	{
		category: "Science: Computers",
		type: "boolean",
		difficulty: "easy",
		question: "Would you rather have no nose, or no arms?",
		correct_answer: "No nose",
		incorrect_answers: ["No arms"],
	},
	{
		category: "Science: Computers",
		type: "boolean",
		difficulty: "easy",
		question: "Who would win in a fight between Superman and Batman?",
		correct_answer: "Superman",
		incorrect_answers: ["Batman"],
	},
	{
		category: "Science: Computers",
		type: "boolean",
		difficulty: "easy",
		question: "Which would you prefer to have as your roommate? A goat or a bird?",
		correct_answer: "A bird",
		incorrect_answers: ["A goat"],
	},
	{
		category: "Science: Computers",
		type: "boolean",
		difficulty: "easy",
		question: "What instrument do you think is the most annoying?",
		correct_answer: "Ukulele",
		incorrect_answers: ["Anything else"],
	},
	{
		category: "Science: Computers",
		type: "boolean",
		difficulty: "easy",
		question: "Would you rather:",
		correct_answer: "Live 100 years",
		incorrect_answers: ["Live 100 years in the future"],
	},
	{
		category: "Science: Computers",
		type: "boolean",
		difficulty: "easy",
		question: "Would you rather:",
		correct_answer: "Own 10 puppies",
		incorrect_answers: ["Own 10 kittens"],
	},
	{
		category: "Science: Computers",
		type: "boolean",
		difficulty: "easy",
		question: "Would you rather:",
		correct_answer: "Get rid of all bad drivers on the road",
		incorrect_answers: ["never have to wait in line at the store again?"],
	},
	{
		category: "Science: Computers",
		type: "boolean",
		difficulty: "easy",
		question: "Would you rather:",
		correct_answer: "Always get stuck in traffic",
		incorrect_answers: ["Always have terrible internet connection"],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "medium",
		question:
			"How are you feeling today?",
		correct_answer: "Angry",
		incorrect_answers: ["Excited", "Ok", "Sad"],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "medium",
		question:
			"How long do you think you'd survive in a zombie apocalypse?",
		correct_answer: "A day",
		incorrect_answers: ["A minute", "A year", "My whole life"],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "medium",
		question:
			"Have you ever gone a day without wearing underwear?",
		correct_answer: "I never wear underwear",
		incorrect_answers: ["Never", "Yes, it was bad", "Only once"],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "medium",
		question:
			"How many beers do you think I'd be able to consume?",
		correct_answer: "3",
		incorrect_answers: ["0", "1", "2"],
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
			"Have you ever been caught cheating on a test?",
		correct_answer: "Yes, on this one",
		incorrect_answers: ["Never", "Once", "Multiple times"],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "medium",
		question:
			"Have you ever tried to lick your toes?",
		correct_answer: "Yes but I can't",
		incorrect_answers: ["I don't have toes", "Yes and I can", "What are you talking about"],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "medium",
		question:
			"If you had to describe your personality using a kitchen appliance, what would it be?",
		correct_answer: "Cheese grater",
		incorrect_answers: ["Blender", "Teapot", "Air Fryer"],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "medium",
		question:
			"If you could date any cartoon character, who would you be and why?",
		correct_answer: "Pocahontas",
		incorrect_answers: ["Belle", "Ariel", "Snow White"],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "medium",
		question:
			"Which insect would you pick to eat if you had to?",
		correct_answer: "Grasshoppers",
		incorrect_answers: ["Beetles", "Cockroaches", "Moths"],
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
			"If you could have any superpower, what would it be?",
		correct_answer: "Shapeshifting",
		incorrect_answers: ["Invisibility", "Super strenght", "Super speed"],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "hard",
		question:
			"If you could travel anywhere in the world, where would you go?",
		correct_answer: "Japan",
		incorrect_answers: ["Argentina", "USA", "Iceland"],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "hard",
		question:
			"What is your favorite type of pizza topping?",
		correct_answer: "Pineapples and bacon",
		incorrect_answers: ["Pepperoni", "Cheese", "just sauce and mozzarella"],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "hard",
		question:
			"What is your favorite sleeping position of all time?",
		correct_answer: "On the belly",
		incorrect_answers: ["On my back", "On one side", "Standing"],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "hard",
		question:
			"What is your favorite board game?",
		correct_answer: "Dungeons and Dragons",
		incorrect_answers: ["Risk", "Monopoly", "Bang!"],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "hard",
		question:
			"Out of the four seasons, what is your favorite one?",
		correct_answer: "Winter",
		incorrect_answers: ["Autumn", "Summer", "Spring"],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "hard",
		question:
			"Do you care about what other people tell you?",
		correct_answer: "A bit",
		incorrect_answers: ["A lot", "By any means", "I hate everyone"],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "hard",
		question:
			"Who is the best starter Pokémon?",
		correct_answer: "Bulbasaur",
		incorrect_answers: ["Charmander", "Squirtle", "Pikachu"],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "hard",
		question:
			"Do you believe that love is blind?",
		correct_answer: "Yes indeed",
		incorrect_answers: ["No", "It's really rare", "Love doesn't exists"],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "hard",
		question:
			"What type of cuisine would you serve your customers if you own a five-star restaurant?",
		correct_answer: "Japanese",
		incorrect_answers: ["Mexican", "French", "Turkish"],
	},
];

// variabili globali
let arrayRisposteCorrette = [];
let arrayRisposteSbagliate = [];
let difficoltà;
let checked = false;
let cliccato = false;

let counter = 0;
let gameOver = false;

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
			const timeRemaining = timeLeft--;
			const normalizedTime = (60 - timeRemaining) / 60;
			timerCircle.style.strokeDashoffset = normalizedTime;
			timer.innerHTML = timeRemaining;
		} else {
			resetTimer();
		}
		if (timerStop) {
			clearInterval(countdownTimer);
			timerElement.classList.remove("animatable");
			timerStop = false;
		}
	}, 1000);
}

function resetTimer() {
if(!gameOver){
  timeLeft = 60;
	runTimer(document.querySelector(".timer"));
	questionNumber();
	nextQuestion(domande);
	cliccato = false;
}
}

function questionNumber() {
	return counter++;
}

// bottone inizio
let startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", function () {
	inizioDomande(), runTimer(document.querySelector(".timer"));
});

///////////// funzione selectRadio
function selectRadio(parentId, i) {
	//prendi il prescelto
	let prescelto = suddivisione(parentId, i);

	//lable
	let presceltoLabel = suddivisioneLabel(parentId, i);

	//rimuovi colore label (se precedentemente selezionata) + add colore.
	cambioColoreLabel(parentId, presceltoLabel);
	presceltoLabel.classList.add("checkRadioChecked");

	return prescelto;
}

//funzioni selectRadio
//funzione per "trovare" il pescelto(aka la box selezionata)
function suddivisione(parentId, i) {
	let parentDiv = document.getElementById(parentId);
	let nextBtn = document.getElementById("prossimaBtn");
	array = parentDiv.getElementsByClassName("checkRadio");

	// in base nome del parent mi cambia il valore del prescelto
	switch (parentId) {
		case "sceltaDifficolta":
			return (difficoltà = array[i].value);
		case "sceltaDomande":
			checked = true;
			return (valueDomande = array[i]);
		case "contenitore-risposte":
			nextBtn.removeAttribute("disabled");
			return (giusto = array[i].value);
	}
}
//funzione per "trovare" la label del prescelto
function suddivisioneLabel(parentId, i) {
	let parentDiv = document.getElementById(parentId);
	arrayLabels = parentDiv.getElementsByClassName("checkRadioLabel");

	//in base al nome del paret mi cambia il valore del prescelto
	switch (parentId) {
		case "sceltaDifficolta":
			return (difficoltaLabel = arrayLabels[i]);
		case "sceltaDomande":
			return (valueDomandeLabel = arrayLabels[i]);
		case "contenitore-risposte":
			return (giustoLabel = arrayLabels[i]);
	}
}
//funzione per rimuovere il check dalle box non usate.
function cambioColoreLabel(parentId) {
	let parentDiv = document.getElementById(parentId);
	arrayLabels = Array.from(parentDiv.getElementsByClassName("checkRadioLabel"));

	//rimuovo se c'è il checkRadioChecked
	arrayLabels.forEach((element) => {
		element.classList.remove("checkRadioChecked");
	});
	return;
}
//fine

///////////// funzione creazione array in base alla difficoltà
function preparazioneDomande(array) {
	domandeDifficoltà = arrayDomandeDifficoltà(array);
	return (domande = arrayDomandeEffettivo(questions));
}

//funzioni preparazioneDomande
function arrayDomandeDifficoltà(array) {
	let domandeDifficoltà = [];
	//creazione Array in base alla difficoltà
	array.forEach((element) => {
		if (element.difficulty == difficoltà) {
			domandeDifficoltà.push(element);
		}
	});
	return domandeDifficoltà;
}
function arrayDomandeEffettivo(array) {
	let domande = [];

	//push delle domande nell'array di gioco in modo randomico
	while (domande.length < valueDomande.value) {
		let randomNum = Math.floor(Math.random() * array.length);
		// prendere domande random in base alla difficoltà
		if (!domande.includes(array[randomNum])) {
			domande.push(array[randomNum]);
		}
	}
	return domande;
}
//fine

///////////////funzione inizio delle domande
function inizioDomande() {
	//rapido check per vedere se c'è tutto! e preparazione domande
	if (!difficoltà || !valueDomande.value) {
		alert("Scegli la tua difficoltà e quante domande!");
		return;
	} else {
		preparazioneStyle();
		//creazione array Domande
		domande = preparazioneDomande(questions);
		//push Prima domanda
		nextQuestion(domande);
		return;
	}
}
//funzioni inizioDomande
function preparazioneStyle() {
	//prendiamo il div pre-start e il div contenitore-domande
	let preStart = document.getElementById("pre-start");
	let cDomande = document.getElementById("contenitore-domande");

	//rendi il pre-start invisibile
	preStart.style.display = "none";
	//rendi il contenitore domande visibile
	cDomande.style.display = "block";
	//rendere il contenitore visibile
	let contenitore = document.getElementById("contenitore-domande");
	contenitore.style.opacity = "1";
}

//funzione next question per "settare" la nuova domanda prende l'array domande come valore.
function nextQuestion(array) {
	setBtn();
	counterText();

	if (counter < array.length && !gameOver) {
		setTestoDomanda(array);
		setArrayRisposte(array);
		setLabelsRisposte();

		return risposte;
	} else {
		gameOver = true;
		endScreen();
	}
}
//funzioni nextQeustion
function setBtn() {
	//prendiamo il bottone NEXT e lo rendiamo visibile
	let nextBtn = document.getElementById("prossimaBtn");
	nextBtn.style.opacity = "1";
}
function counterText() {
	//prendiamo il contatore domande e modifichiamo il testo in base alle domande
	let questionCounter = document.getElementById("contatoreDomande");
	questionCounter.textContent = " ";
  counterDomande = (counter)+1
	//counter è il numero di domande attuali
	questionCounter.innerHTML = "QUESTION: " + counterDomande + "<span class='pink'>" + " / " + domande.length + "</span>";
}
function setTestoDomanda(array) {
	//settiamo  testo della domanda
	testoDomanda = document.getElementById("testoDomanda");
	testoDomanda.innerHTML = array[counter].question;
}
function setArrayRisposte(array) {
	//settiamo array risposte
	risposte = [];
	//push risposte positive
	risposte.push(array[counter].correct_answer);
	//push risposte negative
	for (let i = 0; i < array[counter].incorrect_answers.length; i++) {
		risposte.push(array[counter].incorrect_answers[i]);
	}
	//qui ci starebbe uno shuffle
	return shuffleArray(risposte);
}
function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}
function setLabelsRisposte() {
	// prendiamo arrayLabel
	let labelRisposteArray =Array.from(document.querySelectorAll(
		"#contenitore-risposte label"
	)) 

	//array inputs (per length)
	let inputs = Array.from(document.querySelectorAll("#contenitore-risposte input")) ;

	//aggiungere il testo delle risposte ai label
	for (let i = 0; i < inputs.length; i++) {
    labelRisposteArray[i].style.display = "inline-block";

		labelRisposteArray[i].textContent = risposte[i];

		if (labelRisposteArray[i].textContent.length == 0) {
			labelRisposteArray[i].style.display = "none";
      console.log("labelRisposteArray[i].style.display")
		} 

	}
}
//fine

// funzione per verificare se la risposta data è corretta o sbagliata
let rispostaCorrettaIndex;
let rispostaData;
let boaleanCorretta;

function checkIfRight() {
	//prendiamo gli elementi necessari
	rispostaData = takingAnswer();

	let rispostaCorretta = domande[counter].correct_answer;
	rispostaCorrettaIndex = risposte.indexOf(rispostaCorretta);

	if (rispostaData.value == rispostaCorrettaIndex) {
		arrayRisposteCorrette.push([
			domande[counter].question,
			domande[counter].correct_answer,
		]);
		console.log("Risposta corretta");
		boaleanCorretta = true;
		//change corret answer to green
		changeColor(rispostaCorrettaIndex, boaleanCorretta);
	} else {
		arrayRisposteSbagliate.push([domande[counter]]);
		console.log("Risposta sbagliata");
		boaleanCorretta = false;
		// check wrong answer to red
		changeColor(rispostaCorrettaIndex, boaleanCorretta);
	}
}

function takingAnswer() {
	let answers = document.querySelectorAll("#contenitore-risposte input");
	answers.forEach((answer) => {
		if (answer.checked) {
			rispostaData = answer;
			// changeColor(rispostaData, rispostaCorrettaIndex);
		}
	});
	return rispostaData;
}

let giustoLabel;

function changeColor(rispostaCorrettaIndex, result) {
	labelRispostaData = arrayLabels[rispostaCorrettaIndex];

	if (result) {
		addSpecificColor(giustoLabel, "green");
	}
	if (!result) {
		addSpecificColor(giustoLabel, "red");
	}
}
function addSpecificColor(id, color) {
	if (id.classList.contains("checkRadioChecked")) {
		id.classList.add(color);
		id.classList.remove("checkRadioChecked");
		return;
	}
}
function removeColor() {
	parentDiv = document.getElementById("contenitore-risposte");
	arrayLabels = Array.from(parentDiv.getElementsByClassName("checkRadioLabel"));

	removeSpecificColor("green");
	removeSpecificColor("red");
}
function removeSpecificColor(color) {
	arrayLabels.forEach((element) => {
		if (element.classList.contains(color)) {
			element.classList.remove(color);
			return;
		}
	});
}

//funzione pulsante next
let nextBtn = document.getElementById("prossimaBtn");
nextBtn.addEventListener("click", function () {
	checkIfRight();
	timerStop = true;
	if (!cliccato) {
		setTimeout(() => {
			resetTimer(), removeColor();
		}, 1500);
		nextBtn.setAttribute("disabled", "");
	}
	cliccato = true;
});


////////////funzione endscreen
function endScreen() {
	//estetica
	endScreenEstetica();

	//numero domande totale /numero risposte corrette

	// % domande corrette
	corrette100 = convertiInPercentuale(
		arrayRisposteCorrette.length,
		domande.length
	);

	sbagliate100 = convertiInPercentuale(
		arrayRisposteSbagliate.length,
		domande.length
	);
	//settiamo il testo %
	percentualiTesto("testoRecapCorrette", "testoCorrette", corrette100, true);

	percentualiTesto("testoRecapSbagliate", "testoSbagliate", sbagliate100, false);

	cambioTestoCiambella(corrette100);

	creazioneCiambella(
		arrayRisposteCorrette.length,
		arrayRisposteSbagliate.length
	);
}

//funzioni endScreen
function convertiInPercentuale(numero, totale) {
	// ottiamo la percentuale
	var percentuale = (numero / totale) * 100;
	return percentuale;
}
function creazioneCiambella(data1, data2) {
	var ctx = document.getElementById("myDoughnutChart").getContext("2d");

	var data = {
		datasets: [
			{
				data: [data1, data2], // Specify the data values for the chart
				backgroundColor: [
					"#00ffff", // Color for the first segment
					"#d20094", // Color for the second segment
				],
        borderWidth: 0,
			},
		],
	};

	var options = {
		cutout: 145,
		rotation: 35 * Math.PI,
		responsive: false, // Set to true for a responsive chart
	};

	var myDoughnutChart = new Chart(ctx, {
		type: "doughnut",
		data: data,
		options: options,
	});
}
function endScreenEstetica() {
	let divRisposte = document.getElementById("contenitore-domande");
	let endScreen = document.getElementById("endScreen");

	divRisposte.style.display = "none";
	endScreen.style.display = "block";
}
function percentualiTesto(idTestoRecap, idTesto, variabile100,corrette) {
	//testo
	let testoRecap = document.getElementById(idTestoRecap);
	testoRecap.textContent = " ";
	let testoC100 = document.getElementById(idTesto);
	testoC100.innerHTML = parseInt(variabile100) + "%";

  if(corrette){
    testoRecap.innerHTML += arrayRisposteCorrette.length + " / " + domande.length + " questions";
  }else{
    testoRecap.innerHTML += arrayRisposteSbagliate.length + " / " + domande.length + " questions";
  }
}
function cambioTestoCiambella(argomento){
  if(argomento < 60){
    myH3 = document.querySelector(".feed h3");
    myH3.innerHTML = `Failed! <br> <span>You failed the exam.</span>`;
  }
}
