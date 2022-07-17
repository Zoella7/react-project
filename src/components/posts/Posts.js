import {useState,useEffect} from "react"
import {postsService} from "../../services"
import {Post} from "../post/Post"
const Posts = ({userId}) => {

    const [posts, setPosts] = useState([]) ;

    useEffect(() =>{postsService.getAllByUserId(userId).then(({data}) => setPosts(data))

    },[])

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};