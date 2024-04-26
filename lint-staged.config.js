const config = {
  "*": "npm run lint:format",
  "*.{js,ts,tsx,jsx,vue}": ["npm run lint"],
};

export default config;
