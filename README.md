# Node.js with TypeScript Setup Guide

This guide provides step-by-step instructions to set up a Node.js project with TypeScript, ensuring a clean and efficient configuration for both development and production environments.

## Prerequisites

- Node.js (version 16 or higher recommended)
- npm (comes with Node.js)
- Basic understanding of Node.js and TypeScript

## 1. Initialize a Node.js Project

Start by creating a new Node.js project in your desired directory:

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

## 3. Update package.json Scripts
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

## 3. Run the Project
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