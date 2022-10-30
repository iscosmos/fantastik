
# FANTASTIK

Fantastik is a easy to use, JSON-Type database that is made for ease of use and speed.

Fantastik also uses its own file extention `.fan` designed to make JSON more intuitive for anyone involved with it.
## Installation

Install simply with npm

```bash
  npm install fantastik
  cd my-project
```
    
## Database İnitialization

to start using fantastik; require the package.
```js
const { fanbase } = require('fantastik')
```
after this you can create one or multiple databases 

```js
const { fanbase } = require('fantastik')
const db1 = new fanbase("myFile.fan")
const db2 = new fanbase("myFile2.fan")
```
then; you can use very simple functions to use and interact with data on your database.

```js
const { fanbase } = require('fantastik')
const db = new fanbase("myFile.fan")

//.write() is a function that writes data to the database.
db.write("cash", 100)

//.get() is a function that gets data that was previously written.
db.get("cash")

//.sum() will either add numbers or remove them
db.sum("cash", 20) // -> returns 120 (100+20) 
db.sum("cash", -20 )// -> returns 80 (100 - 20)

//.has() will show wheter something exists in the storage
db.has("cash") //-> returns true 

//.delete() will permamantly delete something from the storage
db.delete("cash")

//.push() will push an array/object to the database
db.push("myArray", [1,2,3,4,5])

//.deleteKey() will remove a key from an array or object
db.deleteKey("myArray", 5)//-> removes 5 from the storage

//and lastly, .getAll() will return everything in the storage as an object.
db.getAll() //-> returns object of every item in the db
```

## The .fan structure

the .fan structure is very similar to .json with main differences being;
- the lack of {} in the beginning and the end of the file
- the equailty operator = instead of : a
- the usage of (;) instead of (,)

overall a .fan file will look as follows;
```
"cash": 100,
"myArray": {
    1, 2, 3, 4, 5
}
```
