import {useState} from "react";

export default function User({item,getPostsID}){
const [posts, setPosts] = useState([])
    return(<div>
        <h3>{item.id}. {item.name}</h3>
        <button onClick={()=>{
            getPostsID(item.id)
                   }}>more</button>

    </div>)
}