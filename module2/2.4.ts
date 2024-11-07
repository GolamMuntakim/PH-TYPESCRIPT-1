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
}