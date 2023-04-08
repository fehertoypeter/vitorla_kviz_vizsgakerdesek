const selectedAnswers = []; 
const questionElement = document.getElementById("question");
const finalScoreElement = document.getElementById("finalScore");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const topicEl = document.getElementById("topics");
const examEL = document.getElementById("examTopics");
const modeSelection = document.getElementById("mode-selection");
const mainPage = document.getElementById("main-page");
const quizStatus = document.getElementById('quiz-status');
const restartIcon = document.getElementById("restart-icon");
const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
const outercornerbox = document.querySelector('#outercornerbox');

const countdownBox = document.querySelector("#countdownBox");
let selectedExamQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let countdownTime = 0;






topicEl.addEventListener("click", function(event) {
  const clickedTopic = event.target.textContent;
  const questionElements = document.querySelectorAll(".question");

  questionElements.forEach(function(questionElement) {
    if (questionElement.dataset.subject === clickedTopic) {
      questionElement.style.display = "block";
    } else {
      questionElement.style.display = "none";
      
    }
  });
});





//Kilistázzuk az összes témakört. 
function listTopics() {
	
	modeSelection.style.display = "none";
	document.getElementById("div3").textContent = "Válassz a lenti témakörökből";

  const topics = [];
  questions.forEach((q) => {
    if (!topics.includes(q.subject)) {
      topics.push(q.subject);
    }
  });
  topics.sort(); // Rendezzük a témaköröket névsorrendbe
  const topicEl = document.getElementById("topics");
  topics.forEach((t) => {
    const pEl = document.createElement("p"); // Létrehozunk egy új <p> elemet
    pEl.textContent = t; // Beállítjuk a szöveget
    pEl.addEventListener("click", function(event) {
      const clickedTopic = event.target.textContent;
      document.getElementById("div3").textContent = clickedTopic;
    });
    topicEl.appendChild(pEl); // Hozzáadjuk az elemet a "topics" id-jú elemhez
  });
  
}



function listExamTopics() {
  modeSelection.style.display = "none";
  document.getElementById("div3").textContent = "Válassz a lenti vizsgák közül";

  const exams = examTopics.map((topic) => topic.examName.toUpperCase());

  const examEl = document.getElementById("examTopics");
  exams.forEach((exam) => {
    const pEl = document.createElement("p");
    const examObject = examTopics.find((topic) => topic.examName.toUpperCase() === exam);
    pEl.textContent = `${exam}`;
    pEl.addEventListener("click", function(event) {
      const clickedExam = event.target.textContent.split(" - ")[0];
      console.log(`Az exam-hez tartozó topics: ${examObject.examTopics}`);
      document.getElementById("div3").textContent = clickedExam;
      // Eltároljuk a timeLimit értékét a timer változóban
      const timeLimit = examObject.timeLimit;
      countdownTime = examObject.timeLimit;
      console.log(`A timeLimit értéke: ${timeLimit}`);
      // Kiválogatjuk az exam-hez tartozó kérdéseket és hozzáadjuk a selectedExamQuestions tömbhöz
      const examTopicsArray = examObject.examTopics.split(" , ");
      const matchingQuestions = [];
      examTopicsArray.forEach((topic) => {
        matchingQuestions.push(...questions.filter((q) => q.subject.toUpperCase() === topic.toUpperCase()));
      });
      selectedExamQuestions = [...selectedExamQuestions, ...matchingQuestions];
		console.log(selectedExamQuestions);
      // Véletlenszerűen kiválasztunk `questionCount` darab kérdést a `selectedExamQuestions` tömbből
      const randomIndices = [];
      while (randomIndices.length < examObject.questionCount) {
        const randomIndex = Math.floor(Math.random() * selectedExamQuestions.length);
        if (!randomIndices.includes(randomIndex)) {
          randomIndices.push(randomIndex);

        }

      }
      selectedExamQuestions = selectedExamQuestions.filter((question, index) => randomIndices.includes(index));

      console.log(selectedExamQuestions);
    });
    examEl.appendChild(pEl);
  });

}


  
  



