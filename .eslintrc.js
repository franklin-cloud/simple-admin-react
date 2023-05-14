module.exports = {
  parser: "@typescript-eslint/parser", // 指定解析器
  extends: [
    "plugin:react/recommended", // @eslint-plugin-react 的推荐规则
    "plugin:@typescript-eslint/recommended", // @typescript-eslint/eslint-plugin的推荐规则
    "plugin:prettier/recommended", // 使用eslint-config-prettier 来禁用eslint插件的格式化规则
  ],
  parserOptions: {
    ecmaVersion: 2020, // 允许解析最新的特性
    sourceType: "module", // 允许使用 import
    ecmaFeatures: {
      jsx: true, // 允许对JSX进行解析
    },
  },
  rules: {},
  settings: {
    react: {
      version: "detect", // 告诉eslint-plugin-react 自动检测 React的版本
    },
  },
};
