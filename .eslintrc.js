module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],

  rules: {
    // "@typescript-eslint/naming-convention": "warn",
    // "@typescript-eslint/semi": "warn",
    // "curly": "warn",
    // "eqeqeq": "warn",
    // "no-throw-literal": "warn",
    // "semi": "off",

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': 'off',

    'no-undef': 'off',
  },
  ignorePatterns: ['out', 'dist', '**/*.d.ts'],
}
