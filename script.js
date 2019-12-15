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

// making the slides
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

},
{
    "MediciJeanne Villepreux-Power": "The aquarium",
    "Josephine Cochrane": "The dishwasher",
    "Madam C. J. Walker": "Hair care products",
    "Grace Hopper": "The Computer",
    "Marie Van Brittan Brown": "home security systems,",
    "Patricia Bath": "Laserphaco Probe",
    "Marie Curie": "Theory of Radioactivity",
    "Rosalind Franklin": "Rosalind Franklin",
    "Dr. Shirley Jackson:": "Modern Day Telecommunication",
    "Maria Beasley": "The Life Raft",
    "Katharine Burr Blodgett": "Non-reflective Glass"
},
{
    
    "NH4+":"Ammonium",
    "OH-":"Hydroxide",
    "ClO3-":"Chlorate",
    "NO3-":"Nitrate",
    "NO2-":"Nitrite",
    "C2H3O2-":"Acetate",
    "CN-":"Cyanide",
    "K":"Potassium, 19, Metal",
    "Sc":"Scandium, 21, Metal",
    "Ti":"Titanium, 22, Metal",
    "V":"Vanadium, 23, Metal",
    "Cr":"Chromium, 24, Metal"
},
{
    "Learning":"relatively permanent change in knowledge/behavior arising from experience",
    "Classical Conditioning":"we learn to associate two stimuli and thus to anticipate events",
    "Pavlov":"classical conditioning, putting food in a dogs mouth caused the animal to salivate. dog began salivating at the sight of food",
    "Unconditioned Response":"naturally occurring response to the unconditioned stimulus (salvation in response to food)",
    "Unconditioned Stimulus":"stimulus that unconditionally (naturally and automatically) triggers a response (food in mouth triggers salvation)",
    "Conditioned Response":"the learned response to a previously neutral stimulus (salvation in response to the tone was conditional upon the dog's learning the association between the tone and food)",
    "Conditioned Stimulus":"an originally irrelevant stimulus that, after association with an unconditioned stimulus, comes to trigger a conditioned response (tone stimulus now triggers the conditional salvation)",
    "Little Albert":"taught to be afraid of things that are white. he sees a white rat, they bang a metal pole and he gets afraid. they do it continuously and he eventually starts crying at the sight of the rat.",
    "Tolerance":"diminished response to a drug after repeated use",
    "Clever Hans":"horse that learned to do math by picking up on signals from his master",
    "Extinction":"the diminished responding that occurs when the conditioned stimulus (tone) no longer signals the impending unconditioned stimulus (food)",
    "Spontaneous Recovery":"the reappearance of the conditioned response triggered by the conditioned stimulus after a pause"
},
{
    "Phylogeny":"The evolutionary history of a species or group of related species",
    "Systematics":"A discipline focused on classifying organisms and determining their evolutionary relationships",
    "Taxonomy":"How organisms are named and classified by their characteristics",
    "Binomial nomenclature":"Classification system in which each species is assigned a two-part scientific name",
    "Taxonomic groups":"Domain kingdom phylum class order family genus species",
    "Taxon":"A taxonomic unit at any level of hierarchy",
    "Phylogenetic tree":"A branching diagram that represents the evolutionary history of a group of organisms",
    "Phylocode":"A classification system which recognizes only groups that include a common ancestor and all its descendants",
    "Analogies":"Similarities due to convergent evolution",
    "Cladistics":"The approach to systematics in which common ancestry is the primary criterion used to classify organisms",
    "Clade":"A monophyletic group of species that includes an ancestral species and all its descendants",
    "Paraphyletic":"A non-clade group which consists of an ancestral species and some of its descendants"
},
{
    "Konyak tribal women":"Konyak tribal women participate to set a Guinness World Record for the 'largest traditional Konyak dance', in Kohima on April 05, 2019.",
    "Jyoti Amge":"Standing 24.7 inches tall, Amge has held the title of the Shortest Living Woman since her 18th birthday on December 16, 2011.",
    "Chris Walton":"Her nails measure 10 feet 2 inches on her left hand and 9 feet 7 inches on her right hand that she has been growing for 18 years.",
    "Marjorie Gestring":"Gestring won the Olympic gold for springboard diving in 1936 at just under the age of 14. Her record still stands today.",
    "Teresa Edwards":"Edwards has four gold Olympic medals and one bronze for basketball, while the top male athlete, Carmelo Anthony, only has three gold and one bronze.",
    "Margaret Court":"Margaret Court holds 24 titles, seven more than the top male record holder, Roger Federer. Steffi Graf, Serena Williams, Helen Wills Moody, Chris Evert, and Martina Navratilova all have more than Federer, too.",
    "Johanna Quaas":"She is the world’s oldest gymnast. In 2012, at age 86, she took part in the competition that would put her in the record books. She is now 91 and still hitting the gym.",
    "Paddy Jones":"Jones, 76, holds the Guinness Record for the oldest salsa dancer in the world.",
    "Carli Lloyd":"Lloyd scored three goals, which is called a hat trick, in just 16 minutes of the 2015 Women’s World Cup game. ",
    "Jeanne Louise Calment":"The oldest recorded age anyone ever reached was 122 years and 164 days. Jeanne Louise Calment was born on February 21, 1875, and died on August 4, 1997.",
    "Stéphanie Gicquel":"Gicquel crossed the surface of chilling Antarctica at a total distance of 2,045 km (1270.7 miles) without the help of wind kites, motors or dogs.",
    "Peggy Whitson":"Peggy Whitson launched into space at the age of 56, making her the oldest female astronaut;ß still eager to take on missions sparked from her passion for science"
},
{
    "Angela Merkel":"Chancellor of Germany",
    "Ellen Johnson Sirleaf":"President of Liberia",
    "Aung San Suu Kyi":"State Counsellor of Myanmar",
    "Michelle Bachelet":"President of Chile",
    "Judy Smith":"Crisis Manager (Real life Olivia Pope), United States",
    "Janet Yellen":"Chair of the Federal Reserve, United States",
    "Helle Thorning-Schmidt":"Former Prime Minister of Denmark",
    "Loretta Lynch":"Former Attorney General, United States",
    "Park Geun-hye":"President of South Korea",
    "Arundhati Bhattacharya":"Chairperson of the State Bank of India",
    "Sonia Gandhi":"President of Indian National Congress",
    "Christine Lagarde":"Managing director, International Monetary Fund",
    "Tsai Ing-Wen":"President of Taiwan",
    "Theresa May":"Prime Minister of the United Kingdom",
    "Cristina Fernandez de Kirchner":"Former President of Argentina",
    "Sheikh Hasina Wajed":"Prime Minister of Bangladesh",
    "Erna Solberg":"Prime Minister of Norway",
    "Dalia Grybauskaitė":"President of Lithuania",
    "Ameenah Gurib-Fakim":"President of Mauritius",
    "Beata Szydło":"Prime Minister of Poland",
    "Saara Kuugongelwa-Amadhila":"Prime Minister of Namibia"
},
{
    
    "Jenny Thompson":"Swimming: 12 medals (8 Gold, 3 Silver, 1 Bronze)",
    "Dara Torres":"Swimming: 12 medals (4 Gold, 4 Silver, 4 Bronze)",
    "Natalie Coughlin":"Swimming: 12 medals (3 Gold, 4 Silver, 5 Bronze)",
    "Allyson Felix":"Track and Field: 9 medals (6 Gold, 3 Silver)",
    "Allison Schmitt":"Swimming: 8 medals (4 Gold, 2 Silver, 2 Bronze)",
    "Shirley Babashoff":"Swimming: 8 medals (2 Gold, 6 Silver)",
    "Dana Vollmer":"Swimming: 7 medals (5 Gold, 1 Silver, 1 Bronze)",
    "Amanda Beard":"Swimming: 7 medals (2 Gold, 4 Silver, 1 Bronze)",
    "Shannon Miller":"Gymnastics: 7 medals (2 Gold, 2 Silver, 2 Bronze)",
    "Amy Van Dyken":"Swimming: 6 medals (6 Gold)",
    "Katie Ledecky":"Swimming: 6 medals (5 Gold, 1 Silver)",
    "Bonnie Blair":"Long Track Speedskating: 6 medals (5 Gold, 1 Bronze)"
   
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
const startQuiz3 = document.querySelector(".startQuiz3")
const box3a = document.querySelector(".box3a")
const box3b = document.querySelector(".box3b")
const startQuiz4 = document.querySelector(".startQuiz4")
const box4a = document.querySelector(".box4a")
const box4b = document.querySelector(".box4b")
const startQuiz5 = document.querySelector(".startQuiz5")
const box5a = document.querySelector(".box5a")
const box5b = document.querySelector(".box5b")
const startQuiz6 = document.querySelector(".startQuiz6")
const box6a = document.querySelector(".box6a")
const box6b = document.querySelector(".box6b")
const startQuiz7 = document.querySelector(".startQuiz7")
const box7a = document.querySelector(".box7a")
const box7b = document.querySelector(".box7b")
const startQuiz8 = document.querySelector(".startQuiz8")
const box8a = document.querySelector(".box8a")
const box8b = document.querySelector(".box8b")
const startQuiz9 = document.querySelector(".startQuiz9")
const box9a = document.querySelector(".box9a")
const box9b = document.querySelector(".box9b")
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

startQuiz3.addEventListener("click", function (evt) {
    evt.preventDefault
    console.log(evt)
    // this would make this object into an array
    quizCards = Object.entries(quizCards[j, 2])
    console.log(quizCards)
    frontCard = box3a
    console.log(frontCard)
    backCard = box3b
    console.log(backCard)
    loadCard()
    startQuiz3.style.display = "none";
    next.classList.remove("inactive");
    frontCard.style.display = "block";
    backCard.style.display = "block";
})

startQuiz4.addEventListener("click", function (evt) {
    evt.preventDefault
    console.log(evt)
    // this would make this object into an array
    quizCards = Object.entries(quizCards[j, 3])
    console.log(quizCards)
    frontCard = box4a
    console.log(frontCard)
    backCard = box4b
    console.log(backCard)
    loadCard()
    startQuiz4.style.display = "none";
    next.classList.remove("inactive");
    frontCard.style.display = "block";
    backCard.style.display = "block";
})

startQuiz5.addEventListener("click", function (evt) {
    evt.preventDefault
    console.log(evt)
    // this would make this object into an array
    quizCards = Object.entries(quizCards[j, 4])
    console.log(quizCards)
    frontCard = box5a
    console.log(frontCard)
    backCard = box5b
    console.log(backCard)
    loadCard()
    startQuiz5.style.display = "none";
    next.classList.remove("inactive");
    frontCard.style.display = "block";
    backCard.style.display = "block";
})

startQuiz6.addEventListener("click", function (evt) {
    evt.preventDefault
    console.log(evt)
    // this would make this object into an array
    quizCards = Object.entries(quizCards[j, 5])
    console.log(quizCards)
    frontCard = box6a
    console.log(frontCard)
    backCard = box6b
    console.log(backCard)
    loadCard()
    startQuiz6.style.display = "none";
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