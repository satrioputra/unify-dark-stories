import React from "react";

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import markdownNotes from 'unify-react-mobile/build/Wishlist/Wishlist.md';
import Wishlist from 'unify-react-mobile/build/Wishlist';
import Tips from 'unify-react-mobile/build/Tips';

const wishlistStories = storiesOf('Components/Wishlist', module);

wishlistStories.addDecorator(withKnobs);

wishlistStories.add('Default', () => {
  const func = boolean('onClick', false);

  return (
    <div className="container">
      <Tips margin="0 0 16px">
        Change to Knobs tab on addon panel to dynamically interaction.
      </Tips>
      <h2 className="section__title">Wishlist Button</h2>

      <Wishlist onClick={func ? () => alert('Wishlist with onClick') : undefined} />
    </div>
  )
}, {
  notes: { markdown: markdownNotes }
});
