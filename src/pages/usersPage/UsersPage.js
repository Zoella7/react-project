import {useState,useEffect} from "react"
import {userService} from "../../services/users.service"
import {User} from "../../components/user/User"
import {Outlet} from "react-router-dom"


const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{userService.getAll().then(({data}) =>setUsers(data))

    },[])

    return (
        <div>

            {users.map(user => <User key={user.id} user={user}/>)}
            <Outlet/>
        </div>
    );
};

export {UsersPage};