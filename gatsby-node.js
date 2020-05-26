const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`./src/templates/post.js`);

  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  res.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    createPage({
      component: postTemplate,
      path: `/blog/${node.slug}`,
      context: {
        slug: node.slug
      }
    })
  });
}