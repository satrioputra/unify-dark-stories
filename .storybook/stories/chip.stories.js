import React, { Component } from 'react';
import markdownNotes from 'unify-react-mobile/build/Chip/Chip.md';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, radios } from '@storybook/addon-knobs';

import Chip from 'unify-react-mobile/build/Chip';
import BottomSheet from 'unify-react-mobile/build/BottomSheet';
import Notification from 'unify-react-mobile/build/Notification';

const chipStories = storiesOf('Components/Chips', module);

chipStories.addDecorator(withKnobs);

class ChipStateful extends Component {
  state = {
    active: false,
  };

  handleToggleState = () => {
    this.setState(({ active }) => ({ active: !active }));
    action('onClick');
  };

  handleActionClick = () => {
    this.setState({ showBottomSheet: true });
    action('onClick');
  };

  render() {
    const children = text('children', `Chip text`);

    return (
      <Chip onClick={this.handleToggleState} active={this.state.active} {...this.props}>
        <span>{children}</span>
      </Chip>
    );
  }
}

class ChipDropdown extends Component {
  state = {
    showBottomSheet: false,
  };

  handleActionClick = () => {
    this.setState({ showBottomSheet: true });
    action('onClick');
  };

  handleCloseClick = () => {
    this.setState({ showBottomSheet: false });
    action('onClick');
  };

  render() {
    const children = text('children', `Chip text`);

    return (
      <React.Fragment>
        <Chip onClick={this.handleActionClick} dropdown {...this.props}>
          <span>{children}</span>
        </Chip>
        <BottomSheet onClose={this.handleCloseClick} display={this.state.showBottomSheet} />
      </React.Fragment>
    );
  }
}

chipStories.add(
  'Default',
  () => {
    const iconSizeOptions = {
      '16px': '16',
      '24px': '24',
      '32px': '32',
    };

    const active = boolean('active', false);
    const alternate = boolean('alternate', false);
    const children = text('children', 'Chip Label');
    const disabled = boolean('disabled', false);
    const dropdown = boolean('dropdown', false);
    const icon = text('icon', 'http://placehold.it/300x300');
    const iconSize = radios('iconSize', iconSizeOptions, '24');
    const loading = boolean('loading', false);
    const primary = boolean('primary', false);
    const prependObject = text('prependObject', '');
    const shrink = boolean('shrink', false);
    const small = boolean('small', false);
    const ellipsis = boolean('ellipsis', true);

    return (
      <div className="container">
        <div className="section">
          <h2 className="section__title">Chip</h2>
          <div>
            <Chip
              active={active}
              alternate={alternate}
              disabled={disabled}
              dropdown={dropdown}
              icon={icon}
              iconSize={iconSize}
              loading={loading}
              primary={primary}
              prependObject={prependObject}
              shrink={shrink}
              small={small}
              ellipsis={ellipsis}
            >
              {children}
            </Chip>
          </div>
        </div>
      </div>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

chipStories.add(
  'Stateful',
  () => {
    return (
      <div className="container">
        <h2 className="section__title">Chip</h2>
        <ChipStateful small onClose={() => {}} />
        <ChipStateful onClose={() => {}} />
        <ChipStateful small disabled />
        <ChipStateful disabled onClose={() => {}} />
        <ChipStateful small alternate />
        <ChipStateful alternate onClose={() => {}} data-unf="alt" />
        <ChipStateful active />
        <ChipStateful active onClose={() => {}} />
        <ChipStateful icon="http://placehold.it/300x300" onClose={() => {}} />
        <ChipStateful
          dropdown
          prependObject={
            <div style={{ borderRadius: '12px', height: '24px', width: '24px', backgroundColor: 'red' }} />
          }
        />
        <ChipDropdown />
      </div>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);
