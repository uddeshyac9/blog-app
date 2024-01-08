import React from 'react'
import Header from '../components/Header'
import PageFooter from '../components/PageFooter'
import Blogs from '../components/Blogs'; // Corrected import path
import ThemeBtn from '../components/ThemeBtn';

function Home() {
    return (
        <div>
            <div>
            <Header/>

            </div>
            
           
            
            <div>
            
            
            <Blogs/>
           
           
            <PageFooter/>
            </div>
            
            
        </div>
        
    )
}

export default Home
