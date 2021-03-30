import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

/**
 * Component(s)
 */
import Card from 'unify-react-mobile/build/Card';
import Tips from 'unify-react-mobile/build/Tips';

/**
 * Notes
 */
import README from 'unify-react-mobile/build/Card/Card.md';

/**
 * Storybook Constructor
 */
const cardStories = storiesOf('Components/Cards', module);

/**
 * Storybook Decorator
 */
cardStories.addDecorator(withKnobs);

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

class CardStateActive extends Component {
  state = {
    isActive: false,
    active: {
      icon: false,
    },
  };

  handleClick = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  };

  render() {
    const { children } = this.props;
    const icon = boolean('hasActiveIcon', false);

    return (
      <Card
        {...this.props}
        onActionClick={() => console.log('hooray!')}
        onClick={this.handleClick}
        active={this.state.isActive}
        hasActiveIcon={icon}
      >
        {children}
      </Card>
    );
  }
}

cardStories.add(
  'Default',
  () => {
    const actionText = text('actionText', '');
    const children = text('children', 'Please make this Card awesome!');
    const className = text('className', '');
    const container = boolean('container', false);
    const margin = text('margin', '');
    const padding = text('padding', '16px');
    const subheader = text('subheader', '');

    return (
      <Fragment>
        <Tips>
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>
        <div style={{ padding: '0 16px' }}>
        <h2 className="section__title">Card</h2>
          <Card
            actionText={actionText}
            className={className}
            container={container}
            margin={margin}
            padding={padding}
            subheader={subheader}
            onActionClick={() => console.log('hooray!')}
          >
            <p>{children}</p>
          </Card>
        </div>
      </Fragment>
    );
  },
  storyOptions,
);

cardStories.add(
  'With Active state',
  () => {
    const actionText = text('actionText', 'action');
    const children = text('children', 'Click here to set active the card');
    const className = text('className', '');
    const container = boolean('container', false);
    const hasBorder = boolean('hasBorder', false);
    const disabled = boolean('disabled', false);

    const margin = text('margin', '');
    const padding = text('padding', '16px');
    const subheader = text('subheader', 'subheader');

    return (
      <Fragment>
        <Tips>
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>
        <div style={{ padding: '0 16px' }}>
        <h2 className="section__title">Card</h2>
          <CardStateActive
            actionText={actionText}
            className={className}
            container={container}
            margin={margin}
            padding={padding}
            subheader={subheader}
            hasBorder={hasBorder}
            disabled={disabled}
            onActionClick={() => console.log('hooray!')}
          >
            {children}
          </CardStateActive>
        </div>
      </Fragment>
    );
  },
  storyOptions,
);
