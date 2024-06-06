import useProducts from '../hooks/useProducts'
import ProductCard from './ProductCard'


const ProductsList = () => {

    const { data: products, error, isLoading } = useProducts()
    if (isLoading) return <p>loading</p>
    if (error) return <p className='text-danger'>Use Vpn get the products</p>
    if (products) return (
        <div className="container products-container section-padding">
            <div className="row justify-content-center gap-4">

            {products.products.map(product =>
             <ProductCard key={product.id} product={product} />

)}
            </div>

        </div>

    )


}

export default ProductsList