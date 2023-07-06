import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";

const Cards = () => {
  let doctorsinfo = [
    {
      id: 0,
      name: "Ishaan Jain",
      ContactNo: "+9996752934",
      Qualification: "MD",
      docimg: require("../assets/Rectangle.png"),
    },
    {
      id: 1,
      name: "Ishaan Jain",
      ContactNo: "+9996752934",
      Qualification: "MD",
      docimg: require("../assets/Rectangle.png"),
    },
    {
      id: 2,
      name: "Ishaan Jain",
      ContactNo: "+9996752934",
      Qualification: "MD",
      docimg: require("../assets/Rectangle.png"),
    },
    {
      id: 3,
      name: "Ishaan Jain",
      ContactNo: "+9996752934",
      Qualification: "MD",
      docimg: require("../assets/Rectangle.png"),
    },
    {
      id: 3,
      name: "Ishaan Jain",
      ContactNo: "+9996752934",
      Qualification: "MD",
      docimg: require("../assets/Rectangle.png"),
    },
    {
      id: 3,
      name: "Ishaan Jain",
      ContactNo: "+9996752934",
      Qualification: "MD",
      docimg: require("../assets/Rectangle.png"),
    },
    {
      id: 3,
      name: "Ishaan Jain",
      ContactNo: "+9996752934",
      Qualification: "MD",
      docimg: require("../assets/Rectangle.png"),
    },
    {
      id: 3,
      name: "Ishaan Jain",
      ContactNo: "+9996752934",
      Qualification: "MD",
      docimg: require("../assets/Rectangle.png"),
    },
  ];
  return (
    <ScrollView>
      <View style={styles.mydocs}>
        {doctorsinfo.map((doctor, id) => {
          return (
            <View>
              {/* {console.log("id is " + doctor.id)} */}
              {/* {console.log(
                "img refrence is bro " + require("../assets/Rectangle.png")
              )} */}
              <Image source={doctor.docimg} />
              <Text>{doctor.name}</Text>
              <Text>{doctor.ContactNo}</Text>
              <Text>{doctor.Qualification}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Cards;

const styles = StyleSheet.create({
  docHeadings: {
    color: "blue",
  },
  mydocs: {
    // flex: 1,
    marginTop: "10%",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    overflow: "hidden",
    // flexWrap: "wrap",
  },
});
