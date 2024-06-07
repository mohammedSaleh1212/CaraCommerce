import useProductQueryStore from "../store";

const Sorter = () => {
    const setSelectedSortBy = useProductQueryStore(s => s.setSortBy)
  
  return (
    <div className=" d-block dropdown">
    <button className="btn btn-second d-flex gap-1 fle " type="button" data-bs-toggle="dropdown" aria-expanded="false">

      Sort By
      <i className="bi bi-chevron-down"></i> 
    </button>
    <ul className="dropdown-menu">

  

        <li><a className="dropdown-item" onClick={() => setSelectedSortBy('price')}>price</a></li>
        <li><a className="dropdown-item" onClick={() => setSelectedSortBy('id')}>id</a></li>
        <li><a className="dropdown-item" onClick={() => setSelectedSortBy('title')}>title</a></li>
   
    </ul>
  </div>
  )
}

export default Sorter