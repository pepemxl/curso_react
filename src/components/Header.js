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
        <div>
            <h1>Todo List</h1>
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