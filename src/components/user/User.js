import {Posts} from "../posts/Posts"

const User = ({user,userIdState}) => {
const [userId, setUserId] = userIdState;

    const {id,name, username}=user;

    return (<div>

        <div>
        <h3>ID: {id}</h3>
        <h3>Name: {name}</h3>
        <h3>Username: {username}</h3>
        </div>
        <button onClick={() => setUserId(id)}>ShowPosts</button>

        {userId ==id && <Posts userId={id}/>}

        </div>);
};

export  {User};