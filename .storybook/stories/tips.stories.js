import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, radios } from '@storybook/addon-knobs';
import markdownNotes from 'unify-react-mobile/build/Tips/Tips.md';
import Tips from 'unify-react-mobile/build/Tips';

const tipsStories = storiesOf('Principles/Tips', module);

tipsStories.addDecorator(withKnobs);

tipsStories.add('Default', () => {
  const unitOfMeasure = {
    Pixel: 'px',
    Percentage: '%',
  };

  const children = text('children', 'Change to Knobs tab on addon panel to dynamically interaction.');
  const margin = number('margin', 0);
  const unit = radios('Unit', unitOfMeasure, 'px');

  return (
    <div style={{ padding: '16px' }}>
      <h2 className="section__title">Tips</h2>
      <Tips margin={`${margin}${unit}`}>
        {children}
      </Tips>
    </div>
  );
}, {
  notes: { markdown: markdownNotes },
});
