// Set the countdown target date (March 20, 2025 at 00:00:00)
// If the current date is later than this target date, the countdown will immediately show 0 for all units (days, hours, minutes, seconds)
// and stop updating. You can change the target date here to a future date, like:
// var countDownDate = new Date("April 30, 2025 00:00:00").getTime();

var countDownDate = new Date("March 20, 2025 00:00:00").getTime(); //Note above comments


var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        alert("The countdown has ended!");
    }

}, 1000);
