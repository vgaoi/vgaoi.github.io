// Questions will be asked
const Questions = [{
        id: 0,
        q: "Who is the creator of Hells Paradise?",
        a: [{ text: "Chris Pratt", isCorrect: false },
            { text: "Vincent Gao", isCorrect: false },
            { text: "Yuji Kaku", isCorrect: true },
            { text: "Harry Potter", isCorrect: false }
        ]
 
    },
    {
        id: 1,
        q: "How many chapters of One piece are there?",
        a: [{ text: "576", isCorrect: false, isSelected: false },
            { text: "999", isCorrect: false },
            { text: "1806", isCorrect: false },
            { text: "1804", isCorrect: true }
        ]
    },
    {
        id: 2,
        q: "Who is the original shonen big 3?",
        a: [{ text: "Attack on Titan, HunterxHunter, FMA", isCorrect: false },
            { text: "Black Clover, JJK, Demon Slayer", isCorrect: false },
            { text: "One Piece, Naruto, Bleach", isCorrect: true },
            { text: "Fairy Tail, Soul Eater, MHA", isCorrect: false }
        ]
 
    }
 
]
 
// Set start
var start = true;
 
// Iterate
// Iterate function
function iterate(id) {
    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
  
    // Getting the question
    const question = document.getElementById("question");
  
    // Removing previous effects
    question.classList.remove("shake");
    question.classList.remove("correct");
  
    // Setting the question text
    question.innerText = Questions[id].q;
  
    // Getting the options
    const op1 = document.getElementById("op1");
    const op2 = document.getElementById("op2");
    const op3 = document.getElementById("op3");
    const op4 = document.getElementById("op4");
  
    // Providing option text
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
  
    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;
  
    var selected = "";
  
    // Show selection for op1
    op1.addEventListener("click", () => {
      op1.style.backgroundColor = "lightgoldenrodyellow";
      op2.style.backgroundColor = "lightskyblue";
      op3.style.backgroundColor = "lightskyblue";
      op4.style.backgroundColor = "lightskyblue";
      selected = op1.value;
    });
  
    // Show selection for op2
    op2.addEventListener("click", () => {
      op1.style.backgroundColor = "lightskyblue";
      op2.style.backgroundColor = "lightgoldenrodyellow";
      op3.style.backgroundColor = "lightskyblue";
      op4.style.backgroundColor = "lightskyblue";
      selected = op2.value;
    });
  
    // Show selection for op3
    op3.addEventListener("click", () => {
      op1.style.backgroundColor = "lightskyblue";
      op2.style.backgroundColor = "lightskyblue";
      op3.style.backgroundColor = "lightgoldenrodyellow";
      op4.style.backgroundColor = "lightskyblue";
      selected = op3.value;
    });
  
    // Show selection for op4
    op4.addEventListener("click", () => {
      op1.style.backgroundColor = "lightskyblue";
      op2.style.backgroundColor = "lightskyblue";
      op3.style.backgroundColor = "lightskyblue";
      op4.style.backgroundColor = "lightgoldenrodyellow";
      selected = op4.value;
    });
  
    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");
  
    // Evaluate method
    evaluate[0].addEventListener("click", () => {
      if (selected === "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "white";
        question.classList.add("correct");
      } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
        question.classList.add("shake");
      }
    });
  }
  
  if (start) {
    iterate(0);
  }
  // Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
  if (id < Questions.length - 1) {
    id++;
    iterate(id);
    console.log(id);
  }
})