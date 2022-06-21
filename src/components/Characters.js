import './Characters.css'
// Task 1
// function Character(props){
//     let {name,info,picture} = props;
//     return (
//         <div>
//             <h2>{name}</h2>
//             <p>{info}</p>
//             <img className={'pic'} src={picture} alt=""/>
//         </div>
//     )
// }
//
// export default Character;

function Personage(props){
    let{id,name,status,species,gender,picture}=props;
    return(<div>
<h2>ID:{id} - {name}</h2>
       <p>{status}: {species} </p>
       <p>Gender: {gender}</p>
        <img src={picture} alt=""/>

        </div>)
}
export default Personage;
