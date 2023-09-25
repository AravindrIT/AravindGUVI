import React { useState } from 'react';
import Task from '../modals/Task';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    return (
       <>
       <div className='header text-center'>
            <h3>Todo List</h3>
            <button className='btn btn-primary mt-2'>Create Task</button>
        </div>
        <div className='task-container'>
        
        </div>
        <Task toggle= {toggle} modal = {modal}/>
        </>
    );
};

export default TodoList;