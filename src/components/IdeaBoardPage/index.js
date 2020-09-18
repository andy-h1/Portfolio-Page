import React, { useState, useEffect } from 'react';
import { IdeaCard } from '../IdeaCard';
import * as S from './styles';

export const IdeaBoardPage = () => {
  const [values, setValues] = useState({
    title: localStorage.getItem('titleLocalStorage' || ''),
    description: localStorage.getItem('descriptionLocalStorage' || '')
  });
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  const [addCard, setaddCard] = useState(false);

  // const handleFocus = (event) => {
  //   if (addCard === true) {
  //     event.target.focus();
  //   }
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleAddCard = () => {
    setaddCard(!addCard);
  };

  const handleAddList = () => {
    console.log('clicked!');
  };

  useEffect(() => {
    // const obj = JSON.stringify(values);
    localStorage.setItem('titleLocalStorage', values.title);
    localStorage.setItem('descriptionLocalStorage', values.description);
  }, [values]);

  return (
    <div>
      <h2>Idea Board</h2>
      <button type="button" onClick={handleAddList}>
        + Add List
      </button>
      <button type="button" onClick={handleAddCard}>
        + Add card
      </button>

      {addCard && (
        <S.Form autoComplete="off">
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
          <button type="submit">Add card</button>
        </S.Form>
      )}

      {values &&
        Object.entries(values).map((card) => (
          <IdeaCard
            id={card.id}
            title={values.title}
            description={card.values.description}
          />
        ))}
    </div>
  );
};

// Idea board with editable tiles
// Each tile must contain - title/description/time created and/or updated
// Create new ideas - button to add a new tile
// Edit exisiting ideas - able to edit tile onClick
// Delete tiles
