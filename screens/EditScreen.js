import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogContext from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

export default function EditScreen({navigation,route}) {

    const {data,editBlog} = useContext(BlogContext)
    // console.log("RRR::",route.params.id);
    const id = route.params.id
    const singleData = data.find((item) => item.id == route.params.id)
    // console.log(singleData);

  return (
    <View>
     <BlogPostForm initialValue={{id:id,title:singleData.title,description:singleData.description}} onSubmit={(id,title,description) => {
        editBlog(id,title,description,() => {
            navigation.pop()
        })
     }} />
    </View>
  )
}

const styles = StyleSheet.create({})