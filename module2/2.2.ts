{
    // interface
    type User1 = {
        name : string,
        age : number
    }
    type UserWithRole1 = User1 & {role:string}
    interface UserWithRole2 extends User2{
        role : string
    }
    const product:UserWithRole2 = {
        name : true,
        age : 1,
        role : ''
    }
    interface User2{
        name : boolean,
        age : number
    }
    const user1:User2 = {
        name : true,
        age : 100
    }

    // js --> object, array --> object, function -->object
    type roll1 = number[];
    interface roll2[
        [index : number] : number
    ]
    const rollNumber1:roll2 = [1,2,3]
    type Add = (num1:number, num2:number)=>number
    interface Add2{
        (num1:number,num2:number):number
    }
    const add:Add2 = (num1, num2) => num1+num2
}