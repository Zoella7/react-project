import {CommentsComponent} from "../components/CommentsComponent"
import {Outlet} from "react-router-dom"

const CommentsPage =()=>{

    return(<div>
        <Outlet/>
<CommentsComponent/>

    </div>)
}
export {CommentsPage}