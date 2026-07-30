// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");

function timer() {
    time += 1
    counterElement.innerHTML = time
}

setInterval(timer, 1000);