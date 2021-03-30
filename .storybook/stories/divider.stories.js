import React from "react";

import { storiesOf } from '@storybook/react';
import markdownNotes from 'unify-react-mobile/build/Divider/Divider.md';

import Divider from 'unify-react-mobile/build/Divider';

const dividerStories = storiesOf('Components/Divider', module);

dividerStories.add('Default', () => (
  <div>
    <div className="container">
      <h2 className="section__title">Divider</h2>
    </div>
    <Divider />
  </div>
), {
  notes: { markdown: markdownNotes }
});
