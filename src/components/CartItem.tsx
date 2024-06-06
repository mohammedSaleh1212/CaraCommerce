
import { useNavigate } from 'react-router-dom'
import { Product } from '../hooks/useProducts'
import useCartStore from '../stores/CartStore'
import ExpandableText from './ExpandableText'
interface Props {
    item: Product

}

const CartItem = ({ item }: Props) => {
    const deleteFromCart = useCartStore(s=>s.deleteFromCart)
    const increaseQuantity = useCartStore(s=>s.increaseQuantity)
    const decreaseQuantity = useCartStore(s=>s.decreaseQuantity)

    const navigate = useNavigate()


    return (
        <li key={item.id} className="list-group-item mt-4">
            <div className="row mt-2">
                <div className="col-md-3 text-center">
                    <img src={item.thumbnail} alt={item.title} className="img-fluid  " style={{width:'120px',cursor:'pointer'}} onClick={(event) => {
                        {
                            event.preventDefault()
                            navigate(`/products/${item.id}`)
    
                        }
                    }} />
                </div>
                <div className="col-md-9">
                    <h4>{item.title}</h4>
                    <ExpandableText text={item.description} withButton={false} limit={30}></ExpandableText>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <div className="amount-manager d-flex align-items-center">
                        <button className='btn ' onClick={() => {
                            increaseQuantity(item)
                        }
                        }>+</button>
                        <div>{item.quantity}</div>
                        <button className='btn ' onClick={() => {
                            if (item.quantity == 0) return
                            decreaseQuantity(item)

                        }}>-</button>
                    <i className="bi bi-trash cursor-pointer" onClick={() => {
                        deleteFromCart(item.id, item.price, item.quantity)
                    }
                        } style={{cursor:'pointer'}}></i>
                    </div>

                </div>
            </div>
        </li>
    )
}

export default CartItem