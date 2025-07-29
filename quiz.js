const questions = [
  // E vs I
  {
    question:
      "You feel more energized after spending time with a group of people.",
    dimension: "EI",
    options: [
      { text: "Yes", value: "E" },
      { text: "No", value: "I" },
    ],
  },
  {
    question: "You enjoy being the center of attention.",
    dimension: "EI",
    options: [
      { text: "Yes", value: "E" },
      { text: "No", value: "I" },
    ],
  },
  {
    question:
      "You prefer to reflect quietly rather than engage in group discussions.",
    dimension: "EI",
    options: [
      { text: "Yes", value: "I" },
      { text: "No", value: "E" },
    ],
  },
  {
    question: "You tend to think before speaking.",
    dimension: "EI",
    options: [
      { text: "Yes", value: "I" },
      { text: "No", value: "E" },
    ],
  },
  // S vs N
  {
    question: "You rely more on experience than theories.",
    dimension: "SN",
    options: [
      { text: "Yes", value: "S" },
      { text: "No", value: "N" },
    ],
  },
  {
    question: "You focus on details rather than the big picture.",
    dimension: "SN",
    options: [
      { text: "Yes", value: "S" },
      { text: "No", value: "N" },
    ],
  },
  {
    question: "You prefer practical solutions over abstract ideas.",
    dimension: "SN",
    options: [
      { text: "Yes", value: "S" },
      { text: "No", value: "N" },
    ],
  },
  {
    question: "You are drawn to imaginative storytelling and symbolism.",
    dimension: "SN",
    options: [
      { text: "Yes", value: "N" },
      { text: "No", value: "S" },
    ],
  },
  // T vs F
  {
    question: "You value logic more than emotions when making decisions.",
    dimension: "TF",
    options: [
      { text: "Yes", value: "T" },
      { text: "No", value: "F" },
    ],
  },
  {
    question: "You find it easy to give constructive criticism.",
    dimension: "TF",
    options: [
      { text: "Yes", value: "T" },
      { text: "No", value: "F" },
    ],
  },
  {
    question: "You prioritize empathy over efficiency.",
    dimension: "TF",
    options: [
      { text: "Yes", value: "F" },
      { text: "No", value: "T" },
    ],
  },
  {
    question:
      "You often take others’ feelings into account when deciding something.",
    dimension: "TF",
    options: [
      { text: "Yes", value: "F" },
      { text: "No", value: "T" },
    ],
  },
  // J vs P
  {
    question:
      "You prefer having a detailed plan rather than going with the flow.",
    dimension: "JP",
    options: [
      { text: "Yes", value: "J" },
      { text: "No", value: "P" },
    ],
  },
  {
    question: "You like to finish tasks well before deadlines.",
    dimension: "JP",
    options: [
      { text: "Yes", value: "J" },
      { text: "No", value: "P" },
    ],
  },
  {
    question: "You enjoy keeping your options open.",
    dimension: "JP",
    options: [
      { text: "Yes", value: "P" },
      { text: "No", value: "J" },
    ],
  },
  {
    question: "You often adapt to changes spontaneously.",
    dimension: "JP",
    options: [
      { text: "Yes", value: "P" },
      { text: "No", value: "J" },
    ],
  },
];

let current = 0;

const answers = [];

const questionText = document.getElementById("question-text");
const answersDiv = document.getElementById("answers");
const progress = document.getElementById("progress");

function loadQuestion() {
  const q = questions[current];
  questionText.textContent = q.question;

  answersDiv.innerHTML = "";

  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.className = "answer-btn";
    btn.onclick = () => {
      answers.push(opt.value);
      nextQuestion();
    };
    answersDiv.appendChild(btn);
  });
  progress.textContent = `Question ${current + 1} of ${questions.length}`;
}

function nextQuestion() {
  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz(){
  const counts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  answers.forEach(letter => counts[letter]++);

   const mbti =
    (counts.E >= counts.I ? "E" : "I") +
    (counts.S >= counts.N ? "S" : "N") +
    (counts.T >= counts.F ? "T" : "F") +
    (counts.J >= counts.P ? "J" : "P");

    const params = new URLSearchParams(window.location.search);
    const username = params.get("username") || "User";

    window.location.href = `result.html?username=${encodeURIComponent(username)}&mbti=${mbti}`;
}

loadQuestion();
