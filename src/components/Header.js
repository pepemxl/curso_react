import React from 'react';
import Input from './Input';
import Button from './Button';
const Header=(props)=>{
    let {
        inputHandler,
        taskValue,
        clickHandler
    } = props;
    return ( 
        <div className="card">
            <h1 className="title">To Do List</h1>
            <Input
            inputHandler={inputHandler}
            taskValue={taskValue}
            />
            <Button
            clickHandler={clickHandler}
            />
        </div>
    )
} 
export default Header;