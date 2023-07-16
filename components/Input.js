import { Platform, StyleSheet, Text } from 'react-native'

export default function Input({ label, onPress }) {
  return (
    <Text
      style={styles.controlText}
      onPress={e => {
        Platform.OS !== 'web' &&
          onPress(
            e.target._internalFiberInstanceHandleDEV.memoizedProps.children
          )
        Platform.OS === 'web' && onPress(e.target.innerText)
      }}
    >
      {label}
    </Text>
  )
}

const styles = StyleSheet.create({
  controlText: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 13,
    width: 70,
    height: 70,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 27.5,
    fontWeight: 600,
  },
})
