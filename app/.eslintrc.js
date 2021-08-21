module.exports = {
    env: {
        commonjs: true,
        node: true,
        browser: true,
        es6: true,
        jest: true,
    },
    extends: ["eslint:recommended"],
    globals: {},
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["import"],
    rules: {
        "no-unused-vars": "off"
    }
};
