// Variables of buttons on the page:

var basicRulesBtn = document.getElementById('basicRulesBtn');
var outOfBoundsBtn = document.getElementById('outOfBoundsBtn');
var lostDiscBtn = document.getElementById('lostDiscBtn');
var obstablesBtn = document.getElementById('obstablesBtn');
var courtesyBtn = document.getElementById('courtesyBtn');
var optionalBtn = document.getElementById('optionalBtn');
var excessiveBtn = document.getElementById('excessiveBtn');
var misplayBtn = document.getElementById('misplayBtn');
var mandatoriesBtn = document.getElementById('mandatoriesBtn');
var interferenceBtn = document.getElementById('interferenceBtn');
var provisionalBtn = document.getElementById('provisionalBtn');
var applicationBtn = document.getElementById('applicationBtn');

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

// Opening page state:

// document.onload = function() {
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
// });

// Button event listeners:

basicRulesBtn.addEventListener("click", function() {
  document.getElementById('basicRulesContent').style.display = 'block';
  document.getElementById('outOfBoundsContent').style.display = 'none';
  document.getElementById('lostDiscContent').style.display = 'none';
  document.getElementById('obstablesContent').style.display = 'none';
  document.getElementById('courtesyContent').style.display = 'none';
  document.getElementById('optionalContent').style.display = 'none';
  document.getElementById('excessiveContent').style.display = 'none';
  document.getElementById('misplayContent').style.display = 'none';
  document.getElementById('mandatoriesContent').style.display = 'none';
  document.getElementById('interferenceContent').style.display = 'none';
  document.getElementById('provisionalContent').style.display = 'none';
  document.getElementById('applicationContent').style.display = 'none';
}, false);

outOfBoundsBtn.addEventListener("click", function() {
  document.getElementById('basicRulesContent').style.display = 'none';
  document.getElementById('outOfBoundsContent').style.display = 'block';
  document.getElementById('lostDiscContent').style.display = 'none';
  document.getElementById('obstablesContent').style.display = 'none';
  document.getElementById('courtesyContent').style.display = 'none';
  document.getElementById('optionalContent').style.display = 'none';
  document.getElementById('excessiveContent').style.display = 'none';
  document.getElementById('misplayContent').style.display = 'none';
  document.getElementById('mandatoriesContent').style.display = 'none';
  document.getElementById('interferenceContent').style.display = 'none';
  document.getElementById('provisionalContent').style.display = 'none';
  document.getElementById('applicationContent').style.display = 'none';
}, false);

lostDiscBtn.addEventListener("click", function() {
  document.getElementById('basicRulesContent').style.display = 'none';
  document.getElementById('outOfBoundsContent').style.display = 'none';
  document.getElementById('lostDiscContent').style.display = 'block';
  document.getElementById('obstablesContent').style.display = 'none';
  document.getElementById('courtesyContent').style.display = 'none';
  document.getElementById('optionalContent').style.display = 'none';
  document.getElementById('excessiveContent').style.display = 'none';
  document.getElementById('misplayContent').style.display = 'none';
  document.getElementById('mandatoriesContent').style.display = 'none';
  document.getElementById('interferenceContent').style.display = 'none';
  document.getElementById('provisionalContent').style.display = 'none';
  document.getElementById('applicationContent').style.display = 'none';
}, false);

obstablesBtn.addEventListener("click", function() {
  document.getElementById('basicRulesContent').style.display = 'none';
  document.getElementById('outOfBoundsContent').style.display = 'none';
  document.getElementById('lostDiscContent').style.display = 'none';
  document.getElementById('obstablesContent').style.display = 'block';
  document.getElementById('courtesyContent').style.display = 'none';
  document.getElementById('optionalContent').style.display = 'none';
  document.getElementById('excessiveContent').style.display = 'none';
  document.getElementById('misplayContent').style.display = 'none';
  document.getElementById('mandatoriesContent').style.display = 'none';
  document.getElementById('interferenceContent').style.display = 'none';
  document.getElementById('provisionalContent').style.display = 'none';
  document.getElementById('applicationContent').style.display = 'none';
}, false);

courtesyBtn.addEventListener("click", function() {
  document.getElementById('basicRulesContent').style.display = 'none';
  document.getElementById('outOfBoundsContent').style.display = 'none';
  document.getElementById('lostDiscContent').style.display = 'none';
  document.getElementById('obstablesContent').style.display = 'none';
  document.getElementById('courtesyContent').style.display = 'block';
  document.getElementById('optionalContent').style.display = 'none';
  document.getElementById('excessiveContent').style.display = 'none';
  document.getElementById('misplayContent').style.display = 'none';
  document.getElementById('mandatoriesContent').style.display = 'none';
  document.getElementById('interferenceContent').style.display = 'none';
  document.getElementById('provisionalContent').style.display = 'none';
  document.getElementById('applicationContent').style.display = 'none';
}, false);

