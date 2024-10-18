# Alx Backend Javascript - TypeScript

[![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-v12.11.1-brightgreen)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-yellow?logo=javascript&logoColor=white)](https://www.javascript.com/)
[![Webpack](https://img.shields.io/badge/webpack-8DD6F9?logo=webpack&logoColor=black)](https://webpack.js.org/)
[![Jest](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white)](https://jestjs.io/)
[![Babel](https://img.shields.io/badge/Babel-F9DC3E?logo=babel&logoColor=black)](https://babeljs.io/)
[![Backend Development](https://img.shields.io/badge/Backend%20Development-Node.js%20%2B%20ES6-orange)](https://www.backend-development.com/)
[![ESLint](https://img.shields.io/badge/ESLint-brightgreen?logo=eslint&logoColor=white)](https://eslint.org/)

## Description

This project introduces the core features of TypeScript, such as basic types, interfaces, classes, and advanced types. Through a series of tasks, you'll gradually deepen your understanding of TypeScript, starting with simple type definitions and interfaces, then progressing to advanced topics like namespaces. By the end, you’ll have developed a TypeScript application that models students and teachers, efficiently managing types and extending their functionalities. The project serves as a hands-on introduction to static typing and object-oriented programming, demonstrating how TypeScript can improve web development by catching errors early and seamlessly compiling to JavaScript, making it compatible with browsers, servers, and any JavaScript environment.

## Project Structure
| Task Number | Description | Source Code |
|-------------|-------------|-------------|
| 0           | Creating an interface for a student. | [task_0/js/main.ts](task_0/js/main.ts) |
| 1           | Let's build a Teacher interface. | [task_1/js/main.ts](task_1/js/main.ts) |
| 2           | Extending the Teacher class. | [task_1/js/main.ts](task_1/js/main.ts) |
| 3           | Printing teachers. | [task_1/js/main.ts](task_1/js/main.ts) |
| 4           | Writing a class for students. | [task_1/js/main.ts](task_1/js/main.ts) |
| 5           | Advanced types Part 1. | [task_2/main.ts](task_2/main.ts) |
| 6           | Creating functions specific to employees. | [task_2/main.ts](task_2/main.ts) |
| 7           | String literal types. | [task_2/js/main.ts](task_2/js/main.ts) |
| 8           | Ambient Namespaces. | [task_3/js/main.ts](task_3/main.ts) |
| 9           | Namespace & Declaration merging. | [task_4/js/main.ts](task_4/js/main.ts) |
| 10          | Update Main with subjects. | [task_4/js/main.ts](task_4/js/main.ts) |
| 11          | Brand Convention & Nominal Typing. | [task_5/js/main.ts](task_5/js/main.ts) |


## Environment

- Ubuntu 18.04
- Node.js
- npm or yarn
- TypeScript 3.6.4 or higher
- Webpack 4.41.2 or higher

## Requirements

- All your files should end with a new line
- All your files will be transpiled on Ubuntu 18.04
- Your TS scripts will be checked with jest (version 24.9.* )
- Your code should use the ts extension when possible
- The Typescript compiler should not show any warning or error when compiling your code

## Learning Objectives

By the end of this project, you should be able to explain:

- Basic types in TypeScript
- Interfaces, classes, and functions
- How to work with the DOM in TypeScript
- Generic types
- How to use namespaces
- How to merge declarations
- How to use an ambient namespace to import an external library
- Basic nominal typing in TypeScript

## Prototypes Used in the Project

| Prototype Name | Description |
|----------------|-------------|
| `Student`      | Interface defining student properties. |
| `Teacher`      | Interface for teacher attributes and methods. |
| `Directors`    | Extends `Teacher` with additional properties. |
| `RowElement`   | Interface for database row elements. |
| `TeacherInterface` | Interface defining methods for a teacher. |
| `DirectorInterface` | Interface defining methods for a director. |

## How to Use
1. Clone the repository.
2. Navigate to the desired task directory.
3. Run `npm install` to install dependencies.
4. Use `npm run build` to compile the TypeScript code.

### Cloning the Repository

To get started, you need to clone the repository to your local machine. Open your terminal and run:

```bash
git clone <repository-url>  # Replace with your repository URL
cd <repository-directory>     # Navigate into the cloned directory
```

### Installing Dependencies

For each task, you will need to install the required dependencies. Follow these steps:

1. Navigate to the specific task directory:
   ```bash
   cd task_x  # Replace x with the task number (e.g., task_0, task_1, etc.)
   ```
2. Install the dependencies using npm:
   ```bash
   npm install  # This command installs the necessary packages listed in package.json
   ```

## Using the Project

### Running the Development Server

To start a local development server for live previews of your application, navigate to the task directory and run:

```bash
npm run start-dev  # Launches the Webpack development server
```

### Building the Project

To transpile the TypeScript code into JavaScript, run the following command in the task directory:

```bash
npm run build  # Compiles the TypeScript code using Webpack
```

### Running Tests

To execute tests for your TypeScript code, use:

```bash
npm test  # Runs tests using Jest
```

## Configuration Files

### package.json

This file manages project dependencies and scripts. Here's a breakdown:

```json
{
  "name": "typescript_dependencies",  // Project name
  "version": "1.0.0",                  // Current version
  "description": "",                   // Brief description
  "main": "index.js",                  // Main entry point
  "scripts": {                         // Scripts for running commands
    "start-dev": "webpack-dev-server --open",  // Start dev server
    "build": "webpack",                // Build the project
    "test": "jest"                     // Run tests
  },
  "devDependencies": {                 // Development dependencies
    "@babel/plugin-proposal-export-default-from": "^7.5.2",
    "@babel/preset-typescript": "^7.7.2",
    "@types/jest": "^24.0.23",
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.9.0",
    "source-map": "^0.7.3",
    "ts-jest": "^24.1.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}
```

### .eslintrc.js

This file configures ESLint for TypeScript, ensuring code quality and style:

```javascript
module.exports =  {
  parser:  '@typescript-eslint/parser',  // Specify the ESLint parser for TypeScript
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Use recommended rules from the @typescript-eslint/eslint-plugin
  ],
  parserOptions:  {
    ecmaVersion:  2018,  // Enable modern ECMAScript features
    sourceType:  'module',  // Allow the use of imports
  },
  rules:  {
    // Add custom rules here if needed
  },
};
```

### tsconfig.json

This file specifies the TypeScript compiler options:

```json
{
  "compilerOptions": {
    "outDir": "./dist/",  // Output directory for compiled files
    "sourceMap": true,    // Generate source maps for debugging
    "noImplicitAny": true, // Raise error on expressions and declarations with an implied 'any' type
    "module": "es6",      // Specify the module code generation
    "target": "es5",      // Specify ECMAScript target version
    "allowJs": true,      // Allow JavaScript files to be compiled
    "moduleResolution": "node",  // Use Node.js module resolution
    "skipLibCheck": true  // Skip type checking of declaration files
  }
}
```

### webpack.config.js

This file configures Webpack for bundling:

```javascript
const path = require("path");  // Import the path module
const HtmlWebpackPlugin = require('html-webpack-plugin');  // Plugin to generate HTML files
const { CleanWebpackPlugin } = require('clean-webpack-plugin');  // Plugin to clean the output directory
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');  // Plugin for type checking

module.exports = {
  entry: "./js/main.ts",  // Entry point for the application
  devtool: "inline-source-map",  // Generate source maps for easier debugging
  module: {
    rules: [
      {
        test: /\.tsx?$/,  // Test for .ts and .tsx files
        loader: 'ts-loader',  // Use ts-loader to compile TypeScript
        options: {
          transpileOnly: true  // Skip type checking for faster builds
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]  // File extensions to resolve
  },
  devServer: {
    contentBase: "./dist"  // Serve content from the dist directory
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),  // Run type checker in a separate process
    new CleanWebpackPlugin(),  // Clean the output directory before each build
    new HtmlWebpackPlugin({
      title: "Development"  // Set the title for the generated HTML file
    })
  ],
  output: {
    filename: "bundle.js",  // Output filename for the bundle
    path: path.resolve(__dirname, "dist")  // Output directory
  }
};
```

## Example of Testing with Jest

To test your TypeScript code using Jest, follow these steps:

1. **Create a test file**: For example, create `example.test.ts` in your task directory.
2. **Write a test**:

```typescript
describe('Example Test', () => {
  it('should return true', () => {
    expect(true).toBe(true);
  });
});
```

3. **Run the tests**:

```bash
npm test  # This will execute all test files matching *.test.ts
```

### Running TypeScript with ts-node (Optional)

If you want to run TypeScript files directly without compiling them first, you can use `ts-node`. It allows you to execute TypeScript code on the fly, which is helpful for quick testing and development:

1. Install `ts-node` globally (if you haven't already):
   ```bash
   npm install -g ts-node
   ```

2. Run your TypeScript file:
   ```bash
   ts-node main.ts  # Replace main.ts with your specific TypeScript file
   ```

- Ensure that you have Node.js installed to manage dependencies and run scripts.

## Additional Notes

### What is TypeScript?

TypeScript is a superset of JavaScript that adds static types. It helps catch errors early through a type system and makes JavaScript development more efficient. TypeScript provides:

- **Type Safety**: Prevents errors by enforcing types.
- **Better Tooling**: Enhanced editor support with autocompletion and refactoring.
- **Object-Oriented Features**: Supports classes, interfaces, and inheritance.
- **Interoperability**: Can be used alongside existing JavaScript code.

### Key Benefits for Beginners

- **Error Detection**: Helps identify bugs at compile time rather than runtime.
- **Clearer Code**: Makes your code more understandable and maintainable.
- **Improved Collaboration**: Type definitions provide better context when working in teams.

## Tasks

## 0: Creating an interface for a student

**Mandatory:**

1. Copy the following configuration files (provided above) into the `task_0` directory:
   - `package.json`
   - `.eslintrc.js`
   - `tsconfig.json`
   - `webpack.config.js`

2. Write your code in the `main.ts` file:
   - Write an interface named `Student` that accepts the following elements: 
     - `firstName` (string)
     - `lastName` (string)
     - `age` (number)
     - `location` (string)
   - Create two students, and create an array named `studentsList` containing the two variables.
   - Using Vanilla Javascript, render a table and for each element in the array, append a new row to the table. Each row should contain the first name of the student and the location.

**Requirements:**

- When running, Webpack should return "No type errors found."
- Every variable should use TypeScript when possible.

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x04-TypeScript`
- File: 
  - `task_0/js/main.ts`
  - `task_0/package.json`
  - `task_0/.eslintrc.js`
  - `task_0/tsconfig.json`
  - `task_0/webpack.config.js`



## 1: Let's build a Teacher interface

**Mandatory:**

1. Create a directory `task_1` and copy these configuration files into this folder:
   - `package.json`
   - `tsconfig.json`
   - `webpack.config.js`

2. Define the `Teacher` interface with the following attributes:
   - `firstName` (string) and `lastName` (string). These two attributes should only be modifiable when a Teacher is first initialized.
   - `fullTimeEmployee` (boolean) — this attribute should always be defined.
   - `yearsOfExperience` (number) — this attribute is optional.
   - `location` (string) — this attribute should always be defined.
   - Add the possibility to add any attribute to the Object like `contract` (boolean) without specifying the name of the attribute.

**Example:**

```typescript
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
```

**Output:**

```plaintext
// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"
```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x04-TypeScript`
- File:
  - `task_1/js/main.ts`
  - `task_1/webpack.config.js`
  - `task_1/tsconfig.json`
  - `task_1/package.json`


## 2: Extending the Teacher class

**Mandatory:**

1. Write an interface named `Directors` that extends `Teacher`. It requires an attribute named `numberOfReports` (number).

**Example:**

```typescript
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
```

**Output:**

```plaintext
// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17
```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x04-TypeScript`
- File: `task_1/js/main.ts`


## 3: Printing teachers

**Mandatory:**

1. Write a function `printTeacher`:
   - It accepts two arguments: `firstName` and `lastName`.
   - It returns the first letter of the `firstName` and the full `lastName`.

**Example:**

```typescript
printTeacher("John", "Doe"); // -> J. Doe
```

2. Write an interface for the function named `printTeacherFunction`.

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x04-TypeScript`
- File: `task_1/js/main.ts`


## 4: Writing a class

**Mandatory:**

1. Write a Class named `StudentClass`:
   - The constructor accepts `firstName` (string) and `lastName` (string) arguments.
   - The class has a method named `workOnHomework` that returns the string `Currently working`.
   - The class has a method named `displayName` that returns the `firstName` of the student.

2. The constructor of the class should be described through an Interface.
3. The class should be described through an Interface.

**Requirements:**

- You can reuse the Webpack configuration from the previous exercise to compile the code.
- When running `npm run build`, no TypeScript error should be displayed.
- Every variable should use TypeScript when possible.

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x04-TypeScript`
- File: `task_1/js/main.ts`


## 5: Advanced types Part 1

**Mandatory:**

1. Create the `DirectorInterface` interface with the 3 expected methods:
   - `workFromHome()`: returning a string
   - `getCoffeeBreak()`: returning a string
   - `workDirectorTasks()`: returning a string

2. Create the `TeacherInterface` interface with the 3 expected methods:
   - `workFromHome()`: returning a string
   - `getCoffeeBreak()`: returning a string
   - `workTeacherTasks()`: returning a string

3. Create a class `Director` that will implement `DirectorInterface`:
   - `workFromHome` should return the string `Working from home`.
   - `getCoffeeBreak` should return the string `Getting a coffee break`.
   - `workDirectorTasks` should return the string `Getting to director tasks`.

4. Create a class `Teacher` that will implement `TeacherInterface`:
   - `workFromHome` should return the string `Cannot work from home`.
   - `getCoffeeBreak` should return the string `Cannot have a break`.
   - `workTeacherTasks` should return the string `Getting to work`.

5. Create a function `createEmployee` with the following requirements:
   - It can return either a `Director` or a `Teacher` instance.
   - It accepts 1 argument: `salary` (either number or string).
   - If `salary` is a number and less than 500 - it should return a new `Teacher`. Otherwise, it should return a `Director`.

**Expected result:**

```javascript
console.log(createEmployee(200));      // Teacher
console.log(createEmployee(1000));     // Director
console.log(createEmployee('$500'));    // Director
```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x04-TypeScript`
- File: `task_2/js/main.ts`, `task_2/webpack.config.js`, `task_2/tsconfig.json`, `task_2/package.json`


## 6: Creating functions specific to employees

**Mandatory:**

1. Write a function `isDirector`:
   - It accepts `employee` as an argument.
   - It will be used as a type predicate to determine if the `employee` is a director.

2. Write a function `executeWork`:
   - It accepts `employee` as an argument.
   - If the `employee` is a `Director`, it will call `workDirectorTasks`.
   - If the `employee` is a `Teacher`, it will call `workTeacherTasks`.

**Expected result:**

```javascript
executeWork(createEmployee(200));      // Getting to work
executeWork(createEmployee(1000));     // Getting to director tasks
```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x04-TypeScript`
- File: `task_2/js/main.ts`


## 7: String literal types

**Mandatory:**

1. Write a string literal type named `Subjects` allowing a variable to have the value `Math` or `History` only.
2. Write a function named `teachClass`:
   - It takes `todayClass` as an argument.
   - It will return the string `Teaching Math` if `todayClass` is `Math`.
   - It will return the string `Teaching History` if `todayClass` is `History`.

**Expected result:**

```javascript
teachClass('Math');      // Teaching Math
teachClass('History');   // Teaching History
```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x04-TypeScript`
- File: `task_2/js/main.ts`


## 8: Ambient Namespaces

**Mandatory:**

1. Create a directory called `task_3` and copy the following configuration files into it: `package.json`, `webpack.config.js`, `tsconfig.json`.

2. Inside a file named `interface.ts`:
   - Create a type `RowID` and set it equal to `number`.
   - Create an interface `RowElement` that contains these fields:
     - `firstName: string`
     - `lastName: string`
     - `age?: number`

3. You are building the next part of the application architecture. Since you can't write a connector to the database, you will download a library called `crud.js`. Copy this file into the `task_3/js` directory.

   Here it is:
   ```javascript
   export function insertRow(row) {
     console.log('Insert row', row);
     return Math.floor(Math.random() * Math.floor(1000));
   }

   export function deleteRow(rowId) {
     console.log('Delete row id', rowId);
     return;
   }

   export function updateRow(rowId, row) {
     console.log(`Update row ${rowId}`, row);
     return rowId;
   }
   ```

4. Write an ambient file within `task_3/js`, named `crud.d.ts`, containing the type declarations for each CRUD function. At the top of the file, import `RowID` and `RowElement` from `interface.ts`.

5. In `main.ts`:
   - At the top of the file, create a triple slash directive that includes all the dependencies from `crud.d.ts`.
   - Import the `RowID` type and `RowElement` from `interface.ts`.
   - Import everything from `crud.js` as `CRUD`.
   - Create an object called `row` with the type `RowElement` with the fields set to these values:
     ```javascript
     firstName: 'Guillaume',
     lastName: 'Salva'
     ```

6. Create a const variable named `newRowID` with the type `RowID` and assign the value from the `insertRow` command.

7. Create a const variable named `updatedRow` with the type `RowElement` and update `row` with an `age` field set to `23`.

8. Finally, call the `updateRow` and `deleteRow` commands.

**Expected result:**

```javascript
const obj = {firstName: "Guillaume", lastName: "Salva"};
CRUD.insertRow(obj);
// Insert row {firstName: "Guillaume", lastName: "Salva"}

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(125);
// Delete row id 125
```

**Requirements:**
- When running `npm run build`, no TypeScript error should be displayed.
- Every variable should use TypeScript when possible.
- The main file and the ambient file should both import the types defined in the interface file.
- You can easily test your ambient file by checking the IntelliSense of your IDE when using the third-party functions.

**Repo:**
- GitHub repository: `alx-backend-javascript`
- Directory: `0x04-TypeScript`
- File: `task_3/js/main.ts`, `task_3/js/interface.ts`, `task_3/js/crud.d.ts`

## 9: Namespace & Declaration Merging

**Mandatory:**

1. Create a new directory `task_4` and copy the above `tsconfig.json` into it. Use the following `package.json` in the directory:

   ```json
   {
     "name": "task_4",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
       "build": "webpack",
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "keywords": [],
     "author": "",
     "license": "ISC",
     "devDependencies": {
       "@typescript-eslint/eslint-plugin": "^2.4.0",
       "@typescript-eslint/parser": "^2.4.0",
       "clean-webpack-plugin": "^3.0.0",
       "fork-ts-checker-webpack-plugin": "^1.5.1",
       "html-webpack-plugin": "^3.2.0",
       "ts-loader": "^6.2.0",
       "typescript": "^3.6.4",
       "webpack": "^4.41.2",
       "webpack-cli": "^3.3.9",
       "webpack-dev-server": "^3.8.2"
     }
   }
   ```

2. In `task_4/js/subjects`, create the following files:

   - **Teacher.ts**: Write a `Teacher` interface in a namespace named `Subjects`.
     - The interface requires `firstName` and `lastName` as `string`.

   - **Subject.ts**: Write a `Subject` class in the same namespace named `Subjects`.
     - The class has one attribute `teacher` that implements the `Teacher` interface.
     - The class has one setter method `setTeacher` that accepts a teacher as an argument and sets the instance attribute `teacher` with it.

   - **Cpp.ts**: Make the following modifications in the same namespace:
     - Using declaration merging, add a new optional attribute `experienceTeachingC` (number) to the `Teacher` interface.
     - Create a class `Cpp` extending from `Subject`.
     - Write a method named `getRequirements` that returns a string "Here is the list of requirements for Cpp".
     - Write a method named `getAvailableTeacher` that returns a string "Available Teacher: <first name of teacher>". If the teacher doesn’t have any experience in teaching C, then the method should return a string "No available teacher".

   - **React.ts**: Write a `React` class in the same namespace.
     - Add a new attribute `experienceTeachingReact?` (number) to the `Teacher` interface.
     - In the class, write a method named `getRequirements` that returns a string "Here is the list of requirements for React".
     - Write a method named `getAvailableTeacher` that returns a string "Available Teacher: <first name of teacher>". If the teacher doesn’t have any experience in teaching React, then the method should return a string "No available teacher".

   - **Java.ts**: Write a `Java` class in the same namespace.
     - Add a new attribute `experienceTeachingJava?` (number) to the `Teacher` interface.
     - In the class, write a method named `getRequirements` that returns a string "Here is the list of requirements for Java".
     - Write a method named `getAvailableTeacher` that returns a string "Available Teacher: <first name of teacher>". If the teacher doesn’t have any experience in teaching Java, then the method should return a string "No available teacher".

**Repo:**
- GitHub repository: `alx-backend-javascript`
- Directory: `0x04-TypeScript`
- Files:
  - `task_4/package.json`
  - `task_4/tsconfig.json`
  - `task_4/js/subjects/Cpp.ts`
  - `task_4/js/subjects/Java.ts`
  - `task_4/js/subjects/React.ts`
  - `task_4/js/subjects/Subject.ts`
  - `task_4/js/subjects/Teacher.ts`


## 10: Update `task_4/js/main.ts`

**Mandatory:**

1. Create and export the following constants:
   - `cpp` for Cpp Subjects
   - `java` for Java Subjects
   - `react` for React Subjects

2. Create and export one `Teacher` object named `cTeacher` with `experienceTeachingC = 10`.

3. For the Cpp subject:
   - Log to the console "C++".
   - Set `cTeacher` as the teacher.
   - Call the two methods `getRequirements` and `getAvailableTeacher`, and print the strings they return.

4. For the Java subject:
   - Log to the console "Java".
   - Set `cTeacher` as the teacher.
   - Call the two methods `getRequirements` and `getAvailableTeacher`, and print the strings they return.

5. For the React subject:
   - Log to the console "React".
   - Set `cTeacher` as the teacher.
   - Call the two methods `getRequirements` and `getAvailableTeacher`, and print the strings they return.

**Repo:**
- GitHub repository: `alx-backend-javascript`
- Directory: `0x04-TypeScript`
- File: `task_4/js/main.ts`


## 11: Brand Convention & Nominal Typing

**Mandatory:**

1. Create a directory named `task_5` and copy the following configuration files into the root of `task_5`:
   - `package.json`
   - `tsconfig.json`
   - `webpack.config.js`

2. Create two interfaces in `task_5/js/main.ts`:
   - `MajorCredits`: Defines a number named `credits` and includes a brand property to uniquely identify it.
   - `MinorCredits`: Defines a number named `credits` and includes a brand property to uniquely identify it.

3. Create two functions in `task_5/js/main.ts`:
   - `sumMajorCredits`: This function takes two arguments, `subject1` and `subject2`, and returns a `MajorCredits` value by summing the credits of the two subjects.
   - `sumMinorCredits`: This function takes two arguments, `subject1` and `subject2`, and returns a `MinorCredits` value by summing the credits of the two subjects.

**Repo:**
- GitHub repository: `alx-backend-javascript`
- Directory: `0x04-TypeScript`
- File: `task_5/js/main.ts`, `task_5/package.json`, `task_5/webpack.config.js`, `task_5/tsconfig.json`
