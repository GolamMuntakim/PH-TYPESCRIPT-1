{
    // destructuring
const user ={
    id:345,
    name:{
        firstName:"Golam",
        middleName:"Muntakim",
        lastName:"Sorowar"
    },
    contact:"01798751857",
    address:"Dhaka"
}
const {contact, name:{middleName}} = user;

// array destructuring 
const myFriends = ['chandler', 'joey', 'ross', 'rachel', 'monica', 'phebe' ]
const [a,b,c, ...rest] = myFriends















}