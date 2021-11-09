module.exports = {
    extends: ['airbnb', 'prettier'],
    env: {
        commonjs: true,
        node: true,
        mocha: true,
    },
    parser: 'babel-eslint',
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ['error'],
        radix: 0,
        eqeqeq: 0,
        'new-cap': 0,
        'no-empty': 0,
        'no-console': 0,
        'no-bitwise': 0,
        'func-names': 0,
        'no-continue': 0,
        'no-plusplus': 0,
        'no-sequences': 0,
        'default-case': 0,
        'guard-for-in': 0,
        'prefer-spread': 0,
        'global-require': 0,
        'no-await-in-loop': 0,
        'no-control-regex': 0,
        'object-shorthand': 0,
        'no-return-assign': 0,
        'consistent-return': 0,
        'no-nested-ternary': 0,
        'no-param-reassign': 0,
        'prefer-rest-params': 0,
        'no-use-before-define': 0,
        'no-restricted-syntax': 0,
        'no-underscore-dangle': 0,
        'prefer-destructuring': 0,
        'no-case-declarations': 0,
        'no-restricted-globals': 0,
        'array-callback-return': 0,
        'no-unused-expressions': 0,
        'import/no-dynamic-require': 0,
        'import/no-extraneous-dependencies': 0,
        'no-loop-func': 0,
        'no-proto': 1,
        'prefer-const': 1,
        'no-multi-assign': 1,
        'class-methods-use-this': 1,
        'import/no-unresolved': 1,
    },
}
