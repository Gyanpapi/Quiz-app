const questions = [
      {
        question: "Big animal",
        answers: [
          { text: "elephant", correct: true },
          { text: "mouse", correct: false }
        ]
      },
      {
        question: "small animal",
        answers: [
          { text: "mouse", correct: true },
          { text: "elephant", correct: false }
        ]
      }
    ];

    const questionelement = document.getElementById("question");
    const answerbuttons = document.getElementById("answer-buttons");
    const nextbutton = document.getElementById("next-button");

    let currentquestionindex = 0;
    let score = 0;


    function showquestion() {
      // ✅ FIX 1: Clear previous buttons before adding new ones
      question.innerHTML="";
      let currentquestion = questions[currentquestionindex];
      let questionnumber = currentquestionindex + 1;
      
      question.innerHTML = questionnumber + ". " + currentquestion.question;

      currentquestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
      });
    }

    
    function startgame() {
      
      currentquestionindex = 0;
      score = 0;
      showquestion();
    }

    startgame();