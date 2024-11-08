{
    // type guard or narrowing
    // typeof --> type guard
    type Alphanumeric = string | number 
    const add = (param1 : Alphanumeric, param2 : Alphanumeric):Alphanumeric =>{
        if(typeof param1 === "number" && typeof param2 === "number"){
            return param1 + param2;
        }else{
            return param1.toString() + param2.toString();
        } 
    }
    const result1 = add(6,3);
    console.log(result1)

    // in guard
    type NormalUser = {
        name : string;
    }
    type AdminUser = {
        name : string ;
        role : "admin";
    }
   const  getUser = (user: NormalUser | AdminUser) =>{
        if('role' in user){
            user.name
            console.log(`My name is ${user.name} and my role is ${user.role}`)
        }else{
            console.log(`My name is ${user.name}`)
        }
    }
    const normalUser : NormalUser= {
        name : "mr normal vai",
    }
    const adminUser : AdminUser= {
        name : "mr admin vai",
        role:"admin"
    }
    getUser(adminUser)


}