import {Outlet} from "react-router-dom"
import {Header} from "../components/Header"

const MainLayout =() =>{

    return(<div>
        <Header/>

        <h3>Information</h3>
        <Outlet/>
    </div>)
}

export {MainLayout};