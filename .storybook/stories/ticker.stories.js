import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number, array, object } from '@storybook/addon-knobs';
import markdownNotes from 'unify-react-mobile/build/Ticker/Ticker.md';
import Ticker from 'unify-react-mobile/build/Ticker';
import Tips from 'unify-react-mobile/build/Tips';

const tickerStories = storiesOf('Components/Ticker', module);

tickerStories.addDecorator(withKnobs);

tickerStories.add(
  'Default',
  () => {
    const additional = array('additional', ['Only works when there is a single item', 'Please no more than 2 lines']);
    const auto = boolean('auto', false);
    const error = boolean('error', false);
    const full = boolean('full', false);
    const indexActive = number('indexActive', 0);
    const slideDuration = number('slideDuration', 5000);
    const warning = boolean('warning', false);
    const onClick = action('onClick Ticker event');
    const onClose = action('onClose Ticker event');
    const onSwipe = action('onSwipe Ticker event');
    const items = object('items', [
      {
        title: 'Insert title',
        text: 'Insert text',
        action: 'actionText',
        actionLink: 'insert function',
      },
      { title: 'Insert title', warning: true, text: 'Insert text', action: 'actionText', actionLink: '#' },
      { title: 'Insert title', error: true, text: 'Insert text', action: 'actionText', actionLink: '#' },
      { title: 'Insert title', info: true, text: 'Insert text', action: 'actionText', actionLink: '#' },
    ]);

    const props = {
      additional,
      auto,
      error,
      full,
      indexActive,
      slideDuration,
      warning,
      items,
      onClick,
      onClose,
      onSwipe,
    };

    return (
      <React.Fragment>
        <Tips>
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>
        <div className="container">
          <div className="section">
            <h2 className="section__title">Ticker</h2>
          </div>
        </div>
        <Ticker {...props} />
      </React.Fragment>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

tickerStories.add(
  'Variation Examples',
  () => {
    const props = {
      error: true,
      items: [
        {
          title: 'Fixed Title',
          text: <div>WOI</div>,
        },
      ],
    };
    const props2 = {
      additional: ['Ticker description. Please put it here. No more than 2 lines', 'asdasdasd'],
      items: [{ title: 'Fixed Title', text: 'Fixed text', info: true }],
    };
    const props3 = {
      full: true,
      items: [{ title: 'Fixed Title', text: 'Fixed text' }],
    };

    return (
      <div className="container">
        <div className="section">
          <h2 className="section__title">Single Item with Error Design</h2>
          <Ticker {...props} />
        </div>
        <div className="section">
          <h2 className="section__title">Single Item with Additional Info</h2>
          <Ticker {...props2} />
        </div>
        <div className="section">
          <h2 className="section__title">Full</h2>
          <Ticker {...props3} />
        </div>
      </div>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);
