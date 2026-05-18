import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const HeaderComponent = () => {
  return (
    <SafeAreaView style={styles.headerWrapper}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Bhagavad Gita</Text>
          <Text style={styles.subtitle}>
            Read all 18 chapters & verses
          </Text>
        </View>

        <View style={styles.iconContainer}>
          <Ionicons name="book-outline" size={26} color="#ffffff" />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HeaderComponent

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: "#ffffff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: 20,
    paddingVertical: 18,

    backgroundColor: "#ffffff",

    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111827",
  },

  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 4,
  },

  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,

    backgroundColor: "#f59e0b",

    alignItems: "center",
    justifyContent: "center",

    elevation: 4,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
});