import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, boolean, object } from '@storybook/addon-knobs';

import Jigglypuff from '../assets/il_jigglypuff.png';

/**
 * Component(s)
 */
import ProgressBar from 'unify-react-mobile/build/ProgressBar';

/**
 * Notes
 */
import README from 'unify-react-mobile/build/ProgressBar/ProgressBar.md';

/**
 * Storybook Constructor
 */
const stories = storiesOf('Components/ProgressBar', module);

/**
 * Storybook Decorator
 */
stories.addDecorator(withKnobs);

/**
 * Other(s)
 */
const storyOptions = {
  notes: {
    markdown: README,
  },
};

stories.add('Default', () => {
  return (
    <div className="container">
      <section className="section">
        <h3 className="section__title">ProgressBar</h3>
        <p className="section__description">
          To interact with the elements, change to <code>Knobs</code> tab on the right.
        </p>
        <ProgressBar
          value={number('value', 70)}
          indicator={object('indicator', [
            '1gr',
            '2gr',
            '3gr',
            '4gr',
            {
              content: '5gr',
              position: 100
            }
          ])}
          sideIndicator={text('sideIndicator', '')}
          color={text('color', 'green')}
          size={text('size', 'medium')}
          backgroundColor={text('backgroundColor', '')}
          margin={text('margin', '')}
          padding={text('padding', '')}
        />
      </section>
    </div>
  )
}, storyOptions);

stories.add('Callback', () => {
  return (
    <div className="container">
      <section className="section">
        <h3 className="section__title">onChange</h3>
        <p className="section__description">
          This callback runs when the progress bar value is updated, it also return <b>current progress</b> and <b>previous progress</b> as parameter.
        </p>
        <p className="section__description">
          To see it, change to <code>Knobs</code> tab on the right, open your developer tools console,
          and set the <code>progress</code> value to 75 or above.
        </p>
        <ProgressBar
          value={number('value', 70)}
          indicator={[
            {
              content: (
                <>
                  <img
                    src={Jigglypuff}
                    alt=""
                    style={{
                      width: 30,
                      height: 30,
                      display: 'block',
                      margin: '0 auto 4px'
                    }} />
                  Jigglypuff!
                </>
              ),
              pointer: false,
              position: 75
            }
          ]}
          color={'#E3ABB5'}
          onChange={(progress, prevProgress) => {
            if (progress >= 75) {
              console.log(`Jigglypuff: Current progress is ${progress}, and previous progress is ${prevProgress}`);
            }
          }}
        />
      </section>
    </div>
  )
}, storyOptions);
