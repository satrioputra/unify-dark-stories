import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// Contants
import VIEWPORT_LIST from './viewport';

export const parameters = {
  layout: 'fullscreen',
  options: {
    storySort: {
      order: [
        'About',
        'Changelog',
        'Token',
        'Icon',
        'Principles',
        'Components',
        'Compositions',
      ],
    },
  },
  previewTabs: {
    'storybook/docs/panel': { hidden: true }, // Hide Docs tab on all stories
  },
  viewMode: 'canvas', // Force first tab to be selected are Canvas tab
  viewport: {
    defaultViewport: 'iphone6',
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...VIEWPORT_LIST,
    },
  },
}
