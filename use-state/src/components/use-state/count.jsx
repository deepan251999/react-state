import React,{useState} from "react";
import '../use-state/count.css'

function Count() {
    const [count,setCount]=useState(0);
    return(
        <div className='count-container'>
                  <p> count of {count}  count</p>
                  <button className="count-btn" onClick={() =>setCount(count +1)}>click</button>
        </div>
    )
}


export default Count;