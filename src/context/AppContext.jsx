import { createContext, useContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();


function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null)
    const [posts, setPosts] = useState([])
    const navigate = useNavigate();
    
    const value = {loading,setLoading,posts,setPosts,page, setPage,
        totalPages, setTotalPages, fetchBlog, handlePageChange};

        async function fetchBlog(page = 1, tag = null, category) {
            setLoading(true)
            let url = `${baseUrl}?page=${page}`;
            if (tag) {
              url += `&tag=${tag}`;
            }
            if (category) {
              url += `&category=${category}`;
            }
            
            try {  
                const responce = await fetch(url)
                const data = await responce.json()
                setPage(data?.page);
                setPosts(data?.posts);
                setTotalPages(data?.totalPages)
                console.log(data)


                
                
            } catch (error) {
                console.log("Error while Fetching Data")
                setPage(1);
                setPosts([])
                setTotalPages(null)
               

                
            }
            setLoading(false)
        } 
         function handlePageChange(page) {
            navigate({search : `?page=${page}`});
            setPage(page)
            

        }

    return (
        <AppContext.Provider value={value}> {children}</AppContext.Provider>
    )
}

export default AppContextProvider
