var mins = 60;

var x = setInterval(function () {
    var duration = 1000 * 60 * mins;

    var minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((duration % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = minutes + ":" + seconds;

    if (duration < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Time's Up!";
    }
}, 1000); 