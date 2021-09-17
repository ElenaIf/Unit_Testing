# Phone API

## Data

Data will be in json file

### Phones.json

```json
[
	{
		"firstname": "Leila",
		"lastname": "Hokki",
		"phones": [
			{ "type": "home", "number": "12234455" },
			{ "type": "work", "number": "65644645" },
			{ "type": "mobile", "number": "457896558" }
		]
	},
	{
		"firstname": "Matt",
		"lastname": "River",
		"phones": [
			{ "type": "home", "number": "458968778" },
			{ "type": "work", "number": "458976225" },
			{ "type": "mobile", "number": "698795668" }
		]
	}
]
```

## Class PhoneRegister

## Constructor(data)

Phones json array is passed as a parameter `data`. If the parameter is missing, throws an exeption `'phone data missing'`.

## getTypes()

Returns all phone types in an array. The type is added to the result array only once. If there is no phones, an empty array [] is returned.

For example:

```json
["home", "work", "mobile"]
```

## getNumbersByType(firstname, lastname, type)

Method returns an array of own numbers of the given `type` belonging to a given person with given `firstname` and `lastname`

If no person with given name is found, return an empty array [].
If at least one parameter is missing, an exception is thrown `'missing parameter'`.

For example Leila Hokki work will return:

```json
["65644645", "457896558"]
```

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

### Example type work

```json
[
	{ "firstname": "Leila", "lastname": "Hökki", "number": { "type": "work", "tel": "65644645" } },
	{ "firstname": "Leila", "lastname": "Hökki", "number": { "type": "work", "tel": "457896558" } },
	{ "firstname": "Matt", "lastname": "River", "number": { "type": "work", "tel": "458976225" } }
]
```

## **getAllNumbers()**

Returns all phone numbers in an array, each as an object of form:

```json
{
	"firstname": "",
	"lastname": "",
	"phones": []
}
```

The phone object on phones array is of form:

```json
{ "type": "", "number": "" }
```

If a person doen't have a phone (the phone-field is am empty array), then the person is not added into the result array. If all phones are missing, an empty array is returned.

## **getName(number)**

The method searches the given phone number from the telephone registry. If the number is found, the method returns an json object of form

```json
{ "firstname": "", "lastname": "" }
```

If no phone with given number is found, the method returns `null`.
If the parameter is missing, `null` is also returned.
