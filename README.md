# Node-Express-Typescript
This guide helps you set up a Node.js project with TypeScript, providing a clean development and production-ready configuration.
# 1. NodeJS Configuration
- npm init -y (Initialize a package.json file or Initialize a new node.js project in the current directory.)

# 2. NodeJS + TypeScript Configuration
- Install packages : npm install -D typescript ts-node tsx
- tsc --init (init a tsconfig.json file)

- Add the following to tsconfig.json
```javascript
{
  "compilerOptions": {
    "target": "es2022",                       
    "module": "nodenext",
    "rootDir": ".", // if your main entry file likes index.ts, server.ts, main.ts, etc, outside the src folder, set rootDir to (.) otherwise set it to (src) Example: "rootDir": "./src",                  
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
- In your package.json, add the following scripts:
     - ```javascript 
        "scripts": {
          "dev": "tsx watch main.ts",
          "build": "tsc",
          "start": "node dist/main.js"
        },

> * dev: Starts the development server with hot-reloading.
> * build: Compiles TypeScript files into JavaScript.
> * start: Runs the production-ready compiled app from dist.
-  Run the Project
  - ```javascript 
      npm run dev     # Start development server
      npm run build   # Compile TypeScript files
      npm run start   # Run the built JavaScript from 'dist'

      ```


