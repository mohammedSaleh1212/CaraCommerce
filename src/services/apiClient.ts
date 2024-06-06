// import axios from "axios";
import axios, { AxiosRequestConfig } from "axios";
const axiosInstance = axios.create({
    baseURL:'https://dummyjson.com',
    params:{
        // key:"the key"
    }
})
export interface FetchResponse<T> {
    products:T[]
    total:number
    skip:number
    limit:number
}
export interface Category {
    slug:string
    name:string
    url:string

}

class APIClient<T> {
    endpoint:string

constructor(endpoint:string){
    this.endpoint = endpoint
}

getAll = (config:AxiosRequestConfig) => {
 return axiosInstance
 .get<FetchResponse<T>>(this.endpoint, config )
 .then(res =>res.data)   
}
getAll1 = () => {
    return axiosInstance
    .get<T[]>(this.endpoint )
    .then(res =>res.data)   
   }
getOne = (id:string | number) => {
    return axiosInstance
    .get<T>(this.endpoint + '/' + id )
    .then(res =>res.data)   
   }
post = (data:T) => {
    return axiosInstance
    .post<T>(this.endpoint , data) 
    .then(res =>res.data)
}

}
export default APIClient