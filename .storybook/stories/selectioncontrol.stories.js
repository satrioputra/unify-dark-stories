import React, { Component, Fragment } from 'react';
import { bool } from 'prop-types';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import radioMarkdownNotes from 'unify-react-mobile/build/Radio/Radio.md';
import toggleMarkdownNotes from 'unify-react-mobile/build/Toggle/Toggle.md';
import checkboxMarkdownNotes from 'unify-react-mobile/build/Checkbox/Checkbox.md';

import Checkbox from 'unify-react-mobile/build/Checkbox';
import Radio from 'unify-react-mobile/build/Radio';
import Toggle from 'unify-react-mobile/build/Toggle';
import Tips from 'unify-react-mobile/build/Tips';

const checkboxStories = storiesOf('Components/Checkbox', module);
const radioStories = storiesOf('Components/Radio', module);
const toggleStories = storiesOf('Components/Toggle', module);

toggleStories.addDecorator(withKnobs);
checkboxStories.addDecorator(withKnobs);
radioStories.addDecorator(withKnobs);

const toggledStateHOC = WrappedComponent => {
  class HOC extends React.Component {
    state = {
      checked: false,
    };

    handleToggleState = () => {
      console.log('toggled');
      this.setState(({ checked }) => ({ checked: !checked }));
      action('onChange');
    };
    render() {
      return <WrappedComponent {...this.props} checked={this.state.checked} onClick={this.handleToggleState} />;
    }
  }

  return HOC;
};

class RadioStateful extends Component {
  static propTypes = {
    disabled: bool,
  };

  state = {
    checked: 'opt1',
  };

  handleChange = e => {
    this.setState({ checked: e.target.value });
    action('onChange');
  };

  render() {
    const { disabled } = this.props;

    return (
      <>
        <Radio value="opt1" disabled={disabled} checked={this.state.checked === 'opt1'} onChange={this.handleChange} />{' '}
        <Radio value="opt2" disabled={disabled} checked={this.state.checked === 'opt2'} onChange={this.handleChange} />
      </>
    );
  }
}

const Checkboxes = toggledStateHOC(Checkbox);
const Toggles = toggledStateHOC(Toggle);

checkboxStories.add('Default', () => {
  const disabled = boolean('Disabled props', false);
  const indeterminate = boolean('indeterminate props', false);

  return (
    <div style={{ padding: '16px' }}>
      <Tips margin="0 0 16px">
        Change to Knobs tab on addon panel to dynamically interaction.
      </Tips>
      <h2 className="section__title">Checkbox</h2>

      <Checkboxes
        useLabel
        disabled={disabled}
        indeterminate={indeterminate}
      />
    </div>
  )
}, {
  notes: { markdown: checkboxMarkdownNotes }
});

radioStories.add('Default', () => {
  const disabled = boolean('Disabled props', false);

  return (
    <div style={{ padding: '16px' }}>
      <Tips margin="0 0 16px">
        Change to Knobs tab on addon panel to dynamically interaction.
      </Tips>
      <h2 className="section__title">Radio</h2>

      <RadioStateful disabled={disabled} />
    </div>
  )
}, {
  notes: { markdown: radioMarkdownNotes }
});

toggleStories.add('Default', () => {
  const disabled = boolean('Disabled props', false);

  const prependText = text('prependText', 'prependText');
  const appendText = text('appendText', 'appendText');

  const prependTextOn = boolean('with prependText props', false);
  const appendTextOn = boolean('with appendText props', false);

  const props = {
    disabled: disabled
  }

  if (prependTextOn) {
    props.prependText = prependText;
  }

  if (appendTextOn) {
    props.appendText = appendText;
  }

  return (
    <div style={{ padding: '16px' }}>
      <Tips margin="0 0 16px">
        Change to Knobs tab on addon panel to dynamically interaction.
      </Tips>
      <h2 className="section__title">Toggle</h2>

      <Toggles {...props} />
    </div>
  )
}, {
  notes: { markdown: toggleMarkdownNotes }
});
