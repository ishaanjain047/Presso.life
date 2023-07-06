import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";

const Heading = (props) => {
  return (
    <View style={styles.headingWrap}>
      <Text style={styles.docHeadings}>{props.name}</Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  headingWrap: {
    paddingTop: "15%",
    paddingLeft: "10%",
    paddingBottom: "10%",
  },
  docHeadings: {
    fontSize: 40,
    color: "#FFFFFF",
  },
});
