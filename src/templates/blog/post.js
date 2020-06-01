import React from 'react';

const Post = data => {
  const { title, content } = data.pageContext.node;

  return (
    <div>
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Post;

