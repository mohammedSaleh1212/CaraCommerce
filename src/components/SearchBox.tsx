import  { useRef } from 'react'
import useProductQueryStore from '../store'


const SearchBox = () => {
  const setSelectedSearch = useProductQueryStore(s => s.setQ)
  const searchRef = useRef<HTMLInputElement>(null)

    return (
        <form className="d-flex p-1" role="search" onSubmit={(event) =>{
            event.preventDefault()
            if(searchRef.current !== null) {

                setSelectedSearch(searchRef.current.value)
            }
    }
        
        
        } >
            <input ref={searchRef} className="search-input form-control me-2" type="search" placeholder="Search Product..." aria-label="Search"></input>
        </form>
    )
}

export default SearchBox