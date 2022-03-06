import { Paper, Button } from '@mui/material';
import { ITask } from '../Interfaces';
interface props{
    task:ITask
    completeTask(taskNameToDelete:string):void
}
const DisplayTodo = ({task,completeTask}:props) => {
    return (
        <div>           
            <Paper style={{backgroundColor:'darkCyan',
            color:'white',
            margin:'5px',
            textAlign:'center'}} variant="outlined">
            <h4>{task.task}</h4>
            <h5>{task.deadline} Hours</h5>
            <Button style={{backgroundColor:'green',color:'white',margin:'2px'}} onClick={()=>completeTask(task.task)}>Clear Task</Button>
            </Paper>                            
        </div>
    );
};

export default DisplayTodo;