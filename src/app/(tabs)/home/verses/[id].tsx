import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import { router, useLocalSearchParams, useNavigation, useSegments } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import axios from 'axios';
import { Chapter, Verses } from '@/constants/data';
import { ExplainChapterComponent, ExplainVersesComponent } from '@/components/Explain';
import { VersesList } from '@/components/ListCards';
import { HeaderOfVerses } from '@/components/Header';

const chaperByIdPage = () => {

  const inset = useSafeAreaInsets();
  const { chId, id } = useLocalSearchParams();
  const pathName = useSegments();
  const navigation = useNavigation();

  const [verses, setVerses] = useState<Verses | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const versesRes = await axios.get(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chId}/verses/${id}/`, {
        headers: {
          'x-rapidapi-key': 'bcba844d26msh2d333e852898b44p124f13jsn0e520c9be445',
          'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
        }
      });
      // console.log('Fetched verse data:', versesRes.data);
      setVerses(versesRes.data);
    } catch (err) {
      console.error('Error fetching chapter or verses:', err);
    }
  }, [chId, id]);

  useEffect(() => {
    fetchData();
    console.log(JSON.stringify(navigation.getState(), null, 2));
  }, [fetchData]);

  return (
    <ScrollView
      style={[styles.screen, { marginTop: inset.top * 1.2 }]}
      showsVerticalScrollIndicator={false}
    > 
      <HeaderOfVerses/>
      <ExplainVersesComponent verse={verses} />

    </ScrollView>
  )
}

export default chaperByIdPage

const styles = StyleSheet.create({
  // Main Screen
  screen: {
    flex: 1,
    paddingHorizontal: 12,
    paddingBottom: 20,
  },

});