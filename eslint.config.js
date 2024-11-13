// eslint.config.js
import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';

export default [
	{
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		ignores: ['node_modules', 'dist', 'build', 'public'],
		rules: {
			semi: ['error', 'always'],
			quotes: ['error', 'single'],
			'max-len': ['warn', { code: 80 }],
			'react/prop-types': 'off',
			camelcase: ['error', { properties: 'never' }],
			'prefer-const': 'error',
			'no-var': 'error',
			'no-console': 'warn',
			'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
			'react/react-in-jsx-scope': 'off',
			'@typescript-eslint/no-unused-vars': ['warn'],
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-explicit-any': ['warn'],
			'@typescript-eslint/no-empty-function': ['warn'],
			'prettier/prettier': ['error'],
		},
		plugins: {
			react,
			'@typescript-eslint': tsEslint,
			prettier,
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
];
