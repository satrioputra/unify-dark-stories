import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import markdownNotes from 'unify-react-mobile/build/Typography/Typography.md';

import Typography from 'unify-react-mobile/build/Typography';
import Tips from 'unify-react-mobile/build/Tips';

const typographyStories = storiesOf('Principles/Typography', module);

typographyStories.addDecorator(withKnobs);

typographyStories.add(
  'Default',
  () => {
    const alternate = boolean('alternate', false);
    const body = number('body', 0);
    const bold = boolean('bold', false);
    const caption = boolean('caption', false);
    const color = text('color', '');
    const children = text('children (text)', 'Insert Text');
    const disabled = boolean('disabled', false);
    const heading = number('heading', 0);
    const large = boolean('large', false);
    const link = text('link', '');
    const main = boolean('main', false);
    const margin = text('margin', '');
    const micro = boolean('micro', false);
    const tag = number('tag', 0);

    const props = {
      alternate,
      body,
      bold,
      caption,
      children,
      color,
      disabled,
      heading,
      large,
      link,
      main,
      margin,
      micro,
      tag,
    };

    return (
      <React.Fragment>
        <Tips>
          Switch to <b>Knobs</b> tab on addon panel to dynamically interact with props.
        </Tips>
        <div className="container">
          <div className="section">
            <h2 className="section__title">Typography</h2>
          </div>
          <Typography {...props} />
        </div>
      </React.Fragment>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

typographyStories.add(
  'Style Variations',
  () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
        <Typography tag={1} main>
          Main
        </Typography>
        <Typography tag={2} alternate>
          Alternate
        </Typography>
        <Typography tag={3} disabled>
          Disabled
        </Typography>
        <Typography link="https://www.tokopedia.com">Link</Typography>
        <Typography link>Text with link style</Typography>
      </div>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

typographyStories.add(
  'Size Variations',
  () => {
    const heading1 = text('Heading', 'Heading 1');
    const heading2 = text('Heading', 'Heading 2');
    const heading3 = text('Heading', 'Heading 3');
    const heading4 = text('Heading', 'Heading 4');
    const heading5 = text('Heading', 'Heading 5');
    const heading6 = text('Heading', 'Heading 6');
    const normal = text('Heading', 'body 1');
    const large = text('Heading', 'body 2');
    const caption = text('Heading', 'caption');
    const micro = text('Heading', 'micro');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
        <Typography>{normal}</Typography>
        <Typography large>{large}</Typography>
        <Typography micro>{micro}</Typography>
        <Typography caption>{caption}</Typography>
        <Typography tag={1}>{heading1}</Typography>
        <Typography tag={2}>{heading2}</Typography>
        <Typography tag={3}>{heading3}</Typography>
        <Typography tag={4}>{heading4}</Typography>
        <Typography tag={5}>{heading5}</Typography>
        <Typography tag={6}>{heading6}</Typography>
      </div>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);
