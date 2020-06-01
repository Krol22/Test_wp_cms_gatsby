import React from 'react';
import { Link } from 'gatsby';

export const query = graphql`
  query Blog {
    allWordpressPost {
      edges {
        node {
          id
          slug
          title
          excerpt
        }
      }
    }
  }
`;

const Blog = ({ data }) => {
  return (
    <div>
      <ul>
        {data.allWordpressPost.edges.map(({ node }, i, arr) => (
          <li key={node.title}>
            <h4>
              [{i + 1}/{arr.length}] - {node.title}
            </h4>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            <Link to={`blog/${node.slug}`}>Read More</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blog;
