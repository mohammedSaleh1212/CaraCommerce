import useProductQueryStore from "../store"
import { FetchResponse } from "../services/apiClient"
import { Product } from "../hooks/useProducts"
interface Props {
  products: FetchResponse<Product>
}
const Paginator = ({ products }: Props) => {
  const skip = useProductQueryStore(s => s.productQuery.skip)
  const limit = useProductQueryStore(s => s.productQuery.limit)
  const showNextPage = useProductQueryStore(s => s.showNextPage)
  const showPreviousPage = useProductQueryStore(s => s.showPreviousPage)
  return (

    <div className="container button-wrapper d-flex justify-content-center gap-2">
      <button className={`btn btn-first ${skip! + limit! >= products.total ? 'd-none' : ''}`} onClick={(event) => {
        event.preventDefault()

        showNextPage()
        window.scrollTo({ top: 500, behavior: 'smooth' });
      }} >Next</button>
      <button className={`btn btn-first ${skip === 0 ? 'd-none' : ''}`} onClick={(event) => {

        event.preventDefault()
        window.scrollTo({ top: 500, behavior: 'smooth' });
        showPreviousPage()

      }} >Previous</button>

    </div>
  )
}

export default Paginator