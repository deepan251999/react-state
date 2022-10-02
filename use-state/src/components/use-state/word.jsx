import React,{useState} from "react";

function Word(){
    const [change,setChange]=useState('hello');
    return(
        <div className="count">
            <p> hi    {change}</p>
            <button className="count-btn" onClick={()=>setChange('welcome')}>click</button>
        </div>
    )
}

export default Word;