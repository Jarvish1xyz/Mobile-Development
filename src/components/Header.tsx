import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export const HeaderComponent = () => {
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

export const HeaderOfChapter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={22} color={'white'} />
      </TouchableOpacity>

      <Text style={styles.title}>Chapter Detail</Text>
    </View>
  );
};

export const HeaderOfVerses = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={22} color={'white'} />
      </TouchableOpacity>

      <Text style={styles.title}>Verse Detail</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingTop: 8,
    paddingBottom: 12,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#868482",
    justifyContent: "center",
    alignItems: "center",
  },
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