import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import { router, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import axios from 'axios';
import { Chapter, Verses } from '../../constants/data';
import { ExplainChapterComponent } from '@/components/Explain';
import { VersesList } from '@/components/ListCards';

const chaperByIdPage = () => {

  const inset = useSafeAreaInsets();
  const { id } = useLocalSearchParams();
  const chId = Number(id);

  const [chapterData, setChapterData] = useState<Chapter | null>(null);
  const [versesList, setVersesList] = useState<Verses | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const chapterRes = await axios.get(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/`, {
        headers: {
          'x-rapidapi-key': 'bcba844d26msh2d333e852898b44p124f13jsn0e520c9be445',
          'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
        }
      });
      setChapterData(chapterRes.data);

      const versesRes = await axios.get(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/verses/`, {
        headers: {
          'x-rapidapi-key': 'bcba844d26msh2d333e852898b44p124f13jsn0e520c9be445',
          'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
        }
      });
      setVersesList(versesRes.data);
    } catch (err) {
      console.error('Error fetching chapter or verses:', err);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handelNavigation = (id: number) => {
    router.push({
      pathname: `/verses/:${id}`,
      params: { chId: chId, id: id }
    });
  }

  return (
    <View style={styles.screen}>

      <View style={styles.verseContainer}>

        <FlatList
          data={versesList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <VersesList
              verses={item}
              navigateRender={handelNavigation}
            />
          )}
          ListHeaderComponent={
            <ExplainChapterComponent chapter={chapterData} />
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default chaperByIdPage

const styles = StyleSheet.create({
  // Main Container
  screen: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },

  // Verse List Container
  verseContainer: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
});