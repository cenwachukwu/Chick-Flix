const modalBox = document.getElementById('Quiz-Modal-Slide');
const openModal = document.querySelector('.open-modal');
const Quiz = document.querySelectorAll(".Quiz");
const Question = document.querySelector(".Question");
const option1 = document.querySelector(".option1")
const option2 = document.querySelector(".option2")
const option3 = document.querySelector(".option3")
const option4 = document.querySelector(".option4")
const next = document.querySelector(".next")

function openQuizSlide() {
    modalBox.style.display = "block";
    openModal.style.display = "none";
}

function closeQuizSlide() {
    modalBox.style.display = "none";
    openModal.style.display = "inline-block";
}

// a callback function to show that buttons work
function option() {
    alert("I have been Clicked!!!")
}

// make an empty array to store data from the api
let quizCards = []

let i = 0

function shuffle(quizCards) {
    var m = quizCards.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = quizCards[m];
        quizCards[m] = quizCards[i];
        quizCards[i] = t;
    }

    return quizCards;
}

function loadCard() {
    Question.innerText = quizCards[i].question
    option1.innerText = quizCards[i].incorrect_answers[2]
    option2.innerText = quizCards[i].correct_answer
    option3.innerText = quizCards[i].incorrect_answers[0]
    option4.innerText = quizCards[i].incorrect_answers[1]
};

// setting evt to pull infomation from the api
const url3 = "https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple"
openModal.addEventListener("click", function (evt) {
    evt.preventDefault()
    console.log(evt)
    fetch(url3)
        .then(res => res.json())
        .then(res => {
            console.log(res.results)
            let data = res.results
            quizCards.push(...data);
            console.log(quizCards)
            shuffle(quizCards)
            console.log(quizCards)
            loadCard()
        })
        .catch(err => console.log(err))
})
