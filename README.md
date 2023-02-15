
[![license](https://img.shields.io/github/license/jamesisaac/react-native-background-task.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/faunadb-utility.svg)](https://badge.fury.io/js/faunadb-utility)

# faunadb-utility

```

__                            _ _                 _   _ _ _ _         
/ _|                          | | |               | | (_) (_) |        
| |_ __ _ _   _ _ __   __ _  __| | |__ ______ _   _| |_ _| |_| |_ _   _ 
|  _/ _` | | | | '_ \ / _` |/ _` | '_ \______| | | | __| | | | __| | | |
| || (_| | |_| | | | | (_| | (_| | |_) |     | |_| | |_| | | | |_| |_| |
|_| \__,_|\__,_|_| |_|\__,_|\__,_|_.__/       \__,_|\__|_|_|_|\__|\__, |
                                                                  __/ |
                                                                  |___/ 

```

## Installation
```
npm install faunadb-utility
```
or
```
yarn add faunadb-utility
```

## Directories
 - [src/](./src/)

 - [.eslintrc.js](./.eslintrc.js)
 - [.prettierrc](./.prettierrc)
 - [CONTRIBUTING.md](./CONTRIBUTING.md)
 - [LICENSE](./LICENSE)
 - [README.md](./README.md)
 - [awesome-readme.config.js](./awesome-readme.config.js)
 - [package-lock.json](./package-lock.json)
 - [package.json](./package.json)
 - [tsconfig.json](./tsconfig.json)
 - [tslint.json](./tslint.json)



## Usage
```ts
import fauna from "faunadb-utility"
```

```js
const fauna = require('faunadb-utility');
```

### Functions

- `createClasses` : Create a class in fauna. (Collection)
- `createFaunaDocument` : Create a fauna document.
- `createIndexes` : Create a index in fauna.
- `deleteFaunaDocument` : Delete a fauna document.
- `faunaClient` : Create a fauna client.
- `queryAllByFaunaIndexes` : Query all documents by fauna indexes.
- `queryTermByFaunaIndexes` : Query documents by fauna indexes and term.
- `updateFaunaDocument` : Update a fauna document.


## Directory Tree
```
faunadb-utility/
│   .eslintrc.js
│   .prettierrc
│   CONTRIBUTING.md
│   LICENSE
│   README.md
│   awesome-readme.config.js
│   package-lock.json
│   package.json
│   tsconfig.json
│   tslint.json
└─── src/
   │   README.md
   │   createClasses.ts
   │   createFaunaDocument.ts
   │   createIndexes.ts
   │   deleteFaunaDocument.ts
   │   faunaClient.ts
   │   index.ts
   │   queryAllByFaunaIndexes.ts
   │   queryTermByFaunaIndexes.ts
   │   updateFaunaDocument.ts
```
## Don't hesitate to contribute to this project.
