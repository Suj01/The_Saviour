# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}

![image](https://github.com/Suj01/The_Saviour/assets/111004060/bfe0c0ad-f0db-4187-abd0-dbf300a6d56f)

![image](https://github.com/Suj01/The_Saviour/assets/111004060/6f3b1827-2c82-4ee6-bd66-9f47b8157bb3)

![image](https://github.com/Suj01/The_Saviour/assets/111004060/24a68938-cfdf-4d25-9c3e-8491fc9e0216)

![image](https://github.com/Suj01/The_Saviour/assets/111004060/b429f8c9-d93a-4a48-bf14-7f8e601432b8)

![image](https://github.com/Suj01/The_Saviour/assets/111004060/a209898b-5249-4eea-9f83-65e84c74bcb8)

![image](https://github.com/Suj01/The_Saviour/assets/111004060/a5e0a24a-0049-4f4b-acc7-c49a8cde6c06)






```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
