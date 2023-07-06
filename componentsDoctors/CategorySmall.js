import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";

const CategorySmall = (props) => {
  return (
    <View style={styles.docCategory}>
      <Text style={styles.HeadingsDoc}>{props.description}</Text>
      <View style={styles.horizontalimages}>
        <ScrollView horizontal={true}>
          <View style={styles.horizontalimages}>
            {props.categoryarr.map((category, id) => {
              return <Image source={category.categoryimg} />;
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default CategorySmall;

const styles = StyleSheet.create({
  docCategory: {
    marginBotton: "20%",
  },
  horizontalimages: {
    // flex: 1,
    flexDirection: "row",
    padding: "2%",
  },
  HeadingsDoc: {
    padding: "2%",
    color: "#FFFFFF",
    fontSize: 20,
  },
});
