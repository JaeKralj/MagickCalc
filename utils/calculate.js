export default function calculate(values, setValues) {
  if (Object.values(values).filter(Boolean).length >= 2) {
    if (values.originalPrice && values.discountPercent) {
      const amountSaved = (values.discountPercent / 100) * values.originalPrice
      setValues(prevState => ({
        ...prevState,
        amountSaved: formatVal(amountSaved),
        finalPrice: formatVal(prevState.originalPrice - amountSaved),
      }))
    } else if (values.originalPrice && values.amountSaved) {
      setValues(prevState => ({
        ...prevState,
        discountPercent: formatVal(
          (prevState.amountSaved / prevState.originalPrice) * 100
        ),
        finalPrice: formatVal(prevState.originalPrice - prevState.amountSaved),
      }))
    } else if (values.originalPrice && values.finalPrice) {
      setValues(prevState => ({
        ...prevState,
        discountPercent: formatVal(
          (prevState.amountSaved / prevState.originalPrice) * 100
        ),
        finalPrice: formatVal(prevState.originalPrice - prevState.amountSaved),
      }))
    } else if (values.discountPercent && values.amountSaved) {
      setValues(prevState => ({
        ...prevState,
        originalPrice: formatVal(
          (prevState.amountSaved * 100) / prevState.discountPercent
        ),
        finalPrice: formatVal(
          (prevState.amountSaved * 100) / prevState.discountPercent -
            prevState.amountSaved
        ),
      }))
    } else if (values.discountPercent && values.finalPrice) {
      setValues(prevState => ({
        ...prevState,
        originalPrice: formatVal(
          prevState.finalPrice / (1 - prevState.discountPercent / 100)
        ),
        amountSaved: formatVal(
          prevState.finalPrice / (1 - prevState.discountPercent / 100) -
            prevState.finalPrice
        ),
      }))
    } else if (values.amountSaved && values.finalPrice) {
      setValues(prevState => ({
        ...prevState,
        originalPrice: formatVal(
          Number(prevState.amountSaved + prevState.finalPrice)
        ),
        discountPercent: formatVal(
          (prevState.amountSaved / prevState.amountSaved +
            prevState.finalPrice) *
            100
        ),
      }))
    }
  }
}

function formatVal(val) {
  if (val % 1 !== 0) {
    return val.toFixed(2)
  } else {
    return val.toFixed(0)
  }
}
