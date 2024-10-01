# Alx Backend Javascript - ES6 Basics

## Description

This project focuses on understanding and implementing the core features of ES6 (ECMAScript 2015) in JavaScript. By the end of this project, you will be able to confidently explain and utilize new features introduced in ES6, such as arrow functions, template literals, and the rest/spread syntax. You'll also understand their applications in modern JavaScript development.

## Project Structure

| Task                              | Description                                                                                          | Source Code                  |
|-----------------------------------|------------------------------------------------------------------------------------------------------|-------------------------------|
| 0. Const or let?                  | Modify `taskFirst` to use `const` and `taskNext` to use `let`.                                   | [0-constants.js](0-constants.js)       |
| 1. Block Scope                    | Modify `taskBlock` to prevent variable overwriting in the conditional block.                        | [1-block-scoped.js](1-block-scoped.js) |
| 2. Arrow Functions                | Rewrite the function to use arrow syntax.                                                           | [2-arrow.js](2-arrow.js)     |
| 3. Parameter Defaults              | Condense `getSumOfHoods` to use default parameter values.                                          | [3-default-parameter.js](3-default-parameter.js) |
| 4. Rest Parameter Syntax for Functions | Modify the function to return the number of arguments using rest parameters.                         | [4-rest-parameter.js](4-rest-parameter.js) |
| 5. The Wonders of Spread Syntax    | Use spread syntax to concatenate arrays and string characters.                                        | [5-spread-operator.js](5-spread-operator.js) |
| 6. Take Advantage of Template Literals | Rewrite return statement to use template literals.                                                 | [6-string-interpolation.js](6-string-interpolation.js) |
| 7. Object Property Value Shorthand Syntax | Modify the budget object to use shorthand property names.                                        | [7-getBudgetObject.js](7-getBudgetObject.js) |
| 8. No Need to Create Empty Objects Before Adding Properties | Rewrite the function to use ES6 computed property names.                                      | [8-getBudgetCurrentYear.js](8-getBudgetCurrentYear.js) |
| 9. ES6 Method Properties          | Rewrite `getFullBudgetObject` to use ES6 method properties.                                        | [9-getFullBudget.js](9-getFullBudget.js) |
| 10. For...of Loops                | Rewrite `appendToEachArrayValue` to use for...of operator.                                         | [10-loops.js](10-loops.js)   |
| 11. Iterator                       | Create `createEmployeesObject` to return an object with department names and employees.             | [11-createEmployeesObject.js](11-createEmployeesObject.js) |
| 12. Let's Create a Report Object   | Write `createReportObject` to summarize employee data.                                             | [12-createReportObject.js](12-createReportObject.js) |
| 13. Iterating Through Report Objects | Write `createIteratorObject` to iterate through every employee.                                    | [100-createIteratorObject.js](100-createIteratorObject.js) |
| 14. Iterate Through Object         | Write `iterateThroughObject` to return employee names in a string separated by `\|`.                | [101-iterateThroughObject.js](101-iterateThroughObject.js) |

## Environment
- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.

## Requirements

- All your files should end with a new line.
- All your code should use the `.js` extension.
- Use the Jest Testing Framework for testing your functions.
- Follow proper coding standards as defined in ESLint.
- Ensure all functions are exported appropriately.

## Learning Objectives

At the end of this project, you should be able to:

- Explain what ES6 is and its significance.
- Identify new features introduced in ES6.
- Distinguish between constants and variables.
- Understand block-scoped variables.
- Use arrow functions and set default parameters.
- Implement rest and spread function parameters.
- Utilize string templating in ES6.
- Create and manage objects with properties in ES6.
- Work with iterators and `for-of` loops.

## How to Use

1. Install Node.js and required dependencies.
2. Clone the repository and navigate to the project directory.
3. Run tests using `npm run dev <filename>`.

### Setup Instructions

