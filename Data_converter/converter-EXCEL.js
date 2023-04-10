const inputElem = document.getElementById("input");
const lines = inputElem.innerText.trim().split("\n");

const questions = [];
let currentSubSubject = "";

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();

  if (i % 7 === 0) {
    // új sub_subject mező
    currentSubSubject = line;
  } else {
    // új kérdés
    const [question, answer1, answer2, answer3, answer4] = line.split("\n");
    const answers = [
      { text: answer1, correct: false },
      { text: answer2, correct: false },
      { text: answer3, correct: false },
      { text: answer4, correct: false },
    ];

    const newQuestion = {
      subject: "",
      sub_subject: currentSubSubject,
      question: question,
      answers: answers,
    };

    questions.push(newQuestion);
  }
}

console.log(questions);

