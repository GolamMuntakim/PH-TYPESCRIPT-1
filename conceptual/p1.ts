{
    // problem solving
    // Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.
    function repeatString(str:string, num:number){
        return str.repeat(num)
    }
    console.log(repeatString("siam", 5))
    // // Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.
    function findLargestNumber(num:number[]){
        return Math.max(...num)
    }
    console.log(findLargestNumber([2,4,5,7,8,10,200]))
    // Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.
    function filterEvenNumbers  (nums:number[]){
        return nums.filter((num)=> num%2 ==0)
    }
    console.log(filterEvenNumbers([2,3,45,5,10,12,18,23]))
    // Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.
    const reverseArray = <T>(arr:T[]):T[] =>{
        return arr.reverse();
    }
    console.log(reverseArray(['siam',243,'bkd']))
    // You are given an object called “student” representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called calculateAverageGrade that takes this student object as input and calculates the average grade.
    interface student{
        name : string;
        age : number ;
        grades : number[];
    }
    const calculateAverageGrade = (std:student):number =>{
        const grade = std.grades.reduce((acc , sum)=> acc+sum, 0);
        return grade / std.grades.length
    }
   const student1: student = {
    name : "siam",
    age : 24,
    grades : [12,12]
   }
   const averageGrade = calculateAverageGrade(student1)
   console.log(averageGrade)

   // You are given an object representing a book with properties title (string), author (string), and publishedYear (number). Use type alias for declaring the object. Write a TypeScript function called isRecentBook that takes this book object as input and determines if the book was published in the last 5 years.
   
}