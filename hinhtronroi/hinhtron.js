class Circle {
    constructor(x, y, radius, color, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
    }

    draw(canvas) {
        let ctx = canvas.getContext("2d")
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fillStyle = this.color
        ctx.fill();
        ctx.closePath();
    }

    // move() {
    //     this.x += this.speed
    //
    // }
    control() {
        document.addEventListener('keydown',(e)=>{
            if(e.which==37){
                this.x = -this.speed

            }
            if(e.which == 38){
                this.y = -this.speed

            }
            if(e.which==39){
                this.x += this.speed

            }
            if(e.which == 40){
                this.y += this.speed
            }
            }

        )}
}


