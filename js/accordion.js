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
})
