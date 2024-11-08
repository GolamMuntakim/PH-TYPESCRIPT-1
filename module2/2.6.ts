{
    // constraints
    const addCourseToStudent = <T extends {id:number; name:string; email:string}>(student:T)=>{
        const course = "Next level web development";
        return {
            ...student,
            course
        }
    }
    const student1 = addCourseToStudent<{
        id:221321,
        name : "siam",
        email : "",
        devType:"NLWD"
    }>
    const student2 = addCourseToStudent({
        id:2992029,
        name : "arman",
        email : "",
        hasWatch:"Apple watch",
    })
    const student3 = addCourseToStudent({
        name : 'siam2',
        email:"",
        id:7982
    })
}