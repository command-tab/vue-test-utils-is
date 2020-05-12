module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true // Makes eslint not error about globals like `describe` and `expect` in tests
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  // Custom global eslint rules ('off', 'warn', or 'error')
  rules: {
    'vue/order-in-components': 'off',
    'vue/attributes-order': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'spaced-comment': 'off',
    'no-console': 'off',
    'vue/no-v-html': 'off',
    'vue/max-attributes-per-line': 'off'
  }
}
