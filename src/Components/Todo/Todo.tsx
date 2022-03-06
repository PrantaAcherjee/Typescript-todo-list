import React,{ChangeEvent, FC,useState} from 'react';
import DisplayTodo from '../DisplayTodo/DisplayTodo';
import { ITask } from '../Interfaces';

const Todo:FC = () => {
    const [task,setTask]=useState<string>('');
    const [deadline,setDeadline]=useState<number>(0);
    const [todo,setTodo]=useState<ITask[]>([]);

    const handleChange=(event:ChangeEvent<HTMLInputElement>):void=>{
        if(event.target.name==='task'){
            setTask(event.target.value)
        }else{
            setDeadline(Number((event.target.value)))
        }               
    }
    const addingTask=():void=>{

    const newTask={task:task,deadline:deadline};
    setTodo([...todo,newTask])
    // console.log(todo)
    }

     const completeTask=(taskNameToDelete:string):void=>{
        setTodo(todo.filter((task)=>task.task!==taskNameToDelete))
     }

    return (
        <div>
           <div>
           <input type="text" placeholder='My Task' 
           name='task' 
           onChange={handleChange}/>
           <br /> 
           <input type="number" placeholder='Deadline(In Hours)'name='deadline'
           onChange={handleChange}/>
           <br />
           <button onClick={addingTask} type='submit'>Add Task</button>
          </div>
            {/* data sent to display file  */}
            <h3>My daily task</h3>
             {
                 todo.map((task:ITask,key:number)=>{
                   return<DisplayTodo key={key} task={task}
                   completeTask={completeTask}/>  
                 })
             }
        </div>
        
    );
};

export default Todo;