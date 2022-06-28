import {useEffect, useState} from "react";
import {getUsers, getUser,getPosts} from "../../services";
import User from "../user/User";

export default function Users({getPostsID}){
const [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers().then(({data}) => setUsers([...data]));
    },[]);

    return(<div>
        {
            users.map(value=> <User
            item={value}
            key={value.id}
            getPostsID={getPostsID}
            />)
        }

    </div>)
}