import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, Modal, TextInput } from 'react-native';
import {useState} from 'react';
export default function App(props) {
   const {route} = props;
   const nav = props.navigation;
   const {update} = route.params;
   const [show, setShow] = useState(false);
   const [name, setName] = useState(route.params.name);
   const [age, setAge] = useState(route.params.age);
   const [address, setAddress] = useState(route.params.address);
   const [phone, setPhone] = useState(route.params.phone);
   const [email, setEmail] = useState(route.params.email);

   const ShowData = (label, value) => (label + ': ' + value);

   const onClose = () => {
      setName(name);
      setAge(age);
      setAddress(address);
      setPhone(phone);
      setEmail(email);
      setShow(false);
    };
    const onclose = () => {
      onClose();
      nav.navigate("Home");
    }
    const onSave = () => {
      update(name, age, address, phone, email);
      nav.navigate("Profile", {
        name: name,
        age: age,
        address: address,
        phone: phone,
        email: email, 
      });

      return onClose();
    };
    const onEdit = () => {
      setShow(true);
      setName(name);
      setAge(age);
      setAddress(address);   
      setPhone(phone);   
      setEmail(email);   
    };
  return (
    <View style={styles.container}>
      <StatusBar translucent={false}/>
      {show ? null:<Text style={styles.button} onPress={() => onEdit()}>Edit</Text>}
        <Modal visible={show} animationType={"slide"}>
          <View style={{alignSelf: "center", marginTop: 150}}>
          <TextInput placeholder="Name" onChangeText={(text) => setName(text)} value={name} style={styles.input}/>
          <TextInput placeholder="Age" onChangeText={(text) => setAge(text)} value={age} style={styles.input}/>
          <TextInput placeholder="Address" onChangeText={(text) => setAddress(text)} value={address} style={styles.input}/>
          <TextInput placeholder="Phone" onChangeText={(text) => setPhone(text)} value={phone} style={styles.input}/>
          <TextInput placeholder="Email" onChangeText={(text) => setEmail(text)} value={email} style={styles.input}/>
          <View style={{margin: 10, flexDirection: "row", justifyContent: "space-around", width: "100%"}}>
            <Text style={styles.btnDialog} title="Cancel" onPress={() => onclose()}>Cancel</Text>
            <Text style={styles.btnDialog} title="Save" onPress={() => onSave()}>Save</Text>
          </View>
        </View>
        </Modal>
      <Image style={{ width: 80, height: 80, margin: 5}}
            source={{ uri: "https://www.pixelstalk.net/wp-content/uploads/images6/Pastel-Pink-Aesthetic-Wallpaper-Beautiful-Girl.jpg" }}></Image>
      <Text style={styles.text}>{ShowData('Name',name)}</Text>
      <Text style={styles.text}>{ShowData('Age',age)}</Text>
      <Text style={styles.text}>{ShowData('Address',address)}</Text>
      <Text style={styles.text}>{ShowData('Phone',phone)}</Text>
      <Text style={styles.text}>{ShowData('Email',email)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
    height: "50%",
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: "800",
    margin: 5
   },
   button: {
      backgroundColor: "#fff", 
      borderRadius: 10, 
      alignSelf: 'flex-end', 
      fontSize: 14,
      color: "black",
      fontWeight: "900",
      paddingLeft:15, paddingRight:15, paddingTop:3,paddingBottom:3, 
      marginRight:10,
   },
   input: {
      borderWidth: 1, 
      width: 300, 
      alignSelf: "center", 
      padding: 10, 
      marginTop: 10
   },
   btnDialog: {marginLeft: 50, backgroundColor: "#fff", borderWidth: 1, padding: 5},
});