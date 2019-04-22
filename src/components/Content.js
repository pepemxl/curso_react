import React from 'react';
import ItemList from './ItemList'
const Content= (props)=>{
    let {listItems} = props
    let listContent = listItems.map(
        (item, index)=>{
        return (
            <ItemList 
            key={index}
            listName={item}
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