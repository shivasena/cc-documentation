const path = require("path");

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      query ArticlesQuery {
        allDatoCmsArticle {
          nodes {
            title
            id
          }
        }
      }
    `
  );

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create pages for each markdown file.
  const articleTemplate = path.resolve(`src/templates/article.js`);
  result.data.allDatoCmsArticle.nodes.forEach((node) => {
    const path = node.id;
    console.log(node);
    createPage({
      path,
      component: articleTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        pagePath: path,
        title: node.title,
        nodeData: node,
        id: node.id,
      },
    });
  });
};
