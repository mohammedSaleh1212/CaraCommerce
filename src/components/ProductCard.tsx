import ButtonCart from "./ButtonCart"
import ExpandableText from "./ExpandableText"
import '../styles/productCard.css'
import Rating from "./Rating"
import { useNavigate } from "react-router-dom"
import useProductQueryStore from '../store'
import useCartStore from "../stores/CartStore"
import { Product } from "../hooks/useProducts"
interface Props {

    product:Product

}
const ProductCard = ({ product}: Props) => {
  const  addToCart  = useCartStore(s=>s.addToCart)


    const navigate = useNavigate()
  const  setSelectedCategory = useProductQueryStore(s => s.setCategory)


    return (
        <div className='card col-12 col-md-3 px-1' style={{ width: '16rem', backgroundColor: '#eee' }} data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
            <img className='w-100' src={product.thumbnail} style={{height:'200px'}} onClick={(event) => {
                event.preventDefault()
                navigate(`/CaraCommerce/products/${product.id}`)
                setSelectedCategory(product.category)

            }}></img>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <ExpandableText className=" my-0" text={product.description} withButton={false} limit={40}/>
                <Rating rating={product.rating} reviewsNumber={product.reviews.length} className="my-0"/>
                <ButtonCart onclick={(event) =>{
                    
                    event.preventDefault()
                    addToCart(product)
                }
                    }/>
                {product.stock <= 5 && <p className='text-danger'>{`only ${product.stock} left in stock`}</p>}
            </div>
        </div>
    )
}

export default ProductCard