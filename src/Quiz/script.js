const modalBox = document.getElementById('Quiz-Modal-Slide');
const openModal = document.querySelector('.open-modal');
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");

function openQuizSlide() {
    modalBox.style.display = "block";
    openModal.style.display = "none";
}

function closeQuizSlide() {
    modalBox.style.display = "none";
    openModal.style.display = "inline-block";
    location.reload()
    // we can also refresh the game so the user can play the game afresh
}


(function () {
    const myQuestions = [
        {
            question: "What consists of very long molecules that contain nucleotide bases encoding genes?",
            answers: {
                a: "DNA",
                b: "Exon",
                c: "Gene",
                d: "Karyotype"
            },
            correctAnswer: "a"
        },
        {
            question: "Crisis Manager (Real life Olivia Pope), United States",
            answers: {
                a: "Angela Merkel",
                b: "Judy Smith",
                c: "Sonia Gandhi",
                d: "Loretta Lynch"
            },
            correctAnswer: "b"
        },
        {
            question: "Which of the following is the largest desert in the world and is bigger than the continental USA?",
            answers: {
                a: "Megafauna",
                b: "The Nile",
                c: "Lake Victoria",
                d: "The Sahara"
            },
            correctAnswer: "d"
        },
        {
            question: "Which of the following defines the evolutionary history of a species or group of related species?",
            answers: {
                a: "Taxonomy",
                b: "Phylogeny",
                c: "Analogies",
                d: "Clade"
            },
            correctAnswer: "b"
        },
        {
            question: "Which of the following is Ammonium?",
            answers: {
                a: "K",
                b: "Sc",
                c: "Nh4+",
                d: "CN-"
            },
            correctAnswer: "c"
        },
        {
            question: "Who won 12 medals (8 Gold, 3 Silver, 1 Bronze) for swimming?",
            answers: {
                a: "Allison Schmitt",
                b: "Jenny Thompson",
                c: "Amanda Beard",
                d: "Amy Van Dyken"
            },
            correctAnswer: "b"
        },
        {
            question: "Who is the president of Liberia?",
            answers: {
                a: "Ellen Johnson Sirleaf",
                b: "Janet Yellen",
                c: "Tsai Ing-Wen",
                d: "Dalia Grybauskaitė"
            },
            correctAnswer: "a"
        },
        {
            question: "Who is the Managing director of the International Monetary Fund?",
            answers: {
                a: "Erna Solberg",
                b: "Theresa May",
                c: "Loretta Lynch",
                d: "Christine Lagarde"
            },
            correctAnswer: "d"
        },
        {
            question: "is the world’s oldest gymnast?",
            answers: {
                a: "Teresa Edwards",
                b: "Margaret Court",
                c: "Jeanne Louise Calment",
                d: "Johanna Quaas"
            },
            correctAnswer: "d"
        },
        {
            question: "Who invented the aquarium?",
            answers: {
                a: "Grace Hopper",
                b: "MediciJeanne Villepreux-Power",
                c: "Marie Curie",
                d: "Maria Beasley"
            },
            correctAnswer: "b"
        },
        {
            question: "is fourth largest oil exporter in the world?",
            answers: {
                a: "Nigeria",
                b: "Egypt",
                c: "Ghana",
                d: "Rwanda"
            },
            correctAnswer: "a"
        },
        {
            question: "How organisms are named and classified by their characteristics?",
            answers: {
                a: "Taxonomy",
                b: "Phylocode",
                c: "Clade",
                d: "Paraphyletic"
            },
            correctAnswer: "a"
        },
        {
            question: "Who held the title of the Shortest Living Woman since her 18th birthday on December 16, 2011?",
            answers: {
                a: "Margaret Court",
                b: "Carli Lloyd",
                c: "Jyoti Amge",
                d: "Stéphanie Gicquel"
            },
            correctAnswer: "c"
        },
        {
            question: "Former Prime Minister of Denmark",
            answers: {
                a: "Janet Yellen",
                b: "Arundhati Bhattacharya",
                c: "Sheikh Hasina Wajed",
                d: "Helle Thorning-Schmidt"
            },
            correctAnswer: "d"
        },
        {
            question: "President of Taiwan",
            answers: {
                a: "Tsai Ing-Wen",
                b: "Erna Solberg",
                c: "Sonia Gandhi",
                d: "Dalia Grybauskaitė"
            },
            correctAnswer: "a"
        },
        {
            question: "Oldest female astronaut?",
            answers: {
                a: "Tsai Ing-Wen",
                b: "Peggy Whitson",
                c: "Janet Yellen",
                d: "Beata Szydło"
            },
            correctAnswer: "b"
        },
        {
            question: "Modern Day Telecommunication was powered by",
            answers: {
                a: "Katharine Burr Blodgett",
                b: "Josephine Cochrane",
                c: "Marie Van Brittan Brown",
                d: "Dr. Shirley Jackson"
            },
            correctAnswer: "d"
        },
        {
            question: "Which of the following movies is based on long distance friendships?",
            answers: {
                a: "While You Were Sleeping",
                b: "The Proposal",
                c: "Enchanted",
                d: "The Sisterhood of the Traveling Pants"
            },
            correctAnswer: "d"
        },
        {
            question: "President of South Korea",
            answers: {
                a: "Park Geun-hye",
                b: "Tsai Ing-Wen",
                c: "Sheikh Hasina Wajed",
                d: "Dalia Grybauskaitė"
            },
            correctAnswer: "a"
        },
        {
            question: "Prime Minister of Namibia",
            answers: {
                a: "Loretta Lynch",
                b: "Sonia Gandhi",
                c: "Saara Kuugongelwa-Amadhila",
                d: "Erna Solberg"
            },
            correctAnswer: "c"
        },
        {
            question: "Chancellor of Germany",
            answers: {
                a: "Angela Merkel",
                b: "Judy Smith",
                c: "Sonia Gandhi",
                d: "Loretta Lynch"
            },
            correctAnswer: "a"
        },
        {
            question: "President of Mauritius",
            answers: {
                a: "Arundhati Bhattacharya",
                b: "Cristina Fernandez de Kirchner",
                c: "Ameenah Gurib-Fakim",
            },
            correctAnswer: "c"
        }
    ];

    // we also need a shuffle to render the questions differently each time.

    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = "rgba(247, 195, 57, 0.434)";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        alert(`You are such a champ!!! Your score is ${numCorrect} out of ${myQuestions.length}`)
        resultsContainer.innerHTML = `Score: ${numCorrect} out of ${myQuestions.length}`;
        // we can also hide the submit button and only display next and previous so the user doesnt submit twice
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;

        if (currentSlide === 0) {
            previousButton.style.display = "none";
        } else {
            previousButton.style.display = "inline-block";
        }

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    // display quiz right away
    buildQuiz();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(0);

    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();