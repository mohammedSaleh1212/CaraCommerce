import useCartStore from '../stores/CartStore'
import CartItem from '../components/CartItem'

const CartPage = () => {
  const items = useCartStore(s => s.items)
  const resetItems = useCartStore(s => s.resetItems)
  const totalPrice = useCartStore(s => s.totalPrice)

  return (
    <div className="container">
      <h2 className='text-center'>Shopping Cart</h2>
      <ul className="list-group">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <div className="total-price">Total Price :{totalPrice.toFixed(2)}$</div>
      <button className={`btn btn-first mt-4 ${items.length ? '' : 'd-none'}`} onClick={() => resetItems()}>Clean Cart</button>
      <button className={`btn btn-first mt-4 ${items.length ? '' : 'd-none'}`}>Proceed To Check Out</button>

    </div>
  )
}

export default CartPage