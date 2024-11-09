{
    // define  a simple book type 
    type Book = {
        title : string;
        author : string;
        yearPublished : number;
    }
    // use "keyof" to get the keys of the Book type
    // type Bookkeys = keyof Book;
    function getBookProperty<T,K extends keyof T>(book:T , key : K): T[K]{
        return book[key]
    }
    const myBook:Book = {
        title : "The great Typescript",
        author:"Mezbaul Abedin Persian",
        yearPublished : 2025,
    }
   const author =  getBookProperty(myBook, "yearPublished");
   console.log(author)
}