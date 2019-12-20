const modalBox = document.getElementById('Quiz-Modal-Slide');
const openModal = document.querySelector('.open-modal');
const Quiz = document.querySelectorAll(".Quiz");

function openQuizSlide() {
    modalBox.style.display = "block";
    openModal.style.display = "none";
}

//closing the modal
function closeQuizSlide() {
    modalBox.style.display = "none";
    openModal.style.display = "block";
    location.reload()
}
