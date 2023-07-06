import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  Platform,
} from "react-native";
import { useState } from "react";
import { db } from "../fbconfig.js";
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";

const Enterdetail = ({ route, navigation }) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // yeh export defaut ke andar aaenge bsdk
  const { phoneNumber } = route.params;
  // console.log(phoneNumber);
  const phno = phoneNumber;
  // isko apan props se le lenge from front page
  const createData = (e) => {
    e.preventDefault();

    const docRef = doc(db, "phonenums", phno);
    // jo second variable hota hai voh collection kaa naam hota hai , aur third variable id hoti hai

    const data = {
      firstName: firstname,
      secondName: lastname,
      Email: email,
    };

    setDoc(docRef, data)
      .then(() => {
        alert("Data submitted");
      })
      .catch((error) => {
        alert("Data not submitted");
      });

    navigation.navigate("Home");

    setFirstName("");
    setLastName("");
    setEmail("");
  };
  return (
    <View style={styles.container}>
      <Text>Your Phone Number is {JSON.stringify(phoneNumber)} </Text>
      <TextInput
        value={firstname}
        onChangeText={(firstname) => {
          setFirstName(firstname);
        }}
        placeholder="First name"
        style={styles.textBoxes}
      ></TextInput>
      <TextInput
        value={lastname}
        onChangeText={(lastname) => {
          setLastName(lastname);
        }}
        placeholder="Last name"
        style={styles.textBoxes}
      ></TextInput>
      <TextInput
        value={email}
        onChangeText={(email) => {
          setEmail(email);
        }}
        placeholder="Email"
        style={styles.textBoxes}
      ></TextInput>
      <Button onPress={createData} title="Submit" color="#841584" />
    </View>
  );
};

export default Enterdetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textBoxes: {
    width: "90%",
    fontSize: 18,
    padding: 12,
    borderColor: "gray",
    borderWidth: 0.2,
    borderRadius: 10,
  },
});
