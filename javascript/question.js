function Question(questionDesc, options, rightAnswer) {
    this.questionDesc = questionDesc;
    this.options = options;
    this.rightAnswer = rightAnswer;
}

Question.prototype.controlTheAnswer = function (answer) {
    return answer == this.rightAnswer;
}

let questions = [
    new Question('1-Hangisi Javascript paket yönetim uygulamasıdır', { a: 'Node.js', b: 'Typescript', c: 'Npm', d: 'Nugets' }, 'c'),
    new Question('2-Hangisi Javascript paket yönetim uygulamasıdır', { a: 'Node.js', b: 'Typescript', c: 'Npm' }, 'c'),
    new Question('3-Hangisi Javascript paket yönetim uygulamasıdır', { a: 'Node.js', b: 'Typescript', c: 'Npm' }, 'c'),
    new Question('4-Hangisi Javascript paket yönetim uygulamasıdır', { a: 'Node.js', b: 'Typescript', c: 'Npm' }, 'c'),
];