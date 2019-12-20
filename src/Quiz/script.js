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

function option() {
    alert ("I have been Clicked!!!")
}
// setting evt to pull infomation from the api
const url3 = "https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple"
openModal.addEventListener("click", function (evt) {
    evt.preventDefault()
    console.log(evt)
    fetch(url3)
        .then(res => res.json())
        .then(res => {
            console.log(res.results[0])
            Question.innerText = res.results[0].question
            option1.innerText = res.results[0].incorrect_answers[2]
            option2.innerText = res.results[0].correct_answer
            option3.innerText = res.results[0].incorrect_answers[0]
            option4.innerText = res.results[0].incorrect_answers[1]
        })
        .catch(err => console.log(err))
}) 
