import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

/**
 * Component(s)
 */
import Button from 'unify-react-mobile/build/Button';
import Tips from 'unify-react-mobile/build/Tips';

/**
 * Notes
 */
import README from 'unify-react-mobile/build/Button/Button.md';

/**
 * Storybook Constructor
 */
const buttonStories = storiesOf('Components/Button', module);

/**
 * Storybook Decorator
 */
buttonStories.addDecorator(withKnobs);

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

buttonStories.add(
  'Default',
  () => {
    const children = text('children', 'OK');
    const disabled = boolean('disabled', false);
    const image = text('image', '');
    const inverted = boolean('inverted', false);
    const loading = boolean('loading', false);
    const padding = text('padding', '0 16px');
    const color = select('Variant Color', ['alternate', 'main', 'transaction'], 'none');
    const display = select('Variant Display', ['normal', 'block', 'floating'], 'normal');
    const size = select('Variant Size', ['large', 'medium', 'small', 'micro'], 'medium');
    const type = select('Variant Type', ['filled', 'ghost', 'text'], 'text');

    return (
      <Fragment>
        <Tips>
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>

        <div style={{ padding: '0 16px' }}>
          <h2 className="section__title">Button</h2>
          <Button
            alternate={color === 'alternate' ? true : false}
            block={display === 'block' ? true : false}
            disabled={disabled}
            filled={type === 'filled' ? true : false}
            floating={display === 'floating' ? true : false}
            ghost={type === 'ghost' ? true : false}
            image={image}
            inverted={inverted}
            large={size === 'large' ? true : false}
            loading={loading}
            padding={padding}
            main={color === 'main' ? true : false}
            micro={size === 'micro' ? true : false}
            small={size === 'small' ? true : false}
            text={type === 'text' ? true : false}
            transaction={color === 'transaction' ? true : false}
            onClick={() => console.log('hooray!')}
          >
            {children}
          </Button>
        </div>
      </Fragment>
    );
  },
  storyOptions,
);

buttonStories.add('All', () => {
  return (
    <div className="container" style={{ display: 'grid', gap: 4 }}>
      {['micro', 'small', 'medium', "large"].map(size => {
        const props = { [size]: true };

        return (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
            <Button ghost main {...props}>Button</Button>
            <Button ghost transaction {...props}>Button</Button>
            <Button ghost alternate {...props}>Button</Button>
            <Button filled main {...props}>Button</Button>
            <Button filled transaction {...props}>Button</Button>
            <Button text {...props}>Button</Button>
            <Button filled disabled {...props}>Button</Button>
          </div>
        )
      })}
    </div>
  )
}, storyOptions)