1. **Install NodeJS 12.11.x**:
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   nodejs -v  # should output v12.11.1
   npm -v     # should output 6.11.3
   ```

2. **Configuration Files**:
   - In your project directory, create a `package.json`, `babel.config.js`, and `.eslintrc.js` file.
   - Add the following configuration files to your project directory:

#### `package.json`
This file manages your project dependencies and scripts.

```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",           // Lint your JavaScript files
    "check-lint": "lint [0-9]*.js",                 // Check linting for task files
    "dev": "npx babel-node",                         // Run your code with Babel
    "test": "jest",                                  // Run your tests using Jest
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest" // Run both linting and tests
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",                        // Babel core library
    "@babel/node": "^7.8.0",                        // Babel Node for running scripts
    "@babel/preset-env": "^7.6.0",                  // Preset for compiling ES6+ to ES5
    "eslint": "^6.4.0",                             // Linting tool
    "eslint-config-airbnb-base": "^14.0.0",        // Airbnb JavaScript style guide
    "eslint-plugin-import": "^2.18.2",              // ESLint plugin for import/export syntax
    "eslint-plugin-jest": "^22.17.0",               // ESLint plugin for Jest
    "jest": "^24.9.0"                               // Jest testing framework
  }
}
```

#### `babel.config.js`
This file configures Babel to transpile your JavaScript code.

```javascript
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',                         // Target the current version of Node.js
        },
      },
    ],
  ],
};
```

#### `.eslintrc.js`
This file configures ESLint rules for your project.

```javascript
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,                                  // Enable Jest globals
  },
  extends: [
    'airbnb-base',                               // Use Airbnb's base ESLint rules
    'plugin:jest/all',                          // Enable all Jest rules
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',                        // Use ES modules
  },
  plugins: ['jest'],                            // Add Jest plugin for ESLint
  rules: {
    'no-console': 'off',                         // Allow console statements
    'no-shadow': 'off',                          // Disable shadowing variable rule
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',         // Exclude Babel config from ESLint
    }
  ]
};
```

3. **Install Dependencies (Jest, Babel, and ESLint)**:
   - Run the following command to install all the necessary packages:
     ```bash
     npm install
     ```

 **Run individual scripts with Babel using the dev command:**
- If you want to run a specific test file, use:
  ```bash
  npm run dev <filename> 
  ```

#### To check your JavaScript files for ESLint errors, follow these steps:



1. **Run ESLint**:
   You can run ESLint on your specific files or directories. Use the command:
   ```bash
   npm run lint
   ```
   If you want to check specific files, you can do:
   ```bash
   ./node_modules/.bin/eslint <filename>
   ```
   Replace `<filename>` with the path to your JavaScript file.

2. **Review Errors and Warnings**:
   ESLint will output any errors or warnings it finds in your code. The output will typically include the line number and the specific rule that was violated.

3. **Fix Issues**:
   Go through the reported issues and fix them in your code. ESLint may suggest specific changes based on the rules defined in your `.eslintrc.js` file.

4. **Optional: Auto-fix**:
   ESLint has an auto-fix feature for certain issues. You can run:
   ```bash
   ./node_modules/.bin/eslint <filename> --fix
   ```
   This will automatically fix some of the issues it can resolve.

## Tasks

0. **Const or let?**
   - **File:** `0-constants.js`
   - Modify the `taskFirst` function to instantiate variables using `const`.
   - Modify the `taskNext` function to instantiate variables using `let`.
```javascript
export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
```

##### Execution example:
```javascript


bob@dylan:~$ cat 0-main.js
import { taskFirst, taskNext } from './0-constants.js';

console.log(`${taskFirst()} ${taskNext()}`);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
I prefer const when I can. But sometimes let is okay
bob@dylan:~$ 
```

1. **Block Scope**
   - **File:** `1-block-scoped.js`
   - Modify the variables inside the `taskBlock` function to prevent overwriting inside the conditional block.
```javascript
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
```

#### Execution:
```javascript


