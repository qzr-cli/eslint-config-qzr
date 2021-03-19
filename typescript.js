/**
 * @Date         : 2021-03-19 14:56:49
 * @Description  : typescript eslint配置
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2021-03-19 15:00:03
 */

module.exports = {
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser'
  },
  globals: {},
  rules: {
    // 可以使用any
    '@typescript-eslint/no-explicit-any': 'off',
    // 类型注解样式
    '@typescript-eslint/member-delimiter-style': [
      2,
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
  }
}
