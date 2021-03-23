const questions = [
  {
    question: "National animal of India?",
    option: ["Lion", "Elephant", "Tiger", "Chitaah"],
    answer: "Tiger"
  },
  {
    question: "National bird of India?",
    option: ["Crow", "Parrot", "Sparrow", "Peacock"],
    answer: "Peacock"
  },
  {
    question: "Binary code for 28?",
    option: ["11100", "10101", "01111", "11010"],
    answer: "11100"
  },
  {
    question: "Who was the captain of Indian Team in 2011 Cricket World Cup ?",
    option: ["Sachin Tendulkar", "MS. Dhoni", "Virat Kohli", "Yuvraj Singh"],
    answer: "MS. Dhoni"
  }
];
let qnumber = 0;
let correct = 0;

document.addEventListener("DOMContentLoaded", () => {
  loadingquest();
});
function loadingquest() {
  document.querySelector("#question").innerHTML = questions[qnumber].question;
  let choice = document.querySelector("#option");
  choice.innerHTML = "";

  for (let opt of questions[qnumber].option) {
    choice.innerHTML += ` <button class="button" data-answer="${opt}">${opt}</button>`;
  }
  document.querySelectorAll(".button").forEach(opt => {
    opt.onclick = () => {
      let answer = opt.dataset.answer;
      if (questions[qnumber].answer === answer) {
        alert("correct answer");
        correct++;
        document.querySelector(
          "#correct"
        ).innerHTML = `${correct} of ${qnumber + 1} `;
      } else {
        alert("wrong answer");
        document.querySelector(
          "#correct"
        ).innerHTML = `${correct} of ${qnumber + 1} `;
      }
      qnumber = qnumber + 1;
      choice.innerHTML = " ";
      if (qnumber < questions.length) {
        loadingquest();
      } else {
        document.querySelector("#end").innerHTML = "End of Quiz";
        document.querySelector("#question").innerHTML = "";
      }
    };
  });
}
