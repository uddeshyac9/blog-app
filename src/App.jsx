import { useState, useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext'
import { ThemeProvider } from './context/Theme'
import {  Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import Home from './pages/Home'
import BlogPage from './pages/BlogPage';
import CategoryPage from './pages/CategoryPage';
import TagPage from './pages/TagPage';




function App() {
  const { fetchBlog} = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {

    const page = searchParams.get('page') ?? 1;
    if(location.pathname.includes("tags")){
      // Tag Page 
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlog(Number(page),tag);
    }
    else if (location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlog(Number(page),null,category);
    }
    else{
      fetchBlog(Number(page))
    }
  

  },[location.pathname, location.search])

  const [themeMode, setThemeMode] = useState('light');
  const darkTheme = () => {
    setThemeMode("dark")

  } 
  const lightTheme = () => {
    setThemeMode("light")
    
  }
  const html = document.querySelector('html')

     useEffect(() => {
    html.classList.remove("light","dark")
    html.classList.add(themeMode)

  },[themeMode])
  

  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-x-1'>
      <ThemeProvider value={{themeMode, darkTheme, lightTheme}}> 
     <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/blog/:blogId" element={<BlogPage />} />
        <Route path="/tags/:tag" element={<TagPage />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      </ThemeProvider>
      
    </div>
      
   
  
  );
}

export default App
