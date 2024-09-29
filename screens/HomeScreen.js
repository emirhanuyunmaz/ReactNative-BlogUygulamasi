import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogContext from '../context/BlogContext'

export default function HomeScreen() {

    const {data,addBlog} = useContext(BlogContext)
    
  return (
    <View>
      <Text>HomeScreen</Text>

        <Button title='Ekle' onPress={addBlog} />

      <FlatList 

        data={data}
        keyExtractor={(blog) => blog.id}
        renderItem={({item}) => {
            return <Text>{item.title}</Text>
        }}

      />
    </View>
  )
}

const styles = StyleSheet.create({})