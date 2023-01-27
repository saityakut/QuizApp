function UI() {
    this.btn_start = document.querySelector('.btn_start'),
    this.next_btn = document.querySelector('.next_btn'),
    this.btn_replay = document.querySelector('.btn_replay'),
    this.btn_quit = document.querySelector('.btn_quit'),
    this.quiz_box = document.querySelector('.quiz_box'),
    this.score_box = document.querySelector('.score_box'),
    this.option_list = document.querySelector('.option_list'),
    this.time_text = document.querySelector('.time_text'),
    this.time_line = document.querySelector('.time_line'),
    this.time_second = document.querySelector('.time_second'),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'
}

UI.prototype.showQuestion = function(quest) {
    let question = `<span>${quest.questionDesc}</span>`;
    let options = '';

    for (let answer in quest.options) {
        options += `
            <div class="option">
                <span><b>${answer}</b>: ${quest.options[answer]}</span>
            </div>
        `;
    }
    document.querySelector(".question_text").innerHTML = question;
    this.option_list.innerHTML = options;

    const option = this.option_list.querySelectorAll(".option");
    
    for (let opt of option) {
        opt.setAttribute("onclick", "optionSelected(this)");
    }
}

UI.prototype.showQuestionIndex = function(index, totalCount) {
    let tag = `<span class="badge bg-warning">${index + 1} / ${totalCount}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}

UI.prototype.showScore = function (totalQuestionCount, rightAnswers) {
    let tag = `Toplam ${totalQuestionCount} sorudan ${rightAnswers} doğru cevap verdiniz.`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
}