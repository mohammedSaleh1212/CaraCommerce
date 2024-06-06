import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/apiClient"
import useProductQueryStore from "../store"
import { FetchResponse } from "../services/apiClient"
interface Review {
    rating:number
    comment:string
    date:string
    reviewerName:string
    reviewerEmail:string
}
export interface Product {
    id:number
    title:string
    description:string
    category:string
    price:number
    thumbnail:string
    rating:number
    reviews:Review[]
    stock:number
    discountPercentage:number
    tags:string[]
    images:string[]
    warrantyInformation:string
    shippingInformation:string
    availabilityStatus:string
    returnPolicy:string
    brand:string
    quantity:number




}


const useProducts = () => {
    const productQuery = useProductQueryStore(s => s.productQuery)
    
    const apiClient = new APIClient<Product>(`/products${productQuery.category !==undefined ?`/category/${productQuery.category }`:''}${productQuery.q !== undefined ?`/search` :''}`)
    
        return  useQuery<FetchResponse<Product>,Error>({ 
            queryKey: ['Products',productQuery],
            queryFn:() => apiClient.getAll({
                params:{
                    skip:productQuery.skip,
                    limit:productQuery.limit,
                    sortBy:productQuery.sortBy,
                    q:productQuery.q,
                }
            }),
            staleTime:10 * 1000 *3600*24// twenty for hours
        })



}
export default useProducts