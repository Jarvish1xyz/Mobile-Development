import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const aboutPage = () => {
    const inset = useSafeAreaInsets();

  return (
    <View style={{paddingTop: inset.top}}>
      <Text>aboutPage</Text>
    </View>
  )
}

export default aboutPage

const styles = StyleSheet.create({})