optionalBtn.addEventListener("click", function() {
  document.getElementById('basicRulesContent').style.display = 'none';
  document.getElementById('outOfBoundsContent').style.display = 'none';
  document.getElementById('lostDiscContent').style.display = 'none';
  document.getElementById('obstablesContent').style.display = 'none';
  document.getElementById('courtesyContent').style.display = 'none';
  document.getElementById('optionalContent').style.display = 'block';
  document.getElementById('excessiveContent').style.display = 'none';
  document.getElementById('misplayContent').style.display = 'none';
  document.getElementById('mandatoriesContent').style.display = 'none';
  document.getElementById('interferenceContent').style.display = 'none';
  document.getElementById('provisionalContent').style.display = 'none';
  document.getElementById('applicationContent').style.display = 'none';
}, false);

excessiveBtn.addEventListener("click", function() {
  document.getElementById('basicRulesContent').style.display = 'none';
  document.getElementById('outOfBoundsContent').style.display = 'none';
  document.getElementById('lostDiscContent').style.display = 'none';
  document.getElementById('obstablesContent').style.display = 'none';
  document.getElementById('courtesyContent').style.display = 'none';
  document.getElementById('optionalContent').style.display = 'none';
  document.getElementById('excessiveContent').style.display = 'block';
  document.getElementById('misplayContent').style.display = 'none';
  document.getElementById('mandatoriesContent').style.display = 'none';
  document.getElementById('interferenceContent').style.display = 'none';
  document.getElementById('provisionalContent').style.display = 'none';
  document.getElementById('applicationContent').style.display = 'none';
}, false);

misplayBtn.addEventListener("click", function() {
  document.getElementById('basicRulesContent').style.display = 'none';
  document.getElementById('outOfBoundsContent').style.display = 'none';
  document.getElementById('lostDiscContent').style.display = 'none';
  document.getElementById('obstablesContent').style.display = 'none';
  document.getElementById('courtesyContent').style.display = 'none';
  document.getElementById('optionalContent').style.display = 'none';
  document.getElementById('excessiveContent').style.display = 'none';
  document.getElementById('misplayContent').style.display = 'block';
  document.getElementById('mandatoriesContent').style.display = 'none';
  document.getElementById('interferenceContent').style.display = 'none';
  document.getElementById('provisionalContent').style.display = 'none';
  document.getElementById('applicationContent').style.display = 'none';
}, false);

mandatoriesBtn.addEventListener("click", function() {
  document.getElementById('basicRulesContent').style.display = 'none';
  document.getElementById('outOfBoundsContent').style.display = 'none';
  document.getElementById('lostDiscContent').style.display = 'none';
  document.getElementById('obstablesContent').style.display = 'none';
  document.getElementById('courtesyContent').style.display = 'none';
  document.getElementById('optionalContent').style.display = 'none';
  document.getElementById('excessiveContent').style.display = 'none';
  document.getElementById('misplayContent').style.display = 'none';
  document.getElementById('mandatoriesContent').style.display = 'block';
  document.getElementById('interferenceContent').style.display = 'none';
  document.getElementById('provisionalContent').style.display = 'none';
  document.getElementById('applicationContent').style.display = 'none';
}, false);

interferenceBtn.addEventListener("click", function() {
  document.getElementById('basicRulesContent').style.display = 'none';
  document.getElementById('outOfBoundsContent').style.display = 'none';
  document.getElementById('lostDiscContent').style.display = 'none';
  document.getElementById('obstablesContent').style.display = 'none';
  document.getElementById('courtesyContent').style.display = 'none';
  document.getElementById('optionalContent').style.display = 'none';
  document.getElementById('excessiveContent').style.display = 'none';
  document.getElementById('misplayContent').style.display = 'none';
  document.getElementById('mandatoriesContent').style.display = 'none';
  document.getElementById('interferenceContent').style.display = 'block';
  document.getElementById('provisionalContent').style.display = 'none';
  document.getElementById('applicationContent').style.display = 'none';
}, false);

provisionalBtn.addEventListener("click", function() {
  document.getElementById('basicRulesContent').style.display = 'none';
  document.getElementById('outOfBoundsContent').style.display = 'none';
  document.getElementById('lostDiscContent').style.display = 'none';
  document.getElementById('obstablesContent').style.display = 'none';
  document.getElementById('courtesyContent').style.display = 'none';
  document.getElementById('optionalContent').style.display = 'none';
  document.getElementById('excessiveContent').style.display = 'none';
  document.getElementById('misplayContent').style.display = 'none';
  document.getElementById('mandatoriesContent').style.display = 'none';
  document.getElementById('interferenceContent').style.display = 'none';
  document.getElementById('provisionalContent').style.display = 'block';
  document.getElementById('applicationContent').style.display = 'none';
}, false);

applicationBtn.addEventListener("click", function() {
  document.getElementById('basicRulesContent').style.display = 'none';
  document.getElementById('outOfBoundsContent').style.display = 'none';
  document.getElementById('lostDiscContent').style.display = 'none';
  document.getElementById('obstablesContent').style.display = 'none';
  document.getElementById('courtesyContent').style.display = 'none';
  document.getElementById('optionalContent').style.display = 'none';
  document.getElementById('excessiveContent').style.display = 'none';
  document.getElementById('misplayContent').style.display = 'none';
  document.getElementById('mandatoriesContent').style.display = 'none';
  document.getElementById('interferenceContent').style.display = 'none';
  document.getElementById('provisionalContent').style.display = 'none';
  document.getElementById('applicationContent').style.display = 'block';
}, false);
