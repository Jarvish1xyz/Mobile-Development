import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";


const Search = () => {
  const [chapter, setChapter] = useState("");
  const [verse, setVerse] = useState("");

  const handleSearch = () => {
    if (!verse) {
      router.push(`/chapter/${chapter}`)
    }
    else {
      router.push({
        pathname: `/verses/[id]`,
        params: { chId: chapter, id: verse }
      });
    }
  };

  return (
    <View style={[styles.container]}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Search Verse</Text>

        <Text style={styles.subtitle}>
          Find your answer in Bhagavad Gita
        </Text>
      </View>

      {/* Search Card */}
      <View style={styles.card}>

        {/* Chapter Input */}
        <View style={styles.inputWrapper}>
          <Ionicons
            name='book'
            size={22}
            color="#d97706"
            style={styles.icon}
          />

          <TextInput
            placeholder="Enter Chapter Number"
            placeholderTextColor="#9ca3af"
            keyboardType="numeric"
            value={chapter}
            onChangeText={setChapter}
            style={styles.input}
          />
        </View>

        {/* Verse Input */}
        <View style={styles.inputWrapper}>
          <Ionicons
            name="list"
            size={22}
            color="#d97706"
            style={styles.icon}
          />

          <TextInput
            placeholder="Enter Verse Number"
            placeholderTextColor="#9ca3af"
            keyboardType="numeric"
            value={verse}
            onChangeText={setVerse}
            style={styles.input}
          />
        </View>

        {/* Search Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleSearch}
        >
          <Ionicons
            name="search"
            size={20}
            color="#ffffff"
          />

          <Text style={styles.buttonText}>
            Search Verse
          </Text>
        </TouchableOpacity>
      </View>

      {/* Footer Quote */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place."
        </Text>

        <Text style={styles.footerSub}>
          — Bhagavad Gita 6.19
        </Text>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f5ef",
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  header: {
    marginBottom: 35,
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#7c2d12",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: "#78716c",
    lineHeight: 24,
  },

  card: {
    backgroundColor: "#fffaf3",
    borderRadius: 24,
    padding: 22,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,

    elevation: 4,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#ffffff",

    borderWidth: 1.5,
    borderColor: "#fcd34d",

    borderRadius: 16,

    paddingHorizontal: 14,
    marginBottom: 18,
    height: 60,
  },

  icon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#1f2937",
    fontWeight: "500",
  },

  button: {
    height: 58,
    backgroundColor: "#d97706",

    borderRadius: 18,

    justifyContent: "center",
    alignItems: "center",

    flexDirection: "row",
    marginTop: 6,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "700",
    marginLeft: 8,
  },

  footer: {
    marginTop: 45,
    paddingHorizontal: 10,
  },

  footerText: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 28,
    color: "#57534e",
    fontStyle: "italic",
  },

  footerSub: {
    textAlign: "center",
    marginTop: 14,
    color: "#a16207",
    fontWeight: "700",
    fontSize: 15,
  },
});