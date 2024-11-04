{
    // nullable type/unkown type
    const searchName = (value:string | null)=>{
        if(value){
            console.log("searching");
        }else{
            console.log("There is nothing to search")
        }
    }
    searchName(null);

    // unkown typeof
    const getSpeedInMeterPerSecond = (value:unknown)=>{
        if(typeof value === "number"){
            const convertedSpeed = (value*1000)/3600
            console.log(`The speed is ${convertedSpeed} ms^-1`)
        }
        if(typeof value === 'string'){
            const [result,unit] = value.split(' ')
            const convertedSpeed = (parseFloat(result)*1000)/3600
            console.log(`The speed is ${convertedSpeed} ms^-1`)
        }
    }
    getSpeedInMeterPerSecond(`1000 kmh^-1`)

    // never
    const throwError = (msg:string):never => {
        throw new Error(msg)
    }
    throwError('error ho gaya')


}