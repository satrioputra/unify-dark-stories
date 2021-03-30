import React, { PureComponent } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, radios } from '@storybook/addon-knobs';
import markdownNotes from 'unify-react-mobile/build/Select/Select.md';

import Select from 'unify-react-mobile/build/Select';
import Tips from 'unify-react-mobile/build/Tips';

const selectStories = storiesOf('Components/Select', module);

selectStories.addDecorator(withKnobs);

const items = [{ name: 'Zunio' }, { name: 'Boy' }, { name: 'Stev' }];

class SelectStateful extends PureComponent {
  state = {
    selectedVal: '',
    listItems: [...items],
  };

  handleChange = e => {
    const { value } = e;

    this.setState({
      selectedVal: value,
    });

    console.log('z');

    action('onChange');
  };

  render() {
    return (
      <Select
        selectedOption={this.state.selectedVal}
        onFocus={action('onFocus')}
        onBlur={action('onBlur')}
        onChange={this.handleChange}
        {...this.props}
      >
        {this.state.listItems.map(i => (
          <option key={i.name} value={i.name}>
            {i.name}
          </option>
        ))}
      </Select>
    );
  }
}

class SelectWithSearchStateful extends PureComponent {
  state = {
    selectedVal: '',
    searchbarValue: '',
    listItems: [...items],
  };

  handleOptsClick = val => {
    this.setState({
      selectedVal: val,
    });
  };

  filterItems = (array, query) =>
    array.filter(o =>
      Object.values(o).some(val =>
        String(val)
          .toLowerCase()
          .includes(query.toLowerCase()),
      ),
    );

  handleSearchChange = e => {
    const { value } = e.target;

    this.setState({
      searchbarValue: value,
      listItems: this.filterItems(items, value),
    });
    action('onSearchChange');
  };

  handleClear = () => {
    this.setState({
      searchbarValue: '',
    });
  };

  handleBlur = () => {
    console.log('onBlur is running');
  }

  render() {
    return (
      <Select
        searchbarValue={this.state.searchbarValue}
        selectedOption={this.state.selectedVal}
        onBlur={this.handleBlur}
        onChange={action('onChange')}
        onClear={this.handleClear}
        onFocus={action('onFocus')}
        onSearchChange={this.handleSearchChange}
        {...this.props}
      >
        {this.state.listItems.map(i => (
          <option key={i.name} value={i.name} onClick={() => this.handleOptsClick(i.name)}>
            {i.name}
          </option>
        ))}
      </Select>
    );
  }
}

selectStories.add(
  'default',
  () => {
    const otherState = {
      Default: '',
      Error: 'error',
      Success: 'success',
      Disabled: 'disabled',
    };

    const label = text('label', 'Select');
    const info = text('info', 'Info text goes here');
    const state = radios('States', otherState, '');

    return (
      <div style={{ padding: '16px' }}>
        <Tips margin="0 0 16px">Change to Knobs tab on addon panel to dynamically interaction.</Tips>

        <SelectStateful
          label={label}
          info={info}
          error={state === 'error'}
          disabled={state === 'disabled'}
          success={state === 'success'}
        />
      </div>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

selectStories.add(
  'with searchBar',
  () => {
    const otherState = {
      Default: '',
      Error: 'error',
      Success: 'success',
      Disabled: 'disabled',
    };

    const label = text('Label', 'Select');
    const info = text('Info', 'Info text goes here');
    const listTitle = text('listTitle props', 'Search List');
    const listDescription = text('listDescription props', 'This is for List description');
    const searchPlaceholder = text('searchPlaceholder props', 'Search List');
    const state = radios('States', otherState, '');

    return (
      <div style={{ padding: '16px' }}>
        <Tips margin="0 0 16px">Change to Knobs tab on addon panel to dynamically interaction.</Tips>

        <SelectWithSearchStateful
          withSearch
          label={label}
          info={info}
          error={state === 'error'}
          disabled={state === 'disabled'}
          success={state === 'success'}
          listTitle={listTitle}
          listDescription={listDescription}
          searchPlaceholder={searchPlaceholder}
        />
      </div>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);
