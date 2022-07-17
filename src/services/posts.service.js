import {axiosService} from "./axios.service"
import {urls} from "../constants/urls"

export const postsService={

    getAllByUserId:(userId) => axiosService.get(urls.posts, {params:{userId}})
}