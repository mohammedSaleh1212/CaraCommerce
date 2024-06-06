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

  
}
const useProductQueryStore = create<ProductQueryStore>(set => ({
    productQuery:{} ,
    // setCategory:(category) => set(() => ({productQuery:{category}})),
    setCategory:(category) => set((store) => 
        ({productQuery:{...store.productQuery,category,q:undefined}})),

    setLimit:(limit) => set(() => ({productQuery:{limit}})),
    setSkip:(skip) => set(() => ({productQuery:{skip}})),
    setOrder:(order) => set(store => ({productQuery:{...store.productQuery,order}})),
    setSortBy:(sortBy) => set(store => ({productQuery:{...store.productQuery,sortBy}})),
    setQ:(q) => set(() => ({productQuery:{q}})),
    resetQuery:() => set(() => ({productQuery:{}}))


}))
export default useProductQueryStore