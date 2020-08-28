class FlashLamp{
    constructor() {

    }
    setBattery(battery){
        this.battery = battery;
    }
    getBattery(){
        return this.battery.getEnergy();
    }
    light(){
        if(this.status){
            alert("lighting")
        }else {
            alert("not lighting")
        }
    }
    turnOn(){
        this.status=true;
    }
    turnOFF(){
        this.status=false;
    }
}