import {useParams,useLocation} from "react-router-dom"

import {useEffect, useState} from "react"
import {userService} from "../../services/users.service"
import {UserDetails} from "../../components"


const SingleUserPage = () => {
    const {id}= useParams();
const {state} = useLocation()

    const [user, setUser] = useState(null)

    useEffect(()=>{
        if(state){
        userService.getById(id).then(({data}) => setUser(data))}

        else{
            setUser(state)}
        },[id, state])


    return (
        <div>
            {user && <UserDetails user={user}/>}
        </div>
    );
};

export {SingleUserPage};