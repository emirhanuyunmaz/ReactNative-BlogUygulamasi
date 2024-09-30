import { createContext, useReducer, useState } from "react";


const BlogContext = createContext()

const blogReducer = (state,action) => {

    switch(action.type){
        case 'addBlog' :
            return [...state,{id:Math.floor(Math.random()*999999),title:action.payload.title,description:action.payload.description}]
        
        case 'deleteBlog' :
            return state.filter((item) => item.id !== action.payload)
        case 'getBlog':
            return state.filter((item) => item.id === action.payload)
        case 'editBlog':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload :blogPost
            })
        default:
            return state
    }


}


export const BlogProvider = ({children}) => {

    const [blogs,dispatch] = useReducer(blogReducer,[{id:1,title:"Python"},{id:2,title:"Java"},{id:3,title:"Javascript"}])

    function addBlog(title,description,callBack){
        dispatch({type:"addBlog",payload:{title,description}})
        if(callBack){
            callBack()
        }
    }

    function deleteBlog(id){
        dispatch({type:"deleteBlog",payload:id})
    }

    function getBlog(id){
        dispatch({type:"getBlog",payload:id})
    }

    function editBlog(id,title,description,callBack){
        dispatch({type:"editBlog",payload:{id,title,description}})
        if(callBack){
            callBack()
        }
    }

    // const [blogs,setBlogs] = useState([{id:1,title:"Python"},{id:2,title:"Java"},{id:3,title:"Javascript"}])
    // function addBlog(){
    //     setBlogs([...blogs,{id:blogs.length+1,title:"Vue Js"}])
    // }
    

    return <BlogContext.Provider value={{data:blogs,addBlog:addBlog,deleteBlog:deleteBlog,getBlog:getBlog,editBlog:editBlog}} >{children}</BlogContext.Provider>
}


export default BlogContext