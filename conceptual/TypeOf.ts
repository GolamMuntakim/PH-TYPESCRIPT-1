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
    console.log(newMovieDetails)
    type DetailsLog = {
        message : string,
        level : "info" | "warning" | "error"
    }
}