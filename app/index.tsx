import DateSelector from '@/components/DateSelector';
import FilterTabs from '@/components/FilterTabs';
import { HeadersIndex } from '@/components/Headers';
import TaskCard from '@/components/TaskCard';
import Colors from '@/constants/Colors';
import { FilterOptions, Task, TASKS } from '@/constants/tasks';
import React, { useState, useEffect } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const index = () => {

  const inset = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = useState<FilterOptions>("All");

  const [tasks, setTasks] = useState<Task[]>(TASKS);

  const changeTaskStatus = (id: string, status: Task['status']) => {
    // const task = TASKS.find((t) => t.id === id);

    // if (task) {
    //   task.status = status;
    // }
    if(status === 'To-do') {
      status = 'In Progress';
    } else if (status === 'In Progress') {
      status = 'Done';
    } else {
      return;
    }

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, status }
          : task
      )
    );
  };

  useEffect(() => {
    
  }, )

  return (
    <View style={[styles.container, { paddingTop: inset.top }]}>
      <StatusBar barStyle='light-content' />
      <FlatList
        data={tasks.filter((item) => activeFilter === "All" ? true : item.status === activeFilter)}
        extraData={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TaskCard task={item} changeTaskStatus={changeTaskStatus} />}
        ListHeaderComponent={
          <>
            <HeadersIndex />
            <DateSelector />
            <FilterTabs selected={activeFilter} onSelect={setActiveFilter} />
          </>
        }
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  list: {
    paddingBottom: 25
  }
})