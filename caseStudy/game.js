function Game() {

        this.canvas = null;
        this.cpmtext = null;
        init();
        loop();

    }

    init=function () {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = CANVAS_WIDTH;
        this.canvas.height = CANVAS_HEIGHT;
        document.body.appendChild(this.canvas);
        this.snake = new Snake(this)
        this.food = new FoodYellow(this)
        this.food2=new FoodBlue(20,20,this)
        this.food3=new FoodBlue(100,100,this)
        this.food4=new FoodBlue(300,300,this)
        this.flashfood=new FlashFood(100,320,this)
    }
   loop=function (){
        update();
        draw();
        setTimeout(() => loop(), 70);
    }

   this.update=function () {

    this.snake.update();
    if(this.snake.eatYellow(this.food.x,this.food.y)){

        this.food.update();
    }else if(this.snake.eatBlue(this.food2.x,this.food2.y)){

        this.food2.update();
    }else if(this.snake.eatBlue(this.food3.x,this.food3.y)){
        this.food3.update();
    }else if(this.snake.eatBlue(this.food4.x,this.food4.y)){
        this.food4.update();
    }else if(this.snake.eatFlash(this.flashfood.x,this.flashfood.y)){
        setTimeout(() => this.loop(), 45);
        this.flashfood.update();
    }

    }

    this.draw=function () {
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.snake.draw();
        this.food.draw();
        this.food2.draw();
        this.food3.draw();
        this.food4.draw();
        this.flashfood.draw();

}

function startGame(){
    let game = new Game();
    return game
}

