import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'

export default function BlogPostForm({onSubmit,initialValue}) {

    const [title,setTitle] = useState(initialValue ? initialValue.title : "")
    const [description,setDescription] = useState(initialValue ? initialValue.description : "")
    const id = initialValue ? initialValue.id : 0


  return (
    <View style={styles.main} >
      <Text style={styles.label}>Başlığı Giriniz</Text>
      <TextInput style={styles.input} placeholder='Başlığı Giriniz' value={title} onChangeText={(text) => setTitle(text)} />

      <Text style={styles.label} >Açıklamayı Giriniz</Text>
      <TextInput style={styles.input} placeholder='Açıklamayı Giriniz' value={description} onChangeText={(text) => setDescription(text)} />

      <TouchableOpacity  style={styles.button} onPress={() => {initialValue ? onSubmit(id,title,description) :onSubmit(title,description) }}>
        <View style={styles.buttonView} >
            {initialValue ? <Text style={styles.buttonText} >Güncelle</Text> :<Text style={styles.buttonText} >Kaydet</Text> }
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

    main:{
        marginTop:10
    },
    label:{
        fontSize:20,
        marginLeft:20
    },
    input:{
        borderWidth:1,
        margin:10,
        borderRadius:20,
        padding:5,
        fontSize:18,
        marginBottom:15
    },
    button:{
        padding:30
    },
    buttonView:{
        backgroundColor:"green",
        padding:10,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20
    },
    buttonText:{
        color:"white",
        fontSize:20
    }   

})