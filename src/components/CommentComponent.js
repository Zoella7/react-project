import {Link} from "react-router-dom"

const CommentComponent =({item})=>{

    return(<div>

        <h3> PostID:{item.id}</h3>
        <h4>{item.name}</h4>
        <p>{item.email}</p>

        <span><Link to={item.postId.toString()}>To get more</Link></span>

    </div>)
}
export {CommentComponent}