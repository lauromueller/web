module.exports = {
  '*': () => {
    const tsc = 'yarn run tsc:check';
    const prettier = `yarn run prettier:fix`;
    const eslint = `yarn run lint`;
    const stylelint = `yarn run lint:css`;
    return [tsc, prettier, eslint, stylelint, 'git add'];
  },
};
