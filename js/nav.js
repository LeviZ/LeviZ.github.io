// Nav events

// Overlay variable:
var overlay = document.getElementById('overlay');

// Close/Open menu on nav selection

var navTriggerInput = document.getElementById('nav-trigger');
var subNavTriggerInput = document.getElementById('sub-nav-trigger');

navTriggerInput.addEventListener('change', function() {
  overlay.style.display = navTriggerInput.checked ? 'block' : 'none';

  // Nav reset. Ensures only main nav is opened everytime hamburger is clicked
  if (!navTriggerInput.checked) {
    subNavTriggerInput.checked = false;
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
    if (navTriggerInput.checked)
      navTriggerInput.click(); // click so that it fires the change event
  }
}

// Set a top-level event listener to handle all nav links
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




