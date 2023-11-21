import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "./pages/home";
import Password from "./pages/passwords";

import { Ionicons } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

const color = "#fff";
const size = 20;

const Routes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#392DE9",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Ionicons size={size} color={color} name="home" />;
            }
            return <Ionicons size={size} color={color} name="home-outline" />;
          },
        }}
      />
      <Tab.Screen
        name="passwords"
        component={Password}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Ionicons size={size} color={color} name="lock-closed" />;
            }
            return (
              <Ionicons size={size} color={color} name="lock-closed-outline" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
