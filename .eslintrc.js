module.exports = {
    env: {
    browser: true,
    es2021: true,
    'vitest/globals': true, // Permite usar describe, it, expect como globales
  },
  extends: [
    'next',
    'next/core-web-vitals',
    'airbnb-base',
    'prettier',
  ],
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',
        'import/extensions': 'off', // Ignorar extensiones explícitas
    'import/no-unresolved': 'off', 
  },
};
