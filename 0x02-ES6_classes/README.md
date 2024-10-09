# Alx Backend Javascript -  ES6 Classes
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-v12.11.1-brightgreen)](https://nodejs.org/)
[![Babel](https://img.shields.io/badge/Babel-v7.6.0-blue)](https://babeljs.io/)
[![Jest](https://img.shields.io/badge/Jest-v24.9.0-red)](https://jestjs.io/)
[![ESLint](https://img.shields.io/badge/ESLint-v6.4.0-lightgray)](https://eslint.org/)
[![Backend Development](https://img.shields.io/badge/Backend%20Development-Node.js%20%2B%20ES6-orange)](https://www.backend-development.com/)

## Description

This project focuses on understanding and implementing ES6 classes in JavaScript. The project includes several tasks that demonstrate the usage of classes, inheritance, getters/setters, and other object-oriented programming concepts.

## Project Structure

| Task | Description | Source Code |
|------|-------------|--------------|
| 0    | Implement a class named `ClassRoom` that accepts one attribute named `maxStudentsSize`. | [0-classroom.js](./0-classroom.js) |
| 1    | Create a function `initializeRooms` to return an array of 3 `ClassRoom` objects with sizes 19, 20, and 34. | [1-make_classrooms.js](./1-make_classrooms.js) |
| 2    | Implement a class `HolbertonCourse` with getters and setters for attributes `name`, `length`, and `students`. | [2-hbtn_course.js](./2-hbtn_course.js) |
| 3    | Create a class `Currency` with a method `displayFullCurrency` that returns `name (code)`. | [3-currency.js](./3-currency.js) |
| 4    | Implement class `Pricing` with methods `displayFullPrice` and `convertPrice`. | [4-pricing.js](./4-pricing.js) |
| 5    | Create an abstract class `Building` with an abstract method `evacuationWarningMessage`. | [5-building.js](./5-building.js) |
| 6    | Extend `Building` with class `SkyHighBuilding` that overrides `evacuationWarningMessage`. | [6-sky_high.js](./6-sky_high.js) |
| 7    | Implement class `Airport` that returns the airport code. | [7-airport.js](./7-airport.js) |
| 8    | Create class `HolbertonClass` that casts to Number and String. | [8-hbtn_class.js](./8-hbtn_class.js) |
| 9    | Fix the provided code to make it functional. | [9-hoisting.js](./9-hoisting.js) |
| 10   | Implement class `Car` with a method `cloneCar`. | [10-car.js](./10-car.js) |
| 11   | Extend `Car` with `EVCar` that overrides `cloneCar`. | [100-evcar.js](./100-evcar.js) |

## Environment
- Ubuntu 18.04 LTS
- Node.js (version >= 12.x)
- NPM (version >= 6.x)

## Requirements
- Basic knowledge of JavaScript and ES6 features
- Familiarity with OOP (Object-Oriented Programming) concepts
- All your files should end with a new line
- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test

## Learning Objectives
- How to define a Class
- How to add methods to a class
- Why and how to add a static method to a class
- How to extend a class from another
- Metaprogramming and symbols
- Understanding and implementing classes in ES6.
- Using inheritance and overriding methods.
- Utilizing getters and setters effectively.

## Prototypes Used in the Project

| Prototype | Description |
|-----------|-------------|
| `class`   | Used to define classes in JavaScript. |
| `constructor` | Initializes object attributes when a new instance is created. |
| `get`     | Defines a getter method for an object property. |
| `set`     | Defines a setter method for an object property. |
| `extends` | Used to create a child class from a parent class. |
| `super`   | Calls the constructor of the parent class. |
| `static`  | Defines static methods for a class, accessible on the class itself rather than instances. |

## How to Use

1. Install Node.js and required dependencies.
2. Clone the repository and navigate to the project directory.
3. Run tests using `npm run dev <filename>`.

This section will guide you through the process of setting up and using the project step-by-step.

### 1. Install Node.js

First, ensure you have Node.js installed on your machine. The project requires Node.js version 12.11.x. To install it, open your terminal and run the following commands:

```bash
# Download the Node.js setup script
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh

# Run the setup script
sudo bash nodesource_setup.sh

# Install Node.js
sudo apt install nodejs -y

```

After installation, verify that Node.js and npm (Node Package Manager) are installed correctly:

```bash
node -v   # Outputs the installed Node.js version
npm -v    # Outputs the installed npm version
```

### 2. Clone the Repository

To get the project files, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

### 3. Navigate to Project Directory

Change your current working directory to the project folder:

```bash
cd your-repo-name/0x02-es6-classes
```

**Configuration Files**:
   - In your project directory, create a `package.json`, `babel.config.js`, and `.eslintrc.js` file.
   - Add the following configuration files to your project directory:

#### `package.json`
This file manages your project dependencies and scripts.

```javascript
{
  "scripts": {
    // Linting script that runs ESLint
    "lint": "./node_modules/.bin/eslint",
    // Check linting on JavaScript files matching the pattern [0-9]*.js
    "check-lint": "lint [0-9]*.js",
    // Run the development server using Babel Node
    "dev": "npx babel-node",
    // Run tests using Jest
    "test": "jest",
    // Run both linting and tests
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    // Babel core package for transpilation
    "@babel/core": "^7.6.0",
    // Preset for modern JavaScript
    "@babel/preset-env": "^7.6.0",
    // Babel CLI for running Node with Babel
    "@babel/node": "^7.8.0",
    // ESLint for linting JavaScript code
    "eslint": "^6.4.0",
    // Airbnb base ESLint configuration
    "eslint-config-airbnb-base": "^14.0.0",
    // ESLint plugin for ES6 import/export syntax
    "eslint-plugin-import": "^2.18.2",
    // ESLint plugin for Jest testing framework
    "eslint-plugin-jest": "^22.17.0",
    // Jest testing framework for unit testing
    "jest": "^24.9.0"
  }
}
```

#### `babel.config.js`
This file configures Babel to transpile your JavaScript code.

```javascript
module.exports = {
  presets: [
    // Specify presets to use for transpiling
    [
      '@babel/preset-env',
      {
        // Target the current Node.js version for compatibility
        targets: {
          node: 'current',
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
    // Set environment variables for the project
    browser: false, // Not targeting the browser
    es6: true, // Enable ES6 features
    jest: true, // Enable Jest global variables
  },
  extends: [
    // Extend from Airbnb's base ESLint config
    'airbnb-base',
    // Extend from the Jest plugin for linting
    'plugin:jest/all',
  ],
  globals: {
    // Define global variables that are read-only
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    // Configure the parser for ECMAScript features
    ecmaVersion: 2018, // Use ECMAScript 2018 syntax
    sourceType: 'module', // Use ES modules
  },
  plugins: ['jest'], // Use the Jest plugin for additional rules
  rules: {
    // Disable specific ESLint rules
    'max-classes-per-file': 'off', // Allow multiple classes in one file
    'no-underscore-dangle': 'off', // Allow underscore dangles in identifiers
    'no-console': 'off', // Allow console statements
    'no-shadow': 'off', // Allow shadowing variable names
    // Restrict usage of specific syntax
    'no-restricted-syntax': [
      'error',
      'LabeledStatement', // Disallow labeled statements
      'WithStatement', // Disallow with statements
    ],
  },
  overrides:[
    {
      // Apply specific rules to JavaScript files
      files: ['*.js'], // Target all JavaScript files
      excludedFiles: 'babel.config.js', // Exclude babel.config.js from this rule
    }
  ]
};

```

### 4. Install Dependencies (Jest, Babel, and ESLint):
   - Run the following command to install all the necessary packages:
     ```bash
     npm install
     ```

This command reads the `package.json` file and installs all required packages.

### 5. Running the Project

To run your JavaScript files with Babel, using the dev command
- If you want to run a specific test file, use:
```bash
npm run dev <filename>
```

Replace `<filename>` with the name of the JavaScript file you want to execute (e.g., `task1.js`).

### 6. Linting Your Code

To check your JavaScript files for errors and ensure code quality, use ESLint. You can run the linter with the following command:

```bash
npm run lint
```

To lint specific files, use:

```bash
npm run lint <filename>
```

### 7. Running Tests

If you have written tests for your functions, you can execute them using Jest. To run all tests, simply use:

```bash
npm run test
```

To run a specific test file, use:

```bash
npm run test <test-file-name>
```

### 8. Full Testing and Linting

To run both the linter and tests sequentially, execute:

```bash
npm run full-test
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

#### To Test Your Functions with Jest, Follow These Steps:
#### 1: Create a Test File for Task 0

Create a test file named `0-classroom.test.js` in the same directory as `0-classroom.js`:

```bash
touch 0-classroom.test.js
```

##### Example `0-constants.js`
```javascript
// 0-classroom.js


```

##### Example `0-constants.test.js`
Here’s how you would write tests for the functions in `0-constants.js`:

```javascript
// 0-classroom.test.js

```

#### Step 5: Run the Tests

To run your tests, you can execute:

```bash
npm test
```

Or to run a specific test file:

```bash
npm run test 0-classroom.test.js
```
**Execution:**
```javascript

```

## Tasks

0. You used to attend a place like this at some point
   - Implement a class named `ClassRoom`:
     - Prototype: `export default class ClassRoom`
     - It should accept one attribute named `maxStudentsSize` (Number) and assigned to `_maxStudentsSize`
     - **Example**: 
       ```javascript
       bob@dylan:~$ cat 1-main.js
       import initializeRooms from './1-make_classrooms.js';

        console.log(initializeRooms());

        bob@dylan:~$ 
        bob@dylan:~$ npm run dev 1-main.js 
        [
        ClassRoom { _maxStudentsSize: 19 },
        ClassRoom { _maxStudentsSize: 20 },
        ClassRoom { _maxStudentsSize: 34 }
        ]
        bob@dylan:~$ 
       ```

1. Let's make some classrooms
   - Import the `ClassRoom` class from `0-classroom.js`.
   - Implement a function named `initializeRooms`. It should return an array of 3 `ClassRoom` objects with the sizes 19, 20, and 34 (in this order).
   - **Example**: 
     ```javascript
     bob@dylan:~$ cat 1-main.js
     import initializeRooms from './1-make_classrooms.js';

     console.log(initializeRooms());

     bob@dylan:~$ 
     bob@dylan:~$ npm run dev 1-main.js 
     [
     ClassRoom { _maxStudentsSize: 19 },
     ClassRoom { _maxStudentsSize: 20 },
     ClassRoom { _maxStudentsSize: 34 }
     ]
     bob@dylan:~$ 
     ```

2. A Course, Getters, and Setters
   - Implement a class named `HolbertonCourse`:
     - Constructor attributes:
       - `name` (String)
       - `length` (Number)
       - `students` (array of Strings)
     - Make sure to verify the type of attributes during object creation.
     - Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`).
     - Implement a getter and setter for each attribute.
   - **Example**: 

```javascript
bob@dylan:~$ cat 2-main.js
import HolbertonCourse from "./2-hbtn_course.js";

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);

try {
    c1.name = 12;
} 
catch(err) {
    console.log(err);
}

try {
    const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
}
catch(err) {
    console.log(err);
}

bob@dylan:~$ 
bob@dylan:~$ npm run dev 2-main.js 
ES6
HolbertonCourse {
  _name: 'Python 101',
  _length: 1,
  _students: [ 'Bob', 'Jane' ]
}
TypeError: Name must be a string
    ...
TypeError: Length must be a number
    ...
bob@dylan:~$
```

3. Methods, static methods, computed methods names..... MONEY
   - Implement a class named `Currency`:
     - Constructor attributes:
       - `code` (String)
       - `name` (String)
     - Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`).
     - Implement a getter and setter for each attribute.
     - Implement a method named `displayFullCurrency` that will return the attributes in the following format: `name (code)`.
   - **Example**: 
```javascript
bob@dylan:~$ cat 3-main.js
import Currency from "./3-currency.js";

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 3-main.js 
Dollars ($)
bob@dylan:~$ 
```

4. Pricing
   - Import the class `Currency` from `3-currency.js`.
   - Implement a class named `Pricing`:
     - Constructor attributes:
       - `amount` (Number)
       - `currency` (Currency)
     - Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`).
     - Implement a getter and setter for each attribute.
     - Implement a method named `displayFullPrice` that returns the attributes in the following format: `amount currency_name (currency_code)`.
     - Implement a static method named `convertPrice`. It should accept two arguments: `amount` (Number), `conversionRate` (Number). The function should return the amount multiplied by the conversion rate.
   - **Example**: 
```javascript
bob@dylan:~$ cat 4-main.js
import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p);
console.log(p.displayFullPrice());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 4-main.js 
Pricing {
  _amount: 100,
  _currency: Currency { _code: 'EUR', _name: 'Euro' }
}
100 Euro (EUR)
bob@dylan:~$ 
```

5. A Building
   - Implement a class named `Building`:
     - Constructor attributes:
       - `sqft` (Number)
     - Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`).
     - Implement a getter for each attribute.
     - Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named `evacuationWarningMessage`.
     - If a class that extends from it does not have an `evacuationWarningMessage` method, throw an error with the message `Class extending Building must override evacuationWarningMessage`.
   - **Example**: 
```javascript
bob@dylan:~$ cat 5-main.js
import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    new TestBuilding(200)
}
catch(err) {
    console.log(err);
}

bob@dylan:~$ 
bob@dylan:~$ npm run dev 5-main.js 
Building { _sqft: 100 }
Error: Class extending Building must override evacuationWarningMessage
    ...
bob@dylan:~$ 
```

6. Inheritance
   - Import `Building` from `5-building.js`.
   - Implement a class named `SkyHighBuilding` that extends from `Building`:
     - Constructor attributes:
       - `sqft` (Number) (must be assigned to the parent class `Building`)
       - `floors` (Number)
     - Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`).
     - Implement a getter for each attribute.
     - Override the method named `evacuationWarningMessage` and return the following string: `Evacuate slowly the NUMBER_OF_FLOORS floors`.
   - **Example**: 
```javascript
bob@dylan:~$ cat 6-main.js
import SkyHighBuilding from './6-sky_high.js';

const building = new SkyHighBuilding(140, 60);
console.log(building.sqft);
console.log(building.floors);
console.log(building.evacuationWarningMessage());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 6-main.js 
140
60
Evacuate slowly the 60 floors
bob@dylan:~$ 
```

7. Airport
   - Implement a class named `Airport`:
     - Constructor attributes:
       - `name` (String)
       - `code` (String)
     - Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`).
     - The default string description of the class should return the airport code.
   - **Example**: 
```javascript
bob@dylan:~$ cat 7-main.js
import Airport from "./7-airport.js";

const airportSF = new Airport('San Francisco Airport', 'SFO');
console.log(airportSF);
console.log(airportSF.toString());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 7-main.js 
Airport [SFO] { _name: 'San Francisco Airport', _code: 'SFO' }
[object SFO]
bob@dylan:~$ 
```

8. Primitive - Holberton Class
   - Implement a class named `HolbertonClass`:
     - Constructor attributes:
       - `size` (Number)
       - `location` (String)
     - Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`).
     - When the class is cast into a Number, it should return the size.
     - When the class is cast into a String, it should return the location.
   - **Example**: 
```javascript
bob@dylan:~$ cat 8-main.js
import HolbertonClass from "./8-hbtn_class.js";

const hc = new HolbertonClass(12, "Mezzanine")
console.log(Number(hc));
console.log(String(hc));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 8-main.js 
12
Mezzanine
bob@dylan:~$ 
```

9. Hoisting
   - Fix this code and make it work.
```javascript
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

export const listOfStudents = [student1, student2, student3, student4, student5];
```

**Result:**
```javascript
bob@dylan:~$ cat 9-main.js
import listOfStudents from "./9-hoisting.js";

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted)

bob@dylan:~$ 
bob@dylan:~$ npm run dev 9-main.js
[
  StudentHolberton {
    _firstName: 'Guillaume',
    _lastName: 'Salva',
    _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'John',
    _lastName: 'Doe',
    _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Albert',
    _lastName: 'Clinton',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Donald',
    _lastName: 'Bush',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Jason',
    _lastName: 'Sandler',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  }
]
[
  'Guillaume Salva - 2020 - San Francisco',
  'John Doe - 2020 - San Francisco',
  'Albert Clinton - 2019 - San Francisco',
  'Donald Bush - 2019 - San Francisco',
  'Jason Sandler - 2019 - San Francisco'
]
bob@dylan:~$ 
```

10. Vroom
    - Implement a class named `Car`:
      - Constructor attributes:
        - `brand` (String)
        - `motor` (String)
        - `color` (String)
      - Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`).
      - Add a method named `cloneCar`. This method should return a new object of the class.
      - Hint: Symbols in ES6.
    - **Example**:   
```javascript
bob@dylan:~$ npm run dev 10-main.js
TestCar { _brand: 'Nissan', _motor: 'Turbo', _color: 'Pink' }
true
TestCar { _brand: undefined, _motor: undefined, _color: undefined }
true
false
bob@dylan:~$ 
```

11. EVCar
    - Implement a class named `EVCar` that extends `Car`:
      - Constructor attributes:
        - `brand` (String)
        - `motor` (String)
        - `color` (String)
        - `battery` (String)
      - Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`).
      - Override the method named `cloneCar` and ensure it returns an instance of `Car`.
    - **Example**:
```javascript
bob@dylan:~$ npm run dev 100-main.js
EVCar {
  _brand: 'Tesla',
  _motor: 'Turbo',
  _color: 'Red',
  _range: '250'
}
Car { _brand: undefined, _motor: undefined, _color: undefined }
bob@dylan:~$ 
```
