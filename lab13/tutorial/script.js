var counter = 0;
var counterTextPrefix = "You have clicked the button ";
var counterTextSufix = " times."

document.getElementById("myParagraph").innerHTML = "This text has been added using javascript";

function incrementCounter() {
    counter++;
    document.getElementById("counter").innerHTML = counterTextPrefix + counter + counterTextSufix;

}