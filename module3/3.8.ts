{
    // abstraction : 1.interface 2.abstract
    interface Vehicle1{
       startEngine(): void;
       stopEngine(): void;
       move(): void
    }
    class Car implements Vehicle1{
        startEngine(): void {
            console.log(`I am starting the engine`)
        }
        stopEngine(): void {
            console.log(`I am stoping the engine`)
        }
        move():void{
            console.log(`I am moving the car`)
        }
        test(){
            console.log(`i am testing`)
        }
    }
    const toyotaCar = new Car();
    toyotaCar.startEngine()

    // abstract 
   abstract class Vehicle2{
       abstract startEngine(): void 
       abstract stopEngine(): void 
       abstract move():void
        test(){
            console.log(`i am testing`)
        }
    }
    class Toyota extends Vehicle2{
        startEngine(): void {
            console.log(`I am starting the car engine`)
        }
        stopEngine(): void {
            console.log(`I am stoping the engine`)
        }
        move(): void {
            console.log(`I am moving the car`)
        }
    }
    

}