import React,{useEffect} from 'react';
function User({user, onRemove, onToggle}){
    // useEffect(()=>{
    //     console.log('user 값이 입력되었습니다.');
    //     console.log(user);
    //     return () =>{
    //         console.log('user 값이  제거되는중입니다.');
    //         console.log(user);
    //     };
    // },[user]);
    useEffect(()=>{
        console.log(user);
    });
    return(
        <div>
            <b 
            style ={{
                cursor :'pointer', 
                color:user.active?'red':'black'
            }}
            onClick ={()=>onToggle(user.id)}>
            {user.username}
            </b> 
            <span>({user.email})</span>
            <button onClick={()=> onRemove(user.id)}>삭제</button>
        </div>
    );
}
function UserList({users, onRemove, onToggle}) {
    return(
        <div>
            {/* <div>
                <b>{users[0].username}</b> <span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[1].username}</b> <span>({users[1].email})</span>
            </div>
            <div>
                <b>{users[2].username}</b> <span>({users[1].email})</span>
            </div> */}
            {/* <User user ={users[0]}/>
            <User user ={users[1]}/>
            <User user ={users[2]}/> */}
            {users.map(user =>(
                <User user ={user} key={user.id} onRemove = {onRemove} onToggle = {onToggle}/>
            ))}
        </div>
    );
}
export default UserList;