module.exports = {
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{css,less}": ["stylelint --fix", "prettier --write"],
  "*.{md,json}": ["prettier --write"],
};