// Berakjuk az álltalunk kiválasztott témakör kérdéseit a selectedQuestions tömbbe. 
const topicsElem = document.getElementById("topics");
const examTopicsElem = document.getElementById("examTopics");
let selectedQuestions = [];

fetch("questions.js")
  .then(response => response.json())
  .then(data => {
    questions = data;
    listTopics();
  })
  .catch(error => {
    console.error("Error loading questions", error);
  });

topicsElem.addEventListener("click", function(event) {
  // Töröljük a korábbi kattintásokból származó kérdéseket és válaszokat
  selectedQuestions = [];

  const clickedTopic = event.target.textContent;

  questions.forEach(function(question) {
    if (question.subject === clickedTopic) {
      selectedQuestions.push(question);
    }

  });
  topicEl.style.display = "none"; // Rejtjük el a "topics" id-jú elemet
  deleteQuizStatusBoxes();
  createQuizStatusBoxes(selectedQuestions.length);
  startQuiz();
});

examTopicsElem.addEventListener("click", function(event) {
  // Töröljük a korábbi kattintásokból származó kérdéseket és válaszokat
  selectedQuestions = selectedExamQuestions.slice();

  const clickedTopic = event.target.textContent;

  questions.forEach(function(question) {
    if (question.subject === clickedTopic) {
      selectedQuestions.push(question);
    }

  });
  examEL.style.display = "none"; // Rejtjük el a "topics" id-jú elemet
  countdownClock();
  deleteQuizStatusBoxes();
  createQuizStatusBoxes(selectedQuestions.length);
  startQuiz();
});














// Létrehozzuk az üres tömböt a kérdések számával
function initializeSelectedAnswers() {
  selectedAnswers.fill(undefined);
}

// Kezdeti állapot beállítása
function startQuiz(){
restartIcon.style.display = "block";
  currentQuestionIndex = 0;
  score = 0;
  initializeSelectedAnswers(); // Inicializáljuk az selectedAnswers tömböt
  nextButton.innerHTML= "Következő";
  showQuestion();

}
// Következő kérdés megjelenítése
const toggleSwitch = document.getElementById("toggleSwitch");

