import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number, object } from '@storybook/addon-knobs';

/**
 * Component(s)
 */
import QuantityEditor from 'unify-react-mobile/build/QuantityEditor';
import Tips from 'unify-react-mobile/build/Tips';

/**
 * Notes
 */
import README from 'unify-react-mobile/build/QuantityEditor/QuantityEditor.md';

/**
 * Storybook Constructor
 */
const quantityEditorStories = storiesOf('Components/QuantityEditor', module);

/**
 * Storybook Decorator
 */
quantityEditorStories.addDecorator(withKnobs);

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

class QuantityEditorStateful extends Component {
  state = {
    value: 1,
  };

  handleChange = reValue => {
    this.setState({ value: reValue });
  };

  render() {
    const { dataTest, disabled, min, max, readonly, spinner, onClickMin, onClickPlus } = this.props;

    return (
      <QuantityEditor
        dataTest={dataTest}
        disabled={disabled}
        min={min}
        max={max}
        readonly={readonly}
        spinner={spinner}
        value={this.state.value}
        onChange={this.handleChange}
        onClickMin={onClickMin}
        onClickPlus={onClickPlus}
      />
    );
  }
}

quantityEditorStories.add(
  'Default',
  () => {
    const dataTest = object('dataTest', {
      plusButton: 'plus button',
      minusButton: 'minus button',
    });
    const disabled = boolean('disabled', false);
    const min = number('min', 1);
    const max = number('max', 10);
    const readonly = boolean('readonly', false);
    const spinner = number('spinner', 1);
    const onClickMin = action('onClickMin');
    const onClickPlus = action('onClickPlus');

    return (
      <div className="container">
        <Tips margin="16px 0px">
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>
        <div className="section">
          <h2 className="section__title">QuantityEditor</h2>
        </div>
        <QuantityEditorStateful
          dataTest={dataTest}
          disabled={disabled}
          min={min}
          max={max}
          readonly={readonly}
          spinner={spinner}
          onClickMin={onClickMin}
          onClickPlus={onClickPlus}
        />
      </div>
    );
  },
  storyOptions,
);
