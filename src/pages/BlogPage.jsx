import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import PageFooter from '../components/PageFooter';
import Blogs from '../components/Blogs';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Spinner from '../components/Spinner';
import Cards from '../components/Cards';
import ThemeBtn from '../components/ThemeBtn';


function BlogPage() {
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate(); 
    const {loading , setLoading} = useContext(AppContext);
     const blogId = location.pathname.split("/").at(-1);
     const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

     async function fetchRelatedBlogs() {
        setLoading(true)
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try {  
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
            
        } catch (error) {
            console.log("Unables To fetch Blog", error)
            setBlog(null)
            setRelatedBlogs([])
                     
        }
        setLoading(false)
     }
     useEffect(()=> {
        if (blogId) {
            fetchRelatedBlogs()
        }
        
     },[location.pathname])
    return (
        <div className='max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px]'>
            <Header/> 
          
         <div>
            <button className='border px-2 py-1' onClick={() => navigation(-1)}>
                Back
            </button>
         </div>
         {
            loading ? (<Spinner/>) : (blog ?
                 (   <div>
                    <Cards post = {blog}/>
                    <h2 className=' text-xl my-5 font-bold'> Related Blogs</h2>
                    {
                        relatedBlogs.map((post => (<div key={post.id}> <Cards post={post}/></div> )) )
                    }
                 </div>
                     
            ) : ( <div> <p>No Blog Found </p></div>  ))
         }
            

            
        </div>
        
    )
}

export default BlogPage
