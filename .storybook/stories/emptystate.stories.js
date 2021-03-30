import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import markdownNotes from 'unify-react-mobile/build/EmptyState/EmptyState.md';
import EmptyState from 'unify-react-mobile/build/EmptyState';
import Tips from 'unify-react-mobile/build/Tips';

const emptystateStories = storiesOf('Compositions/EmptyState', module);
const TooltipActive = 'https://ecs7.tokopedia.net/assets-unify/img/il-empty-state-png-2x.png';

emptystateStories.addDecorator(withKnobs);

emptystateStories.add('Default (Vertical)', () => {
  const title = text('title', 'Empty State Error');
  const actionText = text('actionText', 'CTA Here');
  const secondaryText = text('actionSecondaryText props', 'Secondary CTA Here');
  const description = text('description', 'Porttitor eget dolor morbi non arcu risus quis varius quam. Eget egestas purus viverra accumsan.');
  const buttonFull = boolean('buttonFull props', false);
  const horizontal = boolean('horizontal props', false);
  const loading = boolean('loading', false);
  const loadingSecondary = boolean('loadingSecondary', false);

  return (
    <div style={{ padding: "16px" }}>
      <Tips margin="0 0 16px">
        Change to Knobs tab on addon panel to dynamically interaction.
      </Tips>

      <EmptyState
        title={title}
        actionText={actionText}
        onActionClick={() => alert("Clicked")}
        image={TooltipActive}
        buttonFull={buttonFull}
        horizontal={horizontal}
        actionSecondaryText={secondaryText}
        onActionSecondaryClick={() => alert("Secondary Clicked")}
        loading={loading}
        loadingSecondary={loadingSecondary}
      >
        {description}
      </EmptyState>
    </div>
  )
}, {
  notes: { markdown: markdownNotes }
});
