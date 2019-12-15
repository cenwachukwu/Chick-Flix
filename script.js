const modalBox = document.getElementById('Quiz-Modal-Slide');
const openModal = document.querySelector('.open-modal');

function openQuizSlide (){
    modalBox.style.display = "block";
    openModal.style.display = "none";
}
function closeQuizSlide (){
    modalBox.style.display = "none";
    openModal.style.display = "block";
}