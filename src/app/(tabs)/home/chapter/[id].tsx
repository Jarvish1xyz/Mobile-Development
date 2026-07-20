import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import { router, useLocalSearchParams, useSegments } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import axios from 'axios';
import { Chapter, Verses } from '@/constants/data';
import { ExplainChapterComponent } from '@/components/Explain';
import { VersesList } from '@/components/ListCards';
import { HeaderOfChapter } from '@/components/Header';

const chaperByIdPage = () => {

  const inset = useSafeAreaInsets();
  const { id } = useLocalSearchParams();
  const chId = Number(id);
  const pathName = useSegments();

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
    console.log(pathName);
  }, [fetchData]);

  const handelNavigation = (id: number) => {
    router.push({
      pathname: `/home/verses/[id]`,
      params: { chId: chId, id: id }
    });
  }

  return (
    <View style={styles.screen}>

      <View style={[styles.verseContainer, { marginTop: inset.top * 1.2 }]}>
        <FlatList
          data={versesList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <VersesList
              verses={item}
              navigateRender={handelNavigation}
            />
          )}
          ListHeaderComponent={(
            <>
              <HeaderOfChapter />
              <ExplainChapterComponent chapter={chapterData} />
            </>
          )
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
    // backgroundColor: "#eb8705",
    marginHorizontal: 12,
    // paddingBottom: 20,
  },
});