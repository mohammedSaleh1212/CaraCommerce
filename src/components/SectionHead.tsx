import '../styles/sectionHead.css'
interface Props {
    head:string
}

const SectionHead = ({head}:Props) => {
  return (
    <div className="container head-container">

        <h2>{head}</h2>
    </div>

  )
}

export default SectionHead