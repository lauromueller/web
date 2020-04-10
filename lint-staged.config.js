module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': filenames => {
    const tsc = 'yarn run tsc:check';
    const joinedFilenames = filenames.join(' ');
    const prettier = `yarn run prettier:fix ${joinedFilenames}`;
    const eslint = `yarn run lint ${joinedFilenames}`;
    const stylelint = `yarn run stylelint ${joinedFilenames}`;
    return [tsc, prettier, eslint, stylelint];
  },
};
