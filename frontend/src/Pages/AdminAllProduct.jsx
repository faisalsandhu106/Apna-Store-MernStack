import React, { useState } from 'react'
import LoadingAnimate from '../Components/Common/LoadingAnimate'
import AdminGridProduct from '../Components/AdminComps/AdminGridProduct'
import AdminListProduct from '../Components/AdminComps/AdminListProduct'
import AdminFilterProduct from '../Components/AdminComps/AdminFilterProduct'
import { UseAdminContext } from '../Components/ContextAPI/AdminContext'

const AdminAllProduct = () => {
  const [search, setSearch] = useState()
  const [category, setCategory] = useState("all")
  const [grid, setGrid] = useState(true)

  const { isSingleLoading, AllProducts } = UseAdminContext();
  // console.log('AllProducts', AllProducts)

  if (isSingleLoading) {
    return (
      <LoadingAnimate />
    )
  };

  // *Search By Input Method-----------------------------
  const searchProduct = (product) => {
    if (search) {
      return product.title.toLowerCase().includes(search.toLowerCase())
    };

    return product
  };

  // *Search By Category Method-----------------------------
  const searchCategory = (categ) => {
    if (category === "all") return categ
    return categ.category === category
  };


  // *Fetch Category In API---------------------------------
  const getCategoryData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property]
    })

    return (newVal = ["all", ...new Set(newVal)])
  }
  const categoryData = getCategoryData(AllProducts, "category");

  const Allproduct = AllProducts.filter((product) => searchProduct(product) && searchCategory(product));

  return (
    <>
      <div className='filter-sec-theme xs:px-3 sm:px-4 lg:px-6 xl:px-8 w-full h-auto overflow-hidden duration-150'>
        <AdminFilterProduct
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          grid={grid}
          setGrid={setGrid}
          Allproduct={Allproduct}
          categoryData={categoryData} />
      </div>
      <div className='w-full min-h-[100vh] overflow-hidden'>
        <div className={`${grid ? 'grid xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 justify-items-center' : 'grid grid-cols-1'} xs:px-3 sm:px-4 lg:px-5 xl:px-8 py-5 xs:gap-x-2 xl:gap-x-3 xs:gap-y-6 md:gap-y-7 w-full h-full duration-150`}>
          {
            grid ?
              Allproduct.map((curElem, index) => {
                return <AdminGridProduct curElem={curElem} key={index} />
              })
              :
              Allproduct.map((curElem, index) => {
                return <AdminListProduct curElem={curElem} key={index} />
              })
          }
        </div>
      </div>
    </>
  )
}

export default AdminAllProduct