import { FaListUl, FaSearch } from 'react-icons/fa'
import { IoFilterSharp } from 'react-icons/io5';
import { MdGridView } from 'react-icons/md'

const FilterSec = ({ search, setSearch, setFilter, category, setCategory, grid, setGrid, filterProduct, categoryData }) => {

    const handleInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value)
    };

    const handleFilterChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value)
    };

    const handleCategoryChange = (event) => {
        event.preventDefault();
        setCategory(event.target.value)
    };

    return (
        <>
            {/* Searching ------ Total Product ------ Sorting */}
            <div className='grid xs:grid-cols-1 md:grid-cols-3 items-center gap-y-3 w-full h-auto duration-150'>
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
                        {`${filterProduct.length > 0 ? filterProduct.length : 'No'} Products Available`}
                    </p>
                </div>
                <div className='flex xs:justify-between md:justify-end gap-x-7 w-full'>
                    <div id='grid-list-view' className='flex items-center justify-center gap-x-3'>
                        <div className={`p-[7px] rounded-[4px] ${grid ? 'active' : 'unactive'}`} onClick={() => setGrid(true)}>
                            <MdGridView onClick={() => setGrid(true)} />
                        </div>
                        <div className={`p-[5.4px] rounded-[4px] ${!grid ? 'active' : 'unactive'}`} onClick={() => setGrid(false)}>
                            <FaListUl onClick={() => setGrid(false)} />
                        </div>
                    </div>
                    <select
                        onClick={handleFilterChange}
                        className='ProductComp p-1 rounded-md text-[0.9em]'>
                        <option value="all">All</option>
                        <option value="lowest">Price (lowest)</option>
                        <option value="highest">Price (highest)</option>
                        <option value="a-z">A-Z</option>
                        <option value="z-a">Z-A</option>
                    </select>
                </div>
            </div>

            {/* ---------Searching By Category Method--------- */}
            <div className='text-underLine flex items-center sm:justify-center gap-x-4 py-1 w-full h-auto text-nowrap overflow-x-scroll scrollbar-hide'>
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

export default FilterSec