module.exports = {
  '**/*.ts?(x)': () => 'npm run type-check',
  // Run ESLint on modified JavaScript/TypeScript files
  '**/*.(ts|js)?(x)': (filenames) => `npm run lint ${filenames.join(' ')}`,
};
