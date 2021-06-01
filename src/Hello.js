import React from 'react';

// function Hello(props){
//     return <div style = {{color: props.color}}>안녕하세요 {props.name} 이고, 오팬무는 {props.color}</div>
// }
function Hello({name,color}){
    return <div style = {{color: color}}>안녕하세요 {name} 이고, 오팬무는 {color}</div>
}

Hello.defaultProps = {
    name : '이름없음',
    color : 'blue'
}


export default Hello;