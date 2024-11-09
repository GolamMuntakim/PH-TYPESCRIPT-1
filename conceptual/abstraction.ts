{
    // abstraction
    class coffeMachine{
       private isPowerOn : boolean = false;

       powerOn(){
        this.isPowerOn = true;
        console.log("Coffee machine is on");
        return " power on"
       }
       makeCoffee(){
        if(this.isPowerOn){
            console.log("coffe brewing...")
            return "cofee brewing"
        }else{
            console.log("Bhai coffe nai")
            return "coffe not brewing"
        }
       }
       powerOff(){
        this.isPowerOn = false ;
        console.log("Coffe machine is power off");
        return "power is off"
       }
    }
    const myCoffeeMachine = new coffeMachine()
    console.log(myCoffeeMachine.powerOn())
}