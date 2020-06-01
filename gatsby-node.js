/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

const wpPostTemplate = path.resolve(`src/templates/blog/post.js`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const wpQuery = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            id
            slug
            title
            excerpt
            featured_media {
              localFile {
                id
                childImageSharp {
                  fixed {
                    srcWebp
                    originalName
                    src
                    srcSet
                  }
                }
              }
            }
            content
          }
        }
      }
    }
  `);

  if (wpQuery.errors) {
    console.error(wpQuery.errors);
    throw wpQuery.errors;
  }

  wpQuery.data.allWordpressPost.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: wpPostTemplate,
      context: {
        node,
      },
    });
  });
};
