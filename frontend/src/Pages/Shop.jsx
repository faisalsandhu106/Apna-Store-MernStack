import { useState } from 'react'
import LoadingAnimate from '../Components/Common/LoadingAnimate'
import { PiEmptyLight } from 'react-icons/pi'
import ListProductSec from '../Components/ShopComps/ListProductSec'
import GridProductSec from '../Components/ShopComps/GridProductSec'
import FilterSec from '../Components/ShopComps/FilterSec.jsx'
import { UseProductContext } from '../Components/ContextAPI/ProductContext.jsx'

const Shop = () => {
  const [search, setSearch] = useState()
  const [filter, setFilter] = useState("all")
  const [category, setCategory] = useState("all")
  const [grid, setGrid] = useState(true)

  const { isLoading, Allproducts } = UseProductContext();

  if (isLoading) {
    return (
      <LoadingAnimate />
    )
  };

  if (Allproducts.length === 0) {
    return <p className='flex items-center justify-center gap-x-2 w-full min-h-screen text-[1.7em]'>
      No Product Avaliable <PiEmptyLight />
    </p>
  }

  // *Search By Input Method--------------------------------
  const searchProduct = (product) => {
    if (search) {
      return product.title.toLowerCase().includes(search.toLowerCase())
    }
    return product
  };

  // *Search By Sorting Method------------------------------
  const sortProduct = (a, b) => {
    if (filter == "all") {
      return filter
    }

    if (filter == "lowest") {
      return a.price - b.price
    }

    if (filter == "highest") {
      return b.price - a.price
    }

    if (filter == "a-z") {
      return a.title.localeCompare(b.title)
    }

    if (filter == "z-a") {
      return b.title.localeCompare(a.title)
    }
  };

  // *Search By Category Method-----------------------------
  const searchCategory = (categ) => {
    if (category === "all") return categ
    return categ.category === category
  }

  // *Fetch Category In API---------------------------------
  const getCategoryData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property]
    })

    return (newVal = ["all", ...new Set(newVal)])
  };

  const categoryData = getCategoryData(Allproducts, "category");
  // console.log(categoryData)

  const filterProduct = Allproducts.filter((product) => searchProduct(product) && searchCategory(product) && Allproducts.sort(sortProduct));


  return (
    <>
      <div className='relative w-full min-h-[100vh] overflow-hidden'>
        {/* ----------FilterSection-------- */}
        <div className='filter-sec-theme fixed top-14 z-20 flex flex-col items-center justify-center pt-3 xs:px-3 sm:px-5 lg:px-6 xl:px-8 gap-y-5 w-full min-h-[130px] duration-150'>
          <FilterSec
            search={search}
            setSearch={setSearch}
            setFilter={setFilter}
            category={category}
            setCategory={setCategory}
            grid={grid}
            setGrid={setGrid}
            filterProduct={filterProduct}
            categoryData={categoryData}
          />
        </div>
        {/* ----------Product API---------- */}
        <div className='xs:mt-48 md:mt-44 py-4 w-full min-h-[100vh]'>
          <div className={`${grid ? 'grid xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 justify-items-center' : 'grid grid-cols-1'} xs:px-3 sm:px-4 md:px-5 lg:px-5 xl:px-10 py-5 xs:gap-x-2 sm:gap-x-4 xl:gap-x-6 xs:gap-y-6 md:gap-y-7 w-full h-full`}>
            {
              grid ?
                filterProduct.map((curElem, index) => {
                  return <GridProductSec curElem={curElem} key={index} />
                })
                :
                filterProduct.map((curElem, index) => {
                  return <ListProductSec curElem={curElem} key={index} />
                })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop