# Discount Calculator App

The Discount Calculator App is a simple application that allows users to calculate discount percent, discount amount, final price, and original price based on the values provided. It provides a convenient way to determine the savings and final cost after applying discounts.

## Features

The Discount Calculator App offers the following features:

1. **Discount Percent Calculation:** Users can input the original price and the discounted price to calculate the discount percentage.
2. **Discount Amount Calculation:** Users can input the original price and the discount percentage to calculate the discount amount.
3. **Final Price Calculation:** Users can input the original price and the discount percentage to calculate the final price after applying the discount.
4. **Original Price Calculation:** Users can input the final price and the discount percentage to calculate the original price before the discount.

## Usage

1. Launch the Discount Calculator App.
2. Enter the relevant values in the respective fields, depending on the calculation you want to perform.
3. The app will automatically update the other fields based on the provided values.
4. Review the results displayed in each field to obtain the desired information.

**Note:** There is a known issue with the app's current implementation. If you delete the final price or discount amount input, the state of the app will reset to the deleted value instead of recalculating the other fields. This is due to a conditional statement used in the calculate function. We apologize for the inconvenience and plan to address this issue in a future update.

## Development

The Discount Calculator App was developed using React-Native and Expo. It utilizes a simple logic to calculate the various fields based on the user inputs. The app consists of a form and JavaScript functions to handle the calculations and update the values dynamically.

The calculate function (check utils) in the JavaScript code contains the logic responsible for performing the calculations. It checks the provided input values and applies the necessary calculations based on the user's selection.

```javascript
function calculate(values, setValues) {
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
```

## License

The Discount Calculator App is released under the [MIT License](https://opensource.org/licenses/MIT). Feel free to modify and distribute the app according to the terms of the license.
