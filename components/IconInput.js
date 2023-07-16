import { MaterialIcons } from '@expo/vector-icons'
import { Pressable, StyleSheet } from 'react-native'

export default function IconInput({ onPress, iconName }) {
  return (
    <Pressable style={styles.controlText} onPress={onPress}>
      <MaterialIcons name={iconName} size={28} color='blue' />
    </Pressable>
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
