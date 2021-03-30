import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, number, select, text } from '@storybook/addon-knobs';

/**
 * Component(s)
 */
import Label from 'unify-react-mobile/build/Label';
import Tips from 'unify-react-mobile/build/Tips';

/**
 * Notes
 */
import README from 'unify-react-mobile/build/Label/Label.md';

/**
 * Storybook Constructor
 */
const labelStories = storiesOf('Components/Label', module);

/**
 * Storybook Decorator
 */
labelStories.addDecorator(withKnobs);

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

labelStories.add(
  'Default',
  () => {
    const backgroundColor = text('backgroundColor', '#42B549');
    const children = text('children', 'Unify label is awesome');
    const color = text('color', '#FFF');
    const icon = select('Variant Icon', ['none', 'cashback', 'time'], 'none');
    const size = select('Variant Size', ['large', 'medium', 'small'], 'small');

    return (
      <div className="container">
        <Tips margin="16px 0px">
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>
        <div className="section">
          <h2 className="section__title">Label</h2>

          <Label
            backgroundColor={backgroundColor}
            cashback={icon === 'cashback' ? true : false}
            color={color}
            large={size === 'large' ? true : false}
            medium={size === 'medium' ? true : false}
            small={size === 'small' ? true : false}
            time={icon === 'time' ? true : false}
          >
            {children}
          </Label>
        </div>
      </div>
    );
  },
  storyOptions,
);

labelStories.add(
  'with Progress',
  () => {
    const backgroundColor = text('backgroundColor', '#FFEAEF');
    const children = text('children', 'Unify label is awesome');
    const color = text('color', '#FF5C84');
    const progress = number('progress', 27);
    const icon = select('Variant Icon', ['none', 'cashback', 'time'], 'none');
    const size = select('Variant Size', ['large', 'medium', 'small'], 'small');

    return (
      <div className="container">
        <Tips margin="16px 0px">
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>
        <div className="section">
          <h2 className="section__title">Label with Progress</h2>

          <Label
            backgroundColor={backgroundColor}
            cashback={icon === 'cashback' ? true : false}
            color={color}
            large={size === 'large' ? true : false}
            medium={size === 'medium' ? true : false}
            progress={progress}
            small={size === 'small' ? true : false}
            time={icon === 'time' ? true : false}
          >
            {children}
          </Label>
        </div>
      </div>
    );
  },
  storyOptions,
);
