import { Button, TextField, Typography, Grid } from '@mui/material';
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
    setTask("");
    setDeadline(0);
    }

     const completeTask=(taskNameToDelete:string):void=>{
        setTodo(todo.filter((task)=>task.task!==taskNameToDelete))
     }

    return (
        <div>
            <Typography sx={{fontSize:'30px',color:'darkBlue',margin:'5px'}}>Note down the daily task</Typography>
           <div>
           <TextField sx={{ width:'50%',margin:'2px'}}
           variant='standard' type="text" placeholder='My Task' 
           name='task'
           value={task} 
           onChange={handleChange}/>
           <br /> 
           <TextField sx={{ width: '50%',margin:'2px' }} variant='standard'
           type="number" placeholder='Deadline(In Hours)'name='deadline'
           value={deadline}
           onChange={handleChange}/>
           <br /><br />
           <Button sx={{width:'50%',backgroundColor:'orange',color:'white'}} onClick={addingTask} type='submit'>Add Task</Button>
          </div>
            {/* data sent to display file  */}
            <Typography sx={{fontSize:'25px',color:'gray',margin:'5px'}}>My Daily Task</Typography>
            <Grid container spacing={{md:1}} columnSpacing={{md: 1 }} >
             
            {
                 todo.map((task:ITask,key:number)=>{
                   return <Grid item sm={12} md={6}>
                   <DisplayTodo key={key} task={task}
                   completeTask={completeTask}/> 
                   </Grid>  
                 })
             }
              
            </Grid>
                   
        </div>
        
    );
};

export default Todo;