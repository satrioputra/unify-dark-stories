import React, { Component, Fragment } from 'react';
import { arrayOf, object } from 'prop-types';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import ImgTooltip from '../assets/icon-tooltip.svg';

/**
 * Component(s)
 */
import Menu from 'unify-react-mobile/build/Menu';
import Tips from 'unify-react-mobile/build/Tips';
import Button from 'unify-react-mobile/build/Button';

/**
 * Notes
 */
import README from 'unify-react-mobile/build/Menu/Menu.md';

/**
 * Storybook Constructor
 */
const menuStories = storiesOf('Components/Menus', module);

/**
 * Storybook Decorator
 */
menuStories.addDecorator(withKnobs);

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

class MenuStateful extends Component {
  static propTypes = {
    items: arrayOf(object).isRequired,
  };

  state = {
    display: false,
  };

  handleToogleState = () => {
    this.setState(({ display }) => ({ display: !display }));
  };

  handleAction = () => {
    this.handleToogleState();
    action('onAction');
  };

  handleClose = () => {
    this.handleToogleState();
    action('onClose');
  };

  render() {
    return (
      <Fragment>
        <Menu
          actionText="Call to action here"
          display={this.state.display}
          items={this.props.items}
          onAction={this.handleAction}
          onClose={this.handleClose}
        />
        <Button primary block onClick={this.handleToogleState}>
          Open Menu
        </Button>
      </Fragment>
    );
  }
}

menuStories.add(
  'Default',
  () => {
    const icon = boolean('With Icon Left', false);
    const checked = boolean('With Icon Right (Check Icon)', false);

    return (
      <div className="container">
        <Tips margin="16px 0px">
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>
        <div className="section">
          <h2 className="section__title">Menu</h2>

          <MenuStateful
            items={[
              {
                key: 1,
                checked: checked ? true : false,
                icon: icon ? ImgTooltip : '',
                text: 'First content goes here',
                onClick: action('onClick'),
              },
              {
                key: 2,
                checked: false,
                icon: icon ? ImgTooltip : '',
                text: 'Second content goes here',
                onClick: action('onClick'),
              },
              {
                key: 3,
                checked: false,
                icon: icon ? ImgTooltip : '',
                text: 'Third content goes here',
                onClick: action('onClick'),
              },
            ]}
          />
        </div>
      </div>
    );
  },
  storyOptions,
);
