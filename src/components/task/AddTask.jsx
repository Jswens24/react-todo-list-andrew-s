import React, { useState } from 'react';
import ListTasks from './ListTasks';

const AddTask = () => {
    const [input, setInput] = useState('yooooooo');
    const [list, setList] = useState([]);

    const changeInput = (event) => {
        setInput(event.target.value)
    };

    const clickHandler = () => {
        setList([...list, input])
    }

    return (
        <div>
            <h1>Add Task</h1>
            <input onChange={changeInput} type='text' />
            <button onClick={clickHandler}>Add Task</button>
            <ListTasks list={list} />
        </div>
    )
};

export default AddTask;

