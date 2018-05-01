const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
];

let question;
function appendQuestion(question){
  document.querySelector('.question-container').innerHTML = question.questionText;
}

function askQuestionThen(seconds){
  question = questions[0];
  appendQuestion(question);
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve(question);
    }, seconds);

  });
}

function removeQuestion(question){
  document.querySelector('.question-container').innerHTML = "";
}

function askQuestionThenRemoveQuestion(seconds){
  return askQuestionThen(seconds).then(removeQuestion);
}

function trueAndFalseButtons(){
  return document.querySelectorAll('.true-false-list .btn');

}

function toggleTrueAndFalseButtons(){
  trueAndFalseButtons().forEach(btn=>btn.classList.toggle("hide"));
}

function displayQuestionOnClick(){
  console.log(arguments);

}
