// Opening page state:

window.onload = function() {
  setTimeout(function(){
    document.getElementById('nav-trigger').checked = true;
  }, 2000);
  closeLabel.style.display = 'none';
};




// Close/Open menu on nav selection

var navTriggerInput = document.getElementById('nav-trigger');
var subNavTriggerInput = document.getElementById('sub-nav-trigger');


document.getElementsByClassName('nav-close')[1].onclick = function() {
  navTriggerInput.checked = false;
}

document.getElementsByClassName('nav-close')[0].onclick = function() {
  navTriggerInput.checked = false;
}

// Nav reset. Ensures only main nav is opened everytime hamburger is clicked

document.getElementById('nav-reset').addEventListener("click", function() {
  if (navTriggerInput.checked === false) {
    subNavTriggerInput.checked = false;
  }
});


// Setting page content to not display on page load

// window.onload = function() {
//   document.getElementById('logo').style.display = 'block';
//   document.getElementById('basicRulesContent').style.display = 'none';
//   document.getElementById('outOfBoundsContent').style.display = 'none';
//   document.getElementById('lostDiscContent').style.display = 'none';
//   document.getElementById('obstablesContent').style.display = 'none';
//   document.getElementById('courtesyContent').style.display = 'none';
//   document.getElementById('optionalContent').style.display = 'none';
//   document.getElementById('excessiveContent').style.display = 'none';
//   document.getElementById('misplayContent').style.display = 'none';
//   document.getElementById('mandatoriesContent').style.display = 'none';
//   document.getElementById('interferenceContent').style.display = 'none';
//   document.getElementById('provisionalContent').style.display = 'none';
//   document.getElementById('applicationContent').style.display = 'none';
// };


// Hide/show checkbox labels

var menuLabel = document.getElementById('nav-trigger-label__menu');
var closeLabel = document.getElementById('sub-nav-trigger-label__close');

window.addEventListener("click", function() {
  if (subNavTriggerInput.checked === true) {
    closeLabel.style.display = 'block';
  } else {
    closeLabel.style.display = 'none';
  }
});

// Variables of buttons on the page:

var basicRulesBtn = document.getElementById('basicRulesBtn');
var outOfBoundsBtn = document.getElementById('outOfBoundsBtn');
var lostDiscBtn = document.getElementById('lostDiscBtn');
var obstaclesBtn = document.getElementById('obstaclesBtn');
var courtesyBtn = document.getElementById('courtesyBtn');
var optionalBtn = document.getElementById('optionalBtn');
var excessiveBtn = document.getElementById('excessiveBtn');
var misplayBtn = document.getElementById('misplayBtn');
var mandatoriesBtn = document.getElementById('mandatoriesBtn');
var interferenceBtn = document.getElementById('interferenceBtn');
var provisionalBtn = document.getElementById('provisionalBtn');
var applicationBtn = document.getElementById('applicationBtn');
// Sub nav variables:
var descriptionBtn = document.getElementById('descriptionBtn');
var teeingOffBtn = document.getElementById('teeingOffBtn');
var establishingBtn = document.getElementById('applicationBtn');
var markingBtn = document.getElementById('establishingBtn');
var throwingBtn = document.getElementById('throwingBtn');
var holingOutBtn = document.getElementById('holingOutBtn');
var orderOfPlayBtn = document.getElementById('orderOfPlayBtn');
var definitionsBtn = document.getElementById('definitionsBtn');

// Variables of content on the page:

var basicRulesContent = document.getElementById('basicRulesContent');
var outOfBoundsContent = document.getElementById('outOfBoundsContent');
var lostDiscContent = document.getElementById('lostDiscContent');
var obstablesContent = document.getElementById('obstablesContent');
var courtesyContent = document.getElementById('courtesyContent');
var optionalContent = document.getElementById('optionalContent');
var excessiveContent = document.getElementById('excessiveContent');
var misplayContent = document.getElementById('misplayContent');
var mandatoriesContent = document.getElementById('mandatoriesContent');
var interferenceContent = document.getElementById('interferenceContent');
var provisionalContent = document.getElementById('provisionalContent');
var applicationContent = document.getElementById('applicationContent');
// Sub nav variables:
var descriptionContent = document.getElementById('descriptionContent');
var teeingOffContent = document.getElementById('teeingOffContent');
var establishingContent = document.getElementById('EstablishingContent');
var markingContent = document.getElementById('markingContent');
var throwingContent = document.getElementById('throwingContent');
var holingOutContent = document.getElementById('holingOutContent');
var orderOfPlayContent = document.getElementById('orderOfPlayContent');
var definitionsContent = document.getElementById('definitionsContent');

