const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`./src/templates/post.js`);

  const res = await graphql(`
    query {
      allContentfulBlogPost(sort: {fields: createdAt, order: ASC}) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  const posts = res.data.allContentfulBlogPost.edges;
  posts.forEach(({ node }, idx) => {

    createPage({
      component: postTemplate,
      path: `/blog/${node.slug}`,
      context: {
        slug: node.slug,
        prev: idx === 0 ? null : posts[idx-1].node,
        next: idx === (posts.length - 1) ? null : posts[idx+1].node
      }
    })
  });
}