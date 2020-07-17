// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createFilePath } = require(`gatsby-source-filesystem`);
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require(`path`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
              area
              field
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`🚨  ERROR: Loading "createPages" query`);
  }
  // Create blog post pages.
  const posts = result.data.allMdx.edges;

  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    const { area, field, slug } = node.frontmatter;
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: `${field}/${area}/${slug}`,
      // This component will wrap our MDX content
      component: path.resolve(`./src/layout/ArticlePage.tsx`),
      // You can use the values in this context in
      // our page layout component
      context: { field, area, slug },
    });
  });
};
