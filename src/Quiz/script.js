const modalBox = document.getElementById('Quiz-Modal-Slide');
const openModal = document.querySelector('.open-modal');

function openQuizSlide() {
    modalBox.style.display = "block";
    openModal.style.display = "none";
}

function closeQuizSlide() {
    modalBox.style.display = "none";
    openModal.style.display = "inline-block";
}

// data for the quiz
const myQuestions = [
    {
      question: "who are you?",
      answers: {
        a: "nneoma",
        b: "super man",
        c: "speedometer"
      },
      correctAnswer: "a"
    },
    {
      question: "are you the best sister?",
      answers: {
        a: "site 1",
        b: "numbers",
        c: "shape"
      },
      correctAnswer: "site 1"
    },
    {
      question: "How many friends i have?",
      answers: {
        a: "i love school",
        b: "i love my sister",
        c: "i love snow",
      },
      correctAnswer: "b"
    }
];
