const quiz = new Quiz(questions);
const ui = new UI(questions);

ui.btn_start.addEventListener('click', function () {
    ui.quiz_box.classList.add('active');
    startTimer(10);
    startTimeLine();
    ui.showQuestion(quiz.getQuestion());
    ui.showQuestionIndex(quiz.questionIndex, quiz.questions.length);
    ui.next_btn.classList.remove('show');
});

ui.next_btn.addEventListener('click', function () {
    if (quiz.questions.length != quiz.questionIndex + 1) {
        quiz.questionIndex += 1;
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(10);
        startTimeLine();
        ui.showQuestion(quiz.getQuestion());
        ui.showQuestionIndex(quiz.questionIndex, quiz.questions.length);
        ui.next_btn.classList.remove('show');
    } else {
        clearInterval(counter);
        clearInterval(counterLine);
        ui.quiz_box.classList.remove('active');
        ui.score_box.classList.add('active');
        ui.showScore(quiz.questions.length, quiz.rightAnswers);
   }
});

ui.btn_quit.addEventListener('click', function () {
    window.location.reload(); 
});

ui.btn_replay.addEventListener('click', function () {
    quiz.questionIndex = 0;
    quiz.rightAnswers = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove('active');
});

function optionSelected(option) {
    clearInterval(counter);
    clearInterval(counterLine);
    let answer = option.querySelector("span b").textContent;
    let question = quiz.getQuestion();

    if (question.controlTheAnswer(answer)) {
        quiz.rightAnswers += 1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }

    for (let i = 0; i < ui.option_list.children.length; i++){
        ui.option_list.children[i].classList.add("disabled");
    }
    ui.next_btn.classList.add('show');
}

let counter;
function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        ui.time_second.textContent = time;
        time--;

        if (time < 0) {
            clearInterval(counter);
            ui.time_text.textContent = 'Süre Bitti';
            let answer = quiz.getQuestion().rightAnswer;

            console.log(answer);

            for (let option of ui.option_list.children) {
                if (option.querySelector('span b').textContent == answer) {
                    option.classList.add('correct');
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }
                option.classList.add('disabled');
            }
            ui.next_btn.classList.add('show');
        }
    }
}

let counterLine;
function startTimeLine() {
    let line_width = 0;

    counterLine = setInterval(timer, 20);

    function timer() {
        line_width += 1;
        ui.time_line.style.width = line_width + 'px';

        if (line_width > 549) {
            clearInterval(counterLine);
        }
    }

}



