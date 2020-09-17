import React, { useState } from 'react';
import { IdeaCard } from '../IdeaCard';
import * as S from './styles';

export const IdeaBoardPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [addCard, setaddCard] = useState(false);

  const handleFocus = (event) => {
    if (addCard === true) {
      event.target.focus();
    }
  };

  const handleClick = () => {
    setaddCard(!addCard);
    handleFocus();
  };

  const handleList = () => {
    console.log('clicked!');
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };

  const handleDescChange = (event) => {
    setDescription(event.target.value);
    console.log(description);
  };

  return (
    <div>
      <h2>Idea Board</h2>
      <button type="button" onClick={handleList}>
        + Add List
      </button>
      <button type="button" onClick={handleClick}>
        + Add card
      </button>

      {addCard && (
        <S.Form autoComplete="off">
          <label htmlFor="title">
            <input
              name="title"
              type="text"
              placeholder="Idea title"
              onChange={handleTitleChange}
              value={title}
            />
          </label>
          <label htmlFor="description">
            <textarea
              name="description"
              type="text-area"
              placeholder="What's the big idea..."
              onChange={handleDescChange}
              values={description}
            />
          </label>
        </S.Form>
      )}
      <IdeaCard />
    </div>
  );
};

// Idea board with editable tiles
// Each tile must contain - title/description/time created and/or updated
// Create new ideas - button to add a new tile
// Edit exisiting ideas - able to edit tile onClick
// Delete tiles
