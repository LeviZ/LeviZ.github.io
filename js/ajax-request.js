// Variables of buttons on the page:

// main nav:
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

// Sub nav:
var descriptionBtn = document.getElementById('descriptionBtn');
var teeingOffBtn = document.getElementById('teeingOffBtn');
var establishingBtn = document.getElementById('establishingBtn');
var markingBtn = document.getElementById('markingBtn');
var throwingBtn = document.getElementById('throwingBtn');
var holingOutBtn = document.getElementById('holingOutBtn');
var orderOfPlayBtn = document.getElementById('orderOfPlayBtn');
var definitionsBtn = document.getElementById('definitionsBtn');

// Ajax request:
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    document.getElementById('ajax-target').innerHTML = xhr.responseText;
  }
};

function openSendAjax(linkedFile) {
  xhr.open('GET', linkedFile);
  xhr.send();
}

// Button event listeners:
// main nav:

outOfBoundsBtn.addEventListener("click", function() {
  openSendAjax('content/outOfBounds.html');
}, false);

lostDiscBtn.addEventListener("click", function() {
  openSendAjax('content/lostDisc.html');
}, false);

obstaclesBtn.addEventListener("click", function() {
  openSendAjax('content/obstacles.html');
}, false);

courtesyBtn.addEventListener("click", function() {
  openSendAjax('content/courtesy.html');
}, false);

optionalBtn.addEventListener("click", function() {
  openSendAjax('content/optional.html');
}, false);

excessiveBtn.addEventListener("click", function() {
  openSendAjax('content/excessive.html');
}, false);

misplayBtn.addEventListener("click", function() {
  openSendAjax('content/misplay.html');
}, false);

mandatoriesBtn.addEventListener("click", function() {
  openSendAjax('content/mandatories.html');
}, false);

interferenceBtn.addEventListener("click", function() {
  openSendAjax('content/interference.html');
}, false);

provisionalBtn.addEventListener("click", function() {
  openSendAjax('content/provisional.html');
}, false);

applicationBtn.addEventListener("click", function() {
  openSendAjax('content/application.html');
}, false);

// sub nav:

descriptionBtn.addEventListener("click", function() {
  openSendAjax('content/description.html');
}, false);

teeingOffBtn.addEventListener("click", function() {
  openSendAjax('content/teeingOff.html');
}, false);

establishingBtn.addEventListener("click", function() {
  openSendAjax('content/establishing.html');
}, false);

markingBtn.addEventListener("click", function() {
  openSendAjax('content/marking.html');
}, false);

throwingBtn.addEventListener("click", function() {
  openSendAjax('content/throwing.html');
}, false);

holingOutBtn.addEventListener("click", function() {
  openSendAjax('content/holingOut.html');
}, false);

orderOfPlayBtn.addEventListener("click", function() {
  openSendAjax('content/orderOfPlay.html');
}, false);

definitionsBtn.addEventListener("click", function() {
  openSendAjax('content/definitions.html');
}, false);
