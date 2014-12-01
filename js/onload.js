// Opening page state:

window.onload = function() {
  setTimeout(function(){
    document.getElementById('nav-trigger').checked = true;
    document.getElementById('nav-trigger').onchange();
  }, 2000);
  closeLabel.style.display = 'none';
  setDisplayNone();
  overlay.style.display = 'none';
};
