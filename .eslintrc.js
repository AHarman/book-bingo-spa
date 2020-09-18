module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended'
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
        'jsx-a11y'
    ],
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            'jsx': true
        }
    },
    rules: {
        indent: ['error', 4],
        quotes: ['error', 'single'],
        'no-var': "error",
        'prefer-const': "warn",
        'comma-dangle': ['warn', 'never'],
        'semi': 'error',
        'no-console': 'warn',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
        ],
        '@typescript-eslint/explicit-function-return-type': 'warn',
        'no-empty': 'warn',
    },
    settings: {
        react: {
            version: 'detect',
        },
        // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
        linkComponents: [
            'Hyperlink',
            { name: 'Link', linkAttribute: 'to' }
        ]
    }
};