class FoodBlue{
    constructor(x,y,game) {
        this.x= x;
        this.y= y;
        this.game=game;
        this.grid = 20;
    }
    update(){
        this.x =(Math.floor(Math.random()*(19 - 0))+0)*this.grid;
        this.y =(Math.floor(Math.random()*(19 - 0))+0)*this.grid;
    }
    draw(){
        this.game.context.fillStyle = 'blue';
        this.game.context.fillRect(this.x,this.y,this.grid,this.grid);

    }
}