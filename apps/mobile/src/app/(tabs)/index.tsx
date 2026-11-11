import { StyleSheet, Text, View } from 'react-native'

import { MEDIA_TYPES } from '@app/types'

import { TYPE_LABELS } from '@app/constants'

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hobby board</Text>
      {MEDIA_TYPES.map(type => (
        <Text
          key={type}
          style={styles.item}
        >
          {TYPE_LABELS[type]}
        </Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0B0B0F',
    justifyContent: 'center',
    paddingHorizontal: 24
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 600,
    marginBottom: 12
  },
  item: {
    color: '#A1A1AA',
    fontSize: 16,
    paddingVertical: 4
  }
})
