import React from 'react';
const Button=(props) => {
    let {clickHandler} = props
    return (
        <button type="button" className="Button" 
        onClick={clickHandler}>
        :)
        </button>
    )
}
export default Button;