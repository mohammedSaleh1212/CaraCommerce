
interface Props {
  className?:string
  onclick?:(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  
}
const ButtonCart = ({className,onclick}:Props) => {
 
  return (
    <a  className={`btn btn-first mt-1 ${className}`} onClick={onclick }>Add To Cart</a>
)
}

export default ButtonCart