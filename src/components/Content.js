import React from 'react';
import ItemList from './ItemList'
const Content= (props)=>{
    let {listItems, removeTaskFromList, checkItemFromList} = props
    let listContent = listItems.map(
        (item, index)=>{
        return (
            <ItemList 
            key={index}
            listName={item}
            removeTaskFromList={()=>{removeTaskFromList(index)}}
            checkItemFromList={()=>{checkItemFromList(index)}}
            />
        )
    })
    return (
        <div className="classContainer">
        {listContent}
        </div>
    );
}
export default Content;