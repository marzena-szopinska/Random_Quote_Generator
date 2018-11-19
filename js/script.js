/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

var quotes = [
  {
    quote: "Don\'t watch the clock, do what it does. Keep going.",
    source: "Sam Levenson",
    year: "2004",
    citation: "brainyquote"
  },
  {
    quote: "Nobody is born a warrior, in exactly the same way that nobody is born an average man. We make ourselves into one or the other.",
    source: "Carlos Castaneda"
  },
  {
    quote: "Never mind searching for who you are. Search for the person you aspire to be.",
    source: "Robert Brault",
    year: "2015",
    citation: "thoughtcatalog"
  },
  {
    quote: "Many of life\’s failures are people who did not realize how close they were to success when they gave up.",
    source: "Thomas Edison",
    citation: "thoughtcatalog"
  },
  {
    quote: "Once you realize there is a life after mistakes, you gain a self-confidence that never goes away.",
    source: "Bob Schieffer",
    year: "2006",
    citation: "thoughtcatalog"
  },
  {
    quote: "You miss 100% of the shots you don\'t take.",
    source: "Wayne Gretzky",
    citation: "forbes"
  },
  {
    quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
    source: "Confucius",
    citation: "inc"
  }
];

function getRandomQuote() {
  // generate a random number
  var randomNum = Math.floor(Math.random() * quotes.length);
  // return a random quote object from 'quotes' array
  var quote = quotes[randomNum];
  return quote;
}

function printQuote() {
  // call the 'getRandomQuite' function
  var randomQuote = getRandomQuote();
  var quoteInfo = "";

  //build HTML string that holds information about randomly picked quote
  quoteInfo += "<p class='quote'>" + randomQuote.quote + "</p>";
  quoteInfo += "<p class='source'>" + randomQuote.source; // <---- finish it off

  // check if optional citation property exist
  if(randomQuote.citation){
    quoteInfo += "<span class='citation'>" + randomQuote.citation + "</span>";
  }

  // check if optional year property exist
  if(randomQuote.year){
   quoteInfo += "<span class='year'>" + randomQuote.year + "</span>";
  }

  quoteInfo += "</p>";

  // set the innerHTML of the quote-box to the quoteInfo string
  var div = document.getElementById('quote-box');
  div.innerHTML = quoteInfo;

  // target the body tag inside index.html
  var body = document.getElementById('body');
  // change the background of the body by applying style attribute
  // with randomly generated background color
  body.setAttribute('style', 'background-color: ' + randomColor() + '');
}

// generate a random number between 0 - 256
function randomRGB(){
  return Math.floor(Math.random() * 256);
}

// build a random color using string
function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}


// trigger the event listener to show another quote when the button 'Show another quote' is clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);