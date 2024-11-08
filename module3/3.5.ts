{
    // Access Modifiers 
    class BankAccount {
        public  readonly id : number ;
        public  name : string;
        protected balance : number;
        constructor( id:number,name:string,balance:number){
            this.id = id;
            this.name = name;
            this.balance=balance
        }
       public addDeposit(amount : number){
            this.balance = this.balance + amount
        }
       public getBalance(){
            return this.balance
        }
    }
   class StudentAccount extends BankAccount{
    test(){
        this.
    }
   }

const goribManush = new BankAccount(11, "gorib", 20);
goribManush.addDeposit(20)
const myBalance = goribManush.getBalance()
console.log(myBalance)


}