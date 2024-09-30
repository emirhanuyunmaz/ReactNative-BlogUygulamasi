import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogPostForm from '../components/BlogPostForm'
import BlogContext from '../context/BlogContext'

export default function CreateBlogScreen({navigation}) {

    const {addBlog} = useContext(BlogContext)


    return (
    <View>
      <BlogPostForm onSubmit={(title,description) => {
        addBlog(title,description,() => {
            navigation.navigate("Home")
        })

      }} />
    </View>
  )
}

const styles = StyleSheet.create({})