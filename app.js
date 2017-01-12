var canvas = document.getElementById('canvas');

var canvasW = window.innerWidth;
var canvasH = window.innerHeight;

var x = canvasW / 2;
var y = canvasH / 2;

canvas.width = canvasW;
canvas.height = canvasH;

var ctx = canvas.getContext('2d');

ctx.fillStyle = "#FF0000";

function moveRight() {
    window.setInterval(function () {
        if (x <= (canvasW + 50)) {
            ctx.fillRect(x, y, 50, 50);

            ctx.clearRect(x, y, 1, 50);

            x += 1;
        }
        else {
            x = 0;
        }
    }, 5);
}

function moveLeft() {
    window.setInterval(function () {
        if (x >= -50) {
            ctx.fillRect(x, y, 50, 50);

            ctx.clearRect((x + 50), y, 1, 50);

            x -= 1;
        }
        else {
            x = canvasW;

            ctx.clearRect(0, y, 50, 50);
        }
    }, 5);
}

function moveUp() {
    window.setInterval(function () {
        if (y >= -50) {
            ctx.fillRect(x, y, 50, 50);

            ctx.clearRect(x, (y + 50), 50, 1);

            y -= 1;
        }
        else {
            ctx.clearRect(x, y, 50, 51);

            y = canvasH;
        }
    }, 5);
}

function moveDown() {
    window.setInterval(function () {
        if (y <= canvasH) {
            ctx.fillRect(x, y, 50, 50);

            ctx.clearRect(x, y, 50, 1);

            y += 1;
        }
        else {
            ctx.clearRect(x, y, 50, 5);

            y = -50;
        }
    }, 5);
}

while (true) {
    
}
