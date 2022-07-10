import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"


import PostComponent from "../components/PostComponent"
import {getPosts} from "../services/service.api"


export default function PostsComponent(){

    const {postId} =useParams();

    let [posts, setPosts] = useState([]);

    useEffect(()=>{
        getPosts(postId).then(value => setPosts({...value}))
    }, [postId]);

    return(<div>
        {posts.map(value => <PostComponent item={value} key={value.id}/>)}
    </div>)
}
