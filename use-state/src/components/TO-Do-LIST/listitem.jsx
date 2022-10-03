import React from "react";

function ListItem(props){
    return(
        <div className={props.obj.completed && 'completed'}>
            <p>{props.obj.name}</p>
            <button onClick={() =>props.onDone(props.obj)}>mark as done</button>
            <button onClick={() =>props.onDelete(props.obj)}>delete</button>

        </div>
    )
}

export default ListItem;
