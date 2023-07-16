import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import IconInput from './components/IconInput'
import Input from './components/Input'
import InputField from './components/InputField'
import calculate from './utils/calculate'

export default function App() {
  const [values, setValues] = useState({
    originalPrice: '',
    discountPercent: '',
    amountSaved: '',
    finalPrice: '',
  })
  const [focused, setFocusedEL] = useState()

  useEffect(() => {
    calculate(values, setValues)
    console.log(values)
  }, [...Object.values(values)])

  const handleNumClick = (value, customFunc) => {
    if (customFunc) {
      customFunc()
    } else {
      if (focused) {
        setValues(prevState => {
          if (
            focused === 'discountPercent' &&
            Number(values.discountPercent.concat(`${value}`)) > 100
          ) {
            return {
              ...prevState,
            }
          } else {
            return {
              ...prevState,
              [focused]: prevState[focused] + value,
            }
          }
        })
      }
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={[styles.texts, { color: '#fff' }]}>
                Discount Calculator
              </Text>
            </View>
            <InputField
              label='Original Price'
              setFocusedEL={setFocusedEL}
              el='originalPrice'
              value={values['originalPrice']}
              focused={focused}
            />
            <InputField
              label='Discount Percent'
              setFocusedEL={setFocusedEL}
              el='discountPercent'
              value={values['discountPercent']}
              focused={focused}
            />
            <InputField
              label='Amount Saved'
              setFocusedEL={setFocusedEL}
              el='amountSaved'
              value={values['amountSaved']}
              focused={focused}
            />
            <InputField
              label='Final Price'
              setFocusedEL={setFocusedEL}
              el='finalPrice'
              value={values['finalPrice']}
              focused={focused}
            />
            <View style={styles.controlWrap}>
              <View style={styles.controlRow}>
                <Input label='7' onPress={handleNumClick} />
                <Input label='8' onPress={handleNumClick} />
                <Input label='9' onPress={handleNumClick} />
                <IconInput
                  onPress={() => {
                    setValues(prevState => {
                      if (prevState[focused].length > 1) {
                        return {
                          ...prevState,
                          [focused]: prevState[focused].slice(0, -1),
                        }
                      } else {
                        return {
                          originalPrice: '',
                          discountPercent: '',
                          amountSaved: '',
                          finalPrice: '',
                        }
                      }
                    })
                  }}
                  iconName='backspace'
                />
              </View>
              <View style={styles.controlRow}>
                <Input label='4' onPress={handleNumClick} />
                <Input label='5' onPress={handleNumClick} />
                <Input label='6' onPress={handleNumClick} />
                <IconInput
                  iconName='arrow-downward'
                  onPress={() => console.log('pressed')}
                />
              </View>
              <View style={styles.controlRow}>
                <Input label='1' onPress={handleNumClick} />
                <Input label='2' onPress={handleNumClick} />
                <Input label='3' onPress={handleNumClick} />
                <IconInput
                  iconName='calculate'
                  onPress={() => console.log('pressed')}
                />
              </View>
              <View style={styles.controlRow}>
                <Input label='0' onPress={handleNumClick} />
                <Input label='00' onPress={handleNumClick} />
                <Input label='.' />
                <Input
                  label='C'
                  onPress={_ => {
                    handleNumClick(_, () =>
                      setValues({
                        originalPrice: '',
                        discountPercent: '',
                        amountSaved: '',
                        finalPrice: '',
                      })
                    )
                  }}
                />
              </View>
            </View>
            <StatusBar style='auto' />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#eee',
  },
  header: {
    backgroundColor: '#897f7f',
    marginBottom: 3,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  container: {
    flex: 1,
  },
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
  controlWrap: {
    marginTop: 6,
    paddingHorizontal: 10,
  },
  controlRow: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 6,
  },
})
