var panel = $("#quiz-area");

// Question set
var questions = [{
  question: "1. World War 1 began in which year?",
  answers: ["1923", "1938", "1917", "1914"],
  correctAnswer: "1914"
}, {
  question: "2. Adolf Hitler was born in which country?",
  answers: ["France", "Germany", "Austria", "Hungary"],
  correctAnswer: "Austria"
}, {
  question: "3. John F. Kennedy was assassinated in..?",
  answers: ["1973", "Austin", "Dallas", "1958"],
  correctAnswer: "Dallas"
}, {
  question: "4. Who fought in the war of 1812",
  answers: ["Andrew Jackson", "Arthur Wellsley", "Otto von Bismark", "Napoleon"],
  correctAnswer: "Andrew Jackson"
}, {
  question: "5. American involvement in the Korean War took place in which decade?",
  answers: ["1970s", "1950s", "1920s", "1960s"],
  correctAnswer: "1950s"
}, {
  question: "6. The Magna Carta was published by the King of which country?",
  answers: ["France", "Austria", "Italy", "England"],
  correctAnswer: "Fresh"
}, {
  question: "7. The disease that avaged and killed a third of Europe's population in the 14th century is know as?",
  answers: ["The White Death", "The Black Plague", "Smallpox", "The Bubonic Plague"],
  correctAnswer: "Skeeter"
}, {
  question: "8. Who was the first Western explorer to reach China?",
  answers: ["Magellan", "Cook", "Marco Polo", "Sir Francis Drake"],
  correctAnswer: "Mr.Belding"
}];

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      //console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<br><br> <button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
 // console.log('start bro')
});


$(document).on("click", "#done", function() {
  game.done();
});