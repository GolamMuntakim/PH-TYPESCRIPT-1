{
    // generic constraint with keyof operator
    type Vehicle = {
        bike : string,
        car : string,
        ship:string
    }
    type owner = "bike" | "car" | "ship" //manually
    type owner2 = keyof Vehicle
    const person1 : owner = "car"
    const person2: owner2 = "ship"

    const getPropertyValue=<X,Y extends keyof X>(obj:X, key:Y)=>{
        return obj[key]
    }
    const user = {
        name : "siam",
        age : 24,
        address : "noakhali"
    }
    const car = {
        model : "Toyta",
        year : 2000
    }
    const result1= getPropertyValue(car,"year") 

    
   

}