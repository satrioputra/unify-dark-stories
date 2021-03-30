import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import markdownNotes from 'unify-react-mobile/build/BottomNav/BottomNav.md';
import BottomNav from 'unify-react-mobile/build/BottomNav';
import Tips from 'unify-react-mobile/build/Tips';

import ic_home from '../assets/ic_home.svg';
import ic_feed from '../assets/ic_feed.svg';
import ic_brand from '../assets/ic_brand.svg';
import ic_account from '../assets/ic_account.svg';

const bottomnavStories = storiesOf('Compositions/Bottom Navigation', module);

bottomnavStories.addDecorator(withKnobs);

bottomnavStories.add(
  'Default',
  () => {
    const indexActive = number('indexActive', 0);
    const items = object('items', [
      {
        key: 0,
        icon: ic_home,
        iconActive: ic_home,
        text: 'Home',
        onClick: action('onClick event item 0'),
        props: {
          'data-cy': 'test',
        },
      },
      {
        key: 1,
        icon: ic_feed,
        iconActive: ic_home,
        text: 'Feed',
        onClick: action('onClick event item 1'),
        notification: true,
        count: 10,
      },
      {
        key: 2,
        icon: ic_brand,
        iconActive: ic_home,
        text: 'Brand',
        onClick: action('onClick event item 2'),
        count: 20,
      },
      {
        key: 3,
        icon: ic_account,
        iconActive: ic_home,
        text: 'Keranjang',
        onClick: action('onClick event item 3'),
        count: 5,
      },
      {
        key: 4,
        icon: ic_account,
        iconActive: ic_home,
        text: 'Akun',
        onClick: action('onClick event item 4'),
      },
    ]);
    const noWrapper = boolean('noWrapper', false);

    const props = { indexActive, items, noWrapper };

    return (
      <React.Fragment>
        <Tips>
          Switch to <b>Knobs</b> tab on addon panel to dynamically interact with props.
        </Tips>
        <div className="container">
          <div className="section">
            <h2 className="section__title">BottomNav</h2>
          </div>
          <BottomNav {...props} />
        </div>
      </React.Fragment>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

bottomnavStories.add(
  'Example',
  () => {
    return (
      <BottomNav
        indexActive={0}
        items={[
          {
            key: 0,
            icon: ic_home,
            iconActive: ic_home,
            text: 'Home',
            onClick: () => console.log(0),
            props: {
              'data-cy': 'test',
            },
          },
          {
            key: 1,
            icon: ic_feed,
            iconActive: ic_home,
            text: 'Feed',
            onClick: () => console.log(1),
            notification: true,
            count: 10,
          },
          {
            key: 2,
            icon: ic_brand,
            iconActive: ic_home,
            text: 'Brand',
            onClick: () => console.log(2),
            count: 20,
          },
          {
            key: 3,
            icon: ic_account,
            iconActive: ic_home,
            text: 'Keranjang',
            onClick: () => console.log(3),
            count: 5,
          },
          {
            key: 4,
            icon: ic_account,
            iconActive: ic_home,
            text: 'Akun',
            onClick: () => console.log(4),
          },
        ]}
      />
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);
