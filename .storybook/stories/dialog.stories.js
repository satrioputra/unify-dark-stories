import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import markdownNotes from 'unify-react-mobile/build/Dialog/Dialog.md';

import Button from 'unify-react-mobile/build/Button';
import Dialog from 'unify-react-mobile/build/Dialog';
import Tips from 'unify-react-mobile/build/Tips';

const dialogStories = storiesOf('Compositions/Dialogs', module);

dialogStories.addDecorator(withKnobs);

class DialogStateful extends Component {
  state = {
    display: false,
  };

  handleToggleDialog = () => {
    this.setState(({ display }) => ({ display: !display }));
  };

  handleActionPrimaryClick = () => {
    this.handleToggleDialog();
    action('onActionPrimaryClick');
  };

  handleActionSecondaryClick = () => {
    this.handleToggleDialog();
    action('onActionSecondaryClick');
  };

  handleDialogClose = () => {
    this.handleToggleDialog();
    action('onClose');
  };

  render() {
    return (
      <div className="container">
        <Tips margin="0">Change to Knobs tab on addon panel to dynamically interaction.</Tips>
        <h2 className="section__heading">Dialog</h2>
        <Dialog
          display={this.state.display}
          onActionPrimaryClick={this.handleActionPrimaryClick}
          onActionSecondaryClick={this.handleActionSecondaryClick}
          onClose={this.handleDialogClose}
          {...this.props}
        />
        <Button primary block onClick={this.handleToggleDialog}>
          Open Dialog
        </Button>
      </div>
    );
  }
}

const exampleChildren = 'Make the copy compact to communicate what you want, approx 50 character like this';
const exampleIllustration = '';
const exampleIcon = 'https://ecs7.tokopedia.net/img/blog/seller/2019/10/placeholder_80.png';

dialogStories.add(
  'Default',
  () => {
    const title = text('subheader', 'Put some title in here max 2 lines');
    const actionPrimaryText = text('actionPrimaryText', 'Primary Action');
    const actionSecondaryText = text('actionSecondaryText', '');
    const actionSecondaryBorder = boolean('actionSecondaryBorder', true);
    const children = text('children', exampleChildren).replace(/\n/g, '<br />');
    const icon = text('icon', exampleIcon);
    const illustration = text('illustration', exampleIllustration);
    const loadingPrimary = boolean('loadingPrimary', false);
    const loadingSecondary = boolean('loadingSecondary', false);
    const longAction = boolean('longAction', false);

    return (
      <DialogStateful
        illustration={illustration}
        icon={icon}
        title={title}
        longAction={longAction}
        loadingPrimary={loadingPrimary}
        loadingSecondary={loadingSecondary}
        actionPrimaryText={actionPrimaryText}
        actionSecondaryText={actionSecondaryText}
        actionSecondaryBorder={actionSecondaryBorder}
      >
        {children}
      </DialogStateful>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);
