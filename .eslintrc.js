module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/require-prop-type-constructor": "off",
    "no-unused-vars": "warn",
    "no-undef": "off",
    "no-unused-vars": "off",
    "vue/no-unused-vars": "off",
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};
