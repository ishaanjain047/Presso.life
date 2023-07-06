import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const banner = (props) => {
  const navigation = useNavigation();
  console.log(props);
  console.log(navigation);
  // let url = p
  // console.log(typeof props.navigatepage);
  return (
    <View style={styles.banner}>
      <Text style={styles.headings}>{props.description}</Text>
      <TouchableHighlight onPress={() => navigation.navigate("Doctors")}>
        <Image source={props.imgsource} />
      </TouchableHighlight>
    </View>
  );
};

export default banner;

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
  categories: {
    padding: "2%",
  },
  horizontalimages: {
    flex: 1,
    flexDirection: "row",
  },
  categoryscroll: {},
  headings: {
    color: "#2869F3",
  },
});
