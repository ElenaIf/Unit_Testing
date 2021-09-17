## getAllNumbersByType(type)

Returns an array of objects, consisting of names and numbers of given type. If no number of given type is found, returns an empty array [].

If a person has multiple numbers of the same type, each of them will be in it's own object.

If a parameter is missing, the function throws an exception: **`'missing parameter'`**

The format of the returned object is:

```json
[
	{ "firstname": "", "lastname": "", "number": { "type": "", "tel": "" } },
	{ "firstname": "", "lastname": "", "number": { "type": "", "tel": "" } }
]
```

## Test 1: get all home numbers

```js
phoneRegister.getAllNumbersByType("home");
```

### Test 1: get all work numbers

```js
phoneRegister.getAllNumbersByType("work");
```

returns:

```json
[
	{ "firstname": "Leila", "lastname": "Hökki", "number": { "type": "work", "tel": "65644645" } },
	{ "firstname": "Leila", "lastname": "Hökki", "number": { "type": "work", "tel": "457896558" } },
	{ "firstname": "Matt", "lastname": "River", "number": { "type": "work", "tel": "458976225" } }
]
```

### Test 2: get all mobile numbers

```js
phoneRegister.getAllNumbersByType("mobile");
```

returns

```json
{
	"firstname": "Matt",
	"lastname": "River",
	"phones": [{ "type": "mobile", "number": "698795668" }]
}
```

### Test 3: type 'x' will return an empty array []

```js
phoneRegister.getAllNumbersByType("x");
```

returns []

### Test 4: missing parameter throws an exception

```js
phoneRegister.getAllNumbersByType();
```

Throws an exception 'missing parameter'
