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
  const updateQuery = useProductQueryStore(s => s.updateQuery)

  return (

    <>
      <SectionHead head="OUR TOP CATEGORIES" />
      <div className="container d-flex gap-2 flex-wrap">



        <div className="dropdown">
          <button className="btn btn-second d-flex gap-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">

            Men
            <i className="bi bi-chevron-down"></i>
          </button>
          <ul className="dropdown-menu">

            {menCategories.map((menCategory, index) =>

              <li key={index}><a className="dropdown-item" onClick={() => {
                setSelectedCategory(menCategory.slug)
                updateQuery({ limit: 8, skip: 0 })
              }

              }>{menCategory.name}</a></li>
            )}
          </ul>
        </div>
        <div className="dropdown ">
          <button className="btn btn-second d-flex gap-1 " type="button" data-bs-toggle="dropdown" aria-expanded="false">

            Women
            <i className="bi bi-chevron-down"></i>
          </button>
          <ul className="dropdown-menu">

            {womenCategories.map((womenCategory, index) =>

              <li key={index}><a className="dropdown-item" onClick={() => {
                updateQuery({ limit: 8, skip: 0 })

                setSelectedCategory(womenCategory.slug)
              }}>{womenCategory.name}</a></li>
            )}
          </ul>
        </div>
        <div className="dropdown">
          <button className="btn btn-second d-flex gap-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">

            Other
            <i className="bi bi-chevron-down"></i>
          </button>
          <ul className="dropdown-menu">

            {generalCategories.map((generalCategory, index) =>

              <li key={index}><a className="dropdown-item" onClick={() => {
                // resetQuery()
                updateQuery({ limit: 8, skip: 0 })

                setSelectedCategory(generalCategory.slug)
              }}>{generalCategory.name}</a></li>
            )}
          </ul>
        </div>
        <Sorter />






      </div>


    </>



  )


}

export default Categories