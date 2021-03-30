import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, object, number } from '@storybook/addon-knobs';
import markdownNotes from 'unify-react-mobile/build/ContentSwitcher/ContentSwitcher.md';
import ContentSwitcher from 'unify-react-mobile/build/ContentSwitcher';

const contentSwitcherStories = storiesOf('Components/ContentSwitcher', module);

contentSwitcherStories.addDecorator(withKnobs);

class ContentSwitcherStateful extends React.Component {
  state = {
    indexActive: 0,
  };

  handleClick = (e, index) => {
    this.setState({ indexActive: index });
  };

  render() {
    const { selections, ...etc } = this.props;

    return (
      <div style={{ margin: '16px' }}>
        <ContentSwitcher
          indexActive={this.state.indexActive}
          onItemClick={this.handleClick}
          selections={selections}
          {...etc}
        />
      </div>
    );
  }
}

contentSwitcherStories.add(
  'Default',
  () => {
    const heading = number('heading', 5);
    const selections = object('selections', ['Ya', 'Tidak']);

    return (
      <div className="container">
        <h2 className="section__title">ContentSwitcher</h2>
        <ContentSwitcherStateful selections={selections} heading={heading} />
      </div>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);
