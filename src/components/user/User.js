import {Link} from "react-router-dom"

const User = ({user}) => {

    const {id,name,username} = user;
    return (
        <div>
            <div>
                <h3>ID: {id}</h3>
                <h3>Name: {name}</h3>
                <h3>Username: {username}</h3>
            </div>
                  <Link to={`${id}`} state={user}>
            <button>Details</button>
                  </Link>
        </div>
    );
};

export {User};