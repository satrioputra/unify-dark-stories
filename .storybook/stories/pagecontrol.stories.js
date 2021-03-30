import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean, text } from '@storybook/addon-knobs';
import markdownNotes from 'unify-react-mobile/build/PageControl/PageControl.md';
import { action } from '@storybook/addon-actions';
import Card from 'unify-react-mobile/build/Card';
import PageControl from 'unify-react-mobile/build/PageControl';
import Button from 'unify-react-mobile/build/Button';
import Tips from 'unify-react-mobile/build/Tips';

const pageControlStories = storiesOf('Components/Page Control', module);

pageControlStories.addDecorator(withKnobs);

const storyOptions = {
  notes: { markdown: markdownNotes },
}

class PageControlStateful extends React.Component {
  state = {
    currentPage: 0,
    items: 10,
  };

  decrement = () => {
    let newIndex;

    if (this.state.currentPage === 0) {
      newIndex = this.state.items - 1;
    } else {
      newIndex = this.state.currentPage - 1;
    }

    this.setState({
      currentPage: newIndex,
    });
  };

  increment = () => {
    let newIndex;

    if (this.state.currentPage === this.state.items - 1) {
      newIndex = 0;
    } else {
      newIndex = this.state.currentPage + 1;
    }

    this.setState({
      currentPage: newIndex,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="section">
            <h2 className="section__title">Page Control: Normal</h2>
          </div>
        </div>
        <div style={{ padding: '0 16px' }}>
          <div style={{ display: 'flex', marginBottom: '16px' }}>
            <div style={{ flexGrow: 1 }}>
              <h3>Default</h3>
              <div style={{ padding: '8px' }}>
                <PageControl style={{ marginBottom: 16 }} currentPage={this.state.currentPage} {...this.props} />
              </div>
            </div>
            <div style={{ flexGrow: 1 }}>
              <h3>Inverted</h3>
              <div
                style={{
                  height: '22px',
                  width: '60px',
                  backgroundColor: '#E6E7E9',
                  padding: '8px',
                }}
              >
                <PageControl
                  style={{ marginBottom: 16 }}
                  currentPage={this.state.currentPage}
                  inverted
                  {...this.props}
                />
              </div>
            </div>
          </div>
          <Button onClick={this.decrement} ghost main>
            Back
          </Button>{' '}
          <Button onClick={this.increment} filled main>
            Next
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

const StatefulTimed = () => {
  const [active, setActive] = useState(0);
  const numberOfPage = 5;

  const decrement = () => {
    let newIndex;

    if (active === 0) {
      newIndex = numberOfPage - 1;
    } else {
      newIndex = active - 1;
    }

    setActive(newIndex);
  };

  const increment = () => {
    let newIndex;

    if (active === numberOfPage - 1) {
      newIndex = 0;
    } else {
      newIndex = active + 1;
    }

    setActive(newIndex);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="section">
          <h2 className="section__title">Page Control: Timed</h2>
        </div>
      </div>
      <PageControl style={{ marginBottom: 16 }} currentPage={active} timed numberOfPage={numberOfPage} />
      <Button onClick={decrement} ghost main>
        Back
      </Button>{' '}
      <Button onClick={increment} filled main>
        Next
      </Button>
    </React.Fragment>
  );
};

pageControlStories.add(
  'Default',
  () => {
    const currentPage = number('currentPage', 1);
    const numberOfPage = number('numberOfPage(number)', 4);
    const timed = boolean('timed', false);
    const inverted = boolean('inverted', false);
    const baseColor = text('baseColor', '');
    const activeColor = text('activeColor', '');
    const variant = text('variant', '');
    const onIndicatorClick = action('onIndicatorClick event');

    const props = { currentPage, numberOfPage, timed, inverted, baseColor, activeColor, variant, onIndicatorClick };

    return (
      <React.Fragment>
        <Tips>
          Switch to <b>Knobs</b> tab on addon panel to dynamically interact with props.
        </Tips>
        <div className="container">
          <div className="section">
            <h2 className="section__title">Page Control</h2>
            <div>
              <PageControl {...props} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  },
  storyOptions,
);

pageControlStories.add('Timed', () => <StatefulTimed />, storyOptions );

pageControlStories.add('Normal', () => <PageControlStateful numberOfPage={10} />, storyOptions );
