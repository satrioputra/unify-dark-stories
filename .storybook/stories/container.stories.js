import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

/**
 * Component(s)
 */
import Card from 'unify-react-mobile/build/Card';
import Container from 'unify-react-mobile/build/Container';
import Tips from 'unify-react-mobile/build/Tips';

/**
 * Notes
 */
import README from 'unify-react-mobile/build/Container/Container.md';

/**
 * Storybook Constructor
 */
const containerStories = storiesOf('Components/Container', module);

/**
 * Storybook Decorator
 */
containerStories.addDecorator(withKnobs);

/**
 * Other(s)
 */
const storyOptions = {
  knobs: {
    // escapeHTML: false
  },

  notes: {
    markdown: README,
  },
};

containerStories.add(
  'Default',
  () => {
    const backgroundColor = text('backgroundColor', '#EBFFEF');
    const padding = text('padding', '16px');
    const test = text('Text', 'Card inside Container');

    return (
      <Fragment>
        <Tips>
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>

        <div className="container">
          <h2 className="section__title">Container</h2>
        </div>

        <Container backgroundColor={backgroundColor} padding={padding}>
          <Card style={{ height: '250px' }}>
            <p>{test}</p>
          </Card>
        </Container>
      </Fragment>
    );
  },
  storyOptions,
);
