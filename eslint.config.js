export default {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      tsconfigRootDir: import.meta.dirname,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react'],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
    ],
    settings: {
      react: {
        version: "detect",
      },
    },
    root: true,
    env: {
      node: true,
      jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  };
  