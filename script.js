const questions = [
    {
        question: "จากภาพ ใบเสมาหินทรายพบที่จังหวัดกาฬสินธุ์ เป็นหลักฐานของอาณาจักรใด?",
        image: "img/01.png", // Replace with your image path
        answers: [
            { text: "ก) กัมพูชา", correct: false },
            { text: "ข) หริภุญชัย", correct: false },
            { text: "ค) ตามพรลิงค์", correct: false },
            { text: "ง) ทวารวดี", correct: true },
        ],
    },
    {
        question: "อาณาจักรหริภุญชัย ศูนย์กลางของอาณาจักรอยู่ที่จังหวัดอะไร?",
        image: null,
        answers: [
            { text: "ก) ลำปาง", correct: false },
            { text: "ข) เชียงราย", correct: false },
            { text: "ค) ลำพูน", correct: true },
            { text: "ง) เชียงใหม่", correct: false },
        ],
    },
    {
        question: "อาณาจักรที่มีการตั้งหลักแหล่งในภาคเหนือของคนไทยมีอาณาจักรอะไร?",
        image: "img/03.png",
        answers: [
            { text: "ก) ตามพรลิงค์ / โยนกเชียงแสน", correct: false },
            { text: "ข) โยนกเชียงแสน / ล้านนา", correct: true },
            { text: "ค) ทวารวดี / กัมพูชา", correct: false },
            { text: "ง) หริภุญชัย / ล้านนา", correct: false },
        ],
    },
    {
        question: "การตั้งหลักแหล่งในประเทศไทยสมัยก่อนประวัติศาสตร์มักจะตั้งที่ใด?",
        image: "img/04.png",
        answers: [
            { text: "ก) บริเวณริมแม่น้ำ", correct: true },
            { text: "ข) บริเวณป่าเขา", correct: false },
            { text: "ค) บริเวณที่สูง", correct: false },
            { text: "ง) บริเวณทะเล", correct: false },
        ],
    },
    {
        question: "พระธาตุพนมเป็นศาสนสถานสำคัญของอาณาจักรใดในภาคตะวันออกเฉียงเหนือ?",
        image: null,
        answers: [
            { text: "ก) อาณาจักรศรีโคตรบูร", correct: true },
            { text: "ข) อาณาจักรล้านช้าง", correct: false },
            { text: "ค) อาณาจักรศรีวิชัย", correct: false },
            { text: "ง) อาณาจักรขอม", correct: false },
        ],
    },
    {
        question: "อาณาจักรที่มีการตั้งหลักแหล่งในภาคตะวันออกเฉียงเหนือของคนไทยมีอาณาจักรอะไร?",
        image: null,
        answers: [
            { text: "ก) ศรีโคตรบูร / ศรีจนาศะ / ล้านช้าง", correct: true },
            { text: "ข) ศรีโคราช / ศรีจนาศะ / ล้านนา", correct: false },
            { text: "ค) ศรีจนาศะ / ล้านช้าง / ล้านนา", correct: false },
            { text: "ง) ศรีโคตรบูร / อโยธยา / ล้านช้าง", correct: false },
        ],
    },
    {
        question: "การเปลี่ยนแปลงทางวัฒนธรรมในสมัยก่อนประวัติศาสตร์ของไทยเกิดจากอะไร?",
        image: null,
        answers: [
            { text: "ก) การทำสงคราม", correct: false },
            { text: "ข) การปกครองภายใน", correct: false },
            { text: "ค) การอพยพของชนชาติ", correct: false },
            { text: "ง) การค้าขายกับประเทศอื่น ๆ", correct: true },
        ],
    },
    {
        question: "ปราสาทหินพนมรุ้งเป็นหลักฐานของอาณาจักรใด?",
        image: null,
        answers: [
            { text: "ก) ทวารวดี", correct: false },
            { text: "ข) กัมพูชา", correct: true },
            { text: "ค) หริภุญชัย", correct: false },
            { text: "ง) ตามพรลิงค์", correct: false },
        ],
    },
    {
        question: "เมืองหลวงของอาณาจักรสุโขทัยในอดีตตั้งอยู่ที่จังหวัดใด?",
        image: null,
        answers: [
            { text: "ก) สุโขทัย", correct: true },
            { text: "ข) พิษณุโลก", correct: false },
            { text: "ค) นครปฐม", correct: false },
            { text: "ง) อยุธยา", correct: false },
        ],
    },
    {
        question: "ศิลปะเครื่องปั้นดินเผาที่มีชื่อเสียงของอาณาจักรสุโขทัยคืออะไร?",
        image: null,
        answers: [
            { text: "ก) เบญจรงค์", correct: false },
            { text: "ข) สังคโลก", correct: true },
            { text: "ค) ลายคราม", correct: false },
            { text: "ง) ศรีวิชัย", correct: false },
        ],
    },
];
let currentQuestionIndex = 0;
let score = 0;

// โหลดองค์ประกอบ HTML
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const questionImageElement = document.getElementById("question-image");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");

// โหลดเสียง
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");

restartButton.addEventListener("click", startQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questionContainer.style.display = "block";
    scoreContainer.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();

    const question = questions[currentQuestionIndex];
    questionElement.innerText = question.question;

    if (question.image) {
        questionImageElement.style.display = "block";
        questionImageElement.src = question.image;
    } else {
        questionImageElement.style.display = "none";
    }

    question.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) button.dataset.correct = true;
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    document.body.classList.remove("correct", "wrong");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";

    // เล่นเสียงตอบถูกหรือตอบผิด
    if (correct) {
        correctSound.pause();
        correctSound.currentTime = 0;
        correctSound.play();
        score++; // เพิ่มคะแนนเมื่อถูก
    } else {
        wrongSound.pause();
        wrongSound.currentTime = 0;
        wrongSound.play();
    }

    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach((button) =>
        setStatusClass(button, button.dataset.correct === "true")
    );

    nextButton.style.display = "block";
}

function setStatusClass(element, correct) {
    element.classList.remove("correct", "wrong");
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore(); // แสดงหน้าสรุปคะแนนเมื่อจบเกม
    }
});

function showScore() {
    questionContainer.style.display = "none";
    scoreContainer.style.display = "block";
    nextButton.style.display = "none";

    scoreElement.innerText = `คุณตอบถูก ${score} จาก ${questions.length} ข้อ!`;
}

startQuiz();