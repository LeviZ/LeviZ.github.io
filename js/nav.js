// Nav events

// Overlay variable:
var overlay = document.getElementById('overlay');

// Close/Open menu on nav selection

var navTriggerInput = document.getElementById('nav-trigger');
var subNavTriggerInput = document.getElementById('sub-nav-trigger');

for (var i = 0, els = document.getElementsByClassName('nav-close'); i < els.length; i++) {
  els[i].addEventListener('click', function() {
    navTriggerInput.checked = false;
    overlay.style.display = 'none';
  });
}


navTriggerInput.addEventListener('change', function() {
  overlay.style.display = navTriggerInput.checked ? 'block' : 'none';
});

overlay.addEventListener('click', function() {
  navTriggerInput.checked = false;
  overlay.style.display = 'none';
});


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





