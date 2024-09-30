import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogContext from '../context/BlogContext'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { TouchableOpacity } from 'react-native';

export default function HomeScreen({navigation}) {

    const {data,addBlog,deleteBlog} = useContext(BlogContext)
    
  return (
    <View>
      <FlatList 
        data={data}
        keyExtractor={(blog) => blog.id}
        renderItem={({item}) => {
            return <TouchableOpacity onPress={() => navigation.navigate("ShowBlog",{id:item.id})}>
                <View style={styles.row}>
                    <Text style={styles.title} >{item.title}</Text>
                    <TouchableOpacity onPress={() => deleteBlog(item.id)} >
                        <EvilIcons name="trash" size={32} color="black" />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({

    row:{
        flexDirection:"row",
        borderTopWidth:2,
        marginVertical:10,
        alignItems:"center",
        justifyContent:"space-between"
    },
    title:{
        marginHorizontal:10,
        fontSize:18
    }


})