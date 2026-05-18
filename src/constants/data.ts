export type Chapter = {
    id: number,
    name: string,
    name_transliterated: string,
    chapter_summary: string,
    verses_count: number,
    author_name: string,
    description: string,
}

export type Verses = {
    id: number,
    text: string,
    translations: Chapter[],
    length: number,
    verse_number: number,
    chapter_number: number,
    transliteration: string,
    word_meanings: string,
}