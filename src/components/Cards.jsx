import React from 'react'
import { NavLink } from 'react-router-dom';
import ThemeBtn from './ThemeBtn';


function Cards({post}) {

    return (
        <div className='mt-5' >
            
          
            <NavLink to={`/blog/${post.id}`}> <p className="font-bold text-sm ">{post.title}</p></NavLink>
          
                
        <p className="text-[14px]">
            By <span className="italic">{post.author}</span> or{" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>  <span className="underline font-bold">{post.category}</span></NavLink>
           
        </p>
        <p className="text-[14px]">Posted on {post.date}</p>
        <p className="text-[16px] mt-[13px]">{post.content}</p> 
        <div className='tags'> 
                  {
                    post.tags.map((tag,index) => (
                       <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}><span className="text-xs ml-2 font-semibold underline text-blue-700 cursor-pointer" key={index}>#{tag}</span>
                       </NavLink> 
                    ))
                  } </div>
        
       </div>
          
   
    )
}

export default Cards
