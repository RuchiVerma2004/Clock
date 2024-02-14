var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();

setInterval(function() {
    // Analog Clock
    d = new Date();
    second = d.getSeconds() * 6;
    minute = d.getMinutes() * 6;
    hour = d.getHours() * 30 + Math.round(minute / 12);
    document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
    document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";
    document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";

    // Digital Clock
    var digitalTime = getTimeString(d);
    document.getElementById("digital-clock").textContent = digitalTime;
}, 1000);

function getTimeString(date) {
    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');
    var seconds = date.getSeconds().toString().padStart(2, '0');
    return hours + ":" + minutes + ":" + seconds;
}
