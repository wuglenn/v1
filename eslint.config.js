import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    rules: {
      quotes: ["error", "double", { "allowTemplateLiterals": true }],
      "vue/multi-word-component-names": ["error", {
        "ignores": ["archive", "index"]
      }]
    }
  }
];