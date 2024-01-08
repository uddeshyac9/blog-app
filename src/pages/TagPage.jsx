import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import PageFooter from '../components/PageFooter';
import Blogs from '../components/Blogs';
import ThemeBtn from '../components/ThemeBtn';



function TagPage() {
    const navigation = useNavigate();
    const location = useLocation(); 
    const tag = location.pathname.split("/").at(-1);

    return (
        <div className='max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px]'>
          <Header/>
        
          <div>
            <button className='border px-2 py-1' onClick={()=> navigation(-1)}>
                Back
            </button>
            <h2>
                Blogs Tagged <span>#{tag}</span>   
            </h2>
          </div>
          <Blogs/> 
          <PageFooter/>
        </div>
        
    )
}

export default TagPage
