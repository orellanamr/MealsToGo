const js = require("@eslint/js");
const prettier = require("eslint-plugin-prettier");
const prettierConfig = require("eslint-config-prettier");
const typescript = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  js.configs.recommended, // Reglas básicas de ESLint
  {
    plugins: {
      prettier,
      "@typescript-eslint": typescript, // Plugin para TypeScript
    },
    rules: {
      ...prettierConfig.rules,
      "prettier/prettier": "error",
      quotes: ["error", "double"], // Regla para comillas dobles
    },
    languageOptions: {
      parser: tsParser, // Usar el parser de TypeScript
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true, // Habilitar JSX
        },
      },
    },
  },
];
