// Quiz Questions
const questions = [
    {
        question: "1. First written novel of Rizal", //1
        options: ["Noli Me Tangere", "El Filibusterismo", "Sa Aking mga Kabata"],
        answer: "Noli Me Tangere"
      },
      {
        question: "2. Place where the novel Noli Me Tangere was Published",//2
        options: ["Madrid", "Berlin", "Spain"],
        answer: "Berlin"
      },
      {
        question: "3. Pen name used by Rizal in his writting in La Solidaridad",//3
        options: ["Laong Laan", "Pepe", "Dimasalang"],
        answer: "Laong Laan"
      },
      {
        question: "4. First poem written by Rizal",//4
        options: ["Sa Aking mga Kabata", "Sa Aking mga Kababata", "Sa Aking Kabata"],
        answer: "Sa Aking mga Kabata"
      },
      {
        question: "5. The Rizal family had this many siblings",//5
        options: ["Ten", "Twelve", "Eleven"],
        answer: "Eleven"
      },
      {
        question: "6. Rizal birthday is on ____",//6
        options: ["June 21, 1861", "June 19, 1862", "June 19, 1861"],
        answer: "June 19, 1861"
      },
      {
        question: "7. The main character of Noli Me Tangere is ",//7
        options: ["Maria Clara", "Cristostomo Ibarra", "Simoun"],
        answer: "Cristostomo Ibarra"
      },
      {
        question: "8. Jose Rizal died at the age of  ",//8
        options: ["35", "25", "30"],
        answer: "35"
      },
      {
        question: "9. Rizal dog name is ",//9
        options: ["Uzman", "Suman", "Browny"],
        answer: "Uzman"
      },
      {
        question: "10. The heaven-sent financer of Noli Me tangere",//10
        options: ["Valentin Ventura", "Maximo Viola", "Dr. Ferdinand Bluementritt"],
        answer: "Valentin Ventura"
      },
      {
        question: "11. The best poem ever written by Dr. Jose Rizal",
        options: ["Sa aking mga Kabata", "Ang huling Paalam", "Himno sa Paggawa"],
        answer: "Ang huling Paalam"
      },
      {
        question: "12. The priest who baptized Rizal",
        options: ["Francisco Mercado", "Richard Kissling", "Fr. Rufino Collantes"],
        answer: "Fr. Rufino Collantes"
      },
      {
        question: "13. Jose Rizal's true love who personified Maria Clara in his Noli Me Tangere",
        options: ["Leonor Valenzuela", "Leonor Rivera", "Josephine Bracken"],
        answer: "Leonor Rivera"
      },
      {
        question: "14. Pilosopo Tasyo is a character in Noli Me Tangere personified by whom in reality?",
        options: ["Paciano", "Maximo", "Francisco"],
        answer: "Paciano"
      },
      {
        question: "15. Date of last issue of La Solidaridad",
        options: ["November 15,1589", "November 15, 1895", "November 15, 1985"],
        answer: "November 15, 1895"
      },
      {
        question: "16. Rizal started his formal schooling in",
        options: ["Laguna", "Binan", "Calamba"],
        answer: "Binan"
      },
      {
        question: "17.The first sorrow of Jose Rizal life",
        options: ["Concepcion", "Saturina", "Trinidad"],
        answer: "Concepcion"
      },
      {
        question: "18. Jose Rizal's first teacher",
        options: ["His Grandmother", "His Aunt", "His Mother"],
        answer: "His Mother"
      },
      {
        question: "19. At the age could Jose Rizal read and write",
        options: ["Five", "Six", "Four"],
        answer: "Five"
      },
      {
        question: "20. Name of Dr. Jose Rizal's Son",
        options: ["Fernando", "Francisco", "Jose Jr."],
        answer: "Francisco"
      },
    ];
  
  let currentQuestion = 0;
  let score = 0;
  let timeLeft = 60; // Time per question in seconds
  
  // Get player's name
  const nameInput = document.getElementById('name-input');
  const startButton = document.getElementById('name-submit-btn');
  
  startButton.addEventListener('click', function() {
    const playerName = nameInput.value;
    if (playerName.trim() !== '') {
      startQuiz(playerName);
    }
  });
  
  // Display question and options
  function displayQuestion() {
    const questionElement = document.getElementById('question');
    const option1Element = document.getElementById('option1-label');
    const option2Element = document.getElementById('option2-label');
    const option3Element = document.getElementById('option3-label');
    const option1Radio = document.getElementById('option1');
    const option2Radio = document.getElementById('option2');
    const option3Radio = document.getElementById('option3');
  
    const currentQues = questions[currentQuestion];
  
    questionElement.textContent = currentQues.question;
    option1Element.textContent = currentQues.options[0];
    option2Element.textContent = currentQues.options[1];
    option3Element.textContent = currentQues.options[2];
    option1Radio.value = currentQues.options[0];
    option2Radio.value = currentQues.options[1];
    option3Radio.value = currentQues.options[2];
  }
  
  // Check if the selected answer is correct
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
      return; // No option selected
    }
  
    const answer = selectedOption.value;
    if (answer === questions[currentQuestion].answer) {
      score++;
    }
  
    selectedOption.checked = false; // Reset selected option
  
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
  
  // Timer countdown
  function startTimer() {
    const timerElement = document.getElementById('time-left');
    timerElement.textContent = timeLeft;
  
    const timer = setInterval(() => {
      if (timeLeft === 0) {
        clearInterval(timer);
        endQuiz();
      } else {
        timeLeft--;
        timerElement.textContent = timeLeft;
      }
    }, 1000);
  }
  
  // End of the quiz
  function endQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    const nameInputContainer = document.getElementById('name-input-container');
    const congratsContainer = document.getElementById('congrats');
    quizContainer.style.display = 'none';
    nameInputContainer.style.display = 'none';
    congratsContainer.style.display = 'block';
  
    const playerName = nameInput.value;
    congratsContainer.innerHTML = `
      <h2>Congratulations, ${playerName}!</h2>
      <p>Your Score: ${score}/${questions.length}</p>
      <button id="play-again-btn">Play Again</button>`
      ;
    
      document.getElementById('play-again-btn').addEventListener('click', () => {
        resetQuiz();
        startButton.disabled = false;
        nameInput.value = '';
        quizContainer.style.display = 'block';
        congratsContainer.style.display = 'none';
        displayQuestion();
      });
    }
    // Start the quiz
    function startQuiz(playerName) {
      const nameInputContainer = document.getElementById('name-input-container');
      nameInputContainer.style.display = 'none';
      displayQuestion();
      startTimer();
    }
    //Reset the quiz
    function resetQuiz() {
        currentQuestion = 0;
        score = 0;
        timeLeft =60;
        
        window.location.href = 'index.html';
      }
    
  
  // Event listeners
  document.getElementById('submit-btn').addEventListener('click', checkAnswer);
  