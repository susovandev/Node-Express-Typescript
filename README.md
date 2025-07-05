# Node.js with TypeScript Setup Guide

This guide provides step-by-step instructions to set up a Node.js project with TypeScript, ensuring a clean and efficient configuration for both development and production environments.

## Prerequisites

- Node.js (`version 16 or higher recommended`)
- npm (comes with Node.js)
- Basic understanding of `Node.js` and `TypeScript`

## 1. Initialize a Node.js Project

Start by creating a new Node.js project in your desired directory:

```bash
mkdir my-nodejs-typescript-app
cd my-nodejs-typescript-app
```

1. Open a terminal in your project folder.
2. Run the following command to initialize a `package.json` file:
    ```bash
    npm init -y
    ```
    This creates a basic package.json file to manage your project's dependencies and scripts.

## 2. Configure TypeScript

Set up TypeScript to work seamlessly with Node.js by installing necessary dependencies and configuring the TypeScript compiler.

### 2.1 Install TypeScript and Development Tools

1. Run the following command to install TypeScript and related development tools:

    ```bash
    npm install -D typescript ts-node tsx
    ```

- `typescript`: The TypeScript compiler.
- `ts-node`: Executes TypeScript files directly.
- `tsx`: A TypeScript execution environment for Node.js.

### 2.2 Initialize TypeScript Configuration

Generate a tsconfig.json file to configure the TypeScript compiler:

```bash
 tsc --init
```

Replace the contents of the generated tsconfig.json with the following configuration:

```json
{
    "compilerOptions": {
        "target": "es2022",
        "module": "nodenext",
        "rootDir": ".",
        "moduleResolution": "nodenext",
        "outDir": "./dist",
        "removeComments": true,
        "esModuleInterop": true,
        "strict": true,
        "noImplicitAny": true,
        "strictNullChecks": true,
        "strictFunctionTypes": true,
        "alwaysStrict": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "noImplicitReturns": true,
        "noImplicitOverride": true,
        "allowUnusedLabels": true,
        "allowUnreachableCode": true,
        "skipDefaultLibCheck": true,
        "skipLibCheck": true
    }
}
```

- `Note`: **Set `"rootDir": "."` if your main entry file (e.g., index.ts, server.ts, or main.ts) is in the project root. If your source files are in a src folder, use `"rootDir": "./src"`.**
- `Note`: **You can configure your own TypeScript compiler options based on your project's requirements.**

| **Option**                     | **Description**                                            |
| ------------------------------ | ---------------------------------------------------------- |
| `target: "es2022"`             | Output modern JS features targeting ES2022.                |
| `module: "nodenext"`           | Use Node.js-style module system with ES modules.           |
| `rootDir: "."`                 | Sets the root directory for source files.                  |
| `moduleResolution: "nodenext"` | Resolves modules using Node.js ESM resolution.             |
| `outDir: "./dist"`             | Output compiled files into the `dist` folder.              |
| `removeComments: true`         | Removes comments from the output files.                    |
| `esModuleInterop: true`        | Allows default import of CommonJS modules.                 |
| `strict: true`                 | Enables all strict type-checking options.                  |
| `noImplicitAny: true`          | Disallows `any` type unless explicitly defined.            |
| `strictNullChecks: true`       | `null` and `undefined` must be explicitly handled.         |
| `strictFunctionTypes: true`    | Function types must match exactly for compatibility.       |
| `alwaysStrict: true`           | Adds `"use strict"` to JS output automatically.            |
| `noUnusedLocals: true`         | Error on unused local variables.                           |
| `noUnusedParameters: true`     | Error on unused function parameters.                       |
| `noImplicitReturns: true`      | Ensures all code paths in functions return a value.        |
| `noImplicitOverride: true`     | Forces use of `override` keyword when overriding a method. |
| `allowUnusedLabels: true`      | Allows labels that are not used (e.g., for debugging).     |
| `allowUnreachableCode: true`   | Allows code that can never be executed.                    |
| `skipDefaultLibCheck: true`    | Skips type checking of default library files.              |
| `skipLibCheck: true`           | Skips type checking of all declaration files (`.d.ts`).    |

### 2.3 Update package.json Scripts

Add the following scripts to the "scripts" section of your package.json file to streamline development and production workflows:

```json
"scripts": {
  "dev": "tsx watch main.ts",
  "build": "tsc",
  "start": "node dist/main.js"
}
```

#### `Script Description`

- `dev`: Starts the development server with hot-reloading, allowing you to see changes instantly as you edit your TypeScript files.
- `build`: Compiles TypeScript files into JavaScript, outputting the results to the dist folder.
- `start`: Runs the compiled JavaScript application from the dist folder for production use.

### 2.4 Run the Project

Use the following commands to work with your project:

- Start the development server:

```bash
  npm run dev
```

- Compile TypeScript files to JavaScript:

```bash
  npm run build
```

- Start the production server:

```bash
  npm run start
```

## 3. EsLint and Prettier Setup

To maintain code quality and consistency, set up ESLint and Prettier in your project.

### 3.1 Install and Configure ESLint

```bash
npm init @eslint/config@latest
```

After running the command, you will be prompted to answer several questions to configure ESLint for your project. Here are some recommended answers:

- Use the recommended configuration for `JavaScript` projects.
- Use the recommended configuration for `TypeScript` projects.
- Use the recommended configuration for `Node.js` projects.

### 3.2 Update `eslint.config.js` file

