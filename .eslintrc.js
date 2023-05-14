module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {},
  plugins: ["@typescript-eslint", "react", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended", // @eslint-plugin-react 的推荐规则
    "plugin:@typescript-eslint/recommended", // @typescript-eslint/eslint-plugin的推荐规则
    "plugin:import/typescript", // eslint-plugin-import 抛出导入等支持的规则
    "plugin:react-hooks/recommended", // eslint-plugin-react-hooks 的规则
    "plugin:prettier/recommended", // eslint-plugin-prettier 的推荐规则
  ],
  parser: "@typescript-eslint/parser", // 指定解析器
  parserOptions: {
    ecmaVersion: 6, // 允许解析那个版本的特性
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
