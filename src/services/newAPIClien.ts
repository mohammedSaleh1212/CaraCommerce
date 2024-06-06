
import axios from "axios";
const axiosInstance = axios.create({
    baseURL:'https://dummyjson.com'
})
// Define a generic type for the API response
type ApiResponse<T> = {
    data: T;
    total?: number;
    // ... other properties
  };
  
  // Extend the APIClient to handle different response shapes
  class newAPIClient<T> {
    endpoint: string;
  
    constructor(endpoint: string) {
      this.endpoint = endpoint;
    }
  
    // Use a generic type for the response and a mapper function to transform the data
    getAll = <R>(mapper: (response: ApiResponse<T>) => R) => {
      return axiosInstance
        .get<ApiResponse<T>>(this.endpoint)
        .then(res => mapper(res.data));
    };
  
    getOne = (id: string | number) => {
      return axiosInstance
        .get<T>(`${this.endpoint}/${id}`)
        .then(res => res.data);
    };
  
    post = (data: T) => {
      return axiosInstance
        .post<T>(this.endpoint, data)
        .then(res => res.data);
    };
  }
  export default newAPIClient
  

  