import { createContext, useState } from "react";


const BlogContext = createContext()


export const BlogProvider = ({children}) => {

    const [blogs,setBlogs] = useState([{id:1,title:"Python"},{id:2,title:"Java"},{id:3,title:"Javascript"}])

    function addBlog(){
        setBlogs([...blogs,{id:blogs.length+1,title:"Vue Js"}])
    }
    

    return <BlogContext.Provider value={{data:blogs,addBlog:addBlog}} >{children}</BlogContext.Provider>
}


export default BlogContext