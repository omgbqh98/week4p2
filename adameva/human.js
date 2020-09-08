class Human{
    constructor(name,gender,weight) {
        this.name=name;
        this.gender=gender;
        this.weight=weight;
    }
    getName(){
        return this.name
    }
    setName(name){
        this.name=name
    }
    getGander(){
        return this.gender
    }
    setGander(gander){
        this.gander=gander;
    }
    getWeight(){
        return this.weight
    }
    setWeight(weight){
        this.weight=weight;
    }
    void(){
        document.write("ăn táo hơm")
    }
    checkApple(){
        if(apple.isEmpty())
            return false;
        return true;

    }
    eat(apple){
        if(this.checkApple()){
            this.weight++;
        }
    }
}