{
    // asynchronas
    // promise
    type Todo = {
        id : number,
        userId : number ,
        title : string,
        completed : boolean
    }
    const getTodo = async():Promise<Todo> =>{
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await response.json()
      return data
      console.log(data)
    }
    getTodo()

    type something = { something : string };
    // simulate
    const createPromise = ():Promise<something> =>{
        return new Promise<something>((resolve,reject)=>{
            const data: something = {something : "something"}
            if(data){
                resolve(data)
            }else{
                reject('failed to load data')
            }
        })
    }
    // calling create promise function
    const showData = async():Promise<something> =>{
        const data:something = await createPromise()
        return data
    }
    showData()

}