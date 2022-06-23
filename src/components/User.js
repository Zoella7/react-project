export default function User ({item, findMore}){
    return(<div>
            {item.id} {item.name}

            <button onClick={()=>{
                findMore(item);
            }}> more </button>
    </div>

    );
}