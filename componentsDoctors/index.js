import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Heading from "./Heading.js";
// import Search from "./Search.js";
import CategoriesSmall from "./CategorySmall.js";
import Cards from "./Cards.js";

const Doctors = () => {
  let categoriesdocs = [
    {
      id: 0,
      name: "DoctorA",
      categoryimg: require("../assets/smallrectangle.png"),
    },
    {
      id: 1,
      name: "DoctorB",
      categoryimg: require("../assets/smallrectangle.png"),
    },
    {
      id: 2,
      name: "DoctorC",
      categoryimg: require("../assets/smallrectangle.png"),
    },
    {
      id: 2,
      name: "DoctorD",
      categoryimg: require("../assets/smallrectangle.png"),
    },
    {
      id: 2,
      name: "DoctorE",
      categoryimg: require("../assets/smallrectangle.png"),
    },
  ];
  return (
    <SafeAreaView style={styles.docWrapper}>
      <Heading name="Doctors"></Heading>
      <CategoriesSmall
        description="Category"
        categoryarr={categoriesdocs}
      ></CategoriesSmall>
      <Cards></Cards>
      {/* <Search></Search> */}
    </SafeAreaView>
  );
};

export default Doctors;

const styles = StyleSheet.create({
  docWrapper: {
    // height: "100%",
    // flex: 1,
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "rgba(79, 81, 140, 1.0)",
    // backgroundColor: "B6D5F3",
    // width: dimScreen.width,
  },
  docHeadings: {
    color: "blue",
  },
});
