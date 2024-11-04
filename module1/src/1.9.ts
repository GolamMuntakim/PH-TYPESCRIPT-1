{
    // Type alias
    type Student = {
        name : string,
        age :number,
        contactNo?:string,
        gender : string,
        address :string
    }


    const student1: Student={
        name:"Golam Muntakim",
        age:24,
        gender:"male",
        contactNo:"01798751857",
        address:"Noakhali"
    }


    const student2:Student={
        name:"Mir",
        gender:"Male",
        address:"Dhaka",
        age:28
    }

    type UserName = string
    type IsAdmin = boolean
    const userName:UserName="siam"
    const isAdmin:IsAdmin= true


    type Add=(num1:number, num2:number)=>number
    const add:Add = (num1,num2) => num1+num2










}