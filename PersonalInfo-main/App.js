import { View, Text, Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile'
import { useState } from 'react';
const Stack = createNativeStackNavigator();
const Home = (props) => {
   const nav = props.navigation;
   const [name, setName] = useState("Kieu Thanh Tung");
   const [age, setAge] = useState("20");
   const [address, setAddress] = useState("Ha Noi");
   const [phone, setPhone] = useState("0974594175");
   const [email, setEmail] = useState("tungktph27526@fpt.edu.vn");
   const update = (name, age, address, phone, email) => {
     setName(name);
     setAge(age);
     setAddress(address);
     setPhone(phone);
     setEmail(email);
   };
    return (
    <View style={{
        marginTop: 50,
        alignItems: "center",
        justifyContent: "center"
      }}>
      <Image style={{ width: 80, height: 80, margin: 5}}
            source={{ uri: "https://www.pixelstalk.net/wp-content/uploads/images6/Pastel-Pink-Aesthetic-Wallpaper-Beautiful-Girl.jpg" }}></Image>
      <Text style={{fontSize: 24,fontWeight: "600",margin: 5}}>Thông tin cá nhân</Text>
      <View style={{justifyContent: 'space-around', flexDirection: 'row', padding: 10, width: "100%"}}>
        <Button title='Profile' onPress={() => nav.navigate("Profile", {
            name: name,
            age: age,
            address: address,
            phone: phone,
            email: email,
            update: update,
          })
        }></Button>
      </View>
    </View>)
}
const App=()=> {
   return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
             <Stack.Screen
                name='Profile'component={Profile}
            />
            <Stack.Screen
                name='Home'component={Home}
            />
        </Stack.Navigator>
    </NavigationContainer>)
}
export default App;