```javascript
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  { ignores: ['**/dist', '**/node_modules', '**/build'] },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
  }
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: { globals: globals.node },
  },
  tseslint.configs.recommended,
]);
```

Follow the prompts to configure ESLint for your TypeScript project. Choose options that suit your coding style and preferences.

### 3.3 Install and Configure Prettier

```bash
npm install -D prettier
```

Create a `.prettierrc` file in the root of your project with the following content:

```json
{
    "trailingComma": "all",
    "tabWidth": 2,
    "semi": true,
    "singleQuote": true,
    "printWidth": 80,
    "arrowParens": "always",
    "bracketSpacing": true,
    "endOfLine": "auto"
}
```

`Note`: **You will configure your own Prettier settings based on your project's requirements**.

| **Option**              | **Description**                                                            |
| ----------------------- | -------------------------------------------------------------------------- |
| `trailingComma: "all"`  | Adds trailing commas wherever possible (objects, arrays, function params). |
| `tabWidth: 2`           | Sets the number of spaces per indentation level.                           |
| `semi: true`            | Always adds semicolons at the end of statements.                           |
| `singleQuote: true`     | Prefers single quotes over double quotes.                                  |
| `printWidth: 80`        | Wraps lines that exceed 80 characters.                                     |
| `arrowParens: "always"` | Always include parentheses around arrow function parameters.               |
| `bracketSpacing: true`  | Prints spaces between brackets in object literals.                         |
| `endOfLine: "auto"`     | Maintains existing end-of-line character depending on the OS.              |

### 3.4 Create a `.prettierignore` File

Create a `.prettierignore` file in the root of your project to specify files and directories that Prettier should ignore. Add the following content:

```
# Ignore build artifacts
build/
coverage/

# Ignore node modules
node_modules/
```

### 3.5 Run ESLint and Prettier

```bash
npx eslint . --ext .ts
npx prettier . --check
```

### 3.6 Add ESLint and Prettier Scripts

Add the following scripts to your package.json to easily run ESLint and Prettier:

```json
"scripts": {
  "format": "prettier --write \"**/*.{js,ts,jsx,tsx,json,md}\"",
    "check-format": "prettier --check \"**/*.{js,ts,jsx,tsx,json,md}\"",
    "lint": "eslint . --ext .js,.ts",
    "lint:fix": "eslint . --ext .js,.ts --fix"
}
```

## 4.Path Alias Setup

Path aliases allow you to use shorter, more readable import paths in your TypeScript project (e.g., @src instead of ../../src). This section explains how to configure path aliases.

### 4.1 Update `tsconfig.json` file

```json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@/*": ["src/*"]
        }
    }
}
```

- `"baseUrl": ".":` Sets the base directory for resolving non-relative module names.
- `"paths": { "@src/*": ["src/*"] }:` Maps `@src/*` to the `src` folder, allowing imports like `import { something } from '@src/utils'` instead of relative paths.

### 4.2 Update Import Statements

After configuring path aliases, update your import statements in TypeScript files to use the new aliases. For example:

```typescript
import { sayHello } from '@src/app.js';
```

### 4.3 Install `tsc-alias` and Update your `package.json` file

1. Run the following command to install `tsc-alias` package:

```bash
   npm install -D tsc-alias
```

- `tsc-alias:` The `tsc-alias` package is a tool that resolves TypeScript path aliases after compilation by replacing them with relative paths in the generated JavaScript files.

2. Update your `package.json` file to include a build script that runs `tsc-alias` after compiling TypeScript files:

```json
"build": "npm run lint && npm run format && tsc && tsc-alias",
```

## 5. Husky Setup

To ensure code quality and consistency, set up Husky to run ESLint and Prettier checks before committing changes.

### 5.1 Install Husky

```bash
npm install -D husky
```

### 5.2 Configure Husky

Run the following command to initialize Husky:

```bash
npx husky init
```

This adds a folder into your root with the name husky Inside this you will be able to find a file called pre-commit You can add other files too. But since this is the most used one it appears by default.

Inside this file add the following —

```bash
npm run lint
npm run format
```

- This ensures that ESLint and Prettier checks are run before each commit.

## 6 Express Setup

To set up an Express server in your Node.js TypeScript project, follow these steps:

1. Install Express and its types:

```bash
npm install express
npm install -D @types/express
```

2. Create a basic Express server in `src/app.ts`:

```typescript
import express from 'express';

export class App {
    app: express.Application;

    constructor() {
        this.app = express();
    }

    start() {
        this.appListen();
    }

    private appListen() {
        this.app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000');
        });
    }
}
```

3. Create an entry point for your application in `main.ts`:

```typescript
import { App } from '@/app.js';

class Main {
    public static main() {
        const app = new App();
        app.start();
    }
}
Main.main();
```

## 7. Example Project Structure

```my-nodejs-typescript-app/
├── .husky/                # Husky configuration files
├── dist/                  # Compiled JavaScript files
├── node_modules/          # Node.js modules
├── src/                   # Source files
│   ├── config/            # Configuration files
│   ├── db/                # Database files
│   ├── utils/             #  Utility files
│   ├── app.ts             # Application logic
├── .gitignore             # Git ignore file
├── .prettierignore        # Prettier ignore file
├── .prettierrc            # Prettier configuration file
├── .eslint.config.js      # ESLint configuration file
├── main.ts                # Application entry point
├── package.lock.json      # Package lock file
├── package.json           # Project metadata and dependencies
├── README.md              # Project documentation
├── tsconfig.json          # TypeScript configuration file
```
