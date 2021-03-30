import React, { PureComponent } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text, number, boolean } from '@storybook/addon-knobs';
import markdownNotes from 'unify-react-mobile/build/SearchBar/SearchBar.md';

import SearchBar from 'unify-react-mobile/build/SearchBar';
import Tips from 'unify-react-mobile/build/Tips';

const searchbarStories = storiesOf('Components/SearchBar', module);

searchbarStories.addDecorator(withKnobs);

searchbarStories.add(
  'Default',
  () => {
    const autoCapitalize = text('autoCapitalize', '');
    const autoComplete = number('autoComplete', '');
    const block = boolean('block', false);
    const camera = boolean('camera', false);
    const margin = text('margin', '');
    const placeholder = text('placeholder', '');
    const setRef = action('onSetRef event');
    const value = text('value', '');
    const onBlur = action('onBlur event');
    const onCameraClick = action('onCameraClick event');
    const onChange = action('onChange event');
    const onClear = action('onClear event');
    const onClick = action('onClick event');
    const onFocus = action('onFocus event');
    const onKeyDown = action('onKeyDown event');
    const onKeyPress = action('onKeyPress event');
    const onKeyUp = action('onKeyUp event');

    const props = {
      autoCapitalize,
      autoComplete,
      block,
      camera,
      margin,
      placeholder,
      setRef,
      value,
      onBlur,
      onCameraClick,
      onChange,
      onClear,
      onClick,
      onFocus,
      onKeyDown,
      onKeyPress,
      onKeyUp,
    };

    return (
      <React.Fragment>
        <Tips>
          Switch to <b>Knobs</b> tab on addon panel to dynamically interact with props.
        </Tips>
        <div className="container">
          <div className="section">
            <h2 className="section__title">SearchBar</h2>
          </div>
        </div>
        <SearchBar {...props} />
      </React.Fragment>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

class SearchbarStateful extends PureComponent {
  state = {
    value: '',
  };

  handleChange = e => {
    const { value } = e.target;

    this.setState({
      value: value,
    });

    action('onChange');
  };

  handleClear = () => {
    this.setState({
      value: '',
    });
    action('onClear');
  };

  setRef = node => {
    this.search = node;
    this.search && this.search.focus();
  };

  render() {
    const placeholder = text('placeholder', 'Search in Tokopedia');
    const autoComplete = select('autoComplete', ['on', 'off'], 'on');
    const autoCapitalize = select('autoCapitalize', ['none', 'sentences', 'words', 'characters'], 'sentences');

    return (
      <SearchBar
        setRef={this.setRef}
        placeholder={placeholder}
        value={this.state.value}
        onChange={this.handleChange}
        onClear={this.handleClear}
        // onClick={action('onClick')}
        // onInput={action('onInput')}
        // onKeyDown={action('onKeyDown')}
        // onKeyUp={action('onKeyUp')}
        // onKeyPress={action('onKeyPress')}
        autoComplete={autoComplete}
        autoCapitalize={autoCapitalize}
        {...this.props}
      />
    );
  }
}

searchbarStories.add(
  'Local',
  () => {
    return <SearchbarStateful camera onCameraClick={() => alert('camera clicked')} />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

searchbarStories.add(
  'With data-testId',
  () => {

    const iconCameraVal = text('dataTest iconCamera', 'btnHeaderSearchBarCamera');
    const txtInputVal = text('dataTest txtInput', 'txtHeaderSearchBar');

    return (
      <SearchbarStateful
        dataTest={{
          iconCamera: iconCameraVal,
          txtInput: txtInputVal,
        }}
        camera
      />
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);
