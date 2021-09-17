# calc library API

## **sum(a, b)**

Function returns the sum of two numbers. Numbers are passed to the function as parameters.

Returns the sum of given numbers.

- if parameter is missing, throws exception: `'parameter missing'`
- if parameters are not numbers, throws an exception: `'only numbers allowed'`

### Test cases

#### 1 sums

#### Integers

- sum(1, 1) return 2
- sum(2, 3) return 5
- sum(-2, -4) return -6
- sum(-2, 4) return 2
- [2, -4, -2],
- [0, 0, 0],
- [0, 3, 3],
- [3, 0, 3],
- [0, -3, -3],
- [-3, 0, -3]

##### Floats

- sum(10, 11.5) return 21.5

- [10, 11.5, 21.5],
- [2.5, 3, 5.5],
- [-2.5, 3, 0.5],
- [3, -2.5, 0.5],
- [-3, 2.5, -0.5],
- [-2.5, -3, -5.5],
- [-2.5, -2.5, -5.0],
- [-2.5, 2.5, 0],
- [2.4, -2.5, -0.1]

#### 2 Missing parameter

- sum() throws an exception  `'parameter missing'`
- sum(1) throws an exception  `'parameter missing'`
- sum('a') throws an exception  `'parameter missing'`
- sum('') throws an exheption  `'parameter missing'`

#### 3 Parameters are not numbers

- sum('a', 1) throws an exception `'only numbers are allowed'`
- sum (1, 'a') throws an exception `'only numbers are allowed'`
- sum('a', 'b') throws an exception `'only numbers are allowed'`
- sum('', '') throws an exception `'only numbers are allowed'`
- sum(null, 1) throws an exception `'only numbers are allowed'`
- sum(undefined, 1) throws an exception `'only numbers are allowed'`

## **subtract(a, b)**

Function returns the substract of two numbers. Numbers are passed to the function as parameters.

Returns the subtraction of given numbers.

- if parameter is missing, throws exception: `'parameter missing'`
- if parameters are not numbers, throws an exception: `'only numbers allowed'`

### Test cases

#### 1 subtractions

#### Integers

- [1, 1, 0],
- [2, 3, -1],
- [-2, -4, 2],
- [-2, 4, -6],
- [2, -4, 6],
- [0, 0, 0],
- [0, 3, -3],
- [3, 0, 3],
- [0, -3, 3],
- [-3, 0, -3]

##### Floats

- [10, 11.5, -1.5],
- [10, 11.5, -1.5],
- [2.5, 3, -0.5],
- [-2.5, 3, 5.5],
- [3, -2.5, 5.5],
- [-3, 2.5, -5.5],
- [-2.5, -3, -0.5],
- [-2.5, -2.5, 0],
- [-2.5, 2.5, -5],
- [2.4, -2.5, 4.9]

#### 2 Missing parameter

- subtract() throws an exception  `'parameter missing'`
- subtract(1) throws an exception  `'parameter missing'`
- subtract('a') throws an exception  `'parameter missing'`
- subtract('') throws an exheption  `'parameter missing'`

#### 3 Parameters are not numbers

- subtract('a', 1) throws an exception `'only numbers are allowed'`
- subtract (1, 'a') throws an exception `'only numbers are allowed'`
- subtract('a', 'b') throws an exception `'only numbers are allowed'`
- subtract('', '') throws an exception `'only numbers are allowed'`
- subtract(null, 1) throws an exception `'only numbers are allowed'`
- subtract(undefined, 1) throws an exception `'only numbers are allowed'`

## division

function divide(a, b) return a/b.

Problems:

- 0/0 => NaN
- 2/0 => Infinity
- -2/0 => -Infinity
- Infinity/Infinity => NaN
- -Infinity/Infinity => NaN
- Infinity/-Infinity => NaN
- -Infinity/-Infinity => NaN

### Test values

- [0, 0, Number.NaN],
- [2, 0, Number.POSITIVE_INFINITY],
- [-2, 0, Number.NEGATIVE_INFINITY],
- [Number.POSITIVE_iNFINITY, Number.POSITIVE_iNFINITY, Number.NaN]