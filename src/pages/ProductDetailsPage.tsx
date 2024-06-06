import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useProduct from '../hooks/useProduct'
import '../styles/productDetails.css'
import ButtonCart from '../components/ButtonCart'
import LoveButton from '../components/LoveButton'
import ExpandableText from '../components/ExpandableText'
import ProductsList from '../components/ProductsList'
import Review from '../components/Review'


const ProductDetailsPage = () => {


  const colors = ['red ', 'green', 'blue', 'gray']
  const [selectedColor, setSelectedColor] = useState('none')

  const sizes = ['XS', 'S', 'M', 'LG', 'XLG']
  const [selectedSize, setSelectedSize] = useState('none')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const calculateOriginalPrice = (nowPrice: number, discountPercent: number) =>
     {
    discountPercent = discountPercent / 100
    const originalPrice = nowPrice / (1 - discountPercent)

    return originalPrice.toFixed(2)


  }
  const { id } = useParams()
  const { data: product, error, isLoading } = useProduct(id!)
  if (isLoading) return <div>loading</div>
  if (error || !product) throw error










  return (
    <div className="container">
      <div className="row">

        <div className="col-12 col-md-6">
          <div className="image-wrapper">

            <img src={selectedImage == null ? product.thumbnail : selectedImage} className='product-image w-100' alt="" />
          </div>
          <div className="sub-images d-flex gap-2 justify-content-center">

            {product.images.length > 1 ? product.images.map((image, index) =>
              <img src={image} key={index} width={'70px'} height={'70px'} className='mt-2' onMouseOver={() => setSelectedImage(image)}>

              </img>) : ''}
          </div>

        </div>
        <div className="col12 col-md-6 pe-md-5">
          <h2 >{product.title}</h2>
          <div className="price-wrapper d-flex gap-4">

            <span className='original-price text-danger' style={{ textDecoration: 'line-through' }}>
              {calculateOriginalPrice(product.price, product.discountPercentage) + ' $'}
            </span>
            <span className="now-price">
              {product.price + ' $'}
            </span>

          </div>
          <ExpandableText className='product-description mt-2' text={product.description} withButton={true} limit={150}></ExpandableText>
          <div className="color-picker">
            <h2>Color</h2>
            <div className="color-wrapper d-flex gap-3">
              {colors.map(color => <span key={color} className={`dot ${selectedColor == color ? ' active-color' : ''}`} onClick={() => setSelectedColor(color)} style={{ backgroundColor: color }}></span>)}

            </div>

          </div>

          {
            product.tags[0] == 'clothing' ?

              <div className="size-picker mt-3 align-items-center">
                <h2>Size</h2>
                <div className="size-wrapper d-flex gap-3">
                  {sizes.map((size, index) => <button key={index} className={`btn btn-second size-button ${size == selectedSize ? 'active-size' : ''}`} onClick={() => setSelectedSize(size)}>{size}</button>)}
                </div>
              </div>
              :
              product.tags[0] === 'footwear' ? 'footwear sizes' : ''



          }




          {<div className="button-wrapper d-flex gap-3 align-items-center mt-4">
            <ButtonCart className='' />
            <LoveButton className='fs-2' />
          </div>}
          <div className="carectaristicts mt-3">
            <div className="d-flex justify-content-between c">
              <span>Brand</span>
              <span>{product.brand}</span>
            </div>
            <div className="d-flex justify-content-between c">
              <span>Item Number</span>
              <span>{product.id}</span>
            </div>
            <div className="d-flex justify-content-between c">
              <span>Shipping Information</span>
              <span>{product.shippingInformation}</span>
            </div>
            <div className="d-flex justify-content-between c">
              <span>Availability Status</span>
              <span>{product.availabilityStatus}</span>
            </div>
            <div className="d-flex justify-content-between c">
              <span>Warrantly Information</span>
              <span>{product.warrantyInformation}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="reviews-container  pt-5">
        <h2>Reviews</h2>
        <div className="row mt-4">

          {product.reviews.map((review, index) =>
            <div className="col-12 col-md-4" key={index}>
              <Review reviewName={review.reviewerName} date={review.date} comment={review.comment} rating={review.rating} />


            </div>

          )}
        </div>





      </div>




      <div className="suggested-products-container mt-5 ">

        <h2>Products Related To This Item</h2>
        <ProductsList />
      </div>
    </div>

  )
}

export default ProductDetailsPage