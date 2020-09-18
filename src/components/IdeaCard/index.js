import React from 'react';
import { string } from 'prop-types';

export const IdeaCard = ({ title, description }) => {
  console.log({ title });
  return (
    <div>
      <h3>Title:{title}</h3>
      <p>Description: {description}</p>
    </div>
  );
};

IdeaCard.propTypes = {
  title: string.isRequired,
  description: string.isRequired
};
