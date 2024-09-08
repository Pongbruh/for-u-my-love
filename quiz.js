const quizData = [
    {
        question: "When is our anniversary?",
        options: ["12", "14", "23", "24"],
        answer: 2
    },
    {
        question: "What is my favorite color?",
        options: ["Black", "Yellow", "Red", "Blue"],
        answer: 0
    },
    {
        question: "Do I like book?",
        options: ["No", "Yes"],
        answer: 0
    },
    {
        question: "When is my Brithday?",
        options: ["04", "05", "06", "07"],
        answer: 2
    },
    {
        question: "which one is I like the most?",
        options: ["Watermelon", "Banana", "Mango", "Dragonfurit"],
        answer: 0
    },
    {
        question: "Do you love me?",
        options: ["Yes", "Not really", "No", "Maybe"],
        answer: 0 
    },
];

let currentQuestion = 0;
let score = 0;
const quiz = document.getElementById('quiz');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');

function loadQuestion() {
    const questionData = quizData[currentQuestion];
    quiz.innerHTML = `
        <h2>${questionData.question}</h2>
        ${questionData.options.map((option, index) =>
        `<div class="option" onclick="selectOption(${index})">${option}</div>`).join('')}
    `;
}

function selectOption(selectedOption) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    options[selectedOption].classList.add('selected');
    quizData[currentQuestion].selected = selectedOption;
}

function showScore() {
    quiz.innerHTML = `<h2>Your Score: ${score} / ${quizData.length}</h2>`;
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'none';
}

function handleNext() {
    const selected = quizData[currentQuestion].selected;
    if (selected === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function handleSubmit() {
    handleNext();
}

nextBtn.addEventListener('click', handleNext);
submitBtn.addEventListener('click', handleSubmit);

loadQuestion();
