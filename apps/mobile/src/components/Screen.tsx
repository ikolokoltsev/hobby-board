import type { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { colors, spaces } from '@app/tokens'

interface Props {
  children: ReactNode
  edges?: ('top' | 'bottom')[]
}

// TODO: maybe rename to Container or something like that later
export function Screen({ children, edges = ['top'] }: Readonly<Props>) {
  return (
    <SafeAreaView
      style={styles.root}
      edges={edges}
    >
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg.base,
    paddingHorizontal: spaces[6]
  }
})
