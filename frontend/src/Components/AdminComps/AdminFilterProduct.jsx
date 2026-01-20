import React from 'react'
import { FaListUl, FaSearch } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io';
import { MdGridView, MdOutlineDeleteOutline } from 'react-icons/md'
import { NavLink } from 'react-router-dom';

const AdminFilterProduct = ({ search, setSearch, category, setCategory, grid, setGrid, Allproduct, categoryData }) => {
    const handleInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value)
    };

    const handleCategoryChange = (event) => {
        event.preventDefault();
        setCategory(event.target.value)
    };

    return (
        <>
            {/* Searching ------ Total Product ------ Sorting */}
            <div className='grid xs:grid-cols-1 md:grid-cols-3 items-center gap-y-3 w-full h-auto'>
                <form onSubmit={(e) => e.preventDefault()} className='flex items-center justify-start gap-x-1 h-full'>
                    <input
                        type="text"
                        name='text'
                        value={search}
                        placeholder='Search a Product....'
                        onChange={handleInputChange}
                        className='ProductComp px-2 py-[6px] xs:w-full sm:w-[82%] lg:w-[75%] xl:w-[65%] rounded-md text-[0.9em] lowercase bg-transparent focus:outline-none'
                    />
                    <div className='ProductComp flex items-center justify-center px-2 w-fit h-[98%] rounded-md'>
                        <FaSearch />
                    </div>
                </form>
                <div className='xs:hidden md:inline-flex flex justify-center w-full text-[0.96em]'>
                    <p>
                        {`${Allproduct.length > 0 ? Allproduct.length : 'No'} Products Available`}
                    </p>
                </div>
                <div className='flex xs:justify-between md:justify-end gap-x-7 w-full'>
                    <div id='grid-list-view' className='flex items-center justify-center gap-x-3'>
                        <div className={`p-[6px] rounded-[4px] duration-100 ${grid ? 'active' : 'unactive'}`} onClick={() => setGrid(true)}>
                            <MdGridView onClick={() => setGrid(true)} />
                        </div>
                        <div className={`p-[6px] rounded-[4px] duration-100 ${!grid ? 'active' : 'unactive'}`} onClick={() => setGrid(false)}>
                            <FaListUl onClick={() => setGrid(false)} />
                        </div>
                    </div>
                    <NavLink to={`/admin/createproduct`}>
                        <button type='submit' className='flex items-center justify-center gap-x-1 px-[8px] py-[6px] text-[0.92em] tracking-[0.1px] font-semibold bg-green-700 hover:bg-green-600 duration-100 bg-gradient-to-b from-none hover:bg-gradient-to-b from-none'>
                            <IoMdAdd className='text-[1.2em]' />
                            Create
                        </button>
                    </NavLink>
                </div>
            </div>

            {/* ---------Searching By Category Method--------- */}
            <div className='text-underLine flex items-center sm:justify-center gap-x-4 mt-4 py-1 w-full h-auto text-nowrap overflow-x-scroll scrollbar-hide'>
                {
                    categoryData.map((item, index) => {
                        return (
                            <button
                                key={index}
                                type='button'
                                name="category"
                                value={item}
                                onClick={handleCategoryChange}
                                className={`p-0 capitalize cursor-pointer text-[0.82em] rounded-none font-medium duration-100 ${item === category ? "active" : ''} bg-gradient-to-b from-none hover:bg-gradient-to-b from-none text-inherit`}>
                                {item}
                            </button>
                        )
                    })
                }
            </div>
        </>
    )
}

export default AdminFilterProduct