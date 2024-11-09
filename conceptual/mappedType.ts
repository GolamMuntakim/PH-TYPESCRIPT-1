{
    // mapped
    type Todo = {
        task : string;
        complete : boolean;
        dueDate : string;
    }
    const requiredTodo:Todo = {
        task : "ekta kaj",
        complete: false,
        dueDate : "11th November"
    }
    // mapped type --> in keyof
    type OptionalTodo = {
        [T in keyof Todo]?: Todo[T]
    }
    const task : OptionalTodo = {
        task : "ami kaj korbo na ",
    }
}