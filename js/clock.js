
function checkTime(i) {
    "use strict";
    if (i < 10) {i = "0" + i; }  // add zero in front of numbers < 10
    return i;
}
function startTime() {
    "use strict";
    var today = new Date(), h = today.getHours(), m = today.getMinutes(), s = today.getSeconds(), t = setTimeout(startTime, 500);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;

}




