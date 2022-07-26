interface ICore{

    flight: number,
    core: {
        reuse_count: number,
        status: string,
    }

}

interface IPayload{
    payload_type: string,
    payload_mass_kg: number,
    payload_mass_lbs: number
}

interface IRocket {
    mission_name: string,
    launch_date_local: string,
    launch_site: {
        site_name_long: string
    },
    links: {
        article_link: string,
        video_link: string,
    },
    rocket: {
        rocket_name: string
        first_stage: {
            cores: ICore[]
        second_stage: {
            payloads:IPayload[]
        }
    }
}}


interface IUser{
    name: string,
    age:number,
    gender:string
}

const  user:IUser={
    name:'Max',
    age:18,
    gender:'male',
}

const sum = (a:number,b:number):number =>{
    return a+b
}
sum(1,2)


const showSum = (a:number,b:number):void=>{
    console.log(a + b);
}
showSum(2,3)



const incAge= (someUser:IUser, inc:number):IUser =>{

    someUser.age +=inc
    return someUser
}
incAge(user, 2)

