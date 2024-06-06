import { create } from "zustand"
import { Product } from '../hooks/useProducts'
// interface CartQuery {
//        count:number
//     items:Product[]
//     totalPrice:number

// }
// interface Item extends Product {
//     quantity:number
//     incrementItemQuantity:() => void
//     decrementItemQuantity:() => void
// }
interface CounterStore {
    count: number
    items: Product[]  
    totalPrice: number
    incrementCount: () => void
    decrementCount: () => void
    resetCount: () => void
    addToCart: (product: Product) => void
    deleteFromCart: (id: number, productPrice: number, quantity: number) => void
    resetItems: () => void
    increaseQuantity: (productPrice: Product) => void
    decreaseQuantity: (productPrice: Product) => void
}
const useCartStore = create<CounterStore>(set => ({

    count: 0,
    items: [],
    totalPrice: 0,
    incrementCount: () => set(store => ({ count: store.count + 1 })),
    decrementCount: () => set(store => ({ count: store.count - 1 })),
    resetCount: () => set(() => ({})),
    addToCart: (product) =>

        set((state) => {
            const existingItem = state.items.find((item) => item.id === product.id);
            if (existingItem)
                return ({
                    totalPrice: state.totalPrice + product.price, items: state.items.map((item) =>
                        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                    )
                })
            else
                return ({ totalPrice: state.totalPrice + product.price, count: state.count + 1, items: [...state.items, {...product,quantity:1}] })
        }


        ),
    deleteFromCart: (productId, productPrice, quantity) =>
        set((state) => ({ totalPrice: state.totalPrice - productPrice * quantity, count: state.count - 1, items: state.items.filter((item) => item.id !== productId) })),
    resetItems: () => set(() => ({ counter: 0, items: [], totalPrice: 0 })),
    increaseQuantity: (product) => set((state) => ({
        totalPrice: state.totalPrice + product.price, items: state.items.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
    })),
    decreaseQuantity: (product) => set((state) => ({ totalPrice: state.totalPrice - product.price, items: state.items.map((item) => item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item) })),



}))
export default useCartStore