import React, { Component } from 'react';
import { css } from 'react-emotion';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number, radios, text } from '@storybook/addon-knobs';

/**
 * Component(s)
 */
import TextArea from 'unify-react-mobile/build/TextArea';
import Tips from 'unify-react-mobile/build/Tips';
import BottomSheetV2 from 'unify-react-mobile/build/BottomSheetV2';
import Typography from 'unify-react-mobile/build/Typography';
import Button from 'unify-react-mobile/build/Button';

/**
 * Notes
 */
import README from 'unify-react-mobile/build/TextArea/TextArea.md';

/**
 * Storybook Constructor
 */
const textareaStories = storiesOf('Compositions/TextArea', module);

/**
 * Storybook Decorator
 */
textareaStories.addDecorator(withKnobs);

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

class TextareaStateful extends Component {
  state = {
    text: '',
    showBottomSheet: false,
  };

  handleChange = e => {
    const { value } = e.target;

    this.setState({
      text: value,
    });
    action('onChange');
  };

  handleToggleDisplay = () => {
    this.setState({
      showBottomSheet: !this.state.showBottomSheet,
    });
  };

  handleClear = e => {
    this.setState({
      text: '',
    });
  };

  render() {
    const { withBottomSheet } = this.props;

    const unf_bottomsheet_style = css`
      & [data-unf='unf-bottomsheet-content-wrap'] {
        padding: 0px 16px 12px;
        height: calc(100% - 48px);
      }
    `;

    return (
      <div className="container">
        <Tips margin="16px 0px">
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>

        <div className="section">
          <h2 className="section__title">TextArea</h2>

          <TextArea
            {...this.props}
            value={this.state.text}
            onClick={withBottomSheet ? this.handleToggleDisplay : action('onClick')}
            onInput={this.handleChange}
            onChange={this.handleChange}
            onClear={this.handleClear}
          />
          <BottomSheetV2 full className={unf_bottomsheet_style} display={this.state.showBottomSheet} onClose={this.handleToggleDisplay}>
            <div style={{ padding: '16px' }}>
              <Typography main tag={3} margin="0 0 12px">Title goes here</Typography>
              <TextArea
                {...this.props}
                value={this.state.text}
                onClick={withBottomSheet ? this.handleToggleDisplay : action('onClick')}
                onFocus={action('onFocus')}
                onBlur={action('onBlur')}
                onKeyDown={action('onKeyDown')}
                onInput={action('onInput')}
                onChange={this.handleChange}
                onClear={this.handleClear}
                full
              />
              <Button filled main block onClick={() => alert('Unify Cool!')}>CTA</Button>
            </div>
          </BottomSheetV2>
        </div>
      </div>
    );
  }
}

textareaStories.add(
  'default',
  () => {
    const classname = text('className', '');
    const disabled = boolean('disabled', false);
    const id = text('id', '');
    const label = text('label', '');
    const name = text('name', '');
    const readonly = boolean('readonly', false);
    const state = radios('States', ['error', 'success'], 'none');
    const value = text('value', '');

    return (
      <TextareaStateful
        className={classname}
        disabled={disabled}
        error={state === 'error' ? true : false}
        id={id}
        label={label}
        name={name}
        placeholder={text('placeholder', '')}
        readonly={readonly}
        success={state === 'success' ? true : false}
        value={value}
      />
    );
  },
  storyOptions,
);

textareaStories.add(
  'with Info',
  () => {
    const disabled = boolean('disabled', false);
    const info = text('info', 'Put your info here');
    const label = text('label', 'Your Label');
    const state = radios('States', ['error', 'success'], 'none');
    const withoutAnimation = boolean('withoutAnimation', false);

    return (
      <TextareaStateful
        disabled={disabled}
        error={state === 'error' ? true : false}
        info={info}
        label={label}
        name={name}
        success={state === 'success' ? true : false}
        withoutAnimation={withoutAnimation}
      />
    );
  },
  storyOptions,
);

textareaStories.add(
  'with Character Counter',
  () => {
    const counter = number('counter', 24);
    const label = text('label', 'Your Label');

    return (
      <TextareaStateful counter={counter} label={label} />
    )
  },
  storyOptions,
)

textareaStories.add(
  'with Maximum Character',
  () => {
    const label = text('label', 'Your Label');
    const maxLength = number('maxLength', 8);
    const message = text('message', 'Put your message here')

    return (
      <TextareaStateful label={label} maxLength={maxLength} message={message} />
    )
  },
  storyOptions,
)

textareaStories.add(
  'with BottomSheet',
  () => {
    return (
      <TextareaStateful
        placeholder="Start typing bro sist..."
        withBottomSheet={{
          title: 'Hello',
          disabled: true,
          actionText: 'CTA Here',
          onActionClick: () => console.log('Unify Cool!')
        }}
      />
    )
  },
  storyOptions
);
