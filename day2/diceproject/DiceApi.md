# Dice class (API)

This is a Dice class for dice games. Dice holdt the number of dots. The number of dots is between 1 and given upper bound.

The maximum upper bound is 20. The minimum upper bound is 2.

If the dice hasn't been rolled, the number of dots is 0. After the dice has been rolled, the dot count can't become zero again.

## Operators

### **constructor**

- initializes the dice with upper bound that is passed as a parameter
- if no upper bound is not given, the default is 6
- initializes dot count to 0

- if upper bound is not integer, then throw exception `'upper bound must be an integer'`

- if the upper bound is not between 2-20, an exception is thrown:

  - upper bound > 20: `'upper bound too big'`
  - upper bound < 2: `'upper bound is too small'`

  ### **methods**

  #### **roll**

  - rolls the dice
  - when rolled, the dot count become a random number between 2 and the upper bound
  - returns nothing

  #### **toString**

  - returns dot count as string. For example: `'4'`
  - if the dice hasn't been rolled yet, returns the trxt `'Not rolled yet'`

  ### **Getter**

  #### **dots**

  returns number of dots

  #### **minimumValue**

  returns the minimum number of dots of a dice. It should be 1.

  #### **maximumValue**

  returns the upper bound of a dice
