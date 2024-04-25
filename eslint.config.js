import globals from "globals";
import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import tseslint from "typescript-eslint";
import parserVue from "vue-eslint-parser";
import pluginPrettier from "eslint-plugin-prettier/recommended";

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
  js.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  ...tseslint.configs.recommended,
  pluginPrettier,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.es2021 },
      ecmaVersion: "latest",
      parser: parserVue,
      parserOptions: {
        parser: tseslint.parser,
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
  },
];

export default config;
