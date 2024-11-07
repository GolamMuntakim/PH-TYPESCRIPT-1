{
    type GenericArray<T> = Array<T>
    interface User  {
        name : string,
        age : number
    }
    const user:GenericArray<User> = [
        {
            name : "siam",
            age : 100
        }
    ]

    // interface- generic
    interface Developer<T>{
        name : string,
        computer:{
            brand : string;
            model : string;
            releaseYear : number;
        },
        smartWatch: T
    }
    const poorDeveloper : Developer<{
        brand : string,
        model : string,
        display : string
    }> = {
        name : 'siam',
        computer : {
            brand : 'Asus',
            model : 'X-255UR',
            releaseYear : 2013,
        },
        smartWatch:{
            brand : 'apple',
            model : '',
            display:""
        }
    }
    const richDeveloper : Developer<{
        brand : string,
        model: string,
        display : string,
        heartTrack : true
    }> = {
        name : 'siam',
        computer : {
            brand : 'Asus',
            model : 'X-255UR',
            releaseYear : 2013,
        },
        smartWatch:{
            brand : 'apple',
            model : '',
            display:"",
            heartTrack : true
        }
    }
}