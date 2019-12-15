const modalBox = document.getElementById('Quiz-Modal-Slide');
const openModal = document.querySelector('.open-modal');
const Quiz = document.querySelectorAll(".Quiz");

function openQuizSlide() {
    modalBox.style.display = "block";
    openModal.style.display = "none";
}
function closeQuizSlide() {
    modalBox.style.display = "none";
    openModal.style.display = "block";
}

let slideIndex = 1;
showSlide(slideIndex);

function toSlide(n) {
    showSlide(slideIndex = n);
};

function showSlide(n) {
    if (n > Quiz.length) {
        slideIndex = 1;
    };

    if (n < 1) {
        slideIndex = Quiz.length;
    };

    // this following code is what's actually making the slide show. 
    // this code sets all slides to display none while displaying one slide at a time
    for (let i = 0; i < Quiz.length; i++) {
        Quiz[i].style.display = "none";
    };

    //displays the clicked image in the slide 
    //minus 1 because in the html we set the slide index to start from 1, so 1-1 would call slide 0 i.e. the first slide 
    Quiz[slideIndex - 1].style.display = 'block';
};

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
},
{
    "DNA": "DNA consists of very long molecules that contain nucleotide bases encoding genes.",
    "Gene": "A sequence of DNA containing instructions for one protein (that may produce a trait; like eye color or lactose persistence).",
    "Genome": "Total DNA sequence that contains the complete collection of genes that make up an organism's genetic information.",
    "Chromosomes": "46 chromosomes, 23 pairs (including the sex chromosome). Females are XX and males are XY.",
    "Karyotype": "The number, arrangement and size of chromosome in a particular organism.",
    "The Central Dogma of Molecular Biology": "DNA-->mRNA-->Protein",
    "Steps of the Central Dogma": "Replication, Transcription, Translation",
    "Intron": "Intervening sequence in an RNA primary transcript and it's edited out (removed)",
    "Exon": "Expressed sequence, part of the mRNA that is expressed as part of the protein",
    "Messenger RNA": "A continuous chain of codons that specify a specifies amino acids to be included in the protein.",
    "Translation": "Translate the mRNA message into a protein sequence",
    "Transcription": "Transcribe one strand of the DNA as a message"

}
]

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

const startQuiz = document.querySelector(".startQuiz")
const flashCard = document.querySelectorAll("flash-card")
const box1a = document.querySelector(".box1a")
const box1b = document.querySelector(".box1b")
const startQuiz2 = document.querySelector(".startQuiz2")
const box2a = document.querySelector(".box2a")
const box2b = document.querySelector(".box2b")
const next = document.querySelector(".next")
const previous = document.querySelector(".previous")

startQuiz.addEventListener("click", function (evt) {
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

startQuiz2.addEventListener("click", function (evt) {
    evt.preventDefault
    console.log(evt)
    // this would make this object into an array
    quizCards = Object.entries(quizCards[j, 1])
    console.log(quizCards)
    frontCard = box2a
    console.log(frontCard)
    backCard = box2b
    console.log(backCard)
    loadCard()
    startQuiz2.style.display = "none";
    next.classList.remove("inactive");
    frontCard.style.display = "block";
    backCard.style.display = "block";
})

next.addEventListener("click", function (evt) {
    evt.preventDefault
    nextItem()
    loadCard()
    previous.classList.remove("inactive");
})

previous.addEventListener("click", function (evt) {
    evt.preventDefault
    prevItem()
    loadCard()
})