function showQuestion() {
  resetState();
  quizStatus.style.display = 'block';
  div1.style.display = 'block';

  let currentQuestion = selectedQuestions[currentQuestionIndex];

  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  // Hints divbe való beszúrása
  const hintDiv = document.getElementById("hint");
  hintDiv.innerHTML = currentQuestion.hint;

 const hintIcon = document.createElement("i");
hintIcon.id = "hinticon";
hintIcon.classList.add("fas", "fa-question-circle", "fa-2x");
if (currentQuestion.hint) {
  hintIcon.style.display = "inline";
  hintIcon.onclick = showHint;
} else {
  hintIcon.style.display = "none";
}
questionElement.appendChild(hintIcon);










  currentQuestion.answers.forEach(answer => {
    if (toggleSwitch.checked && !answer.correct) {
      return;
    }
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
  
  // Quiz status boxok színének frissítése
  quizStatusBoxes.forEach((box, index) => {
    box.classList.remove("current");
    if (index === currentQuestionIndex) {
      box.classList.add("current");
    }
  });
  const selectedAnswerIndex = selectedAnswers[currentQuestionIndex];
  if (selectedAnswerIndex != null) {
    const selectedAnswerButton = answerButtons.children[selectedAnswerIndex];
    selectedAnswerButton.classList.add(selectedAnswerButton.dataset.correct ? "correct" : "incorrect");
  }
}

toggleSwitch.addEventListener("change", showQuestion);

function hint(){

};

// Választás letárolás és ellenőrzése
function selectAnswer(e) {
  const selectBtn = e.target;
  selectBtn.classList.add('selected');
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button, index) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
  storeAnswer();
}

// A függvény eltárolja a felhasználó válaszát az adott kérdésre, majd frissíti a quiz status box-okat
function storeAnswer() {
  const selectBtn = answerButtons.querySelector('.selected');
  const answerIndex = Array.from(answerButtons.children).indexOf(selectBtn);
  selectedAnswers[currentQuestionIndex] = answerIndex;
  const isCorrect = selectBtn.dataset.correct === "true";
  updateQuizStatusBox(isCorrect);
}

// Az aktuális állapot visszaállítása
function resetState(){
	nextButton.style.display = "none";
	while(answerButtons.firstChild){
		answerButtons.removeChild(answerButtons.firstChild);
	}
}

// Pontszámok megjelenítése
function showScore(){
	resetState();
	questionElement.innerHTML = ``;
	finalScore.innerHTML = `A pontszámod ${Math.floor((score / selectedQuestions.length) * 100)}%!`;
	finalScore.style.display = "block";
	nextButton.style.display = "none";
	restartButton.style.display = "block";
	restartButton.addEventListener("click", ()=>{
	location.reload();
	});


}


// Következő kérdés gomb megjelenítése és funkciója
function handleNextButton(){
	currentQuestionIndex++;
	if(currentQuestionIndex < selectedQuestions.length){
		showQuestion();
	}else{
		showScore();
	}
}

nextButton.addEventListener("click", ()=>{
	if(currentQuestionIndex < selectedQuestions.length){
		handleNextButton()
	}else{
		removeCorrectClass();
		removeInCorrectClass();
		startQuiz();
	}
});


// Fenti pontok a kérdéseket szimbolizálva

const quizStatusBoxes = [];

function deleteQuizStatusBoxes(num){
    // Töröljük a már meglévő quiz-status-box elemeket
    while (quizStatus.firstChild) {
        quizStatus.removeChild(quizStatus.firstChild);
    }
   }

function createQuizStatusBoxes(num){
    for(let i = 0; i < num; i++){
        const box = document.createElement("div");
        box.classList.add("quiz-status-box");
        box.setAttribute("data-question-no", i + 1); // hozzáadja a sorszámot a data-question-no attribútumhoz
        box.addEventListener("click", function(){
            const questionNo = this.getAttribute("data-question-no"); // lekéri a data-question-no attribútum értékét
            displayQuestion(questionNo); // a displayQuestion függvénnyel megjelenítjük a kérdést a megfelelő sorszámú quizstatusboxra kattintva
        });
        quizStatus.appendChild(box);
        quizStatusBoxes.push(box);
    }
    quizStatusBoxes.forEach(box => {
  box.addEventListener("click", showQuestionOnQuizStatusBox);

});
}

function displayQuestion(questionNo) {
    // itt a kérdés megjelenítése történik a megadott sorszám alapján
    nextButton.innerHTML = "Újrakezdés";
    nextButton.style.display = "block"
    quizStatusClickable = true;
}

// Quiz status box-ok színének frissítése
function updateQuizStatusBox(isCorrect){
  const box = quizStatusBoxes[currentQuestionIndex];
  box.classList.add(isCorrect ? "correct" : "incorrect");
}



function showQuestionOnQuizStatusBox(e) {
  const clickedBox = e.target;
  const clickedQuestionNo = parseInt(clickedBox.getAttribute("data-question-no")) - 1;
  finalScore.style.display = "none";

  if (clickedQuestionNo !== currentQuestionIndex) {
    currentQuestionIndex = clickedQuestionNo;
    showQuestion();
  }

  // Ha a válasz a quiz status boxban van megjelenítve, akkor ezt is frissíteni kell
  if (selectedAnswers[currentQuestionIndex] != null) {
    const selectedAnswerIndex = selectedAnswers[currentQuestionIndex];
    const selectedAnswerButton = answerButtons.children[selectedAnswerIndex];
    selectedAnswerButton.classList.add(selectedAnswerButton.dataset.correct ? "correct" : "incorrect");
    // Ha a válasz helytelen, akkor a helyes válasz is megjelenik a quiz status box-on
    if (!selectedAnswerButton.dataset.correct) {
      const correctAnswerIndex = selectedQuestions[currentQuestionIndex].answers.findIndex(answer => answer.correct);
      const correctAnswerButton = answerButtons.children[correctAnswerIndex];
      correctAnswerButton.classList.add("correct");
    }
  } else {
    // Ha még nem válaszoltunk az adott kérdésre, akkor töröljük a korábbi válasz jelöléseket
    removeCorrectClass();
    removeInCorrectClass();
    showScore();
  }
}



// Az X ikonra kattintás eseménykezelője
		document.getElementById('restart-icon').addEventListener('click', function() {
			// Az alkalmazás újraindítása
			location.reload();
		});

// Felugró ablak megjelenítése
		

function removeCorrectClass() {
  const correctEls = document.querySelectorAll(".correct");
  correctEls.forEach((el) => {
    el.classList.remove("correct");
  });
}
function removeInCorrectClass() {
  const correctEls = document.querySelectorAll(".incorrect");
  correctEls.forEach((el) => {
    el.classList.remove("incorrect");
  });
}


function restartQuiz() {
  // Töröljük az álltalalam adott válaszokat
  selectedAnswers.length = 0;

  // Rejtjük az összes kérdést és válaszlehetőséget
  const questionElements = document.querySelectorAll(".question");
  questionElements.forEach(questionElement => {
    questionElement.style.display = "none";
  });

  // Visszaállítjuk a "topics" és a "next" gombokat
  topicEl.style.display = "block";
  nextButton.style.display = "none";

  // Töröljük a quiz status boxokat
  const quizStatusContainer = document.getElementById("quiz-status-container");
  quizStatusContainer.innerHTML = "";

  // Visszaállítjuk a kezdő értékeket
  currentQuestionIndex = 0;
  score = 0;
}

const hintPopup = document.getElementById('hint-popup');
const overlay = document.getElementById('overlay');

function showHint() {
			document.getElementById("hint-popup").style.display = "block";
			overlay.classList.add('show');
		}

function closeHint() {
			document.getElementById("hint-popup").style.display = "none";
			overlay.classList.remove('show');
		}



const studyModeBtn = document.getElementById("study-mode-btn");
const examModeBtn = document.getElementById("exam-mode-btn");

studyModeBtn.addEventListener("click", function() {
  	document.getElementById("main-page").style.display = "none";
  	document.querySelector('.cover').style.backgroundColor = 'rgb(241 241 241 / 95%)';
/*	document.querySelector(".app").style.backgroundImage = "none";*/
  	listTopics();

});
examModeBtn.addEventListener("click", function() {
  	document.getElementById("main-page").style.display = "none";
  	document.querySelector('.cover').style.backgroundColor = 'rgb(241 241 241 / 95%)';
/*	document.querySelector(".app").style.backgroundImage = "none";*/
  	listExamTopics();

});

function countdownClock() {
const countdown = document.querySelector(".countdown");
const countdownNumber = document.querySelector(".countdown-number");
div2.classList.add("no-radius");
outercornerbox.classList.add("flexbox");

let timeLeft = countdownTime // ide állítsuk be a visszaszámlálás időtartamát másodpercben

const countdownInterval = setInterval(() => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (timeLeft <= 0) {
    clearInterval(countdownInterval);
    countdownNumber.textContent = "--:--";
    showScore();
  }

  countdownNumber.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  timeLeft -= 1;
}, 1000);
countdownBox.style.display = "block";

};







let proba = [
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Milyen minimális megengedett látástávolságig lehet üzemelni F-osztályú légtérben a látvarepülési szabályok szerint?",
		answers: [
			{ text: "5 km.", correct: false},
			{ text: "5 km, de ha a repülést olyan sebességgel hajtják végre, ami lehetővé teszi az egyéb forgalom vagy akadályok időbeni észlelését és az összeütközés elkerülését, akkor 1500 m.", correct: false},
			{ text: " 8 km FL100-on és felette, 5 km FL100 alatt.", correct: true},
			{ text: "8 km.", correct: false},
		],
		hint:"",
	}
];

function updateJSON() {
  var hint = document.getElementById("hintField").value;
  proba[0].hint = hint;
  var jsonData = JSON.stringify(questions);

  var element = document.getElementById("output");
  element.innerHTML = jsonData;
}








