import { HeaderComponent } from "@/components/Header";
import { ChapterList } from "@/components/ListCards";
import { Chapter } from "@/constants/data";
import axios from 'axios';
import { router } from 'expo-router';
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function Index() {

  const [chapters, setChapters] = useState<Chapter[]>([]);
  // const inset = useSafeAreaInsets();


  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const res = await axios.get('https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18',
          {
            headers: {
              'x-rapidapi-key': 'bcba844d26msh2d333e852898b44p124f13jsn0e520c9be445',
              'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
            }
          }
        )
        setChapters(res.data);
      } catch (error) {
        console.error('Error fetching chapters:', error);
      }
    };

    fetchChapters();
  }, []);

  const handelNavigation = (id: number) => {
    router.push({
      pathname: "/home/chapter/[id]",
      params: { id },
    });
  }


  return (
    <View style={[styles.container]}>
      <HeaderComponent />
      <FlatList
        data={chapters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ChapterList
            chapter={item}
            navigateRender={handelNavigation}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      {/* <Text>Index Page</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffaf3",
    // marginHorizontal: 8,
    paddingTop: 8,
  },
});