const questions=[
    {
        question:"which is largest animal in the world?",
         answers:[
            {text:"Shark", correct:false  },
            {text:"Blue whale", correct:true},
            {text:'Elephant', correct:false},
            {text:'Giraffe', correct:false}
         ]
    },
    {
        question:"which is largest animal in the world?",
         answers:[
            {text:"Shark", correct:false  },
            {text:"Blue whale", correct:true},
            {text:'Elephant', correct:false},
            {text:'Giraffe', correct:false}
         ]
    },
    {
        question:"which is largest animal in the world?",
         answers:[
            {text:"Shark", correct:false  },
            {text:"Blue whale", correct:true},
            {text:'Elephant', correct:false},
            {text:'Giraffe', correct:false}
         ]
    }
];

const  questionElement = document.getElementById("question");
const  answerButtons = document.getElementById("answer-buttons");
const  nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}



function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button")
          button.innerHTML=answer.text;
          button.classList.add('btn');
          answerButtons.appendChild(button);

    });
}
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion()
}



startQuiz();











