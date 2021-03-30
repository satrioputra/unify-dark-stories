import React, { Component, Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import markdownNotes from 'unify-react-mobile/build/Toaster/Toaster.md';
import Button from 'unify-react-mobile/build/Button';
import Toaster from 'unify-react-mobile/build/Toaster';
import Tips from 'unify-react-mobile/build/Tips';

const toasterStories = storiesOf('Components/Toaster', module);

toasterStories.addDecorator(withKnobs);

class ToasterShow extends Component {
  state = {
    showToaster: true,
  };

  componentWillUnmount() {
    window.clearTimeout(this.timeout);
  }

  handleClick = () => {
    this.setState({ showToaster: true });
    this.timeout = window.setTimeout(() => {
      this.setState({ showToaster: false });
    }, 3000);
  };

  handleActionClick = () => {
    this.setState({ showToaster: false });
    action('onActionClick');
  };

  render() {
    const children = text('children', 'The content goes here, use green color for any info, and maximum 2 lines');

    return (
      <Fragment>
        <Toaster display={!!this.state.showToaster} onActionClick={this.handleActionClick} {...this.props}>
          {children}
        </Toaster>
          <Button primary block onClick={this.handleClick}>
          Open Toaster
        </Button>
      </Fragment>
    );
  }
}
class ToasterAuto extends Component {
  state = {
    showToaster: false,
  };

  handleClick = () => {
    this.setState({ showToaster: true });
  };

  handleActionClick = () => {
    this.setState({ showToaster: false });
  };

  render() {
    const children = text('children', 'The content goes here, use green color for any info, and maximum 2 lines');

    return (
      <Fragment>
        <Toaster
          display={!!this.state.showToaster}
          onActionClick={this.handleActionClick}
          onClose={this.handleActionClick}
          {...this.props}
        >
          {children}
        </Toaster>
          <Button primary block onClick={this.handleClick}>
          Open Toaster
        </Button>
      </Fragment>
    );
  }
}

class ToasterWithAnotherElement extends Component {
  state = {
    showToaster: false,
  };

  handleClick = () => {
    this.setState({ showToaster: true });
  };

  handleActionClick = () => {
    this.setState({ showToaster: false });
  };

  render() {
    const children = text('children', 'Toaster will be on the top of the floating button');

    return (
      <Fragment>
        <Toaster
          display={!!this.state.showToaster}
          onActionClick={this.handleActionClick}
          onClose={this.handleActionClick}
          {...this.props}
        >
          {children}
        </Toaster>
        <Button primary block onClick={this.handleClick}>
          Open Toaster
        </Button>
        <Button primary floating>
          FloatingButton
        </Button>
      </Fragment>
    );
  }
}

toasterStories.add(
  'Default',
  () => {
    const actionText = text('actionText', 'OKAY');
    const autoClose = boolean('autoClose', false);
    const autoCloseDuration = number('autoCloseDuration', 3000);
    const bottomDistance = text('bottomDistance', '');
    const children = text('children', 'put your toaster text here, can be HTML element');
    const display = boolean('display', true);
    const error = boolean('error', false);
    const onActionClick = action('onActionClick event');
    const onClose = action('onClose event');

    const props = { actionText, autoClose, autoCloseDuration, bottomDistance, children, display, error, onActionClick, onClose };

    return (
      <React.Fragment>
        <Tips>
          Switch to <b>Knobs</b> tab on addon panel to dynamically interact with props.
        </Tips>
        <div className="container">
          <div className="section">
            <h2 className="section__title">Toaster</h2>
          </div>
        </div>
        <Toaster {...props} />
      </React.Fragment>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

toasterStories.add(
  'with action',
  () => {
    const actionText = text('actionText', 'OK');

    return <ToasterShow actionText={actionText} />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

toasterStories.add(
  'with floating button',
  () => {
    return <ToasterWithAnotherElement />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

toasterStories.add(
  'as error toaster',
  () => {
    return <ToasterShow error />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

toasterStories.add(
  'as error with action',
  () => {
    const actionText = text('actionText', 'OK');

    return <ToasterShow error actionText={actionText} />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

toasterStories.add(
  'with autoClose',
  () => {
    return <ToasterAuto autoClose autoCloseDuration={3000} actionText={'woi'} />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

toasterStories.add(
  'with data-testid',
  () => {
    const actionText = text('actionText', 'OK');
    const dataTestActionText = text('dataTest actionText', 'actionTextUnfToaster');
    const dataTestText = text('dataTest text', 'textUnfToaster');

    return <ToasterShow actionText={actionText} dataTest={{ actionText: dataTestActionText, text: dataTestText }} />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);
