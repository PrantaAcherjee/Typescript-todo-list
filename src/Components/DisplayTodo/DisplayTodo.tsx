import React from 'react';
import { ITask } from '../Interfaces';
interface props{
    task:ITask
    completeTask(taskNameToDelete:string):void
}
const DisplayTodo = ({task,completeTask}:props) => {
    return (
        <div>
            <h4>{task.task}</h4>
            <h5>{task.deadline} Hours</h5>
            <button onClick={()=>completeTask(task.task)}>Clear Task</button>
        </div>
    );
};

export default DisplayTodo;