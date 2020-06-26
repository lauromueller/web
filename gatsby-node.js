// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createFilePath } = require(`gatsby-source-filesystem`);
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
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
  const posts = result.data.allMarkdownRemark.edges;
  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.frontmatter.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/layout/ArticlePage.tsx`),
      // You can use the values in this context in
      // our page layout component
      context: { slug: node.frontmatter.slug },
    });
  });
};
