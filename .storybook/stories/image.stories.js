import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, radios, boolean, number, text } from '@storybook/addon-knobs';
import markdownNotes from 'unify-react-mobile/build/Image/Image.md';
import Image from 'unify-react-mobile/build/Image';
import Tips from 'unify-react-mobile/build/Tips';

const imageStories = storiesOf('Components/Image', module);

imageStories.addDecorator(withKnobs);

imageStories.add('Default', () => {
  const otherRatio = {
    '1:1': '1:1',
    '2:1': '2:1',
    '3:1': '3:1',
    '4:1': '4:1',
  };

  const ratio = radios(`Ratio`, otherRatio, '1:1');
  const loading = boolean('Loading', false);

  return (
    <div style={{ padding: '16px' }}>
      <Tips margin="0 0 16px">
        Change to Knobs tab on addon panel to dynamically interaction.
      </Tips>
      <h2 className="section__title">Image</h2>
      <div style={{ width: '200px', height: '200px' }}>
        <Image
          loading={loading}
          src="https://via.placeholder.com/1600x1200"
          ratio={ratio}
        />
      </div>
    </div>
  );
}, {
  notes: { markdown: markdownNotes }
});

imageStories.add('Product', () => {
  const unitOfMeasure = {
    Pixel: 'px',
    Percentage: '%',
  };

  const loading = boolean('Loading', false);
  const size = number('Size', 64);
  const unit = radios('Unit', unitOfMeasure, 'px');

  return (
    <div style={{ padding: 16, width: '200px', height: '200px' }}>
      <h2 className="section__title">Image: Product</h2>
      <Image
        loading={loading}
        size={`${size}${unit}`}
        ratio="1:1"
        product
        src="https://ecs7.tokopedia.net/img/blog/promo/2018/08/Thumbnail_600x3282.jpg" />
    </div>
  );
}, {
  notes: { markdown: markdownNotes }
});

imageStories.add('User', () => {
  const loading = boolean('Loading', false);

  return (
    <div style={{ padding: 16, width: '200px', height: '200px' }}>
      <h2 className="section__title">Image: User</h2>
      <Image
        loading={loading}
        user
        src="https://ecs7.tokopedia.net/img/blog/promo/2018/08/Thumbnail_600x3282.jpg" />
    </div>
  );
}, {
  notes: { markdown: markdownNotes }
});
