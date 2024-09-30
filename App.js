import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CreateBlogScreen from './screens/CreateBlogScreen';
import { BlogProvider } from './context/BlogContext';
import ShowScreen from './screens/ShowScreen';
import { TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import EditScreen from './screens/EditScreen';
import EvilIcons from '@expo/vector-icons/EvilIcons';
const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTitle:"Blog Uygulaması"}} initialRouteName='Home'  >
          <Stack.Screen name="Home" component={HomeScreen} options={({navigation}) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('CreateBlog')}>
                <AntDesign name="plus" size={32} color="black" />
              </TouchableOpacity>
            )
          })} />
          <Stack.Screen name="CreateBlog" component={CreateBlogScreen} />
          <Stack.Screen name="EditBlog" component={EditScreen} />
          <Stack.Screen name="ShowBlog" component={ShowScreen} options={({navigation,route}) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('EditBlog',{id:route.params.id})}>
                <EvilIcons name="pencil" size={32} color="black" />
              </TouchableOpacity>
            )
          })} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
