{
    // oop --> object oriented programming
    //inheritance --> parent class -->
    //abstraction --> 
    //encapsulation --> 
    //polymarphisom --> 

    // Inheritance 
    class MusicalInstruments {
        name : string;
        constructor(name:string){
            this.name = name;
        }
        play(){
            console.log(`playing the ${this.name}`)
            return "song..."
        }
    }
    class Guiter extends MusicalInstruments{
        constructor(){
            super("Guiter")
        }
        tune(){
            console.log(`Tuning kortechi...${this.name}`);
            return "Music.."
        }
    }
    class Piano extends MusicalInstruments{
        constructor(){
            super("Piano")
        }
        openLid(){
            console.log(`Opening the Lid ... ${this.name}`)
        }
    }
    const guiterist = new Guiter();
    console.log(guiterist.name, guiterist.tune(), guiterist.play())
}