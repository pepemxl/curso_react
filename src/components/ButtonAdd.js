import React from 'react';
const ButtonAdd=(props) => {
    let {clickHandler, nameButton} = props
    return (
        <button type="button" className="ButtonAdd" 
        onClick={clickHandler}>
        {nameButton ? '-' : '+' }
        </button> 
    )
}
export default ButtonAdd;