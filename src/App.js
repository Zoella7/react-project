import Users from "./components/users/Users";
import {useState} from "react";
import {getPosts} from "./services";


function App() {

    let [posts, setPosts] = useState([]);
    const getPostsID = (id)=>{
        getPosts(id).then(({data}) =>setPosts([...data]));
    }

    return (
        <div>
            <h2>Post of current user</h2>
            {posts.map(value => <div>{value.body}</div>)}
            
            <Users getPostsID={getPostsID}/>

        </div>)

}
export default App;
