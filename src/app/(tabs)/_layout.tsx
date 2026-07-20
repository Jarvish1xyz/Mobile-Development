import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: "#fffaf3",
          borderTopWidth: 0,
          height: 65,
        },

        tabBarActiveTintColor: "#db9141",
        tabBarInactiveTintColor: "#6b7280",
      }}
    >

      {/* Home */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",

          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="home"
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* Search */}
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",

          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="search"
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* About */}
      <Tabs.Screen
        name="about"
        options={{
          title: "About",

          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="information-circle"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="home/chapter/[id]"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="home/verses/[id]"
        options={{
          href: null,
        }}
      />
      {/* <Tabs.Screen
        name="home/index"
        options={{
          href: null,
        }}
      /> */}

    </Tabs>
  );
}