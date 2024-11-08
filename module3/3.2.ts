{
    // inheritance
    class Parent{
        name : string;
        age : number ;
        address: string;
        constructor(name : string, age: number, address: string){
            this.name = name;
            this.age = age;
            this.address = address
        }
        getSlepp(numOfhours : number){
            console.log(`${this.name } will sleep for ${numOfhours}`)
        }
    } 


    class Student extends Parent{
        constructor( name : string, age: number, address: string){
            super(name, age, address)
        }
       
    }
    const student1 = new Student("siam", 20 , "bu")

    // 
    class Teacher extends Parent {
        designation : string

        constructor(name : string, age: number, address: string, designation:string){
            super(name , age, address)
            this.designation = designation
        }
        takeClass(numOfClass : number){
            console.log(`${this.name } will sleep for ${numOfClass}`)
        }
    }
    const teacher1 = new Teacher("siam", 40 , "bu", "Lecturer")
}