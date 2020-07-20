// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createFilePath } = require(`gatsby-source-filesystem`);
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require(`path`);

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type Authors {
      firstname: String
      lastname: String
    }
    
    type MdxFrontmatter {
      title: String!
      date: Date!
      field: String!
      area: String!
      slug: String!
      category: String!
      tags: [String]!
      draft: Boolean!
      authors: Authors
      book: String
    }
  `;
  createTypes(typeDefs);
};

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
  const articles = await graphql(`
    {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: {
          frontmatter: { draft: { eq: false } }
          fileAbsolutePath: { regex: "/(articles)/.*(mdx?)$/" }
        }
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
  if (articles.errors) {
    reporter.panicOnBuild(`🚨  ERROR: Loading "createPages" query`);
  }

  const glossary = await graphql(`
    {
      allMdx(
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/(glossary)/.*(mdx?)$/" } }
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

  if (glossary.errors) {
    reporter.panicOnBuild(`🚨  ERROR: Loading "createPages" query`);
  }

  // Create blog post pages.
  const posts = articles.data.allMdx.edges;
  const terms = glossary.data.allMdx.edges;

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

  terms.forEach(({ node }, index) => {
    const { slug } = node.frontmatter;
    createPage({
      path: `${slug}`,
      // This component will wrap our MDX content
      component: path.resolve(`./src/layout/GlossaryPage.tsx`),
      // You can use the values in this context in
      // our page layout component
      context: { slug },
    });
  });
};
