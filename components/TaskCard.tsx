import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { Task } from '@/constants/tasks';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const statusColors = {
    'Done': Colors.statusDone,
    'In Progress': Colors.statusInProgress,
    'To-do': Colors.statusTodo,
}

type TaskCardProps = {
    task: Task,
    changeTaskStatus: (
        id:string,
        status: Task['status']
    ) => void,
};

const TaskCard = ({ task, changeTaskStatus }: TaskCardProps) => {

    return (
        <Pressable style={styles.card} onPress={() => router.navigate(`/task/${task.id}`)}>
            <View style={styles.content}>
                <Text style={styles.category}>{task.category}</Text>
                <Text style={styles.title}>{task.title}</Text>
                <View style={styles.footer}>
                    <View style={styles.timeRow}>
                        <Ionicons name="time-outline" size={20} color={Colors.primary} />
                        <Text style={styles.time}>{task.time}</Text>
                    </View>
                    <Text style={[styles.status, { color: statusColors[task.status] }]}>
                        {task.status}
                    </Text>
                </View>
            </View>
            <Pressable onPress={() => changeTaskStatus(task.id, task.status)} style={[styles.iconBadge, { backgroundColor: task.icon.backgroundColor }]}>
                <Ionicons name={task.icon.name as any} size={20} color='#000000' />
            </Pressable>
        </Pressable>
    )
}

export default TaskCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.surface,
        borderRadius: 18,
        padding: 18,
        marginHorizontal: 20,
        marginBottom: 14,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: Colors.border,
    },
    content: {
        flex: 1,
    },
    category: {
        fontSize: 12,
        color: Colors.textSecondary,
        marginBottom: 6,
    },
    title: {
        fontSize: 17,
        fontWeight: "600",
        color: Colors.textPrimary,
        marginBottom: 14,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    timeRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    time: {
        fontSize: 12,
        color: Colors.primary,
        fontWeight: "500",
    },
    status: {
        fontSize: 12,
        fontWeight: "600",
    },
    iconBadge: {
        width: 42,
        height: 42,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 14,
    },
});