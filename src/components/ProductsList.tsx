import useProducts from '../hooks/useProducts'
import Paginator from './Paginator'
import ProductCard from './ProductCard'


const ProductsList = () => {

    const { data: products, error, isLoading } = useProducts()
    if (isLoading) return <h1>use vpn to see the products</h1>
    if (error) return <p className='text-danger'>Use Vpn get the products</p>
    if (products) return (
        <div className="container products-container section-padding">
            <div className="row justify-content-center gap-4">

                {products.products.map(product =>
                    <ProductCard key={product.id} product={product} />

                )}
                <Paginator products={products} />
            </div>

        </div>

    )


}

export default ProductsList