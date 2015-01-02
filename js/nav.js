// Nav events

// Overlay variable:
var overlay = document.getElementById('overlay');

// Close/Open menu on nav selection

var navTriggerInput = document.getElementById('nav-trigger');
var subNavTriggerInput = document.getElementById('sub-nav-trigger');

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

function setDisplayNone() {
  var contentParent = document.getElementById('content-parent');
  var sections = contentParent.children;
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }
}

function navigateToContent(contentId) {
  var contentSection = document.getElementById(contentId);
  if (contentSection) {
    setDisplayNone();
    contentSection.style.display = 'block';
    navTriggerInput.checked = false;
    overlay.style.display = 'none';
  }
}

// Set a top-level event listener to handle all nav headers
document.addEventListener('click', function(event) {
  var target = event.target;
  while (target) {
    if (target.getAttribute('nav-target')) {
      var contentId = target.getAttribute('nav-target') + 'Content';
      navigateToContent(contentId);
      break;
    }
    target = target.parentElement; // loop up in case a child of an element with nav-parent is clicked
  }
})




