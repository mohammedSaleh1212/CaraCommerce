import defaultImg from '../assets/images/default._CR0,0,1024,1024_SX48_.jpeg'
import Rating from '../components/Rating'
interface Props {
  reviewName:string
  rating:number
  comment:string
  date:string
}

const Review = ({reviewName,date,comment,rating}:Props) => {
  return (
    <>
        <div className="identity-wrapper">

          <img src={defaultImg} alt="" width={'30px'} height={'30px'} />
          <span className='d-inline ms-2'>{reviewName}</span>
        </div>
        <Rating rating={rating} />
        <p className='comment'>{comment}</p>
        <p className="date">{date}</p>
    </>
    


)
}

export default Review