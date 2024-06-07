import { create } from "zustand"
export interface ProductQuery {
    category?:string 
    skip?:number 
    limit?:number 
    order?:string
    sortBy?:string
    q?:string
  }
interface ProductQueryStore {
    productQuery:ProductQuery 
    setCategory:(category:string) => void
    setSkip:(skip:number) => void
    setLimit:(limit:number) => void
    setOrder:(order:string) => void
    setSortBy:(sortBy:string) => void
    setQ:(q:string) => void
    resetQuery:() => void
    showNextPage:() => void
    showPreviousPage:() => void
    updateQuery:(params:ProductQuery) => void
    // hasPrevious:() => boolean
    // hasNext:() => boolean

  
}
const useProductQueryStore = create<ProductQueryStore>(set => ({
    productQuery:{skip:0,limit:8},
    // setCategory:(category) => set(() => ({productQuery:{category}})),
    setCategory:(category) => set((store) => 
        ({productQuery:{...store.productQuery,category,q:undefined}})),

    setLimit:(limit) => set(() => ({productQuery:{limit}})),
    setSkip:(skip) => set(() => ({productQuery:{skip}})),
    setOrder:(order) => set(store => ({productQuery:{...store.productQuery,order}})),
    setSortBy:(sortBy) => set(store => ({productQuery:{...store.productQuery,sortBy}})),
    setQ:(q) => set((store) => ({productQuery:{q,limit:store.productQuery.limit,skip:store.productQuery.skip}})),
    // resetQuery:() => set((store) => ({productQuery:{limit:store.productQuery.limit,skip:store.productQuery.skip}})),
    resetQuery:() => set(() => ({productQuery:{limit:8,skip:0}})),

    showNextPage:() => set((store) =>({productQuery:{ ...store.productQuery,limit:store.productQuery.limit ? store.productQuery.limit : 0 ,skip:store.productQuery.skip !== undefined  ? store.productQuery.skip + store.productQuery.limit!  : 0}})),
    showPreviousPage:() => set((store) =>({productQuery:{...store.productQuery,limit:store.productQuery.limit ? store.productQuery.limit  :0,skip:store.productQuery.skip?store.productQuery.skip - store.productQuery.limit! : 0}})),
    updateQuery:(params) => set((store) =>({productQuery:{...store.productQuery,...params}}))

}))
export default useProductQueryStore