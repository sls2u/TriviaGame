//start page  with start button
//hide start page
//create html content
//create timer that counts down
//create click function for answer boxes
//create done box to link to closing page
//timer runs out
//create 3rd page that shows correct /incorrect /unanswered questions
//calculate  and display on page
//reset page



  $('#startButton').on('click',function(){
    game.start();
       }

);
var questions = [{
    question: "Mars is the _____ planet from the Sun?",
    choices: ["3rd", "4th", "6th", "7th"],
    correctAnswer: "4th"
  }, {
    question: "In ancient Rome, Mars was named from the the god of war. What God did the ancient Greeks name this planet from?",
    choices: ["Hermes", "Zeus", "Ares", "Eros"],
    correctAnswer: "Ares"
  }, {
    question: "What is Mars often referred to as?",
    choices: ["Candybar", "Next Frontier", "War Planet", "Red Planet"],
    correctAnswer: "Red Planet"
  }, {
    question: "What is the name of the tallest mountain in Mars?",
    choices: ["Valles Marineris", "Mount Everest", "Tharsis", "Olympus Mons"],
    correctAnswer: "Olympus Mons"
  }, {
    question: "How many moons orbit this planet?",
    choices: ["1", "2", "17", "23"],
    correctAnswer: "2"
  }, {
    question: "How many sucessful missions have there been?",
    choices: ["12", "18", "23", "40"],
    correctAnswer: "18"
  }, {
    question: "What year did the first spacecraft land?",
    choices: ["1965", "1967", "1969", "1976"],
    correctAnswer: "1976"
  }, {
    question: "Will Elon Musk end up colonizing  Mars?",
    choices: ["Yes", "No", "Russains will do it first", "Maybe"],
    correctAnswer: "Yes"
  },

]


var game = {
 correct: 0,
 incorrect: 0,
 counter: 10,
 countdown: function() {
   game.counter--;
   $('#counter').html(game.counter);
   if (game.counter <= 0) {
     console.log("Time is Up!");
     game.done();
   }
 },
 start: function() {
   timer = setInterval(game.countdown, 1000);
   $('#subWrapper').prepend('<h2>Time Remianing:<span id="counter">10</span>Seconds</h2>');
   $('#startButton').hide();
   for (var i = 0; i < questions.length; i++) {
     $('#subWrapper').append('<h2>' + questions[i].question + '</h2>');
     for (var j = 0; j < questions[i].choices.length; j++) {
       $('#subWrapper').append("<input type='radio' name='question -" + i + " ' value=' " + questions[i].choices[j] + "'>" + questions[i].choices[j])
     }
   }
 },
 done: function() {
   $.each,function() {
       if ($(this).val() == questions[0].correctAnswer) {
         game.correct++;
       } else {
         game.incorrect++;
       }

     }
   $.each,function() {
       if ($(this).val() == questions[1].correctAnswer) {
         game.correct++;
       } else {
         game.incorrect++;
       }

     }
   $.each,function() {
       if ($(this).val() == questions[2].correctAnswer) {
         game.correct++;
       } else {
         game.incorrect++;
       }

     }
   $.each,function() {
       if ($(this).val() == questions[3].correctAnswer) {
         game.correct++;
       } else {
         game.incorrect++;
       }

     }
   $.each,function() {
       if ($(this).val() == questions[4].correctAnswer) {
         game.correct++;
       } else {
         game.incorrect++;
       }

     }
   $.each,function() {
       if ($(this).val() == questions[5].correctAnswer) {
         game.correct++;
       } else {
         game.incorrect++;
       }

     }
   $.each,function() {
       if ($(this).val() == questions[6].correctAnswer) {
         game.correct++;
       } else {
         game.incorrect++;
       }
     }

   $.each,function() {
       if ($(this).val() == questions[7].correctAnswer) {
         game.correct++;
       } else {
         game.incorrect++;
       }

     }

 this.result()

    },
result: function () {

clearInterval(timer);
$('#subWrapper h2').hide();
$('#subWrapper').html("<h2>All Done!</h2>");
$('#subWrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
$('#subWrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
$('#subWrapper').append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
}

 }
