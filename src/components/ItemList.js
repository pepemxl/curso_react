import React from 'react';
import Button from './Button';
const ItemList=(props)=>{
    let {listName} = props;
    return (
        <div className="ItemList">
            <div className="Name">
                {listName.task}
            </div>
        </div>
    )
}
export default ItemList;