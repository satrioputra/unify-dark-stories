import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, date, text, object, boolean } from '@storybook/addon-knobs';
import Timer from 'unify-react-mobile/build/Timer';
import markdownNotes from 'unify-react-mobile/build/Timer/Timer.md';

const timerStories = storiesOf('Components/Timer', module);

timerStories.addDecorator(withKnobs);

timerStories.add(
  'Default',
  () => {
    const colorVariant = select('colorVariant', ['general', 'main', 'informative', 'alternate'], 'general');
    const description = text('description', 'Description');
    const lang = select('lang', ['id', 'en'], 'id');
    const showIcon = boolean('showIcon', true);
    const stickyProps = object('stickyProps', { placement: 'top', distance: '0px', zIndex: 10 });
    const targetTime = date('targetTime', new Date(new Date().getTime() + 86401000));
    const timeFormat = select('timeFormat', ['auto', 'HH:MM:SS'], 'auto');
    const type = select('type', ['single', 'full', 'sticky'], 'single');
    const onFinish = action('onFinish event');

    const props = {
      colorVariant,
      description,
      lang,
      showIcon,
      stickyProps,
      targetTime: new Date(targetTime),
      timeFormat,
      type,
      onFinish,
    };

    return (
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: colorVariant === 'alternate' ? 'grey' : '',
        }}
      >
        <Timer style={{ color: 'red' }} {...props} />
      </div>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

timerStories.add(
  'Default Highlight',
  () => {
    const type = select('type', ['highlight'], 'highlight');
    const targetTime = date('targetTime', new Date(new Date().getTime() + 86401000));
    const highlightColor = select('highlightColor', ['light', 'dark'], 'light');
    const highlightLabel = boolean('highlightLabel', true);
    const highlightSize = select('highlightSize', ['small', 'medium'], 'small');
    const lang = select('lang', ['id', 'en'], 'id');
    const onFinish = action('onFinish event');

    const props = {
      type,
      targetTime: new Date(targetTime),
      highlightColor,
      highlightLabel,
      highlightSize,
      lang,
      onFinish,
    };

    return (
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: highlightColor === 'alternate' ? 'grey' : '',
        }}
      >
        <Timer {...props} />
      </div>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);
