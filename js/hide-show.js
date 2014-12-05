// Main page load button event listener:
var mainPageEntry = document.getElementById('mainPageEntry');

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
var establishingBtn = document.getElementById('establishingBtn');
var markingBtn = document.getElementById('markingBtn');
var throwingBtn = document.getElementById('throwingBtn');
var holingOutBtn = document.getElementById('holingOutBtn');
var orderOfPlayBtn = document.getElementById('orderOfPlayBtn');
var definitionsBtn = document.getElementById('definitionsBtn');


// Variables of content on the page:

var basicRulesContent = document.getElementById('basicRulesContent');
var outOfBoundsContent = document.getElementById('outOfBoundsContent');
var lostDiscContent = document.getElementById('lostDiscContent');
var obstablesContent = document.getElementById('obstaclesContent');
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
var establishingContent = document.getElementById('establishingContent');
var markingContent = document.getElementById('markingContent');
var throwingContent = document.getElementById('throwingContent');
var holingOutContent = document.getElementById('holingOutContent');
var orderOfPlayContent = document.getElementById('orderOfPlayContent');
var definitionsContent = document.getElementById('definitionsContent');
// Overlay variable:
var overlay = document.getElementById('overlay');

function setDisplayNone() {
  outOfBoundsContent.style.display = 'none';
  lostDiscContent.style.display = 'none';
  obstaclesContent.style.display = 'none';
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

window.addEventListener("click", function() {
  mainPageEntry.style.display = 'none';
}, false);

navTriggerInput.onchange = function() {
  if (navTriggerInput.checked == true) {
    overlay.style.display = 'block';
  } else if (navTriggerInput.checked == false){
    overlay.style.display = 'none';
  }
};

overlay.addEventListener("click", function() {
  navTriggerInput.checked = false;
  overlay.style.display = 'none';
}, false);

// Content load button event listeners:

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
  obstaclesContent.style.display = 'block';
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


// Toggle accordion icon

// check if it has class
function checkClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// toggleClass
function toggleClass(elem, className) {
  var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (checkClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

document.getElementById('').onclick = function() {
    toggleClass(this, 'icon-minus');
}

