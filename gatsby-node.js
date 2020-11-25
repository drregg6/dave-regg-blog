const path = require('path');
const _ = require('lodash');
const PAGE_SIZE = 6;

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`./src/templates/post.js`);
  const blogTemplate = path.resolve(`./src/templates/blog.js`);
  const categoryTemplate = path.resolve(`./src/templates/category.js`)



  // Create Post page
  const postPages = await graphql(`
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
  const posts = postPages.data.allContentfulBlogPost.edges;
  posts.forEach(({ node }, idx) => {

    createPage({
      component: postTemplate,
      path: `/blog/post/${node.slug}`,
      context: {
        slug: node.slug,
        prev: idx === 0 ? null : posts[idx-1].node,
        next: idx === (posts.length - 1) ? null : posts[idx+1].node
      }
    })
  });



  // Create Blog page
  const blogPages = await graphql(`
    query {
      allContentfulBlogPost(
        sort: { fields: createdAt, order: DESC },
        limit: 1000
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);



  const blogPosts = blogPages.data.allContentfulBlogPost.edges;
  const blogChunks = _.chunk(blogPosts, PAGE_SIZE);
  blogChunks.forEach((_, idx) => {
    createPage({
      path: idx === 0 ? `/blog` : `/blog/page/${idx+1}`,
      component: blogTemplate,
      context: {
        limit: PAGE_SIZE,
        skip: idx * PAGE_SIZE,
        currentPage: idx+1,
        next: idx === blogChunks.length-1 ? null : `/blog/page/${idx+2}`,
        prev: idx === 0 ? null : idx === 1 ? `/blog` : `/blog/page/${idx}`
      }
    })
  })

  // Create Category Page
  const categoryPages = await graphql(`
    query {
      allContentfulBlogPost(sort: {fields: createdAt, order: ASC}) {
        edges {
          node {
            category
          }
        }
      }
    }
  `)
  const categoryPosts = categoryPages.data.allContentfulBlogPost.edges;
  categoryPosts.forEach(({ node }) => {
    createPage({
      path: `/blog/category/${node.category}`,
      component: categoryTemplate,
      context: {
        category: node.category
      }
    })
  });
}