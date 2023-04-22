const selectedAnswers = []; 
const questionElement = document.getElementById("question");
const allDiv = document.getElementById("all-div");
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
  countQuestionsByTopic();

  
}

function countQuestionsByTopic() {
  const questionsByTopic = {};
  questions.forEach(q => {
    if (!questionsByTopic[q.subject]) {
      questionsByTopic[q.subject] = 1;
    } else {
      questionsByTopic[q.subject]++;
    }
  });

  const topicEl = document.getElementById("topics");
  const topicLinks = topicEl.querySelectorAll("p");
  topicLinks.forEach(link => {
    const topicName = link.textContent;
    const questionCount = questionsByTopic[topicName] || 0;
    const countEl = document.createElement("div");
    countEl.classList.add("question-count-circle");
    countEl.textContent = questionCount;
    link.parentNode.insertBefore(countEl, link);
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
  
/*  nextButton.click(); */

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
	const quizstat = document.getElementById('quiz-status-box');
	const clickIcon = document.getElementById('sugo');
  	const quizStatusBoxes = document.querySelectorAll('.quiz-status-box');

quizStatusBoxes.forEach(box => {
  box.style.pointerEvents = 'auto';
});
  	clickIcon.style.display = "flex";
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


	const clickIcon = document.getElementById('sugo');

	clickIcon.style.display = "none";

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


const tanulasModeBtn = document.getElementById("tanulas-mode-btn");
const studyModeBtn = document.getElementById("study-mode-btn");
const examModeBtn = document.getElementById("exam-mode-btn");
const searchModeBtn = document.getElementById("search-mode-btn");

tanulasModeBtn.addEventListener("click", function() {
	allDiv.style.display = "block";
  	document.getElementById("main-page").style.display = "none";
  	document.querySelector('.cover').style.backgroundColor = 'rgb(241 241 241 / 95%)';
/*	document.querySelector(".app").style.backgroundImage = "none";*/
	document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  	listTanulsTopics();

});

studyModeBtn.addEventListener("click", function() {
  	document.getElementById("main-page").style.display = "none";
  	allDiv.style.display = "block";
  	document.querySelector('.cover').style.backgroundColor = 'rgb(241 241 241 / 95%)';
/*	document.querySelector(".app").style.backgroundImage = "none";*/
document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  	listTopics();

});
examModeBtn.addEventListener("click", function() {
  	document.getElementById("main-page").style.display = "none";
  	allDiv.style.display = "block";
  	document.querySelector('.cover').style.backgroundColor = 'rgb(241 241 241 / 95%)';
/*	document.querySelector(".app").style.backgroundImage = "none";*/
document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  	listExamTopics();

});
searchModeBtn.addEventListener("click", function() {
  	document.getElementById("main-page").style.display = "none";
  	allDiv.style.display = "block";
  	document.getElementById("kereso").style.display = "block";
  	document.querySelector('.cover').style.backgroundColor = 'rgb(241 241 241 / 95%)';
/*	document.querySelector(".app").style.backgroundImage = "none";*/
document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  	kereso();

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


function kereso(){

const searchField = document.getElementById("searchField");
const resultContainer = document.getElementById("resultContainer");

restartIcon.innerText = "Keresőmód befejezése \u2716";
restartIcon.style.display = "block";

searchField.addEventListener("input", () => {
  const searchTerm = searchField.value.toLowerCase();
  const searchTermLength = searchTerm.length;

  if (searchTermLength > 0 && searchTerm.includes(" ")) {
    const word = searchTerm.split(" ")[0];
    const matchingWordQuestions = questions.filter(question =>
      question.question.toLowerCase().split(" ").includes(word)
    );
    if (matchingWordQuestions.length > 0) {
      resultContainer.innerHTML = "";
      matchingWordQuestions.forEach(question => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("search-result-div");
        questionDiv.innerHTML = `
          <h2 id="question">${question.question}</h2>
          <div id="answer-buttons">
            ${question.answers.map(answer => `
              <button class="btn${answer.correct ? ' correct' : ''}">${answer.text}</button>
            `).join('')}
          </div>
        `;
        resultContainer.appendChild(questionDiv);
      });
    } else {
      resultContainer.innerHTML = "Nincs találat";
    }
  } else {
    let matchingQuestions = questions.filter(question =>
      question.question.charAt(0).toLowerCase() === searchTerm.charAt(0)
    );

    if (searchTerm.charAt(1)) {
      matchingQuestions = matchingQuestions.filter(question =>
        question.question.split(" ")[1].charAt(0).toLowerCase() === searchTerm.charAt(1)
      );
    }

    if (searchTerm.charAt(2)) {
      matchingQuestions = matchingQuestions.filter(question =>
        question.question.split(" ")[2].charAt(0).toLowerCase() === searchTerm.charAt(2)
      );
    }

    if (searchTerm.charAt(3)) {
      matchingQuestions = matchingQuestions.filter(question =>
        question.question.split(" ")[3].charAt(0).toLowerCase() === searchTerm.charAt(3)
      );
    }

    resultContainer.innerHTML = "";
    matchingQuestions.forEach(question => {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("search-result-div");
      questionDiv.innerHTML = `
        <h2 id="question">${question.question}</h2>
        <h3>${question.subject}</h3>
        <div id="answer-buttons">
          ${question.answers.map(answer => `
            <button class="btn${answer.correct ? ' correct' : ''}">${answer.text}</button>
          `).join('')}
        </div>
      `;
      resultContainer.appendChild(questionDiv);
    });
  }
});


}

function listTanulsTopics() {
  document.getElementById("div3").textContent = "Válassz a lenti témakörökből";
  const tanuloTemakor = document.getElementById("tanuloTemakor");
  const tanulasQuestion = document.getElementById("tanulasQuestion");
  const tanulasAnswers = document.getElementById("tanulasAnswers");
  const tanulasbox = document.getElementById("tanulas");
  tanulasbox.style.display = "block";


  const topics = {};

  questions.forEach(question => {
    const subject = question.subject;
    if (!topics[subject]) {
      topics[subject] = [question];
    } else {
      topics[subject].push(question);
    }
  });

  const sortedKeys = Object.keys(topics).sort();

  for (const subject of sortedKeys) {
    restartIcon.innerText = "Tanulómód befejezése \u2716";

    const subjectElement = document.createElement("p");
    subjectElement.innerText = subject;
    subjectElement.addEventListener("click", () => {
    	document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

const style = document.createElement("style");
style.innerHTML = "html {scroll-behavior: smooth;}";
document.head.appendChild(style);

      const clickedTanulsTopic = event.target.textContent;
      tanuloTemakor.style.display = "none";
      tanulasQuestion.innerText = "";
      tanulasAnswers.innerHTML = "";
      document.getElementById("div3").textContent = clickedTanulsTopic;

      let questionCount = 0;
      topics[subject].forEach(question => {
        questionCount++;
        const questionElement = document.createElement("h2");
        questionElement.innerText = questionCount + ". " + question.question;
        const answersElement = document.createElement("div");
        question.answers.forEach(answer => {
          const answerElement = document.createElement("p");
          answerElement.innerText = answer.text;
          if (answer.correct) {
            answerElement.classList.add("correct");
            answerElement.click();
            restartIcon.style.display = "block";
          } else {
            answerElement.addEventListener("click", () => {
              answerElement.style.color = "red";
            });
          }
          answersElement.appendChild(answerElement);
        });
        tanulasAnswers.appendChild(questionElement);
        tanulasAnswers.appendChild(answersElement);
      });
    });
    tanuloTemakor.appendChild(subjectElement);
  }
}









function scrollToTop() {
window.scrollTo({
    top: 0,
    behavior: 'smooth'
})
}





