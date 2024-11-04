// Learning function
// Normal function
// Arrow function

function add(num1:number, num2:number):number{
    return num1 + num2;
}
add(2,2)

const addArow = (num1:number , num2:number):number => num1 + num2 

// object --> function --> method
const poorUser = {
    name : 'siam',
    balance : 0,
    addBalance(balance:number):number{
        return this.balance + balance
    }
}

const arr:number[] = [1,4,10]
const newArray:number[] = arr.map((element:number):number => element*element)