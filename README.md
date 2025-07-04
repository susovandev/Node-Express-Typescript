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

`Note`: Set `"rootDir": "."` if your main entry file (e.g., index.ts, server.ts, or main.ts) is in the project root. If your source files are in a src folder, use `"rootDir": "./src"`.

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

### 3.2 Update eslint.config.js

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

`Note`: _You will configure your own Prettier settings based on your project's requirements_.

### 3.4 Create a .prettierignore File

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
