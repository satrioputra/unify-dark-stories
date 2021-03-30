import React, { Component, useState } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean, radios } from '@storybook/addon-knobs';
import markdownNotes from 'unify-react-mobile/build/TextField/TextField.md';

import TextField from 'unify-react-mobile/build/TextField';
import Tips from 'unify-react-mobile/build/Tips';

const textFieldStories = storiesOf('Components/TextField', module);

textFieldStories.addDecorator(withKnobs);

class TextFieldSuggestion extends Component {
  state = {
    text: '',
    message: '',
  };

  handleChange = e => {
    action('text changed');
    this.setState({ text: e.target.value });
  };

  handleKeyPress = e => {
    action('text changed');
    if (e.key === 'Enter') {
      this.setState({ message: 'Success' });
    }
  }

  handleSelect = e => {
    console.log(e.target.innerHTML);
  }

  render() {
    const suggestions = [
      { text: 'Stevanus Himawan', onSelect: () => {console.log('Stevanus Himawan')} },
      { text: 'Fritzki Darman', onSelect: () => {console.log('Fritzki Darman')} },
      { text: 'Zunio Benarivo', onSelect: () => {console.log('Zunio Benarivo')} },
      { text: 'Davin Iskandar', onSelect: () => {console.log('Davin Iskandar')} }
    ]

    return <TextField
      label={text('Label', 'Your label')}
      value={this.state.text}
      message={this.state.message}
      displaySuggestions
      suggestions={suggestions}
      onChange={this.handleChange}
      onKeyPress={this.handleKeyPress}/>;
  }
}

class TextFieldStateful extends Component {
  state = {
    text: '',
    message: '',
  };

  handleChange = e => {
    action('text changed');
    this.setState({ text: e.target.value });
    console.log(e.target.value);
  };

  // handleKeyPress = e => {
  //   action('text changed');
  //   if (e.key === 'Enter') {
  //     this.setState({ message: 'Success' });
  //   }
  // }

  // handleSelect = e => {
  //   console.log(e.target.innerHTML);
  // }

  render() {
    const { label, type, counter, message } = this.props;

    return <TextField
      label={label}
      counter={counter}
      type={type}
      value={this.state.text}
      message={message}
      onChange={this.handleChange}
      inlineLabel={boolean('inlineLabel', false)}
      {...this.props}
    />;
  }
}

textFieldStories.add('Default', () => {
  const otherState = {
    Default: '',
    Error: 'error',
    Success: 'success',
  }

  const otherType = {
    Text: 'text',
    Password: 'password',
    Number: 'number',
  }

  const otherCount = {
    Default: '',
    MaxLength: 'maxLength',
    Counter: 'counter',
  }

  const label = text('Label', 'Your label');
  const withMsg = boolean('With message / info', true);
  const msg = text('Message / info value', 'Your message here');

  const stateCount = radios('Count Type', otherCount, '');
  const counterVal = number('Count value', 10);

  const state = radios('States', otherState, '');
  const type = radios('Type', otherType, 'text');
  const disabledState = boolean('disabled props', false);
  const readonlyState = boolean('readonly props', false);

  return (
    <div style={{ padding: '16px' }}>
      <Tips margin="0">
        Change to Knobs tab on addon panel to dynamically interaction.
      </Tips>

      <TextFieldStateful
        label={label}
        placeholder={text('placeholder', '')}
        withoutAnimation={boolean('withoutAnimation props', false)}
        type={type}
        disabled={disabledState}
        readonly={readonlyState}
        success={state === 'success'}
        error={state === 'error'}
        message={withMsg && msg}
        counter={stateCount === 'counter' ? counterVal : null}
        maxLength={stateCount === 'maxLength' ? counterVal : null}
      />
    </div>
  )
}, {
  notes: { markdown: markdownNotes }
});

textFieldStories.add('With prependText props', () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => setValue(e.target.value);

  return (
    <div style={{ padding: '16px' }}>
      <Tips margin="0">Code snippets are in the Notes tab.</Tips>
      <TextField
        label={text('Label', 'Your label')}
        prependText={text('prependText', 'prependText')}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}, {
  notes: { markdown: markdownNotes }
});

textFieldStories.add('With prependObject props', () => {
  const label = text('Label', 'Your label');
  const exampleVal = <img alt="img" src="https://place-hold.it/38x24&text=Visa" />;

  return (
    <div style={{ padding: '16px' }}>
      <Tips margin="0">Code snippets are in the Notes tab.</Tips>

      <TextFieldStateful label={label} prependObject={exampleVal}/>
    </div>
  )
}, {
  notes: { markdown: markdownNotes }
});

textFieldStories.add('With appendText props', () => {
  const label = text('Label', 'Your label');
  const appendTextVal = text('appendText value', 'appendText');

  return (
    <div style={{ padding: '16px' }}>
      <Tips margin="0">Code snippets are in the Notes tab.</Tips>

      <TextFieldStateful label={label} appendText={appendTextVal}/>
    </div>
  )
}, {
  notes: { markdown: markdownNotes }
});

textFieldStories.add('With appendObject props', () => {
  const label = text('Label', 'Your label');
  const exampleVal = <img alt="img" src="https://place-hold.it/38x24&text=Visa" />;

  return (
    <div style={{ padding: '16px' }}>
      <Tips margin="0">Code snippets are in the Notes tab.</Tips>

      <TextFieldStateful label={label} appendObject={exampleVal}/>
    </div>
  )
}, {
  notes: { markdown: markdownNotes }
});

textFieldStories.add('With Suggestions', () => {
  const label = text('Label', 'Your label');

  return (
    <div style={{ padding: '16px' }}>
      <Tips margin="0">Code snippets are in the Notes tab.</Tips>

      <TextFieldSuggestion label={label}/>
    </div>
  )
}, {
  notes: { markdown: markdownNotes }
});
