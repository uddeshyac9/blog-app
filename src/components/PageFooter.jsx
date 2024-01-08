import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function PageFooter() {
    const {page ,totalPages, handlePageChange, setPage} = useContext(AppContext)
    const prevPage = () => {
    handlePageChange(page-1)

    }
    const nextPage = () => {
        handlePageChange(page+1)
    
        }
    return (
        <div className='class="fixed bottom-0 inset-x-0 bg-white py-2 border-t-2 border-t-gray-300 w-full text-black'>
            <div className='flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto'>    
            { page > 1 && 
             <button className='border-2 border-gray-300 py-1 px-4 rounded-md' onClick={prevPage} >
                            Previous Page
                        </button>

            } {
                page < totalPages &&     <button className='border-2 border-gray-300 py-1 px-4 rounded-md' onClick={nextPage}>
                Next Page
            </button>
            }

            <p className='text-sm font-semibold ml-auto'>page {page} of {totalPages}</p>
               
            

            </div>

             
               

        </div>
        
    )
}

export default PageFooter
