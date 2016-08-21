/*sidenav sharing icons opens and closes*/
function close(x) {
    x.style.display= "none";
}
function open(y) {
    y.style.display = "block";
}


function w3_openShareIconsSidenav() {
    document.getElementById("socialshareiconsholder").style.display = "block";
    close(shareicon);
}
function w3_closesocialShareIconsSidenav() {
    document.getElementById("socialshareiconsholder").style.display = "none";
    open(shareicon);
}