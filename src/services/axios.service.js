import axios from "axios";

import {baseUrl} from "../constants"


const axiosService =  axios.create({baseUrl:baseUrl});

export {axiosService};