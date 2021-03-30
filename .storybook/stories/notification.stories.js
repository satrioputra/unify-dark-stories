import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';

/**
 * Component(s)
 */
import Notification from 'unify-react-mobile/build/Notification';
import Tips from 'unify-react-mobile/build/Tips';

/**
 * Notes
 */
import README from 'unify-react-mobile/build/Notification/Notification.md';

/**
 * Storybook Constructor
 */
const notificationStories = storiesOf('Components/Notification', module);

/**
 * Storybook Decorator
 */
notificationStories.addDecorator(withKnobs);

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

notificationStories.add(
  'Primary',
  () => {
    return (
      <Fragment>
        <Tips>
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>

        <div style={{ padding: '0 16px' }}>
          <h2 className="section__title">Notification</h2>
          <Notification />
        </div>
      </Fragment>
    );
  },
  storyOptions,
);

notificationStories.add(
  'Secondary',
  () => {
    return (
      <Fragment>
        <Tips>
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>

        <div style={{ padding: '0 16px' }}>
          <h2 className="section__title">Notification</h2>
          <Notification secondary />
        </div>
      </Fragment>
    );
  },
  storyOptions,
);

notificationStories.add(
  'With Counter',
  () => {
    return (
      <Fragment>
        <Tips>
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>

        <div style={{ padding: '0 16px' }}>
          <h2 className="section__title">Notification</h2>
          <Notification>9</Notification> <br />
          <Notification>99</Notification> <br />
          <Notification>999</Notification>
        </div>
      </Fragment>
    );
  },
  storyOptions,
);

notificationStories.add(
  'Promo',
  () => {
    return (
      <Fragment>
        <Tips>
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>

        <div style={{ padding: '0 16px' }}>
          <h2 className="section__title">Notification</h2>
          <Notification promo />
        </div>
      </Fragment>
    );
  },
  storyOptions,
);

notificationStories.add(
  'New',
  () => {
    const lang = radios('lang', ['id', 'en'], 'id');

    return (
      <Fragment>
        <Tips>
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>

        <div style={{ padding: '0 16px' }}>
          <h2 className="section__title">Notification</h2>
          <Notification new lang={lang} />
        </div>
      </Fragment>
    );
  },
  storyOptions,
);
