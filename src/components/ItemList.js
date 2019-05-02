import React from 'react';
import Button from './Button';
import ButtonRemove from './ButtonRemove'
import ButtonAdd from './ButtonAdd'
const ItemList=(props)=>{
    let {listName, removeTaskFromList, checkItemFromList} = props;
    return (
        <div className="ItemList">
            <div className="Name">
                {listName.task}
            </div>
            <ButtonAdd 
            clickHandler={checkItemFromList}
            nameButton={listName.complete}
            />
            <ButtonRemove
            clickHandler={removeTaskFromList}
            />
        </div>
    )
}
export default ItemList;