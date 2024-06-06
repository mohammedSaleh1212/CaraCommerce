import  { useState } from 'react'
import '../styles/expandableText.css'
interface Props {
  text:string
  withButton:boolean
  limit:number
  className?:string
}

const ExpandableText = ({text,withButton,limit,className}:Props) => {
    const [expanded,setExpanded] = useState(false)
    if(text.length <= limit)
  return (
    <p>{text}</p>
  )
  const summary = !expanded ? text.substring(0,limit) + '...' : text 
return(
    <>
    <div className="expand-wrapper">

    <p style={{lineHeight:'20px', marginBlock:'2px'}}>
        {summary }
     {withButton && <button 
        className={`btn btn-first btn-more ms-2  ${className}`  }
         onClick={() => {
        // event.preventDefault()
        setExpanded(!expanded)
        
    }}>
        {expanded ? 'Read Less' : 'Read More'}
 
    </button>} 
    
    </p>
    </div>

    </>
)
}

export default ExpandableText