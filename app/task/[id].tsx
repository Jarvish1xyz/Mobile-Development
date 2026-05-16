import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import {Headers} from '@/components/Headers';
import SingleTask from '@/app/task/singleTask';
import { Task, TASKS } from '@/constants/tasks';

const task = () => {

    const { id } = useLocalSearchParams();
    const inset = useSafeAreaInsets();

    const [tasks, setTasks] = useState<Task[]>(TASKS);

    const changeTaskStatus = (id: string, status: Task['status']) => {
        const task = TASKS.find((t) => t.id === id);

        if (task) {
            task.status = status;
        }

        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id
                    ? { ...task, status }
                    : task
            )
        );
    };

    return (
        <View style={[styles.container, { paddingTop: inset.top }]}>
            {/* <StatusBar barStyle='light-content' /> */}
            <FlatList
                data={TASKS.filter((item) => item.id === id)}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <SingleTask task={item} changeTaskStatus={changeTaskStatus} />}
                ListHeaderComponent={
                    <>
                        <Headers />
                    </>
                }
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export default task

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    list: {
        paddingBottom: 25
    }
})