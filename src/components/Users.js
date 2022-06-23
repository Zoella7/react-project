import {useEffect, useState} from "react";

import User from "./User";


export default function Users (){

    const findMore = (item) => {
        setUser(item);
    };



let[users, setUsers] = useState([]);
let [user, setUser]=useState({});

useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            })
    },[]);


    return(<div>
        {user && <div> More information about user with ID {user.id}:
            {user.name} {user.email} {user.username} </div>}>
        <h3>List of users</h3>
        {users.map((user,index) => <User
            key = {index}
            item={user}
            findMore={findMore}
        /> )}



        </div>);
}