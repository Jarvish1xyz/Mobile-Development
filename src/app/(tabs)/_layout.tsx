import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name='index'
        options={{
          title: 'Home',
          tabBarIcon:({color, size}) => (
            <Ionicons name='home' color={color} size={size}/>
          )
        }}
      />
      <Tabs.Screen name='search'
        options={{
          title: 'Search',
          tabBarIcon:({color, size}) => (
            <Ionicons name='search' color={color} size={size}/>
          )
        }}
      />
      <Tabs.Screen name='about'
        options={{
          title: 'About',
          tabBarIcon:({color, size}) => (
            <Ionicons name='information-circle' color={color} size={size}/>
          )
        }}
      />
    </Tabs>
  );
}
