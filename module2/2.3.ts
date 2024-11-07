{
    // Generic
    // const rollNumbers : number[] = [3,6,7]
    type GenericArray = Array<number>
    const rollNumbers : GenericArray = [3,6,7]
    const mentor:Array<string> = ["Mr.X", "Mr.Y" , "Mr.z"]
    const boolArray : Array<boolean> = [true, false , true];
    // const boolArray : boolean[] = [true, false , true];
    // Generic tupple
    type GenericTuple<X,Y> = [X,Y]
    const human:GenericTuple<string,string> = ['Mr.X', 'Mr.Y']
    const userWithId:GenericTuple<number, {name:string, email:string}> = [123, {name : 'siam', email:"siam@gmail.com"}]
}