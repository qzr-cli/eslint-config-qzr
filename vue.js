/**
 * @Date         : 2021-03-19 14:54:27
 * @Description  : vue eslint基本配置
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2021-03-19 14:56:37
 */

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 12,
  },
  globals: {},
  rules: {
    // vue eslint规则 https://eslint.vuejs.org/rules/
  
    'vue/html-closing-bracket-newline': [ // 在标签的右括号之前要求或禁止换行
      'error',
      {
        singleline: 'never',  // 单行元素的配置。如果该元素没有属性或最后一个属性与左括号在同一行，则它是单行元素。
        multiline: 'never', // 多行元素的配置。如果最后一个属性不在左括号的同一行，则为多行元素。
      },
    ],
    'vue/singleline-html-element-content-newline': [  // 在单行元素的内容之前和之后需要换行
      'off',
      {
        ignoreWhenNoAttributes: true, // 当给定元素没有属性时，允许将内容放在一行中。默认true
        ignoreWhenEmpty: true, // 在元素没有内容时禁用报告。默认true
      },
    ],
    'vue/max-attributes-per-line': ['error', {  // 强制每行的最大属性数
      'singleline': 1,  // 当开始标记在一行中时，每行的最大属性数。默认值为1
      'multiline': {
        'max': 1, // 当开始标记位于多行中时，每行的最大属性数。默认值为1。如果您不配置属性{ multiline: 1 }，{ multiline: { max: 1 }}则可以代替allowFirstLine。
        'allowFirstLine': true  // 如果为true，则允许属性与该标记名称位于同一行。默认值为false
      }
    }],
    'vue/multiline-html-element-content-newline': ['off', {
      'ignoreWhenEmpty': true, // 在元素没有内容时禁用报告。默认true
      'ignores': [],  // 元素名称的配置可忽略换行符样式。默认["pre", "textarea", ...INLINE_ELEMENTS]
      'allowEmptyLines': false  // 如果为true，则允许内容周围有空行。如果要禁止多个空行，请组合使用no-multiple-empty-lines。默认false
    }],
    'vue/order-in-components': ['error', {  // 强制组件中的属性顺序
      'order': [
        'el',
        'name',
        'key',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        ['provide', 'inject'],
        'ROUTER_GUARDS',
        'layout',
        'middleware',
        'validate',
        'scrollToTop',
        'transition',
        'loading',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'emits',
        'setup',
        'asyncData',
        'data',
        'fetch',
        'head',
        'computed',
        'watch',
        'watchQuery',
        'methods',
        'LIFECYCLE_HOOKS',
        ['template', 'render'],
        'renderError'
      ]
    }],
  }
}
