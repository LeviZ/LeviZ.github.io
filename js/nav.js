// Nav events

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


// Hide/show sub nav checkbox label

var menuLabel = document.getElementById('nav-trigger-label__open');
var closeLabel = document.getElementById('sub-nav-trigger-label__close');

window.addEventListener("click", function() {
  if (subNavTriggerInput.checked === true) {
    closeLabel.style.display = 'block';
  } else {
    closeLabel.style.display = 'none';
  }
});





