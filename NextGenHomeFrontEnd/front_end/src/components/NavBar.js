import * as React from "react";
import Tab from "../constants/TabNav";

import HomePage from "../screen/HomePage.js";
import ControlPanel from "../screen/ControlPanel.js";
import UserSetting from "../screen/UserSetting.js";
import FindDevice from "../screen/FindDevice.js";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "react-native-paper";

//*Screen name
const homeName = "HomePage";
const controlPanelName = "ControlPanel";
const userSettingName = "UserSetting";
const findDeviceName = "findDevice";

export default function NavBar() {
  //TODO: Screen to screen navigation
  //*Remove secondaryContainer that would be appear when icon is focused
  const theme = useTheme();
  theme.colors.secondaryContainer = "transparent";

  //*Tag.Screen: screen to be display (ie. homepage, control panel,...)
  return (
    <Tab.Navigator
      //Router settings for navigation:
      initialRouteName={HomePage}
      backBehavior="history"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          let rn = route.name;
          let iconSize = 25
          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === controlPanelName) {
            iconName = focused ? "grid" : "grid-outline";
          } else if (rn === userSettingName) {
            iconName = focused ? "person-circle" : "person-circle-outline";
          } else if (rn === findDeviceName) {
            iconName = focused ? "search" : "search-outline";
          }
          else {
            //*Place holder icon
            iconName = focused ? "add-circle" : "add-circle-outline";
          }

          //Return icon for tab bar
          return <Ionicons name={iconName} size={iconSize} color={color} />;
        },
      })}
      //Design settings for navigation:
      activeColor="#FFB267"
      inactiveColor="#F8F8F8"
      barStyle={{ backgroundColor: "#282424" }}
      labeled={false} //*Text for screen name under icon is not visible
      theme={theme}
    >
      {<Tab.Screen name={homeName} component={HomePage} />}
      {<Tab.Screen name={findDeviceName} component={FindDevice} />}
      {<Tab.Screen name={controlPanelName} component={ControlPanel} />}
      {<Tab.Screen name={userSettingName} component={UserSetting} />}

    </Tab.Navigator>
  );
}
