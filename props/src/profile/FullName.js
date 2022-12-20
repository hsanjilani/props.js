import React from "react";

function FullName (props){
    return(
        <div>
            <h1>{props.FirstName}</h1>
            <h2>{props.LastName}</h2>
        </div>
    )
}
export default FullName;