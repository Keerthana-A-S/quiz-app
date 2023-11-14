const quiz = [
  {
      question: "What is the primary role of a CPU (Central Processing Unit) in a computer system?",
      ans1text: "Input and Output",
      ans2text: "Storage of Data",
      ans3text: "Data Processing",
      ans4text: "Network Communication",
      answer: "Data Processing"
  },
  {
      question: "Which of the following data structures stores elements in a Last-In-First-Out (LIFO) manner?",
      ans1text: "Queue",
      ans2text: "Stack",
      ans3text: "Linked List",
      ans4text: "Array",
      answer: "Stack",
  },{
      question: "What does HTML stand for?",
      ans1text: "Hypertext Markup Language",
      ans2text: "Cascading Style Sheet",
      ans3text: "Jason Object Notation",
      ans4text: "Helicopters Terminals Motorboats Lamborginis",
      answer: "Hypertext Markup Language",
  },
  {
      question: "What year was JavaScript launched?",
      ans1text: "1996",
      ans2text: "1995",
      ans3text: "1994",
      ans4text: "none of the above",
      answer: "1995",

  },
  {
      question: "Which programming paradigm emphasizes the use of objects and classes for modeling real-world entities?",
      ans1text: "Imperative Programming",
      ans2text: "Functional Programming",
      ans3text: "Object-Oriented Programming",
      ans4text: "Procedural Programming",
      answer: "Object-Oriented Programming",
  },
  {
    question: "What is the purpose of a compiler in the context of software development?",
      ans1text: "Debugging code",
      ans2text: "Executing code",
      ans3text: "Translating source code to machine code",
      ans4text: "Managing databases",
      answer: "Translating source code to machine code",
  },
  {
    question: "In computer networking, which protocol is commonly used for sending and receiving emails?",
    ans1text: "HTTP",
    ans2text: "FTP",
    ans3text: "SMTP",
    ans4text: "TCP",
    answer: "SMTP",

  },
  {
    question: "Which database model is known for its tabular structure and the use of SQL for data manipulation?",
      ans1text: "NoSQL",
      ans2text: "Hierarchical",
      ans3text: "Relational",
      ans4text: "Graph",
      answer: "Relational",

  },
  {
    question: "What security mechanism is designed to prevent unauthorized access to a computer system or network?",
      ans1text: "Firewall",
      ans2text: "Cache",
      ans3text: "Buffer",
      ans4text: " Router",
      answer: "Firewall",

  },
  {
    question: "Which programming language is often used for artificial intelligence and machine learning applications?",
      ans1text: " C++",
      ans2text: "Python",
      ans3text: "Java",
      ans4text: "Ruby",
      answer: "Pyth",
  }
]
const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent)
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");
console.log(option_a);
console.log(option_b);  
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;


submit.addEventListener("click", () => {
  const checkedAns = document.querySelector('input[type="radio"]:checked')
  console.log(checkedAns);
  // console.log(checkedAns.nextElementSibling.textContent);
  if( checkedAns === null){
      alert("Please select an answer");
  }else{
      if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
          score++;
      }

      currentQuestion++;
      if( currentQuestion < quiz.length){
          question.textContent = quiz[currentQuestion].question;
          option_a.textContent = quiz[currentQuestion].ans1text;
          option_b.textContent = quiz[currentQuestion].ans2text;
          option_c.textContent = quiz[currentQuestion].ans3text;
          option_d.textContent = quiz[currentQuestion].ans4text;
          checkedAns.checked = false;
      }else{
          alert("Your score is " + score + " out of " + quiz.length);
          location.reload();
      }

  }
});