function setDisplayNone() {
  basicRulesContent.style.display = 'none';
  outOfBoundsContent.style.display = 'none';
  lostDiscContent.style.display = 'none';
  obstablesContent.style.display = 'none';
  courtesyContent.style.display = 'none';
  optionalContent.style.display = 'none';
  excessiveContent.style.display = 'none';
  misplayContent.style.display = 'none';
  mandatoriesContent.style.display = 'none';
  interferenceContent.style.display = 'none';
  provisionalContent.style.display = 'none';
  applicationContent.style.display = 'none';
  descriptionContent.style.display = 'none';
  teeingOffContent.style.display = 'none';
  establishingContent.style.display = 'none';
  markingContent.style.display = 'none';
  throwingContent.style.display = 'none';
  holingOutContent.style.display = 'none';
  orderOfPlayContent.style.display = 'none';
  definitionsContent.style.display = 'none';
}






// Button event listeners:

basicRulesBtn.addEventListener("click", function() {
  setDisplayNone();
  basicRulesContent.style.display = 'block';
}, false);

outOfBoundsBtn.addEventListener("click", function() {
  setDisplayNone();
  outOfBoundsContent.style.display = 'block';
}, false);

lostDiscBtn.addEventListener("click", function() {
  setDisplayNone();
  lostDiscContent.style.display = 'block';
}, false);

obstaclesBtn.addEventListener("click", function() {
  setDisplayNone();
  obstablesContent.style.display = 'block';
}, false);

courtesyBtn.addEventListener("click", function() {
  setDisplayNone();
  courtesyContent.style.display = 'block';
}, false);

optionalBtn.addEventListener("click", function() {
  setDisplayNone();
  optionalContent.style.display = 'block';
}, false);

excessiveBtn.addEventListener("click", function() {
  setDisplayNone();
  excessiveContent.style.display = 'block';
}, false);

misplayBtn.addEventListener("click", function() {
  setDisplayNone();
  misplayContent.style.display = 'block';
}, false);

mandatoriesBtn.addEventListener("click", function() {
  setDisplayNone();
  mandatoriesContent.style.display = 'block';
}, false);

interferenceBtn.addEventListener("click", function() {
  setDisplayNone();
  interferenceContent.style.display = 'block';
}, false);

provisionalBtn.addEventListener("click", function() {
  setDisplayNone();
  provisionalContent.style.display = 'block';
}, false);

applicationBtn.addEventListener("click", function() {
  setDisplayNone();
  applicationContent.style.display = 'block';
}, false);


// Sub nav hide/show content

descriptionBtn.addEventListener("click", function() {
  setDisplayNone();
  descriptionContent.style.display = 'block';
}, false);

teeingOffBtn.addEventListener("click", function() {
  setDisplayNone();
  teeingOffContent.style.display = 'block';
}, false);

establishingBtn.addEventListener("click", function() {
  setDisplayNone();
  establishingContent.style.display = 'block';
}, false);

markingBtn.addEventListener("click", function() {
  setDisplayNone();
  markingContent.style.display = 'block';
}, false);

throwingBtn.addEventListener("click", function() {
  setDisplayNone();
  throwingContent.style.display = 'block';
}, false);

holingOutBtn.addEventListener("click", function() {
  setDisplayNone();
  holingOutContent.style.display = 'block';
}, false);

orderOfPlayBtn.addEventListener("click", function() {
  setDisplayNone();
  orderOfPlayContent.style.display = 'block';
}, false);

definitionsBtn.addEventListener("click", function() {
  setDisplayNone();
  definitionsContent.style.display = 'block';
}, false);





