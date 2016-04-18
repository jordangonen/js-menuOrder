// begin with a blank/new order
var order = '';


// build a function to ask questions

function question(questionText, selection) {
    //what our function will do
    order = prompt("What do you want to eat?");
    toppings = prompt("What kinds of toppings would you like on that?");





  // your code goes here
}

// call the QUESTION function with the order options
question();

// output their order
document.write("<p>You ordered " + order + " with " +toppings + " on the side.<p>");
