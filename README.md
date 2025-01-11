# React + TypeScript + Vite

basic usage, please follow the following commands:

-Install:

```
  $ npm install
```

-Set styles types for Chakra UI components

```
  $ npx @chakra-ui/cli typegen ./src/themes/index.ts
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname
  }
};
```
