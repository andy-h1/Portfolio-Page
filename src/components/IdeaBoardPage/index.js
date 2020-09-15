import React, { useState } from 'react';
import { IdeaCard } from '../IdeaCard';

export const IdeaBoardPage = () => {
  const [values, setValues] = useState('');
  const [addCard, setaddCard] = useState(false);

  const handleClick = () => {
    setaddCard(!addCard);
  };

  const handleList = () => {
    console.log('clicked!');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
    console.log({ values });
  };
  return (
    <div>
      <h1>Idea Board</h1>
      <button type="button" onClick={handleList}>
        + Add List
      </button>
      <button type="button" onClick={handleClick}>
        + Add card
      </button>

      {addCard && (
        <form>
          <label htmlFor="title">
            <input
              name="title"
              type="text"
              placeholder="Idea title"
              onChange={handleChange}
              value={values.title}
            />
          </label>
          <label htmlFor="description">
            <textarea
              name="description"
              type="text-area"
              placeholder="What's the big idea..."
              onChange={handleChange}
              values={values.description}
            />
          </label>
        </form>
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
