import { Pressable } from 'react-native'

export default function Button({ children, style }) {
  return (
    <Pressable style={style} onPress={e => console.log(e)}>
      {children}
    </Pressable>
  )
}
