import { StyleSheet, Text, View } from 'react-native'

export default function InputField({
  label,
  value,
  setFocusedEL,
  el,
  focused,
}) {
  return (
    <View style={styles.inputFieldWrapper}>
      <Text style={[styles.texts, styles.fieldSet]}>{label}</Text>
      <Text
        style={[
          styles.texts,
          styles.fieldSet,
          focused === el && styles.focused,
        ]}
        onPress={() => {
          setFocusedEL(el)
        }}
      >
        {Number(value).toFixed(2)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  texts: {
    fontSize: 16,
  },
  inputFieldWrapper: {
    flexDirection: 'row',
    gap: 3,
    paddingHorizontal: 10,
    marginVertical: 3,
  },
  fieldSet: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  focused: {
    borderWidth: 1,
    borderColor: 'blue',
  },
})
