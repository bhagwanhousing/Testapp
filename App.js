import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";
import WalletScreen from "./src/screens/WalletScreen";
import TodoScreen from "./src/screens/TodoScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components : ComponentsScreen,
    List : ListScreen,  
    ImageScreen : ImageScreen,
    CounterScreen : CounterScreen,
    ColorScreen : ColorScreen,
    SquareScreen : SquareScreen,
    TextScreen : TextScreen,
    WalletScreen : WalletScreen,
    TodoScreen : TodoScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
