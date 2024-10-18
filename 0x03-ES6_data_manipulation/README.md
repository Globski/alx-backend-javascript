# Alx Backend Javascript - ES6 Data Manipulation

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-v12.11.1-brightgreen)](https://nodejs.org/)
[![Babel](https://img.shields.io/badge/Babel-v7.6.0-blue)](https://babeljs.io/)
[![Jest](https://img.shields.io/badge/Jest-v24.9.0-red)](https://jestjs.io/)
[![ESLint](https://img.shields.io/badge/ESLint-v6.4.0-lightgray)](https://eslint.org/)
[![Backend Development](https://img.shields.io/badge/Backend%20Development-Node.js%20%2B%20ES6-orange)](https://www.backend-development.com/)
## Description

This project consists of several tasks designed to help you practice data manipulation techniques in JavaScript.You'll work with ES6 features such as arrays, maps, sets, and typed arrays by implementing functions that use these structures. The tasks are designed to increase your understanding of how these data types work and how to manipulate them effectively.

## Project Structure

| Task | Description | Source Code |
|------|-------------|-------------|
| 0. Basic list of objects | Create a function named `getListStudents` that returns an array of objects with `id`, `firstName`, and `location`. | [0-get_list_students.js](./0-get_list_students.js) |
| 1. More mapping | Create a function `getListStudentIds` that returns an array of student IDs from a list of student objects. | [1-get_list_student_ids.js](./1-get_list_student_ids.js) |
| 2. Filter | Create a function `getStudentsByLocation` that filters students by a specified city. | [2-get_students_by_loc.js](./2-get_students_by_loc.js) |
| 3. Reduce | Create a function `getStudentIdsSum` that returns the sum of all student IDs. | [3-get_ids_sum.js](./3-get_ids_sum.js) |
| 4. Combine | Create a function `updateStudentGradeByCity` that updates student grades for a specific city. | [4-update_grade_by_city.js](./4-update_grade_by_city.js) |
| 5. Typed Arrays | Create a function `createInt8TypedArray` that returns a new ArrayBuffer with an Int8 value at a specific position. | [5-typed_arrays.js](./5-typed_arrays.js) |
| 6. Set data structure | Create a function `setFromArray` that returns a Set from an array. | [6-set.js](./6-set.js) |
| 7. More set data structure | Create a function `hasValuesFromArray` that checks if all elements in an array exist within a set. | [7-has_array_values.js](./7-has_array_values.js) |
| 8. Clean set | Create a function `cleanSet` that returns a string of all set values starting with a specific string. | [8-clean_set.js](./8-clean_set.js) |
| 9. Map data structure | Create a function `groceriesList` that returns a map of grocery items with quantities. | [9-groceries_list.js](./9-groceries_list.js) |
| 10. More map data structure | Create a function `updateUniqueItems` that updates quantities in a map. | [10-update_uniq_items.js](./10-update_uniq_items.js) |
| 11. Weak link data structure | Create a WeakMap to track the number of calls to `queryAPI` and throw an error if a certain endpoint is queried too often. | [100-weak.js](./100-weak.js) |

## Environment
- All files are executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.

## Requirements
- Node.js 12.11.x
- All your files should end with a new line
- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test
- All of your functions must be exported

## Learning Objectives
By the end of this project, make sure you can explain the following concepts:

- **Array Methods**: Understand and demonstrate the usage of `map`, `filter`, and `reduce`.
- **Typed Arrays**: Know what typed arrays are and when to use them.
- **Data Structures**: Be familiar with Set, Map, and WeakMap link data structures, including their use cases.

## Prototypes Used in the Project

| Prototype | Description |
|-----------|-------------|
| `Array.prototype.map()` | Creates a new array with the results of calling a provided function on every element in the calling array. |
| `Array.prototype.filter()` | Creates a new array with all elements that pass the test implemented by the provided function. |
| `Array.prototype.reduce()` | Executes a reducer function on each element of the array, resulting in a single output value. |
| `Set` | A collection of values where each value must be unique. |
| `Map` | A collection of keyed data items, similar to an object. |
| `WeakMap` | A collection of key-value pairs where keys are objects and values can be any type. |
| `ArrayBuffer` | A generic, fixed-length binary data buffer. |
| `DataView` | A low-level interface for reading and writing multiple number types in an ArrayBuffer. |

## How to Use

### 1. Clone the Repository

To get started with the project, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/alx-backend-javascript.git
```

### 2. Navigate to the Project Directory

Change your working directory to the specific project folder:

```bash
cd alx-backend-javascript/0x03-ES6_data_manipulation
```

### 3. Install Node.js

JavaScript code, especially for backend development, requires a JavaScript runtime environment. **Node.js** allows you to run JavaScript code on the server side and is essential for executing scripts in this project.

To install Node.js version 12.11.x, run the following commands:

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh  # Download Node.js setup script
sudo bash nodesource_setup.sh                                          # Run the setup script
sudo apt install nodejs -y                                             # Install Node.js
```

Verify that Node.js and npm (Node Package Manager) are installed correctly:

```bash
node -v   # Outputs the installed Node.js version
npm -v    # Outputs the installed npm version
```

### 4. Install Project Dependencies

You’ll need to create some essential configuration files and install the necessary dependencies for the project.

#### Create Configuration Files

In the project directory, create the following files:

- **`package.json`**: Manages project dependencies and scripts.
- **`babel.config.js`**: Configures Babel to allow the use of the latest JavaScript features.
- **`.eslintrc.js`**: Configures ESLint to help you write consistent and error-free code.

Now create these files and add the necessary configurations. 

#### Run the Installation

After creating the configuration files, run the following command to install the necessary libraries and tools:

```bash
npm install
```

This command reads the `package.json` file to download and install all required packages for the project.

### 5. Running Individual Scripts

You can run a specific test file using Babel with the following command:

```bash
npm run dev <task-number>-main.js
```

Replace `<task-number>` with the number corresponding to the task you want to run (e.g., `0`, `1`, etc.).

---

## Configuration Files

### **1. `package.json`**

This file manages project dependencies and scripts. Here’s a breakdown:

```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",              // Command to lint the code using ESLint
    "check-lint": "lint [0-9]*.js",                    // Check linting for specific task files
    "dev": "npx babel-node",                            // Run the development server with Babel
    "test": "jest",                                    // Command to run tests using Jest
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest" // Run linting and then tests
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",                          // Babel core for compiling ES6+ code
    "@babel/node": "^7.8.0",                          // Allows using Babel with Node.js
    "@babel/preset-env": "^7.6.0",                    // Preset for compiling modern JavaScript
    "eslint": "^6.4.0",                               // Linting tool
    "eslint-config-airbnb-base": "^14.0.0",          // Airbnb's ESLint configuration
    "eslint-plugin-import": "^2.18.2",                // Plugin to manage ES6 imports
    "eslint-plugin-jest": "^22.17.0",                 // Plugin for Jest integration with ESLint
    "jest": "^24.9.0"                                 // Testing framework
  }
}
```

### **2. `babel.config.js`**

This file configures Babel to transpile modern JavaScript code to a version that Node.js can understand:

```javascript
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',                              // Target the current version of Node.js
        },
      },
    ],
  ],
};
```

### **3. `.eslintrc.js`**

This file configures ESLint to identify and fix problems in your JavaScript code:

```javascript
module.exports = {
  env: {
    browser: false,              // Code is not intended for the browser environment
    es6: true,                   // Enables ES6 syntax
    jest: true,                  // Enable Jest global variables for testing
  },
  extends: [
    'airbnb-base',               // Use Airbnb's base ESLint rules for consistency
    'plugin:jest/all',           // Enable all Jest rules for comprehensive testing support
  ],
  globals: {
    Atomics: 'readonly',         // Prevents Atomics from being modified
    SharedArrayBuffer: 'readonly', // Prevents SharedArrayBuffer from being modified
  },
  parserOptions: {
    ecmaVersion: 2018,           // Specify ECMAScript version to use
    sourceType: 'module',        // Use ES modules for import/export syntax
  },
  plugins: ['jest'],            // Include the Jest plugin for additional rules related to testing
  rules: {
    'no-console': 'off',         // Allow console statements (useful for debugging)
    'no-shadow': 'off',          // Disable the rule that disallows variable shadowing
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',        // Disallow labeled statements to improve readability
      'WithStatement',           // Disallow with statements to avoid scope confusion
    ],
  },
  overrides: [
    {
      files: ['*.js'],           // Apply these settings to all JavaScript files
      excludedFiles: 'babel.config.js', // Exclude Babel configuration from these rules
    }
  ]
};
```

---

## Linting Your Code

To check your JavaScript files for ESLint errors, follow these steps:

1. **Run ESLint**:
   You can run ESLint on your specific files or directories:

   ```bash
   npm run lint
   ```

   To check specific files, you can do:

   ```bash
   ./node_modules/.bin/eslint <filename>
   ```

2. **Review Errors and Warnings**:
   ESLint will output any errors or warnings it finds in your code, including the line number and the specific rule that was violated.

3. **Fix Issues**:
   Go through the reported issues and fix them in your code. ESLint may suggest specific changes based on the rules defined in your `.eslintrc.js` file.

4. **Optional: Auto-fix**:
   ESLint has an auto-fix feature for certain issues. You can run:

   ```bash
   ./node_modules/.bin/eslint <filename> --fix
   ```

   This will automatically fix some of the issues it can resolve.

---

## Testing Your Functions with Jest

To test your functions, follow these steps:

1. **Create a Test File**:
   Create a test file named `0-get_list_students.test.js` in the same directory as `0-get_list_students.js`:

   ```bash
   touch 0-get_list_students.test.js
   ```

2. **Example Test File**:
   Here’s how you would write tests for the functions in `0-get_list_students.js`:

   ```javascript
   // 0-get_list_students.test.js
   import getListStudents from './0-get_list_students';

   describe('getListStudents', () => {
     test('should return an array of student objects', () => {
       const students = getListStudents();
       expect(students).toBeInstanceOf(Array);
       expect(students).toHaveLength(3);
       expect(students[0]).toEqual(expect.objectContaining({
         id: expect.any(Number),
         firstName: expect.any(String),
         location: expect.any(String),
       }));
     });
   });
   ```

3. **Run the Tests**:
   Make sure your test files are named according to the pattern `[0-9]*.test.js` for Jest to recognize them. To run all tests, execute:

   ```bash
   npm run test
   ```

   Or to run a specific test file:

   ```bash
   npm run test <test-file-name>
   ```

---

## Additional Notes

1. **Arrays**: 
   - Arrays are ordered collections of elements, where each element is stored at a specific index. They can hold multiple values, and you can perform operations like adding, removing, or accessing elements using their index.
   - Example: `let arr = [1, 2, 3];`

2. **Maps**:
   - Maps are collections of key-value pairs, where each key is unique. Unlike objects, map keys can be of any type, including functions, objects, or any primitive type.
   - Example: `let map = new Map(); map.set('key', 'value');`

3. **Sets**:
   - Sets are collections of unique values, meaning no duplicates are allowed. They can hold any type of value, and are useful when you need to store distinct elements.
   - Example: `let set = new Set([1, 2, 3]);`

4. **Typed Arrays**:
   - Typed arrays are arrays that store data in a specific binary format, allowing you to work efficiently with binary data like that from buffers, or when interacting with low-level data formats such as those used in WebGL.
   - Example: `let typedArray = new Uint8Array([1, 2, 3]);`

## Tasks

### 0. Basic list of objects
Create a function named `getListStudents` that returns an array of objects.

Each object should have three attributes: `id` (Number), `firstName` (String), and `location` (String).

The array contains the following students in order:

- Guillaume, id: 1, in San Francisco
- James, id: 2, in Columbia
- Serena, id: 5, in San Francisco
```javascript
bob@dylan:~$ cat 0-main.js
import getListStudents from "./0-get_list_students.js";

console.log(getListStudents());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$ 
```
**File:** `0-get_list_students.js`

### 1. More mapping
Create a function `getListStudentIds` that returns an array of ids from a list of objects.

This function is taking one argument which is an array of objects - and this array is the same format as `getListStudents` from the previous task.

If the argument is not an array, the function is returning an empty array.

You must use the `map` function on the array.
```javascript
bob@dylan:~$ cat 1-main.js
import getListStudentIds from "./1-get_list_student_ids.js";
import getListStudents from "./0-get_list_students.js";

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
[]
[ 1, 2, 5 ]
bob@dylan:~$ 
```
**File:** `1-get_list_student_ids.js`

### 2. Filter
Create a function `getStudentsByLocation` that returns an array of objects who are located in a specific city.

It should accept a list of students (from `getListStudents`) and a city (string) as parameters.

You must use the `filter` function on the array.
```javascript
bob@dylan:~$ cat 2-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 2-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$ 
```
**File:** `2-get_students_by_loc.js`

### 3. Reduce
Create a function `getStudentIdsSum` that returns the sum of all the student ids.

It should accept a list of students (from `getListStudents`) as a parameter.

You must use the `reduce` function on the array.
```javascript
bob@dylan:~$ cat 3-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentIdsSum from "./3-get_ids_sum.js";

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 3-main.js 
8
bob@dylan:~$ 
```
**File:** `3-get_ids_sum.js`

### 4. Combine
Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade.

It should accept a list of students (from `getListStudents`), a city (String), and `newGrades` (Array of “grade” objects) as parameters.

`newGrades` is an array of objects with this format:
```json
{
  "studentId": 31,
  "grade": 78
}
```

If a student doesn’t have a grade in `newGrades`, the final grade should be `N/A`.

You must use `filter` and `map` combined.
```javascript
bob@dylan:~$ cat 4-main.js
import getListStudents from "./0-get_list_students.js";
import updateStudentGradeByCity from "./4-update_grade_by_city.js";

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 4-main.js 
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 86
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 'N/A'
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
bob@dylan:~$ 
```
**File:** `4-update_grade_by_city.js`

### 5. Typed Arrays
Create a function named `createInt8TypedArray` that returns a new ArrayBuffer with an Int8 value at a specific position.

It should accept three arguments: `length` (Number), `position` (Number), and `value` (Number).

If adding the value is not possible the error `Position outside range` should be thrown.
```javascript
bob@dylan:~$ cat 5-main.js
import createInt8TypedArray from "./5-typed_arrays.js";

console.log(createInt8TypedArray(10, 2, 89));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 5-main.js 
DataView {
  byteLength: 10,
  byteOffset: 0,
  buffer: ArrayBuffer {
    [Uint8Contents]: <00 00 59 00 00 00 00 00 00 00>,
    byteLength: 10
  }
}
bob@dylan:~$
```
**File:** `5-typed_arrays.js`

### 6. Set data structure
Create a function named `setFromArray` that returns a Set from an array.

It accepts an argument (Array, of any kind of element).
```javascript
bob@dylan:~$ cat 6-main.js
import setFromArray from "./6-set.js";

console.log(setFromArray([12, 32, 15, 78, 98, 15]));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 6-main.js 
Set { 12, 32, 15, 78, 98 }
bob@dylan:~$ 
```
**File:** `6-set.js`

### 7. More set data structure
Create a function named `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set.

It accepts two arguments: a set (Set) and an array (Array).
```javascript
bob@dylan:~$ cat 7-main.js
import hasValuesFromArray from "./7-has_array_values.js";

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 7-main.js 
true
false
false
bob@dylan:~$ 
```
**File:** `7-has_array_values.js`

### 8. Clean set
Create a function named `cleanSet` that returns a string of all the set values that start with a specific string (`startString`).

It accepts two arguments: a set (Set) and a startString (String).

When a value starts with `startString`, you only append the rest of the string. The string contains all the values of the set separated by `-`.
```javascript
bob@dylan:~$ cat 8-main.js
import cleanSet from "./8-clean_set.js";

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 8-main.js 
jovi-aparte-appetit

bob@dylan:~$ 
```
**File:** `8-clean_set.js`

### 9. Map data structure
Create a function named `groceriesList` that returns a map of groceries with the following items (name, quantity):

- Apples, 10
- Tomatoes, 10
- Pasta, 1
- Rice, 1
- Banana, 5
```javascript
bob@dylan:~$ cat 9-main.js
import groceriesList from "./9-groceries_list.js";

console.log(groceriesList());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 9-main.js 
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 1,
  'Rice' => 1,
  'Banana' => 5
}
bob@dylan:~$ 
```
**File:** `9-groceries_list.js`

### 10. More map data structure
Create a function named `updateUniqueItems` that returns an updated map for all items with initial quantity at 1.

It should accept a map as an argument. The map it accepts for argument is similar to the map you create in the previous task.

For each entry of the map where the quantity is 1, update the quantity to 100. If updating the quantity is not possible (argument is not a map), the error `Cannot process` should be thrown.
```javascript
bob@dylan:~$ cat 10-main.js
import updateUniqueItems from "./10-update_uniq_items.js";
import groceriesList from "./9-groceries_list.js";

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 10-main.js 
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 1,
  'Rice' => 1,
  'Banana' => 5
}
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 100,
  'Rice' => 100,
  'Banana' => 5
}
bob@dylan:~$ 
```
**File:** `10-update_uniq_items.js`

### 11. Weak link data structure
Export a const instance of WeakMap and name it `weakMap`.

Export a new function named `queryAPI`. It should accept an endpoint argument like so:
```json
{
  "protocol": "http",
  "name": "getUsers"
}
```
Track within the `weakMap` the number of times `queryAPI` is called for each endpoint.

When the number of queries is >= 5, throw an error with the message `Endpoint load is high`.
```javascript
bob@dylan:~$ cat 100-main.js
import { queryAPI, weakMap } from "./100-weak.js";

const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 100-main.js 
1
2
.../100-weak.js:16
    throw new Error('Endpoint load is high');
   ...
bob@dylan:~$ 
```
**File:** `100-weak.js`
```
```
