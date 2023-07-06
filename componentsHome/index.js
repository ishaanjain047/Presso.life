import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import React from "react";
import Banner from "./banner.js";
import Categories from "./categories.js";

const Home = ({ route, navigation }) => {
  let categories = [
    {
      id: 0,
      name: "DoctorA",
      categoryimg: require("../assets/Square.png"),
    },
    {
      id: 1,
      name: "DoctorB",
      categoryimg: require("../assets/Square.png"),
    },
    {
      id: 2,
      name: "DoctorC",
      categoryimg: require("../assets/Square.png"),
    },
    {
      id: 2,
      name: "DoctorC",
      categoryimg: require("../assets/Square.png"),
    },
    {
      id: 2,
      name: "DoctorC",
      categoryimg: require("../assets/Square.png"),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <View style={styles.icondiv}>
          <Image style={styles.icon} source={require("../assets/icon.png")} />
        </View>
        <View style={styles.locationdiv}>
          <View>
            <View style={styles.location}>
              <View>
                <Text>Icon</Text>
              </View>
            </View>
          </View>
          <View>
            <Text>Chat with Support</Text>
          </View>
        </View>
        <View>
          <Banner
            description="Hello Ishaan"
            imgsource={require("../assets/Frame.png")}
          ></Banner>
          <Banner
            description="Nursing Staff at your Home"
            imgsource={require("../assets/Frame.png")}
          ></Banner>
          <Categories description="Category" categoryarr={categories} />
          <Banner
            description="RTCPR"
            imgsource={require("../assets/Frame.png")}
          ></Banner>
          {/* <TouchableHighlight onPress={navigation.navigate("Doctors")}> */}
          <Banner
            description="Our Doctors"
            imgsource={require("../assets/Frame.png")}
            navigatepage="Doctors"
          ></Banner>
          {/* </TouchableHighlight> */}
          <Categories description="Tests" categoryarr={categories} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: "#E0E9F2",
  //   },
  icondiv: {
    paddingLeft: "5%",
    paddingTop: "10%",
  },
  icon: {},
  locationdiv: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  banner: {
    padding: "2%",
  },
  bannerdiv: {
    padding: "2%",
  },
  categories: {
    padding: "2%",
  },
  horizontalimages: {
    flex: 1,
    flexDirection: "row",
  },
  categoryscroll: {},
  headings: {
    padding: "2%",
    color: "#2869F3",
  },
});
