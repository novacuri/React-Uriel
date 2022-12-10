import React, {useState} from "react";

export default function ItemCount(props){
    const [count, setCount]=useState(1);

    function handleSuma(){
        if(count<props)
        setCount(count+1);
    }
    
    function handleResta(){
        setCount(count-1);
    }
}

function onAdd(){
    console.log("agregado al cart")
}

return(
    <div>
        <div style={{display: "flex"}}>
        <button onClick={handleResta}>-</button>
        <h1>{count}</h1>
        <button onClick={handleSuma}>+</button>
        </div>
        <br />
        <button onClick={onAdd}>Add to Cart</button>
    </div>
)