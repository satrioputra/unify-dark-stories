import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import markdownNotes from 'unify-react-mobile/build/LoaderCard/loader.md';

import LoaderLine from 'unify-react-mobile/build/LoaderLine';
import LoaderSquare from 'unify-react-mobile/build/LoaderSquare';
import LoaderCircle from 'unify-react-mobile/build/LoaderCircle';
import LoaderContainer from 'unify-react-mobile/build/LoaderContainer';
import LoaderCard from 'unify-react-mobile/build/LoaderCard';
import LoaderForm from 'unify-react-mobile/build/LoaderForm';
import LoaderGrid from 'unify-react-mobile/build/LoaderGrid';
import LoaderHome from 'unify-react-mobile/build/LoaderHome';
import LoaderJumper from 'unify-react-mobile/build/LoaderJumper';
import LoaderList from 'unify-react-mobile/build/LoaderList';
import LoaderPDP from 'unify-react-mobile/build/LoaderPDP';
import LoaderShop from 'unify-react-mobile/build/LoaderShop';

import Button from 'unify-react-mobile/build/Button';
import Linear from 'unify-react-mobile/build/Linear';
import Circular from 'unify-react-mobile/build/Circular';

const loaderStories = storiesOf('Components/Loaders', module);

loaderStories.addDecorator(withKnobs);

loaderStories.add(
  'as line loader',
  () => {
    const width = text('width', '100%');
    const height = text('height', '8px');
    const marginBottom = text('marginBottom', '16px');
    const borderRadius = text('borderRadius', '4px');

    return <LoaderLine width={width} height={height} marginBottom={marginBottom} borderRadius={borderRadius} />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

loaderStories.add(
  'as square loader',
  () => {
    const width = text('width', '100%');
    const paddingBottom = text('paddingBottom', '100%');
    const marginBottom = text('marginBottom', '16px');

    return <LoaderSquare width={width} paddingBottom={paddingBottom} marginBottom={marginBottom} />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

loaderStories.add(
  'as circle loader',
  () => {
    const width = text('width', '48px');
    const height = text('height', '48px');
    const marginBottom = text('marginBottom', '16px');

    return <LoaderCircle width={width} height={height} marginBottom={marginBottom} />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

loaderStories.add(
  'as container loader',
  () => {
    return <LoaderContainer />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

loaderStories.add(
  'as card loader',
  () => {
    return <LoaderCard />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

loaderStories.add(
  'as form loader',
  () => {
    return <LoaderForm />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

loaderStories.add(
  'as grid loader',
  () => {
    return <LoaderGrid />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

loaderStories.add(
  'as home loader',
  () => {
    return <LoaderHome />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

loaderStories.add(
  'as jumper loader',
  () => {
    return <LoaderJumper loader="sasdasd" />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

loaderStories.add(
  'as list loader',
  () => {
    return <LoaderList />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

loaderStories.add(
  'as PDP loader',
  () => {
    return <LoaderPDP />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

loaderStories.add(
  'as shop loader',
  () => {
    return <LoaderShop />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

class LinearStateful extends React.PureComponent {
  state = {
    progress: 20,
    loading: true,
  };

  handleProgress = type => {
    this.setState(prevProps => ({
      progress: type === 'add' ? prevProps.progress + 20 : prevProps.progress - 20,
    }));
  };

  handleTogglePause = () => {
    this.setState(prevProps => ({
      loading: !prevProps.loading,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Linear {...this.state} />
        <Button primary fill onClick={() => this.handleProgress('add')}>
          increment
        </Button>
        <Button secondary onClick={() => this.handleProgress('decrement')}>
          decrement
        </Button>
        <Button transaction onClick={this.handleTogglePause}>
          pause
        </Button>
        <Linear {...this.state} indeterminate />
      </React.Fragment>
    );
  }
}

loaderStories.add('linear', () => {
  return <LinearStateful />;
});

class CircularStateful extends React.PureComponent {
  state = {
    progress: 20,
    radius: 60,
    stroke: 8,
    width: 200,
    loading: true,
  };

  handleProgress = type => {
    this.setState(prevProps => ({
      progress: type === 'add' ? prevProps.progress + 20 : prevProps.progress - 20,
    }));
  };

  handleTogglePause = () => {
    this.setState(prevProps => ({
      loading: !prevProps.loading,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Circular {...this.state} />
        <Button primary fill onClick={() => this.handleProgress('add')}>
          increment
        </Button>
        <Button secondary onClick={() => this.handleProgress('decrement')}>
          decrement
        </Button>
        <Button transaction onClick={this.handleTogglePause}>
          pause
        </Button>
        <Circular {...this.state} indeterminate />
      </React.Fragment>
    );
  }
}

loaderStories.add('circular', () => {
  return <CircularStateful />;
});
