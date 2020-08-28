function Cat(name,kg,maxSpeed){
this.name = name;
this.kg =kg;
this.maxSpeed = maxSpeed;
this.void1 = function (){
    document.write("à thế à") ;
}
this.hunt=function (jerry){
if(this.maxSpeed>jerry.speed){
    document.write("đã bắt được nha")
    this.eat(jerry)
}
}
this.eat =function (jerry){
if(jerry.status){
    document.write("đã ăn");
    this.kg+=jerry.kg;
    jerry.status=false;
}
}
}