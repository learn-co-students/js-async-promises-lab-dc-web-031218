const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question){
  // const cont = document.getElementsByClassName('question-container')[0]
  // container.innerHTML = question.questionText;
  const cont = document.querySelector('.question-container')
  cont.innerHTML = question.questionText
  // cont.appendChild(question.questionText)
  // debugger;
  // cont.getElementsByTagName('div')
  // let li = document.createElement('li')
  // li.innerHTML = question.toString();
  // cont.appendChild(li);
}

function askQuestionThen(time){
  // question = questions[0];
  // appendQuestion(question)
  // return new Promise((resolve, reject) => {
  //   setTimeout(function(){
  //     resolve()
  //   },time);
  // })
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(question)
    }, time)
  })
}

function removeQuestion(){
  const cont = document.querySelector('.question-container')
  cont.innerHTML = '';
}

function askQuestionThenRemoveQuestion(time){
  // //ask question
  // const cont = document.querySelector('.question-container')
  // cont.innerHTML = questions[0].questionText
  // // debugger;
  // askQuestionThen(time).then(t =>removeQuestion())
  return askQuestionThen(time).then(removeQuestion)

}

function trueAndFalseButtons(){
  return btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons(){
  trueAndFalseButtons().forEach(function(btn){
    btn.classList.toggle("hide")
  })
}

function displayQuestionOnClick(){
  let btn = document.querySelector('a')
  return btn.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}
