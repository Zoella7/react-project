import {Link} from "react-router-dom"
const Header= () =>{


    return(<div>
        <h2>List of options</h2>
        <ul>
            <li><Link to={'/todos'}>Todos</Link></li>
            <li><Link to={'/albums'}>Albums</Link></li>
            <li><Link to={'/comments'}>Comments</Link></li>
        </ul>

    </div>)
}
export {Header}