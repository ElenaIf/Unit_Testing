# Test Cases

## **getTypes()**

Returns all phone types in an array. The type is added to the result array only once. If there is no phones or no persons, an empty array [] is returned.

For example:

```json
["home", "work", "mobile"]
```

## Test 1: use default json data

get types of the default jsonData

returns:

```json
["home", "work", "mobile"]
```

### Test 2: persons have no phones

Test data:

```json
	{
		"firstname": "Leila",
		"lastname": "Hokki",
		"phones": []
	},
	{
		"firstname": "Matt",
		"lastname": "River",
		"phones": []
	}
```

returns an empty array []

### Test 3: no persons in PhoneRegister

test data is []

returns an empty array []
