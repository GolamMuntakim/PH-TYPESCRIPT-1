{
    // generic --> function
    const createArray = (param : string) : string[] =>{
        return [param]
    }
    const createArrayWithGeneric = <T>(param : T) : T[] =>{
        return [param]
    }
    const res1 = createArray('Bangladesh') 
    const resGeneric = createArrayWithGeneric<string>('Bangladesh')
    type User = {id:number, name:string}
    const resGenericObj = createArrayWithGeneric<User>({id:222, name : 'Mr.Pashan'})
    const addCours = <T>(student:T) =>{
        const course = 'web'
        return {
            ...student,
            course
        }
    }
    const student1 = addCours({name : "amin", id:687236})
    const student2 = addCours({name : "ruhul", id:68723644 , sex:'male'})
}