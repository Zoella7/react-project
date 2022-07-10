import {useEffect, useState} from "react";
import {CommentComponent} from "../components/CommentComponent"
import {getComments} from "../services/service.api"
const CommentsComponent =()=>{

    let [comments, setComments] = useState([]);

    useEffect(()=>{
        getComments().then(value => setComments([...value]))
    }, []);

    return(<div>
        {comments.map(value => <CommentComponent item={value} key={value.id}/>)}
    </div>)
}
export {CommentsComponent}