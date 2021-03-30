import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

/**
 * Component(s)
 */
import Tooltip from 'unify-react-mobile/build/Tooltip';
import Tips from 'unify-react-mobile/build/Tips';
import Button from 'unify-react-mobile/build/Button';

/**
 * Notes
 */
import README from 'unify-react-mobile/build/Tooltip/Tooltip.md';

import ImgTooltip from '../assets/icon-tooltip.svg';

/**
 * Storybook Constructor
 */
const tooltipStories = storiesOf('Components/Tooltips', module);

/**
 * Storybook Decorator
 */
tooltipStories.addDecorator(withKnobs);

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

class TooltipStateful extends Component {
  state = {
    display: true,
  };

  handleToogleTooltip = () => {
    this.setState(({ display }) => ({ display: !display }));
  };

  handleTooltipActionClick = () => {
    this.handleToogleTooltip();
    action('onActionSecondaryClick');
  };

  render() {
    return (
      <Fragment>
        <Tooltip display={this.state.display} onActionClick={this.handleTooltipActionClick} {...this.props} />
        <Button primary block onClick={this.handleToogleTooltip}>
          Open Tooltip
        </Button>
      </Fragment>
    );
  }
}

const exampleChildren = 'Type your information about the hint in a compact way, don�t take it to long.';

tooltipStories.add(
  'Default',
  () => {
    const actionText = text('actionText', 'OK');
    const children = text('children', exampleChildren).replace(/\n/g, '<br />');
    const title = text('title', 'Title Goes Here');
    const withImage = boolean('With Image', false);

    return (
      <div className="container">
        <Tips margin="16px 0px">
          Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
        </Tips>

        <div className="section">
          <h2 className="section__title">Tooltip</h2>
          <TooltipStateful actionText={actionText} image={withImage ? ImgTooltip : null} title={title}>
            {children}
          </TooltipStateful>
        </div>
      </div>
    );
  },
  storyOptions,
);
