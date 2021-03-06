import React,{useState} from 'react';

function Counter(){
    // const numberState = useState(0);
    // const number = numberState[0];
    // const setNumber = numberState[1];
    const [number,setNumber] = useState(0);
    const onIncrease = () =>{
        setNumber(number+1);
        console.log('+1');
    }
    const onDecrease = () =>{
        setNumber(number-1);
        console.log('-1');
    }
    return(
    <div>
        <h1>{number}</h1>
        <div>
        <button onClick = {onIncrease}>+1</button>
        <button onClick = {onDecrease}>-1</button>
        </div>
    </div>
    );
}


export default Counter;
