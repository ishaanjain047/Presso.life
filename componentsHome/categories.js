import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";

const categories = (props) => {
  return (
    <View>
      <Text style={styles.headings}>{props.description}</Text>
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

export default categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0E9F2",
  },
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
  headings: {
    padding: "2%",
    color: "#2869F3",
  },
});
