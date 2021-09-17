# Dice class (API)

This is a Dice class for dice games. Dice holdt the number of dots. The number of dots is between 1 and given upper bound (=max number of dots)(included)

The maximum upper bound is 20. The minimum upper bound is 2.

If the dice hasn't been rolled, the number of dots is 0. After the dice has been rolled, the dot count can't become zero again.

## Operators

### **constructor**

- initializes the dice with upper bound that is passed as a parameter
- if no upper bound is not given, the default is 6
- dot count is between 1 and 6
- initializes dot count to 0

- if upper bound is not integer, then throw exception `'upper bound must be an integer'`

- if the upper bound is not between 2-20, an exception is thrown:

  - upper bound > 20: `'upper bound too big'`
  - upper bound < 2: `'upper bound is too small'`

  #### Test cases for constructor

  1. Create a dice with no upper bound
     - creates a dice with dot count between 1 and 6
     - dot count is 0
  2. Create a dice with given upper bound 2-20
     - creates a dice with dot count between 1-upper bound
     - dot count is zero (tested in test case 1)
  3. Test the exceptions
     - 0 throws an exception `'upper bound is too small'`
     - 1 throws an exception `'upper bound is too small'`
     - -1 throws an exception `'upper bound is too small'`
     - 21 throws an exception `'upper bound is too big'`
     - 'a' throws an exception `'upper bound must be an integer'`
     - 2.5 throws an exception `'upper bound must be an integer'`

  ### **methods**

  #### **roll()**

  - rolls the dice
  - when rolled, the dot count become a random number between 1 and the upper bound
  - returns nothing

  #### test cases for roll

  - create a dice object with no upper bound. Upper bound should be 6. When the dice has not been rolled yet, dot count is 0. Then roll the dice and now dot count should be between 1 and 6.
  - create a dice with upper bound 20 => after rolled results dot count between 1 and 20.

  #### **toString()**

  - returns dot count as string. For example: `'4'`
  - if the dice hasn't been rolled yet, returns the text `'Not rolled yet'`

  #### Test cases to toString()

  In both cases create a new dice (no upper bound).

  - Roll the dice and compare the result string with dots
  - Don't roll the dice. Compare result to the text `'Not rolled yet'`

  ### **Getter**

  #### **dots**

  returns number of dots

  #### **minimumValue**

  returns the minimum number of dots of a dice. It should be 1.

  #### **maximumValue**

  returns the upper bound of a dice
