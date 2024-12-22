import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather style={styles.iconStyle} name="search" size={30} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    margin: 5,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "grey",
    marginTop: 5,
  },
  inputStyle: {
    // borderColor: "black",
    // borderWidth: 2,
    flex: 1,
  },
  iconStyle: {
    // flex: 1,
    alignSelf: "center",
    paddingLeft: 5,
    fontSize: 35,
    marginHorizontal: 10,
  },
});
export default SearchBar;
