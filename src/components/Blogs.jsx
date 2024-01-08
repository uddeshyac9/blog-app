import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import Cards from './Cards'; // Assuming Cards is a valid component
import ThemeBtn from './ThemeBtn';
import { NavLink } from 'react-router-dom';

function Blogs() {
    const { loading, posts } = useContext(AppContext);

    return (
        <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px] ">
        {loading ? (
          <div className="min-h-[80vh] w-full flex justify-center items-center">
            <Spinner/>
          </div>
        ) : posts.length === 0 ? (
          <div className="min-h-[80vh] w-full flex justify-center items-center">
            <p className="text-center font-bold text-3xl">No Blogs Found !</p>
          </div>
        ) : ( 
          posts.map((post) => (
            <Cards key={post.id} post={post} />
          ))
        )}
      </div>
    );
}

export default Blogs;



