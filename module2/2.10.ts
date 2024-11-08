{
    // map type
    const arrayOfNumber : number[] = [1,2,4]
    const arrOfString : string[] = ['1','2','3']
    const arrOfStrings : string[] = arrayOfNumber.map((number)=>number.toString())
    console.log(arrOfStrings)

    type AreaNumber = {
        height: number,
        width : number
    }
    type AreaString = {
       [ key in keyof AreaNumber] : string
    }
}