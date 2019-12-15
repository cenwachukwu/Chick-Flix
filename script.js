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

let quizCards = [{
    "Africa": "Africa has 54 countries and one “non-self governing territory”, the Western Sahara.",
    "Egypt": "The Pharaonic civilization of ancient Egypt is one of the world’s oldest and longest-lasting civilizations.",
    "The Sahara": "The Sahara is the largest desert in the world and is bigger than the continental USA.",
    "Nigeria": "Nigeria is fourth largest oil exporter in the world, and Africa’s biggest oil producer with about 2.2 million barrels produced every day.",
    "Lake Victoria": "Lake Victoria is the largest lake in Africa and the second-largest freshwater lake in the world.",
    "Global Warming": "Africa has the most extensive biomass burning in the world, yet only emits about 4% of the world’s total carbon dioxide emissions.",
    "Wild Life": "Africa has eight of the 11 major biomes and the largest-remaining populations of lion, elephant, rhinoceros, cheetah, hyena, leopard and hundreds of other species.",
    "Megafauna": "Megafauna like giraffe, zebra, gorilla, hippopotamus, chimpanzee and wildebeest are unique to the continent.",
    "Lake Malawi": "Lake Malawi has more fish species than any other freshwater system on earth.",
    "WildLife Migration": "The Serengeti (Tanzania) hosts the world’s largest wildlife migration on Earth with over 750,000 zebra marching ahead of 1.2 million wildebeest as they cross this amazing landscape.",
    "African elephant": "Africa is home to the world’s largest living land animal, the African elephant, which can weigh up to 7 tons.",
    "The Nile": "The Nile River is the longest river in the world with a total length of 6,650 kilometres.",
}]

let i = 0 //this is serving as a constant for our index as we are going to use this to manipulate the dom
let j = 0

function nextItem() {
    i = i + 1; // increase i by one
    i = i % quizCards.length; // if we've gone too high, start from `0` again
    return quizCards[i]; // give us back the item of where we are now
}
function prevItem() {
    if (i === 0) { // i would become 0
        i = quizCards.length; // so put it at the other end of the array
    }
    i = i - 1; // decrease by one
    return quizCards[i]; // give us back the item of where we are now
}
function loadCard() {
    frontCard.textContent = quizCards[i][0]  //now you can access the array index and make the text content of the front and back card different things 
    backCard.textContent = quizCards[i][1]
}

const Quiz = document.querySelectorAll(".Quiz")
const startQuiz = document.querySelector(".startQuiz")
const flashCard = document.querySelectorAll(".flash-card")
const box1a = document.querySelector(".box1a")
const box1b = document.querySelector(".box1b")
const next = document.querySelector(".next") 
const previous = document.querySelector(".previous")

startQuiz.addEventListener("click", function(evt){
    evt.preventDefault
    console.log(evt)
    // this would make this object into an array
    quizCards = Object.entries(quizCards[j])
    frontCard = box1a
    backCard = box1b
    loadCard()
    startQuiz.style.display = "none";
    next.classList.remove("inactive");
    frontCard.style.display = "block";
    backCard.style.display = "block";
})

next.addEventListener("click", function(evt){
    evt.preventDefault
    nextItem()
    loadCard()
    previous.classList.remove("inactive");
})

previous.addEventListener("click", function(evt){
    evt.preventDefault
    prevItem()
    loadCard()
})