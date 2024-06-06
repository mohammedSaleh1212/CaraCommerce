import  { useState } from 'react'
interface Props {
    className?:string
  }
const LoveButton = ({className}:Props) => {
    const [clicked, setClicked] = useState(false)
    return (



            <i className={` love-icon bi bi-heart${clicked ? '-fill' : ''} ${className}`} style={{ color: 'black' ,fontSize:'14px'}} onClick={() => {
                setClicked(!clicked)
            }}>

            </i>

   

    )
}

export default LoveButton