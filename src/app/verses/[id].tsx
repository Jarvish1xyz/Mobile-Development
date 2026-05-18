import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import { router, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import axios from 'axios';
import { Chapter, Verses } from '../../constants/data';
import { ExplainChapterComponent, ExplainVersesComponent, ExplainVerseTranslateComponent } from '@/components/Explain';
import { VersesList } from '@/components/ListCards';

const chaperByIdPage = () => {

  const inset = useSafeAreaInsets();
  const { chId, id } = useLocalSearchParams();

  const [verses, setVerses] = useState<Verses | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const versesRes = await axios.get(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chId}/verses/${id}`, {
        headers: {
          'x-rapidapi-key': 'bcba844d26msh2d333e852898b44p124f13jsn0e520c9be445',
          'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
        }
      });
      console.log('Fetched verse data:', versesRes.data);
      setVerses(versesRes.data);
    } catch (err) {
      console.error('Error fetching chapter or verses:', err);
    }
  }, [chId, id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <View style={styles.screen}>

      <ExplainVersesComponent verse={verses} />
      <ExplainVerseTranslateComponent verse={verses} />
      
    </View>
  )
}

export default chaperByIdPage

const styles = StyleSheet.create({
  // Main Screen
  screen: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },

  // Bottom Main Section
  contentContainer: {
    paddingHorizontal: 14,
    paddingVertical: 18,
  },

  // Card
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 20,
    marginBottom: 18,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,

    elevation: 3,
  },

  // Section Title
  sectionTitle: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    color: "#111827",
    marginBottom: 18,
  },

  // Translation / Commentary Text
  contentText: {
    fontSize: 17,
    lineHeight: 32,
    color: "#374151",
  },

  // spacing helper
  sectionSpacing: {
    marginBottom: 12,
  },
});