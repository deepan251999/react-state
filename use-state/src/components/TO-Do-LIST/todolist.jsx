import React,{useState} from "react";
import ListItem from "./listitem";


function TodoList() {
    const [todoName,setTodoName]=useState('');
    const [list,setList]=useState([]);

    const updateTodoName=(e)=>{
        setTodoName(e.target.value);
    }

    const addTodo=()=>{
        setList([...list,{name:todoName,compleded:false}]);
        setTodoName('');
        console.log(todoName);
    }
    const onDone =(item)=>{
        let newList =list.map(listItem=>{
            if(listItem.name === item.name){
                return{...listItem,completed:
            !listItem.completed};
            }
            return listItem;
        })
        setList(newList);
    }
    const onDelete =(item)=>{
        let newList =list.filter(listItem=>{
            if(listItem.name === item.name){
                return false;
            }
            return true;
        })
        setList(newList);
    }
    return(
        <div>
                <h1>To-DO-LIST</h1>
               <input type="text" placeholder='YOUR VALUE' value={todoName} onChange={updateTodoName}/>
               <button onClick={addTodo}>ADD</button>
               {
                list.map(item =><ListItem obj={item} onDone={onDone}
                onDelete={onDelete}/>)
               }
        </div>
    )
}


export default TodoList;