bob@dylan:~$ cat 1-main.js
import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));
console.log(taskBlock(false));
bob@dylan:~$
bob@dylan:~$ npm run dev 1-main.js 
[ false, true ]
[ false, true ]
bob@dylan:~$
```

2. **Arrow Functions**
   - **File:** `2-arrow.js`
   - Rewrite the standard function `add` to use ES6’s arrow syntax.
```javascript
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
```

#### Execution:
```javascript
bob@dylan:~$ cat 2-main.js
import getNeighborhoodsList from './2-arrow.js';

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);
bob@dylan:~$
bob@dylan:~$ npm run dev 2-main.js 
[ 'SOMA', 'Union Square', 'Noe Valley' ]
bob@dylan:~$
```

3. **Parameter Defaults**
   - **File:** `3-default-parameter.js`
   - Condense the internals of the `getSumOfHoods` function to 1 line using default parameter values.
```javascript
export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
```

#### Execution:
```javascript
bob@dylan:~$ cat 3-main.js
import getSumOfHoods from './3-default-parameter.js';

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));
bob@dylan:~$
bob@dylan:~$ npm run dev 3-main.js 
142
56
41
bob@dylan:~$
```

4. **Rest Parameter Syntax for Functions**
   - **File:** `4-rest-parameter.js`
   - Modify the function to return the number of arguments passed to it using the rest parameter syntax.
```javascript
export default function returnHowManyArguments() {

}
```

#### Example:
```javascript
> returnHowManyArguments("Hello", "Holberton", 2020);
3
>
```

#### Execution:
```javascript
bob@dylan:~$ cat 4-main.js
import returnHowManyArguments from './4-rest-parameter.js';

console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));
bob@dylan:~$
bob@dylan:~$ npm run dev 4-main.js 
1
4
bob@dylan:~$
```

5. **The Wonders of Spread Syntax**
   - **File:** `5-spread-operator.js`
   - Use spread syntax to concatenate 2 arrays and each character of a string in the function.

```javascript
export default function concatArrays(array1, array2, string) {
}
```

#### Execution:
```javascript
bob@dylan:~$ cat 5-main.js
import concatArrays from './5-spread-operator.js';

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

bob@dylan:~$
bob@dylan:~$ npm run dev 5-main.js 
[
  'a', 'b', 'c',
  'd', 'H', 'e',
  'l', 'l', 'o'
]
bob@dylan:~$
```
6. **Take Advantage of Template Literals**
   - **File:** `6-string-interpolation.js`
   - Rewrite the return statement to use a template literal for variable substitution.

```javascript
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return 'As of ' + year + ', it was the seventh-highest income county in the United States'
        / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
        / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
}
```

#### Execution:
```javascript
bob@dylan:~$ cat 6-main.js
import getSanFranciscoDescription from './6-string-interpolation.js';

console.log(getSanFranciscoDescription());

bob@dylan:~$
bob@dylan:~$ npm run dev 6-main.js 
As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.
bob@dylan:~$
```

7. **Object Property Value Shorthand Syntax**
   - **File:** `7-getBudgetObject.js`
   - Modify the function’s budget object to use shorthand property names.

```javascript
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}
```

#### Execution:
```javascript
bob@dylan:~$ cat 7-main.js
import getBudgetObject from './7-getBudgetObject.js';

console.log(getBudgetObject(400, 700, 900));

bob@dylan:~$
bob@dylan:~$ npm run dev 7-main.js 
{ income: 400, gdp: 700, capita: 900 }
bob@dylan:~$
```

8. **No Need to Create Empty Objects Before Adding Properties**
   - **File:** `8-getBudgetCurrentYear.js`
   - Rewrite the `getBudgetForCurrentYear` function to use ES6 computed property names.

```javascript
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}
```

#### Execution:
```javascript
bob@dylan:~$ cat 8-main.js
import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

console.log(getBudgetForCurrentYear(2100, 5200, 1090));

bob@dylan:~$
bob@dylan:~$ npm run dev 8-main.js 
{ 'income-2021': 2100, 'gdp-2021': 5200, 'capita-2021': 1090 }
bob@dylan:~$
```

9. **ES6 Method Properties**
   - **File:** `9-getFullBudget.js`
   - Rewrite `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object.

```javascript
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function (income) {
      return `$${income}`;
    },
    getIncomeInEuros: function (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
```

#### Execution:
```javascript
bob@dylan:~$ cat 9-main.js
import getFullBudgetObject from './9-getFullBudget.js';

const fullBudget = getFullBudgetObject(20, 50, 10);

console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));

bob@dylan:~$
bob@dylan:~$ npm run dev 9-main.js 
$20
20 euros
bob@dylan:~$
```

10. **For...of Loops**
    - **File:** `10-loops.js`
    - Rewrite the `appendToEachArrayValue` function to use the ES6 for...of operator.
