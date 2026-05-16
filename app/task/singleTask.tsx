import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import { Task } from '@/constants/tasks';
import { Ionicons } from '@expo/vector-icons';

const statusColors = {
    'Done': Colors.statusDone,
    'In Progress': Colors.statusInProgress,
    'To-do': Colors.statusTodo,
};

type TaskProps = {
    task: Task;
    changeTaskStatus: (
        id: string,
        status: Task['status']
    ) => void;
};

const SingleTask = ({ task, changeTaskStatus, }: TaskProps) => {

    const renderButton = () => {

        // If task is done -> don't show button
        if (task.status === 'Done') {
            return null;
        }

        // If task not started
        if (task.status === 'To-do') {
            return (
                <Pressable
                    style={styles.button}
                    onPress={() =>
                        changeTaskStatus(
                            task.id,
                            'In Progress'
                        )
                    }
                >
                    <Text style={styles.buttonText}>
                        Start
                    </Text>
                </Pressable>
            );
        }

        // If task in progress
        return (
            <Pressable
                style={[styles.button, { backgroundColor: Colors.statusButtonEnd }]}
                onPress={() =>
                    changeTaskStatus(
                        task.id,
                        'Done'
                    )
                }
            >
                <Text style={styles.buttonText}>
                    End Task
                </Text>
            </Pressable>
        );
    };

    return (
        <View style={styles.container}>
            {/* Card */}
            <View >

                {/* Top Row */}
                <View style={styles.topRow}>

                    <View style={{width: '75%'}}>
                        <Text style={styles.title}>
                            {task.title}
                        </Text>

                        <Text style={styles.category}>
                            {task.category}
                        </Text>
                    </View>

                    <View style={styles.timeRow}>
                        <Ionicons
                            name="time-outline"
                            size={18}
                            color={Colors.primary}
                        />

                        <Text style={styles.time}>
                            {task.time}
                        </Text>
                    </View>

                </View>

                {/* Status */}
                <View style={styles.statusContainer}>
                    <Text
                        style={[
                            styles.status,
                            {
                                color:
                                    statusColors[
                                    task.status
                                    ],
                            },
                        ]}
                    >
                        {task.status}
                    </Text>
                </View>

                {/* Button */}
                {renderButton()}

            </View>

        </View>
    );
};

export default SingleTask;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingTop: 20,
        paddingHorizontal: 20,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.textPrimary,
    },

    bell: {
        width: 36,
        height: 36,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.border,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.surface,
    },

    card: {
        backgroundColor: Colors.surface,
        borderRadius: 24,
        padding: 20,
        borderWidth: 1,
        borderColor: Colors.border,
    },

    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 24,
    },

    title: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.textPrimary,
        marginBottom: 6,
    },

    category: {
        fontSize: 14,
        color: Colors.textSecondary,
    },

    timeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },

    time: {
        fontSize: 13,
        color: Colors.primary,
        fontWeight: '600',
    },

    statusContainer: {
        marginBottom: 24,
    },

    statusLabel: {
        fontSize: 14,
        color: Colors.textSecondary,
        marginBottom: 8,
    },

    status: {
        fontSize: 16,
        fontWeight: '700',
    },

    button: {
        height: 48,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: Colors.border,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
    },

    buttonText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#000',
    },

});