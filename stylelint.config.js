/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-clean-order",
    "stylelint-config-standard-vue",
  ],
  rules: {
    "at-rule-no-unknown": [true, { ignoreAtRules: ["tailwind"] }],
  },
};
