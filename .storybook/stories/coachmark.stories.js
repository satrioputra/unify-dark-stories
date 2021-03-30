import React from 'react';

import { storiesOf } from '@storybook/react';
import markdownNotes from 'unify-react-mobile/build/Coachmark/Coachmark.md';
import { withKnobs, boolean, number, object, radios } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Coachmark from 'unify-react-mobile/build/Coachmark';
import Card from 'unify-react-mobile/build/Card';
import Button from 'unify-react-mobile/build/Button';
import NavBar from 'unify-react-mobile/build/NavBar';

const coachmarkStories = storiesOf('Compositions/Coachmark', module);

coachmarkStories.addDecorator(withKnobs);

const SamplePage = () => (
  <>
    <NavBar main fixed title="Unify" onBurgerClick={() => alert('burger clicked')}>
      <Button style={{ marginRight: '16px', borderRadius: '50%' }} filled main id="navBar-button">
        a
      </Button>
    </NavBar>
    <Card style={{ height: '100px' }} id="coachmark1">
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card style={{ height: '100px' }} id="coachmark2">
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card style={{ height: '100px' }} id="coachmark3">
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card style={{ height: '100px' }}>
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card style={{ height: '100px' }}>
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card style={{ height: '100px' }}>
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card style={{ height: '100px' }}>
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card style={{ height: '100px' }}>
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card style={{ height: '100px' }}>
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card style={{ height: '100px' }} id="coachmark4">
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <div style={{ position: 'relative', zIndex: 40 }}>
      <Card id="coachmark5">
        <div>This is Text Just pure Text With heavy Content</div>
        <Button filled main id="submit-button" style={{ marginTop: '8px' }}>
          Some Action
        </Button>
      </Card>
    </div>

    <Card style={{ height: '100px' }} id="coachmark6">
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>
  </>
);

class CoachmarkStateful extends React.Component {
  constructor(props) {
    super(props);
    this.item1 = React.createRef();
    this.item2 = React.createRef();
  }

  state = {
    currentPage: 0,
    display: true,
    borderRadius: '8px',
  };

  handleToogle = () => {
    this.setState(({ display }) => ({ display: !display }));
  };

  setItemRef = node => {
    this.item1 = node;
  };

  setRef2 = node => {
    this.item2 = node;
  };

  handleChange = index => {
    const newState = { currentPage: index, borderRadius: index === 1 ? '50%' : '8px' };

    this.setState(newState);
  };

  handleClick = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  render() {
    return (
      <div style={{ paddingBottom: '16px' }}>
        <SamplePage />
        <Card>
          <Button
            filled
            main
            onClick={() =>
              this.setState(state => ({
                display: !state.display,
                currentPage: 0,
              }))
            }
          >
            show coachmark
          </Button>
        </Card>
        {
          <Coachmark
            display={this.state.display}
            onClose={this.handleClick}
            numberOfPage={['#coachmark1', '#navBar-button', '#submit-button', '#coachmark6', '#coachmark5']}
            currentPage={this.state.currentPage}
            onChange={this.handleChange}
            title={['Insert title here', 'Title 1', 'Title 2', 'title3', 'Title 4']}
            description={[
              'Put some descriptions that can describes your new features. Make it simple :)',
              'description 2, lorem ipsum dolor sit amet',
              'description 2, lorem ipsum dolor sit amet',
              'description 3, lorem ipsum dolor sit amet',
              'description 4, lorem ipsum dolor sit amet',
            ]}
          />
        }
      </div>
    );
  }
}

coachmarkStories.add(
  'Default',
  () => {
    const currentPage = number('currentPage', 0);
    const description = object('description', ['Descrition2', 'Description5', 'Descrition1']);
    const display = boolean('display', true);
    const numberOfPage = object('numberOfPage', ['#coachmark2', '#coachmark5', '#coachmark1']);
    const title = object('title', ['Insert title here', 'Title 2', 'Title3']);
    const highlightOptions = object('highlightOptions', { padding: 8 });
    const overlayOptions = object('overlayOptions', { clickToClose: true, show: true });
    const lang = radios('lang', ['en', 'id'], 'id');
    const hasSkip = boolean('hasSkip', false);
    const onClickSkip = action('onClickSkip event');
    const onChange = action('onChange event');
    const onClose = action('onClose event');

    const props = {
      currentPage,
      description,
      display,
      numberOfPage,
      title,
      highlightOptions,
      overlayOptions,
      lang,
      hasSkip,
      onChange,
      onClose,
      onClickSkip,
    };

    return (
      <div>
        <SamplePage />
        <Coachmark {...props} />
      </div>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

coachmarkStories.add(
  'Working Example',
  () => {
    return <CoachmarkStateful />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);
