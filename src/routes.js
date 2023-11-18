import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "./pages/home";
import Password from "./pages/passwords";

const Tab = createMaterialTopTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="passwords" component={Password} />
    </Tab.Navigator>
  );
};

export default Routes;
