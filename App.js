import {
  createStackNavigator,
  createAppContainer,
} from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Search",
    },
  }
);

export default createAppContainer(navigator);
