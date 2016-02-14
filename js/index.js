var quotes = [],
  author = [];
quotes.push("FORGIVE OTHERS, not because they deserve forgiveness, but because you deserve PEACE");
author.push("Jonathan Lockwood Huie")
quotes.push("I've; learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.");
author.push("Maya Angelou");
quotes.push("If you're going through Hell, KEEP GOING.")
author.push("Winston Churchill");
quotes.push("I don't count my sit-ups. I only start counting when it starts hurting. That is when I start counting, because then it really counts. That's what makes you a CHAMPION.");
author.push("Muhammad Ali");
quotes.push("If an egg is broken by an outside force, LIFE ENDS. If broken by an inside force, LIFE BEGINS. Real change can only come from within.");
author.push("anonymous");
quotes.push("Be who you are and say what you feel because those who mind don't matter, and those who matter don't mind.");
author.push("Dr. Seuss");

var ran = 0,
  prev = 0;

function newColor(){
  var c = "";
  var r = Math.floor(Math.random() * 128);
  var g = Math.floor(Math.random() * 128);
  var b = Math.floor(Math.random() * 128);
  c = "rgb("+r+","+g+","+b+")";
  $(".bar").css("background-color",c);
  $("h1").css("color",c);
}

function change() {
  while (prev === ran) ran = Math.floor(Math.random() * quotes.length);
  $(".q").html(""+quotes[ran])
  $(".a").html("<i>" + author[ran] + "</i>");
  prev = ran;
  var temp = twitterLinkBase + quotes[ran];
  if (temp.length < 131) temp += "%23Quotepen";
  $("a.tweetAnchor").prop('href', temp);
}

var twitterLinkBase = "https://twitter.com/intent/tweet?text=";
var twitterLink = '';

$(document).ready(function() {
  newColor();
  change();
  $("#getQuote").click(function() {
    $(".flip-box").toggleClass("flip");
    $(".theQuote,.bar").fadeOut(250);
    setTimeout(function() {
      $('.theQuote,.bar').fadeIn(250);
      change();
      newColor();
    }, 800);
  });

});