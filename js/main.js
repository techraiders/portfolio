/*sidenav sharing icons opens and closes*/
function close() {
      document.getElementById("shareicon").style.display= "none";
    }
function open() {
  document.getElementById("shareicon").style.display = "block";
}


function w3_openShareIconsSidenav() {
    document.getElementById("shareiconsholder").style.display = "block";
    close();
}
function w3_closeShareIconsSidenav() {
    document.getElementById("shareiconsholder").style.display = "none";
    open();
}

