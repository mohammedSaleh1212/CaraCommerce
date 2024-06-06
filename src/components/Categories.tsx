import useCategories from "../hooks/useCategories"
import useProductQueryStore from "../store";
import SectionHead from "./SectionHead";
import Sorter from "./Sorter";
const Categories = () => {
  const { data: categories } = useCategories()
  const menCategories = categories.filter(category => category.slug.startsWith('mens-'));
  const womenCategories = categories.filter(category => category.slug.startsWith('womens-'));
  const generalCategories = categories.filter(category => !category.slug.startsWith('mens-') && !category.slug.startsWith('womens-'));
  const setSelectedCategory = useProductQueryStore(s => s.setCategory)

    return (
    
    <>
    <SectionHead head="OUR TOP CATEGORIES"/>
    <div className="container d-flex gap-2 ">
    
    
    
        <div className="dropdown">
          <button className="btn btn-second " type="button" data-bs-toggle="dropdown" aria-expanded="false">
    
            Men
            <i className="bi bi-chevron-down"></i> 
          </button>
          <ul className="dropdown-menu">
    
            {menCategories.map((menCategory, index) =>
    
              <li key={index}><a className="dropdown-item" onClick={() => setSelectedCategory(menCategory.slug)}>{menCategory.name}</a></li>
            )}
          </ul>
        </div>
        <div className="dropdown">
          <button className="btn btn-second " type="button" data-bs-toggle="dropdown" aria-expanded="false">
    
            Women
            <i className="bi bi-chevron-down"></i> 
          </button>
          <ul className="dropdown-menu">
    
            {womenCategories.map((womenCategory, index) =>
    
              <li key={index}><a className="dropdown-item" onClick={() => setSelectedCategory(womenCategory.slug)}>{womenCategory.name}</a></li>
            )}
          </ul>
        </div>
        <div className="dropdown">
          <button className="btn btn-second " type="button" data-bs-toggle="dropdown" aria-expanded="false">
    
            Other
            <i className="bi bi-chevron-down"></i> 
          </button>
          <ul className="dropdown-menu">
    
            {generalCategories.map((generalCategory, index) =>
    
              <li key={index}><a className="dropdown-item" onClick={() => setSelectedCategory(generalCategory.slug)}>{generalCategory.name}</a></li>
            )}
          </ul>
        </div>
        <Sorter />
    
    
    
    
    
    
      </div>
    
    </>
    
    
    
    )


}

export default Categories