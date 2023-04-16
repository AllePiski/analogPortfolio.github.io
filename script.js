"use strict";

var slideIndex = 1;
showBWDivs(slideIndex);
showColorDivs(slideIndex);

function scorriBW(n) {
  showBWDivs((slideIndex += n));
}
function scorriColor(n) {
  showColorDivs((slideIndex += n));
}

function showBWDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideImgBW");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

function showColorDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideImgColor");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
