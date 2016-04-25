// begin with a blank/new order
var order = '';


// build a function to ask questions
var answers = [
  order
];
document.write("<p> You Ordered : </p>");


function question(questionText, selection) {
    //what our function will do
    var questions = [
      "rice",
      "chicken" ,
      "beans" ,
      "cheese" ,
      "steak" ,
      "lettuce" ,
      "sour cream" ,


    ];
    for (i=0; i<questions.length; i++){
      order += prompt(questions[i]);
      if (order == "YES"){
        answers +=questions[i];

      }
      document.write("<p>" + questions[i] + "</p>");

        }




    // toppings = prompt("What kinds of toppings would you like on that?");









  // your code goes here
}
document.write(answers);

// call the QUESTION function with the order options
question();

// output their order
