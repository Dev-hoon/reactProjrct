import React from 'react';
function User({user}){
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}
function UserList() {
    const users = [
        {
        id: 1,
        username: 'kimtaehun',
        email: 'dev.hoon@gmail.com'
        },
        {
        id: 2,
        username: 'tester',
        email: 'tester@example.com'
        },
        {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'
        }
    ];
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
            {users.map((user,index) =>(
                <User user ={user} key={index}/>
            ))}
        </div>
    );
}
export default UserList;