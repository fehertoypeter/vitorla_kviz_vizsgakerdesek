const input = document.getElementById("input").textContent;
const lines = input.split("\n");

const questions = [];

let currentQuestion = null;

for (let line of lines) {
  line = line.trim();

  if (!line) {
    // Üres sor, ugorjuk
    continue;
  }

  if (currentQuestion === null) {
    // Új kérdés
    currentQuestion = {
      subject: line,
      question: "",
      answers: [],
      hint: "",
    };
  } else if (line === "ROSSZ") {
    // Kérdés vége
    questions.push(currentQuestion);
    currentQuestion = null;
  } else if (currentQuestion.question === "") {
    // Kérdés szövege
    currentQuestion.question = line;
  } else {
    // Válasz
    const isCorrect = line.startsWith("+");
    const text = line.trim();
    currentQuestion.answers.push({ text, correct: isCorrect });
  }
}

console.log(questions);

