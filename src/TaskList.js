import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    const tasksList = props.tasks.map(task=>( 
        <Task key={task.id} task={task} status={props.status}/>

    ))

    return ( 
        <div className='taskList'>
            <h2>Lista zadań:</h2>
            {tasksList}
        </div>
     );
}
 
export default TaskList;