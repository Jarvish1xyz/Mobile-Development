import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import { Chapter, Verses } from '@/constants/data';
import { Ionicons } from '@expo/vector-icons';

type chapterProps = {
    chapter: Chapter,
    navigateRender: (id: number) => void
}

type verseProps = {
    verse: Verses,
    navigateRender: (id: number) => void
}

export const ChapterList = ({ chapter, navigateRender }: chapterProps) => {

    return (
        <View style={styles.col}>
            <Pressable
                onPress={() => navigateRender(chapter.id)}
                style={styles.card}
            >
                <View style={styles.cardBody}>
                    <Text style={styles.chapterNumber}>
                        Chapter {chapter.id}
                    </Text>

                    <Text style={styles.chapterName}>
                        {chapter.name} - {chapter.name_transliterated}
                    </Text>

                    <Text
                        style={styles.chapterSummary}
                        numberOfLines={3}
                        ellipsizeMode='tail'
                    >
                        {chapter.chapter_summary}
                    </Text>

                    <View style={styles.verseRow}>
                        <Ionicons name='list' size={18} style={styles.icon} />

                        <Text style={styles.verseText}>
                            {chapter.verses_count} Verses
                        </Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export const VersesList = ({ verse, navigateRender }: versesProps) => {

    return (
        <View style={styles.col}>
            <View style={styles.contentContainer}>

                {/* Translation */}
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>
                        Translation
                    </Text>

                    <Text style={styles.contentText}>
                        {verse.translations
                            .filter(
                                (tr: Verses) =>
                                    tr.author_name === "Shri Purohit Swami"
                            )
                            .map((tr:Verses) => tr.description)
                            .join(" ")}
                    </Text>
                </View>

                {/* Commentary */}
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>
                        Commentary
                    </Text>

                    <Text style={styles.contentText}>
                        {verse.commentaries
                            .filter(
                                (tr: Verses) =>
                                    tr.author_name === "Swami Sivananda"
                            )
                            .map((tr: Verses) => tr.description)
                            .join(" ")}
                    </Text>
                </View>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    col: {
        marginVertical: 10,
        marginHorizontal: 8,
    },

    card: {
        width: "100%",
        backgroundColor: "#ffffff",
        borderRadius: 18,
        padding: 18,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.12,
        shadowRadius: 5,

        elevation: 4,
    },

    cardBody: {
        flex: 1,
    },

    chapterNumber: {
        fontSize: 15,
        fontWeight: "600",
        color: "#D27E62",
        marginBottom: 8,
    },

    chapterName: {
        fontSize: 20,
        fontWeight: "700",
        color: "#111827",
        marginBottom: 12,
        lineHeight: 38,
    },

    chapterSummary: {
        fontSize: 15,
        lineHeight: 28,
        color: "#4b5563",
        marginBottom: 18,
    },

    verseRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    icon: {
        fontSize: 18,
        marginRight: 8,
        color: "#2b3036bb",
    },

    verseText: {
        fontSize: 15,
        fontWeight: "600",
        color: "#2b3036bb",
    },
    versesCard: {
        backgroundColor: "#ffffff",
        borderRadius: 16,
        padding: 16,
        marginBottom: 14,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 4,

        elevation: 3,
    },
    versesHeader: {
        fontSize: 16,
        fontWeight: "700",
        color: "#f59e0b",
        marginBottom: 10,
    },
    versesDescription: {
        fontSize: 15,
        lineHeight: 28,
        color: "#374151",
    },
    divider: {
        height: 1,
        backgroundColor: "#e5e7eb",
        marginVertical: 10,
    },
    verseCountWrapper: {
        marginVertical: 10,
    },
    verseCount: {
        fontSize: 18,
        fontWeight: "700",
        color: "#111827",
    },
});
