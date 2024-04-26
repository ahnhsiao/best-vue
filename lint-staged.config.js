export default {
  "*": "npm run lint:format",
  "*.{js,ts,tsx,jsx,vue}": ["npm run lint:fix"],
  "*.{css,vue}": ["npm run lint:style"],
};
