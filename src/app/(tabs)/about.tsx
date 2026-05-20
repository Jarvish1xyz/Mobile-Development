import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        
        {/* Hero Section */}
        <View style={styles.hero}>
          <View style={styles.logoContainer}>
            <Ionicons
              name="book"
              size={42}
              color="#ffffff"
            />
          </View>

          <Text style={styles.title}>
            Bhagavad Gita
          </Text>

          <Text style={styles.subtitle}>
            Ancient Wisdom for Modern Life
          </Text>
        </View>

        {/* About Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            About This App
          </Text>

          <Text style={styles.cardText}>
            This application is designed to make the
            timeless teachings of the Bhagavad Gita
            accessible in a modern and simple way.
          </Text>

          <Text style={styles.cardText}>
            Explore all 18 chapters, read translations,
            understand commentary, and search verses
            instantly with a clean and peaceful reading
            experience.
          </Text>
        </View>

        {/* Features */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Features
          </Text>

          <View style={styles.featureRow}>
            <Ionicons
              name="book-outline"
              size={22}
              color="#d97706"
            />

            <Text style={styles.featureText}>
              Read all 18 chapters
            </Text>
          </View>

          <View style={styles.featureRow}>
            <Ionicons
              name="search-outline"
              size={22}
              color="#d97706"
            />

            <Text style={styles.featureText}>
              Search any verse instantly
            </Text>
          </View>

          <View style={styles.featureRow}>
            <Ionicons
              name="reader-outline"
              size={22}
              color="#d97706"
            />

            <Text style={styles.featureText}>
              Sanskrit, transliteration & meanings
            </Text>
          </View>

          <View style={styles.featureRow}>
            <Ionicons
              name="chatbox-ellipses-outline"
              size={22}
              color="#d97706"
            />

            <Text style={styles.featureText}>
              Commentary & translation support
            </Text>
          </View>
        </View>

        {/* Quote */}
        <View style={styles.quoteCard}>
          <Text style={styles.quote}>
            “You have the right to perform your duty,
            but not to the fruits of your actions.”
          </Text>

          <Text style={styles.quoteRef}>
            — Bhagavad Gita 2.47
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Made with devotion & React Native
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f5ef",
  },

  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },

  hero: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 10,
  },

  logoContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,

    backgroundColor: "#d97706",

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 18,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5,

    elevation: 5,
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
    textAlign: "center",
  },

  card: {
    backgroundColor: "#fffaf3",

    borderRadius: 22,
    padding: 21,

    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,

    elevation: 3,
  },

  cardTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#92400e",
    marginBottom: 16,
  },

  cardText: {
    fontSize: 16,
    lineHeight: 30,
    color: "#44403c",
    marginBottom: 14,
  },

  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  featureText: {
    marginLeft: 14,
    fontSize: 16,
    color: "#374151",
    flex: 1,
    lineHeight: 26,
  },

  quoteCard: {
    backgroundColor: "#fef3c7",

    borderRadius: 22,
    padding: 24,

    marginTop: 6,
    marginBottom: 24,
  },

  quote: {
    fontSize: 20,
    lineHeight: 34,
    textAlign: "center",
    color: "#78350f",
    fontStyle: "italic",
  },

  quoteRef: {
    textAlign: "center",
    marginTop: 18,
    fontSize: 15,
    fontWeight: "700",
    color: "#b45309",
  },

  footer: {
    alignItems: "center",
    marginTop: 10,
  },

  footerText: {
    color: "#78716c",
    fontSize: 15,
  },
});