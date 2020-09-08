class Snake {
    constructor(game) {
        this.game = game;
        this.x = DEFAULT_SNAKE_X;
        this.y = DEFAULT_SNAKE_Y;
        this.grid = SIZE_SNAKE;
        this.dx = SIZE_SNAKE;
        this.dy = DEFAULT_SNAKE_Y;
        this.Length = [];
        this.maxlength = MAX_LENGTH;
        this.point= POINT_ORIGIN;

    }

    update() {

        if(this.endGame()){
            this.x += this.dx;
            this.y += this.dy;
        }

        if(this.x >= this.game.canvas.width){
            this.x =DEFAULT_SNAKE_X;
        }else if(this.x < DEFAULT_SNAKE_X){
            this.x = this.game.canvas.width;
        }
        if(this.y >= this.game.canvas.height){
            this.y =DEFAULT_SNAKE_Y;
        }else if(this.y < DEFAULT_SNAKE_Y){
            this.y = this.game.canvas.height;
        }
        this.Length.unshift({x: this.x, y: this.y});
        if (this.Length.length > this.maxlength) {
            this.Length.pop();
        }

            this.control();

    }


    draw() {

        for (let i = 0; i < this.Length.length; i++) {

            this.game.context.fillStyle ='red';
            this.game.context.fillRect(this.Length[i].x, this.Length[i].y, this.grid, this.grid);
        }
        if(!this.endGame()){
            this.game.context.font = '30px Arial';
            this.game.context.fillStyle=getRandomColor()
            this.game.context.fillText("Thua rồi bạn êi..", 100,100)
            this.game.context.font = '20px Arial';
            this.game.context.fillText("point của bạn: "+this.point, 100,200)
        }
    }

    control() {
        document.addEventListener('keydown', (e) => {
            if (e.which == 37 && this.dx ==0) {
                this.dx = -this.grid;
                this.dy = 0;
            } else if (e.which == 38 && this.dy ==0) {
                this.dx = 0;
                this.dy = -this.grid
            } else if (e.which == 39 && this.dx ==0) {
                this.dx = this.grid;
                this.dy = 0;
            } else if (e.which == 40 && this.dy ==0) {
                this.dx = 0;
                this.dy = this.grid
            }
        });

    }

    eatFlash(x,y){
        if(this.x== x && this.y== y){
            this.point +=10;
            document.getElementById("point").innerHTML= "point:"+this.point
            this.maxlength+=2;
            return true;
        }return false;
    }
    eatYellow(x,y){
        if(this.x== x && this.y== y){
           this.point++;
            document.getElementById("point").innerHTML= "point:"+this.point
            this.maxlength++;
            return true;
        }
        return false;
    }
    eatBlue(x,y){
        if(this.x== x && this.y== y){
            this.point -=5;
            document.getElementById("point").innerHTML= "point:"+this.point
            this.maxlength-=5;
            this.Length.pop();
            this.Length.pop();
            this.Length.pop();
            this.Length.pop();
            this.Length.pop();
            return true;
        }
        return false;
    }
    endGame(){
        for (let i = 1; i < this.Length.length; i++) {
            if(this.x== this.Length[i].x&&this.y==this.Length[i].y||this.maxlength<=2||this.point<0){
            return false;
            }
        }return true;

    }

}
function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}
// function getRandomColor1(){
//     let red = getRandomHex();
//     let white = getRandomHex();
//
//     return "rgb(" + red + "," + white +")";
// }
