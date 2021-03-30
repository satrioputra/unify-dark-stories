import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import markdownNotes from 'unify-react-mobile/build/Link/Link.md';
import Link from 'unify-react-mobile/build/Link';
import Tips from 'unify-react-mobile/build/Tips';

const linkStories = storiesOf('Principles/Link', module);

linkStories.addDecorator(withKnobs);

linkStories.add(
  'Default',
  () => {
    const children = text('children', 'Insert Text Here');
    const fontSize = number('fontSize', 12);
    const large = boolean('large', false);
    const small = boolean('small', false);
    const onClick = action('onClick event');

    const props = { children, fontSize, large, small, onClick };

    return (
      <React.Fragment>
        <Tips>
          Switch to <b>Knobs</b> tab on addon panel to dynamically interact with props.
        </Tips>
        <div className="container">
          <div className="section">
            <h2 className="section__title">Link</h2>
          </div>
          <Link {...props} />
        </div>
      </React.Fragment>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);
