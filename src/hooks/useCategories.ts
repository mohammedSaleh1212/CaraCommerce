import { useQuery } from "@tanstack/react-query"
import  { Category } from '../services/apiClient'
import categoriesData from "../data/categoriesData"
import APIClient from "../services/apiClient"
 



const apiClient = new APIClient<Category>('/products/categories')

const useCategories = () => {
    

    return  useQuery<Category[],Error>({
        queryKey: ['categories'],
        queryFn: apiClient.getAll1,
        staleTime:1000 * 60 *60 *24 , //24 hrs 
        initialData:categoriesData
    })


    
}
export default useCategories