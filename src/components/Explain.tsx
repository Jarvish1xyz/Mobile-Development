import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Chapter,Verses } from '@/constants/data'

type chapterProps = {
    chapter: Chapter | null,
}

type verseProps = {
    verse: Verses | null,
}

export const ExplainChapterComponent = ({ chapter }: chapterProps) => {
    return (
        <>
            <View style={styles.explainContainer}>
                <Text style={styles.chapterNumber}>
                    Chapter {chapter?.id}
                </Text>

                <Text style={styles.chapterTitle}>
                    {chapter?.name_transliterated}
                </Text>

                <Text style={styles.chapterSummary}>
                    {chapter?.chapter_summary}
                </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.verseCountWrapper}>
                <Text style={styles.verseCount}>
                    48 Verses
                </Text>
            </View>

            <View style={styles.divider} />
        </>
    )
}

export const ExplainVersesComponent = ({ verse }: verseProps) => {
    return (
        <>
            <View style={styles.verseTopContainer}>

                <Text style={styles.verseHeading}>
                    BG {verse?.chapter_number}.{verse?.verse_number}
                </Text>

                <Text style={styles.sanskritText}>
                    {verse?.text}
                </Text>

                <Text style={styles.transliteration}>
                    {verse?.transliteration}
                </Text>

                <Text style={styles.wordMeaning}>
                    {verse?.word_meanings}
                </Text>

            </View>

            <View style={styles.divider} />

            <View style={styles.verseCountWrapper}>
                <Text style={styles.verseCount}>
                    48 Verses
                </Text>
            </View>

            <View style={styles.divider} />
        </>
    )
}

const styles = StyleSheet.create({
    explainContainer: {
        backgroundColor: "#ffffff",
        paddingHorizontal: 18,
        paddingVertical: 20,
        marginBottom: 10,

        // borderBottomLeftRadius: 20,
        // borderBottomRightRadius: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 4,

        elevation: 3,
    },

    // Chapter Small Text
    chapterNumber: {
        fontSize: 16,
        fontWeight: "600",
        color: "#6b7280",
        marginBottom: 8,
    },

    // Chapter Name
    chapterTitle: {
        fontSize: 30,
        fontWeight: "800",
        color: "#111827",
        marginBottom: 14,
        lineHeight: 38,
    },

    // Chapter Summary
    chapterSummary: {
        fontSize: 15,
        lineHeight: 28,
        color: "#4b5563",
        textAlign: "left",
    },


    // Divider
    divider: {
        height: 1,
        backgroundColor: "#e5e7eb",
        marginVertical: 10,
    },

    // Verse Count Wrapper
    verseCountWrapper: {
        marginVertical: 10,
    },

    // Verse Count Text
    verseCount: {
        fontSize: 18,
        fontWeight: "700",
        color: "#111827",
    },

    verseTopContainer: {
        backgroundColor: "#ffffff",
        paddingHorizontal: 20,
        paddingVertical: 24,

        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 5,

        elevation: 4,
    },

    // BG 1.1
    verseHeading: {
        fontSize: 28,
        fontWeight: "800",
        textAlign: "center",
        color: "#111827",
        marginBottom: 20,
    },

    // Sanskrit Shloka
    sanskritText: {
        fontSize: 24,
        lineHeight: 42,
        textAlign: "center",
        color: "#b45309",
        fontWeight: "600",
        marginBottom: 28,
    },

    // Transliteration
    transliteration: {
        fontSize: 18,
        lineHeight: 34,
        textAlign: "center",
        color: "#374151",
        fontStyle: "italic",
        marginBottom: 28,
    },

    // Word Meaning
    wordMeaning: {
        fontSize: 16,
        lineHeight: 30,
        textAlign: "center",
        color: "#4b5563",
    },
})