"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Colby Abbott
   Date:   3/11/20
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/
//Number 4, Runs the init function when the page is loaded
window.onload = init;

//Number 5, initialzes function to light up the stars as well as the word count
function init(){
  var stars = document.querySelectorAll("span#stars img");
  for (var i = 0; i < stars.length; i++) {
    stars[i].style.cursor= "pointer";
    stars[i].addEventListener("mouseenter", lightStars);
  }
  document.getElementById("comment").addEventListener("keyup", updateCount);
}

//Number 6, this function will light up the stars in response to the user clicking on a single star or multiple
function lightStars(e) {
   var starNumber = e.target.alt;
   var stars = document.querySelectorAll("span#stars img");
   for (var i = 0; i < starNumber; i++) {
      stars[i].src = "bw_star2.png";
   }
   for (var i = starNumber; i < 5; i++) {
      stars[i].src = "bw_star.png";
   }
   
  document.getElementById("rating").value = starNumber + " stars";
   e.target.addEventListener("mouseleave", turnOffStars);
   e.target.addEventListener("click",
      function() {
         e.target.removeEventListener("mouseleave", turnOffStars);
      }
   );  
}
//Number 7, this function will unlight the stars when the user moves their pointer off of the stars
 function turnOffStars() {
   var stars = document.querySelectorAll("span#stars img");
   for (var i = 0; i < 5; i++) {
      stars[i].src = "bw_star.png";
   }
   document.getElementById("rating").value = "";
} 
//Number 8, this function will make sure that the word count is constantly updating in response to words being added, as well as set the word count to a minimum of 1000
  function updateCount(){
    var commentText = document.getElementById("comment").value;
    var charCount = countCharacters(commentText);
    var wordCountBox = document.getElementById("wordCount");
    
    wordCountBox.value =  charCount + "/1000";
    if(charCount > 1000){
       wordCountBox.style.color = "white";
       wordCountBox.style.backgroundColor = "red";
       }
    else {
       wordCountBox.style.color = "black";
       wordCountBox.style.backgroundColor = "white";
    }
}
/*=================================================================*/

function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   