import React from 'react';

const HandelName=({HandelEvent,FirstName})=>{
    return(
        <button onClick={()=>HandelEvent(FirstName)}>click</button>

    )
}
export default HandelName;