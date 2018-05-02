const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]


//the current question
let question;


function appendQuestion(quest){
	document.querySelector('.question-container').innerHTML = 
						   quest.questionText;
}

function askQuestionThen(){
	question = questions[0];
	appendQuestion(question);
	return new Promise((resolve, reject)=>{
		resolve(question);
	});
}//end askQuestionThen()


function removeQuestion(){
	document.querySelector('.question-container').innerHTML = '';
}

function askQuestionThenRemoveQuestion(time){
	return askQuestionThen().then(setTimeout(removeQuestion, time));
}

function trueAndFalseButtons(){
	let buttonList = document.querySelector('.true-false-list').children;
	return Array.from(buttonList);
}

function toggleTrueAndFalseButtons(){
	let buttonList = trueAndFalseButtons();
	if(buttonList[0].classList.contains('hide')){
		buttonList.forEach(e=>e.classList.remove('hide'));
	}else{
		buttonList.forEach(e=>e.classList.add('hide'));
	}
}

function displayQuestionOnClick(){
	let buttonList = document.querySelectorAll('.btn');
	buttonList.forEach(b=>{
		b.addEventListener('click', function(event){
			askQuestionThenRemoveQuestion();
			toggleTrueAndFalseButtons();
		})
	}); 
}
