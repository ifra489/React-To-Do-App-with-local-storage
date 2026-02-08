import React,{useEffect, useState} from 'react'

const Todo = () => {
    const [todo, setTodo] = useState("") //input value
    //Initialize todos state with saved todos from local storage or an empty array
    //  if no saved todos exist
    const [todos, setTodos] = useState(()=>{
        const savedTodos=localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    }) //List of todos

    
    //Save todos into local storage when todos state changes
useEffect(()=>{
     console.log(todos);
    localStorage.setItem("todos",JSON.stringify(todos));
},[todos])
    //function to add a new todo
    const handleAdd=(e)=>{
        e.preventDefault();
        if(todo.trim()=== "")
        {
            alert("Please enter a todo")
            return;
        }
        const newTodo={
            id:Date.now(),
            text:todo
        };
            //Update the todos state with the new todo
            setTodos([...todos,newTodo])
            //Clear the input field          
            setTodo("")
    }

    //function to delete a todo
    const handleDelete=(id)=>{
        //Filter out the todo with the specified id and update the todos state
        setTodos(todos.filter((item)=>item.id!==id))
    }
  return (

    <div style={{maxWidth:"400px", margin:"2rem auto",textAlign:"center" ,padding:"1rem",background:"#b8b6b6",border:"1px solid #a5a5a5",borderRadius:"8px"}}>
        <h1>Todo List</h1>
        <form onSubmit={handleAdd}>
            <input
            style={{padding:"8px",width:"70%"}}
            type="text"
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
            placeholder='Enter a todo'
            />
           <button style={{padding:"8px 12px", marginLeft:"10px",marginTop:"10px", background:"#007bff",color:"white",border:"none",borderRadius:"4px"}}>Add Todo</button>
        </form>
<ul style={{listStyle:"none",padding:0,marginTop:"1.5rem"}}>
    {todos.map((item)=>(
        <li style={{background:"#16c6dd",color:"black",padding:"10px",marginBottom:"10px",display:"flex",justifyContent:"space-between", borderRadius:"4px"}}
         key={item.id}>
            {item.text}
            <button style={{background:" #8b1212",color:"white",border:"none",padding:"4px 8px",borderRadius:"4px"}} onClick={()=>handleDelete(item.id)}>Delete</button>
        </li>
    ))}
</ul>
    </div>
  )
}

export default Todo