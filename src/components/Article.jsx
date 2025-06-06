import React from 'react';

function Article({ title, date, preview }) {
  const defaultDate = "January 1, 1970";
  const postDate = date || defaultDate;

  return (
    <article>
      <h3>{title}</h3>
      <small>{postDate}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;