module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-refresh'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/strict',
    'plugin:jsdoc/recommended-typescript-error',
    'plugin:react-hooks/recommended',
  ],
  reportUnusedDisableDirectives: true,
  rules: {
    // ESLint - Possible Problems
    'array-callback-return': 'error',
    curly: ['error', 'all'],
    eqeqeq: ['error', 'always'],
    'no-constant-binary-expression': 'error',
    'no-constructor-return': 'error',
    'no-duplicate-imports': 'error',
    'no-new-native-nonconstructor': 'error',
    'no-promise-executor-return': 'error',
    'no-self-compare': 'error',
    'no-template-curly-in-string': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable-loop': 'error',
    'no-unused-private-class-members': 'error',

    // ESLint - Suggestions
    'consistent-return': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'guard-for-in': 'error',
    'no-array-constructor': 'error',
    'no-div-regex': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-floating-decimal': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-lonely-if': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-sequences': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    radix: 'error',

    // TypeScript+ESLint
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/consistent-generic-constructors': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-duplicate-type-constituents': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    '@typescript-eslint/no-mixed-enums': 'error',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',
    '@typescript-eslint/no-unsafe-enum-comparison': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-function-type': 'off', // Docusaurus doesn't play nice with function type style
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-return-this-type': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'off', // We must use @ts-ignore for optional dependencies in type definitions
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    // TypeScript extensions for base rules
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'error',

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],

    // React Refresh
    'react-refresh/only-export-components': 'warn',

    // Disable warnings from typescript-eslint:strict
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',

    // JSDoc
    'jsdoc/check-tag-names': [
      'error',
      {
        definedTags: ['category', 'experimental', 'ts-ignore'],
      },
    ],
    'jsdoc/require-hyphen-before-param-description': ['error', 'always'],
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/tag-lines': 'off',
  },
  ignorePatterns: [
    'coverage',
    'dist',
    'node_modules',
    'packages/**/dist/',
    'packages/docs/build/',
    'packages/docs/markdown-to-mdx.cjs',
    'packages/docs/docusaurus.config.js',
    'packages/docs/sidebars.js',
    'packages/eslint-config/index.cjs',
    'packages/expo-medplum-polyfills/build',
    'babel.config.js',
    'babel.config.cjs',
    'jest.sequencer.js',
    'package-lock.json',
    'postcss.config.cjs',
    'rollup.config.mjs',
    'webpack.config.js',
  ],
};
