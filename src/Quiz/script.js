const modalBox = document.getElementById('Quiz-Modal-Slide');
const openModal = document.querySelector('.open-modal');
const Quiz = document.querySelectorAll(".Quiz");
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
    openModal.style.display = "block";
    location.reload()
}

function option() {
    alert ("I have been Clicked!!!")
}
