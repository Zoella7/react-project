import {useForm} from "react-hook-form";

import {createUser} from "../../services";


const Users = () =>{

const {register,handleSubmit, formState:{errors}}=useForm(
    {defaultValues:{
        name:'name',
        username:'username',
        email:'exaple@gmail.com'
        }}
)
const submit = (obj) =>{
    createUser(obj).then(value => console.log(value))
}
    return(<div>
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" {...register('name', {required: true})}/>
            {errors.name && <span> Field is required</span>}
            <input type="text" {...register('username')}/>
            <input type="text" {...register('email')}/>
            <button>submit</button>


        </form>

    </div>)
};
export {Users}