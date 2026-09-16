/* Avslør-svar for quiz-kort og oppgaver fra notatene, samt flervalg (MCQ).
   Alle bokser med attributtet data-quiz får en «Se svar»-knapp som viser .answer. */
(function () {
  'use strict';

  document.querySelectorAll('[data-quiz]').forEach(function (box) {
    var btn = box.querySelector('.reveal-btn');
    var answer = box.querySelector('.answer');
    if (!btn || !answer) return;
    btn.addEventListener('click', function () {
      answer.classList.add('show');
      btn.classList.add('used');
      btn.disabled = true;
    });
  });

  document.querySelectorAll('.quiz.mcq').forEach(function (quiz) {
    var opts = quiz.querySelectorAll('.mcq-opt');
    var fb = quiz.querySelector('.mcq-feedback');
    var letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    opts.forEach(function (opt, i) {
      if (!opt.dataset.letter) opt.dataset.letter = letters[i] || '';
      opt.addEventListener('click', function () {
        if (quiz.dataset.locked === '1') return;
        var correct = opt.dataset.correct === '1';
        opt.classList.add(correct ? 'correct' : 'wrong');
        if (!correct) return; // lov å prøve igjen
        quiz.dataset.locked = '1';
        opts.forEach(function (o) {
          o.classList.add('locked');
          if (o.dataset.correct === '1') o.classList.add('correct');
        });
        if (fb) fb.classList.add('show');
      });
    });
  });
})();
