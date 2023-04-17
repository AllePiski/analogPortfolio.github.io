"use strict";

var slideIndex = 1;
showDivs(slideIndex, "BW");
showDivs(slideIndex, "Color");

function scorri(n, strControl) {
  showDivs((slideIndex += n), strControl);
}

function showDivs(n, strControl) {
  var i;
  if (strControl === "Color") {
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
  } else {
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
}

/*
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
*/
