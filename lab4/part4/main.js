window.onload = function() {
   
    const para = document.querySelector('p');
    let count = 0;
   
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
   
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
   
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
   
    function random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
   
    function randomRGB() {
        return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
    }
   
    class Shape {
        constructor(x, y, velX, velY) {
            this.x = x;
            this.y = y;
            this.velX = velX;
            this.velY = velY;
        }
    }