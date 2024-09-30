import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogContext from '../context/BlogContext'

export default function ShowScreen({route}) {

    const {data} = useContext(BlogContext)
    // console.log("RRR::",route.params.id);
    const singleData = data.find((item) => item.id == route.params.id)
    // console.log(singleData);

    
    
  return (
    <View style={styles.main}>

      <View style={styles.dataContainer} >
        <Text style={styles.dataLabel} >Başlık :</Text>
        <Text style={styles.data} >{singleData.title}</Text>
      </View>

      <View style={styles.dataContainer} >
        <Text style={styles.dataLabel} >Açıklama :</Text>
        <Text style={styles.data} >{singleData.description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  main:{
    alignItems:"center",
    marginTop:10,
  },

  dataContainer:{
    borderWidth:1,
    marginBottom:10,
    borderRadius:30,
    alignItems:"center",
    width:"90%"
  },

  dataLabel:{
    fontSize:30
  },

  data:{
    fontSize:18,
  }


})