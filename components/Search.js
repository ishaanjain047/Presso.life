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
import { MyApp } from "../fbconfig.js";
import { db } from "../fbconfig.js";
import {
  collection,
  getFirestore,
  setDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { useState } from "react";

console.log("You are in search ");
const colRef = collection(db, "phonenums");
async function f() {
  // console.log(products);
  const docsSnap = await getDocs(colRef);
  // console.log(typeof docsSnap);
  try {
    docsSnap.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.id);
      // setProducts([...doc.data()]);
    });
  } catch (error) {
    console.log(error);
  }
}
f();

const search = () => {
  const [products, setProducts] = useState([]);
  // const docsSnap = await getDocs(colRef);
  console.log("behen ke lode");
  return (
    <View>
      <Text>search</Text>
    </View>
  );
};

export default search;
