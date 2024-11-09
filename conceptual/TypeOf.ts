{
    // Type of 
    const MovieName = "Deadpool";
    // use Typeof
    type MovieType = typeof MovieName
    const newMovie : MovieType = "Deadpool"

    const movie = {
        title : "Rock On",
        director : "Firoz",
    }
    type movieDetails = typeof movie
    const newMovieDetails : movieDetails = {
        title:"Rock On",
        director : "Firoz"
    }
    // console.log(newMovieDetails)
    type DetailsLog = {
        message : string,
        level : "info" | "warning" | "error"
    }
    function logMessage(input:string | number | DetailsLog){
        if(typeof input === "string"){
            console.log("simple message info:", input)
            return input
        }else if(typeof input === "number"){
            console.log("Error code:", input)
        }else if("message" in input && "level" in input){
            console.log(`Danger Level ${input.level} instruction for the next level dev
                 ${input.message}`)
        }
    }
    const test = logMessage({
        message : "Bhai joldi google koren",
        level : "error"
    })
    console.log(test)
}