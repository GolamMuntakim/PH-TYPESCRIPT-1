{
    // pick utility
    type Person = {
        name : string,
        age : number ,
        email?: string,
        contactNo : string
    }
    type Name = Pick<Person, "name" | "age">
    // ommit
    type contactInfo = Omit<Person, "name" | "age">
    // require
    type personRequire = Required<Person>
    // partial
    type personPartial = Partial<Person>
    // readonly
    type personReadOnly = Readonly<Person>
    const person1:personReadOnly = {
        name : "x",
        age : 23,
        contactNo:'dcd'
    }

    // record
    type myObj = Record<string, string>

    const obj1: myObj = {
        a:"aa",
        b:"bb",
        c:"iuu"
    }
}