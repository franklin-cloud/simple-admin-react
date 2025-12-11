/**
 * plugins eslint校验规则的增强，当我们想要运用插件里的某个规则时，先配置插件，然后在rules里配置相应的规则
 * extends 能让我们直接使用别人配置好的规则
 */
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
  overrides: [
    {
      files: ["*.d.ts"],
      rules: {
        "@typescript-eslint/triple-slash-reference": "off",
      },
    },
  ],
};
