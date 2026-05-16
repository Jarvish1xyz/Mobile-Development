import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { router } from 'expo-router';

export const HeadersIndex = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Today's Task</Text>

            <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="notifications-outline" size={22} color={Colors.textPrimary}/>
            </TouchableOpacity>
        </View>
    )
}

export const Headers = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
                <Ionicons name='chevron-back' size={22} color={Colors.textPrimary} />
            </TouchableOpacity>
            
            <Text style={styles.title}>Today's Task</Text>

            <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="notifications-outline" size={22} color={Colors.textPrimary}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 8,
        paddingBottom: 12,

    },
    iconButton: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: Colors.surface,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        color: Colors.textPrimary,
    },
})