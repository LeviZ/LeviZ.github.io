// Overlay variable:
var overlay = document.getElementById('overlay');

function setDisplayNone() {
  var contentParent = document.getElementById('content-parent');
  var sections = contentParent.children;
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }
}

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


// // Toggle accordion icon

// check if it has class
function checkClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
};
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
};

// Set a top-level event listener to handle all accordian headers
document.addEventListener('click', function(event) {
  var target = event.target;
  if (target.tagName == 'SPAN') target = target.parentNode;
  if (checkClass(target, 'accordian-header')) toggleClass(target, 'expanded');
});


// Set a top-level event listener to handle all nav headers
document.addEventListener('click', function(event) {
  var target = event.target;
  if (target.tagName == 'BUTTON' && /nav-item$/.test(target.className) && /Btn$/.test(target.id)) {
    setDisplayNone();
    var contentId = target.id.replace(/Btn$/, 'Content');
    var contentSection = document.getElementById(contentId);
    if (contentSection) {
      contentSection.style.display = 'block';
    }
  }
})
