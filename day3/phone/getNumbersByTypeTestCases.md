# Test Cases

## getNumbersByType(firstname, lastname, type)

Method returns an array of own numbers of the given `type` belonging to a given person with given `firstname` and `lastname`

If no person with given name is found, return an empty array [].
If no number with given type is found, an empty array returns [].
If at least one parameter is missing, an exception is thrown `'missing parameter'`.

For example Leila Hokki work will return:

```json
["65644645", "457896558"]
```

### Test 1: get from default jsonData with parameters Leila, Hökki, work

```js
phoneRegister.getNumbersByType("Leila", "Hökki", "work");
```

returns

```json
["65644645", "457896558"]
```

### Test 2: get from default jsonData with parameters Matt, River, mobile

```js
phoneRegister.getNumbersByType("Matt", "River", "mobile");
```

returns

```json
["698795668"]
```

### Test 3: wrong type or name returns an empty array

```js
phoneRegister.getNumberByType("Matt", "River", "x");
phoneRegister.getNumberByType("Matt", "x", "mobile");
phoneRegister.getNumberByType("x", "River", "mobile");
```

### Test 4: missing parameter throws an exception

```js
phoneRegister.getNumberByType("Matt", "River");
phoneRegister.getNumberByType("Matt");
phoneRegister.getNumberByType();
```
