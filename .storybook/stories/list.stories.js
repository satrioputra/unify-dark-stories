import React, { Component } from 'react';
import { string } from 'prop-types';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, object, boolean } from '@storybook/addon-knobs';
import markdownNotes from 'unify-react-mobile/build/List/List.md';
import Label from 'unify-react-mobile/build/Label';
import List from 'unify-react-mobile/build/List';
import TextField from 'unify-react-mobile/build/TextField';
import Notification from 'unify-react-mobile/build/Notification';
import Tips from 'unify-react-mobile/build/Tips';

const listStories = storiesOf('Components/Lists', module);

listStories.addDecorator(withKnobs);

class ListItemStateful extends Component {
  static propTypes = {
    actionType: string.isRequired,
    text: string.isRequired,
  };

  state = {
    checked: true,
  };

  handleToggleState = () => {
    this.setState(({ checked }) => ({ checked: !checked }));
    action('onClick');
  };

  render() {
    const { actionType, text } = this.props;

    return (
      <List
        items={[
          {
            actionType: actionType,
            text: text,
            onClick: this.handleToggleState,
            checked: this.state.checked,
            props: {
              'data-cy': 'Hello',
            },
          },
        ]}
      />
    );
  }
}

class ListItemStateless extends Component {
  render() {
    return <List items={[{ ...this.props, onClick: action('onClick') }]} />;
  }
}

listStories.add('Default', () => (
  <>
    <Tips>
      Switch to <b>Knobs</b> tab on addon panel to dynamically interact with props.
    </Tips>
    <List
      items={[
        {
          text: 'Item 1',
          checked: true,
        },
        {
          text: (
            <>
              <span>Item 2</span>&nbsp;&nbsp;
              <Notification promo />
            </>
          ),
          actionType: 'radio',
          arrow: false,
        },
        {
          text: <span>Item 3</span>,
          actionType: 'toggle',
          arrow: true,
        },
        {
          text:'Item 4',
          actionType: 'checkbox',
          checked: true,
          arrow: true,
        },
        {
          text: 'Item 4',
          arrow: true,
        },
      ]}
      noMargin={boolean('noMargin', false)}
      subheader={text('subheader', 'Item List (Subheader)')}
    />
  </>
), {
  notes: { markdown: markdownNotes },
});

listStories.add('With Subheader', () => (
  <List
    subheader={text('subheader', 'Fruits!')}
    items={[
      { text: 'Apple', arrow: true },
      { text: 'Orange', arrow: true },
      { text: 'Tamarind', arrow: true },
      { text: 'Banana', arrow: true },
      { text: 'Mango', arrow: true },
    ]}
  />
), {
  notes: { markdown: markdownNotes },
});

listStories.add('With Description', () => {
  const description = text('description', "This fruit is super tasty!");

  return (
    <List
      subheader={text('subheader', 'Fruits!')}
      items={[
        {
          text: 'Apple',
          description: description,
          arrow: true,
        },
        {
          text: 'Orange',
          description: description,
          arrow: true,
        },
        {
          text: 'Tamarind',
          description: description,
          arrow: true,
        },
        {
          text: 'Banana',
          description: description,
          arrow: true,
        },
        {
          text: 'Mango',
          description: description,
          arrow: true,
        },
      ]}
    />
)}, {
  notes: { markdown: markdownNotes },
});

class CounterTextField extends Component {
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
  };

  handleSelect = e => {
    console.log(e.target.innerHTML);
  };

  render() {
    return (
      <TextField
        label="Counter Text Field"
        counter={50}
        value={this.state.text}
        message={this.state.message}
        displaySuggestions
        // error={true}
        suggestions={this.props.suggestions}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}

listStories.add('With Custom List', () => {
  const subheader = text('subheader', 'Subheader');
  const texts = text('text', 'Text Goes Here');
  const GlobalText = () => <span>{texts}</span>;
  const BoldGreenText = () => <b style={{ color: '#42B549' }}>{texts}</b>;
  const LabelUnify = () => (
    <Label backgroundColor="#42B549" textColor="#FFFFFF" large>
      {texts}
    </Label>
  );

  const inputUnify = () => (
    <React.Fragment>
      <CounterTextField />
    </React.Fragment>
  );

  const buttonUnify = () => (
    <button
      onClick={e => {
        e.stopPropagation();
        console.log('Hello');
      }}
    >
      Hello
    </button>
  );

  return (
    <List
      subheader={subheader}
      items={[
        { text: texts },
        { text: texts },
        { text: texts },
        { text: texts, template: BoldGreenText },
        { text: texts, template: LabelUnify },
        { text: texts, template: inputUnify },
        { text: texts, template: buttonUnify, onClick: () => console.log('World') },
      ]}
      template={GlobalText}
    />
  );
}, {
  notes: { markdown: markdownNotes }
});

listStories.add('Without Margin', () => (
  <List
    subheader={text('subheader', 'Fruits!')}
    noMargin={boolean('noMargin', true)}
    items={[
      { text: 'Apple', arrow: true },
      { text: 'Orange', arrow: true },
      { text: 'Tamarind', arrow: true },
      { text: 'Banana', arrow: true },
      { text: 'Mango', arrow: true },
    ]}
  />
), {
  notes: { markdown: markdownNotes },
});

// listItemStories.add('with actionText', () => {
//   const texts = text('text', 'This is list item with actionText');

//   return <ListItemStateless text={texts} actionText="IPHONE IPAD APPLE CASE BEST QUALITY" />;
// });

// listItemStories.add('with radio', () => {
//   const texts = text('text', 'This is list item with radio button');

//   return <ListItemStateful actionType="radio" text={texts} />;
// });

// listItemStories.add('with toggle', () => {
//   const texts = text('text', 'This is list item with toggle');

//   return <ListItemStateful actionType="toggle" text={texts} />;
// });

// listItemStories.add('with checkbox', () => {
//   const texts = text('text', 'This is list item with checkbox');

//   return <ListItemStateful actionType="checkbox" text={texts} />;
// });

// listItemStories.add('with check icon', () => {
//   const texts = text('text', 'This is list item with check icon');

//   return <ListItemStateful text={texts} />;
// });

// listItemStories.add('with custom iconSize', () => {
//   const texts = text('text', 'This is list item with custom iconSize and textIndent');
//   const iconSize = text('iconSize', '40px');
//   const textIndent = text('textIndent', '48px');

//   return <ListItemStateless text={texts} icon={ImgTooltip} iconSize={iconSize} textIndent={textIndent} />;
// });

// listItemStories.add('with arrow', () => {
//   const texts = text('text', 'This is list item with arrow');

//   return <ListItemStateless text={texts} arrow />;
// });

// listItemStories.add('default', () => {
//   const texts = text('text', 'Text Goes Here');

//   return <ListItemStateless text={texts} />;
// });
