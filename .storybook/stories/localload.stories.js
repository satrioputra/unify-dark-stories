import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import markdownNotes from 'unify-react-mobile/build/LocalLoad/LocalLoad.md';
import LocalLoad from 'unify-react-mobile/build/LocalLoad';

const localloadStories = storiesOf('Compositions/LocalLoad', module);

localloadStories.addDecorator(withKnobs);

class LocalLoadStateful extends React.Component {
  state = {
    loading: false
  }

  handleClick = () => {
    this.setState({
      loading: true
    })
  }

  render() {
    const { title, children } = this.props;

    return (
      <LocalLoad
        title={title}
        onClick={this.handleClick}
        loading={this.state.loading}>
        {children}
      </LocalLoad>
    )
  }
}

localloadStories.add('default', () => {
  const title = text('title', 'Insert title here, if possible max 2 lines');
  const content = text('children', 'Click icon to reload');

  return (
    <LocalLoadStateful title={title} >
      {content}
    </LocalLoadStateful>
  )
}, {
  notes: { markdown: markdownNotes }
});