```javascript
export default function appendToEachArrayValue(array, appendString) {
  for (var idx in array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
```

#### Execution:
```javascript
bob@dylan:~$ cat 10-main.js
import appendToEachArrayValue from './10-loops.js';

console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));

bob@dylan:~$
bob@dylan:~$ npm run dev 10-main.js 
[ 'correctly-appended', 'correctly-fixed', 'correctly-displayed' ]
bob@dylan:~$
```

11. **Iterator**
    - **File:** `11-createEmployeesObject.js`
    - Write a function named `createEmployeesObject` that returns an object with department names and employee lists.
```javascript
export default function createEmployeesObject(departmentName, employees) {

}
```
#### The function should return an object with the following format:
```javascript
{
     $departmentName: [
          $employees,
     ],
}
```


#### Execution:
```javascript
bob@dylan:~$ cat 11-main.js
import createEmployeesObject from './11-createEmployeesObject.js';

console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));

bob@dylan:~$
bob@dylan:~$ npm run dev 11-main.js 
{ Software: [ 'Bob', 'Sylvie' ] }
bob@dylan:~$
```

12. **Let's Create a Report Object**
    - **File:** `12-createReportObject.js`
    - Write a function named `createReportObject` to return an object containing all employees and a method to get the number of departments.
```javascript
export default function createReportObject(employeesList) {

}
```

- createReportObject should return an object containing the key allEmployees and a method property called getNumberOfDepartments.
- allEmployees is a key that maps to an object containing the department name and a list of all the employees in that department. If you’re having trouble, use the spread syntax.
- The method property receives employeesList and returns the number of departments. I would suggest suggest thinking back to the ES6 method property syntax.
```javascript
{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
};
```

#### Execution:
```javascript
bob@dylan:~$ cat 12-main.js
import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};      

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));

bob@dylan:~$
bob@dylan:~$ npm run dev 12-main.js 
{ engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] }
2
bob@dylan:~$
```

13. **Iterating Through Report Objects**
    - **File:** `100-createIteratorObject.js`
    - Write a function named `createIteratorObject` to iterate through every employee in every department.
```javascript
export default function createIteratorObject(report) {

}
```

#### Execution:
```javascript
bob@dylan:~$ cat 100-main.js
import createIteratorObject from "./100-createIteratorObject.js";

import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
    console.log(item);
}

bob@dylan:~$
bob@dylan:~$ npm run dev 100-main.js 
Bob
Jane
Sylvie
bob@dylan:~$
```

14. **Iterate Through Object**
    - **File:** `101-iterateThroughObject.js`
    - Write a function named `iterateThroughObject` to return every employee name in a string, separated by `|`.

```javascript
 export default function iterateThroughObject(reportWithIterator) {

 }
```
- It should return every employee name in a string, separated by |
```javascript
{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
  ...
};
```
- Should return John Doe | Guillaume Salva
- Reminder - the functions will be imported by the test suite.

#### Full example:
```javascript
> employees = {
      ...createEmployeesObject('engineering', engineering),
      ...createEmployeesObject('design', design),
    };
>
> const report = createReportObject(employees);
> const reportWithIterator = createIteratorObject(report);
> iterateThroughObject(reportWithIterator)
'John Doe | Guillaume Salva | Kanye East | Jay Li'
> 
```

#### Execution:
```javascript
bob@dylan:~$ cat 101-main.js
import createEmployeesObject from "./11-createEmployeesObject.js";
import createReportObject from './12-createReportObject.js';
import createIteratorObject from './100-createIteratorObject.js';
import iterateThroughObject from './101-iterateThroughObject.js';


const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));

bob@dylan:~$
bob@dylan:~$ npm run dev 101-main.js 
Bob | Jane | Sylvie
bob@dylan:~$
```
## Additional Notes

1. Don't forget to run `npm install` from the terminal of your project folder to install all necessary project dependencies.
2. Ensure that all functions are exported for testing properly.
3. Make sure to follow coding standards and use modern JavaScript practices.

This project is an excellent opportunity to familiarize yourself with ES6 features, improving your JavaScript skills and preparing you for more advanced topics in modern web development. Happy coding!
