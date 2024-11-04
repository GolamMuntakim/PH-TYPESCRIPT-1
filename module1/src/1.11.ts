{
    // ternary operatorn || optional chaining || nullish coalescing operator
    const age:number = 20
    age>=18? console.log("adult") : console.log("Not adult")

    const isAdult = age > 18 ? 'adult' : 'Not adult'
    console.log({isAdult})

    // nullish coalesching operator
    // null / undefined ----> decision making
    const isAuthenticated = null;
    const result1 = isAuthenticated ?? 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest'
    console.log({result1})



}