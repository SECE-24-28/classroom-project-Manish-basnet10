const questions = [
    {
        text: "Which keyword declares a constant in JavaScript?",
        options: ["var", "let", "const", "static"],
        correctIndex: 2
    },
    {
        text: "Which method is used to log to the console?",
        options: ["print()", "log()", "console()", "console.log()"],
        correctIndex: 3
    },
    {
        text: "Which of these is NOT a JavaScript data type?",
        options: ["number", "string", "boolean", "character"],
        correctIndex: 3
    }
];

let index = 0;

// DOM elements to access the html page 
const questionEl = document.getElementById("question");
const optionEl = document.getElementById("option");
const questionCount = document.getElementById("questionCount");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    const q = questions[index];
    questionCount.innerText = `Question ${index + 1} of ${questions.length}`;

    questionEl.innerText = q.text;

   
    optionEl.innerHTML = "";

    q.options.forEach((op, i) => {
        const btn = document.createElement("button");

        btn.innerText = op;
        btn.className =
            "px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 text-left";

        btn.onclick = () => {
            if (i === q.correctIndex) {
                btn.classList.add("bg-green-600");
            } else {
                btn.classList.add("bg-red-600");
            }
        };

        optionEl.appendChild(btn);
    });
}

nextBtn.addEventListener("click", () => {
    index++;

    if (index < questions.length) {
        loadQuestion();
    } else {
        questionEl.innerText = "Quiz Completed!";
        questionCount.innerText = "";
        optionEl.innerHTML = "";
        nextBtn.style.display = "none";
    }
});
loadQuestion();//load the first question on start
