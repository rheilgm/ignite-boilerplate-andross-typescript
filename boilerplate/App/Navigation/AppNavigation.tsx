import { createStackNavigator } from "react-navigation";
import styles from "./Styles/NavigationStyles";
import LaunchScreen from "../Containers/LaunchScreen";

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: "none",
  initialRouteName: "LaunchScreen",
  navigationOptions: {
    headerStyle: styles.header
  }
});



export default PrimaryNav;