import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

/**
 * Component(s)
 */
import OTPField from 'unify-react-mobile/build/OTPField';
import Button from 'unify-react-mobile/build/Button';

/**
 * Notes
 */
import README from 'unify-react-mobile/build/Card/Card.md';

/**
 * Storybook Constructor
 */
const otpStories = storiesOf('Components/OTPField', module);

/**
 * Storybook Decorator
 */
otpStories.addDecorator(withKnobs);

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

otpStories.add('Default', () => {
  const [value, setValue] = useState('');

  const handleChange = val => {
    setValue(val);
  };

  const darkMode = boolean('darkMode', false);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        backgroundColor: darkMode ? 'rgb(40, 41, 46)' : '#ffffff',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          color: darkMode ? '#fff' : 'rgba(49, 53, 59, 0.96)',
          fontSize: '20px',
          fontWeight: '800',
          fontFamily: 'Nunito Sans',
          fontStyle: 'normal',
        }}
      >
        OTPField Component
      </h2>
      <div
        style={{
          textAlign: 'center',
          fontSize: '14px',
          lineHeight: '20px',
          color: darkMode ? '#fff' : 'rgba(49, 53, 59, 0.68)',
          marginBottom: '32px',
        }}
      >
        Open the knobs to manipulate the props
      </div>
      <div style={{ textAlign: 'center' }}>
        <OTPField
          length={number('length', 5)}
          value={value}
          onChange={handleChange}
          numberOnly={boolean('numberOnly', false)}
          pinMode={boolean('pinMode', false)}
          error={boolean('error', false)}
          shouldAutoFocus={boolean('shouldAutoFocus', true)}
          disabled={boolean('disabled', false)}
          darkMode={darkMode}
        />
      </div>
      <Button filled main onClick={() => alert(value)} style={{ margin: '32px 16px 0', width: 'calc(100% - 32px)' }}>
        sumbit
      </Button>
    </div>
  );
});
