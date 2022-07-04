import {useForm} from "react-hook-form";
import {createComments} from "../../services";

const Comments =()=>{
const{register,handleSubmit} = useForm({defaultValues:{

        name:'name',
        body:'body',
        email:'exaple@gmail.com'
    }})
    const submit = (obj) =>{
        createComments(obj).then(({data}) => console.log(data))
    }
    return(<div>

             <form onSubmit={handleSubmit(submit)}>
            <input type="text" {...register('name', {required: true})}/>
            <input type="text" {...register('body')}/>
            <input type="text" {...register('email')}/>
            <button>submit</button>
        </form>

    </div>)
}
export {Comments};