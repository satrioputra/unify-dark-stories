import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, radios } from '@storybook/addon-knobs';

/**
 * Component(s)
 */
import GlobalError from 'unify-react-mobile/build/GlobalError';
import BottomSheetV2 from 'unify-react-mobile/build/BottomSheetV2';
import NavBar from 'unify-react-mobile/build/NavBar';
import Tips from 'unify-react-mobile/build/Tips';

/**
 * Notes
 */
import README from 'unify-react-mobile/build/GlobalError/GlobalError.md';

/**
 * Storybook Constructor
 */
const globalErrorStories = storiesOf('Components/GlobalError', module);

/**
 * Storybook Decorator
 */
globalErrorStories.addDecorator(withKnobs);

/**
 * Other(s)
 */
const storyOptions = {
  knobs: {
    // escapeHTML: false
  },
  notes: {
    markdown: README,
  },
};

globalErrorStories.add(
  'Default',
  () => {
    const optionRender = {
      Default: 'default',
      onBottomSheet: 'onBottomSheet',
      FullPage: 'FullPage',
    };

    const optionLang = {
      Id: 'id',
      En: 'en',
    };

    const buttonFull = boolean('buttonFull', false);
    const type = select('Variant', ['default', 'full', 'maintenance', 'noConnection', 'server'], 'default');
    const typeRender = radios('Type Render', optionRender, 'default');
    const lang = radios('Lang', optionLang, 'id');

    const renderDefault = () => {
      return (
        <GlobalError
          buttonFull={buttonFull}
          full={type === 'full' ? true : false}
          lang={lang}
          maintenance={type === 'maintenance' ? true : false}
          noConnection={type === 'noConnection' ? true : false}
          server={type === 'server' ? true : false}
          onActionClick={() => alert('Unify is awesome!')}
        />
      );
    };

    const renderonBottomSheet = () => {
      return <BottomSheetV2 display>{renderDefault()}</BottomSheetV2>;
    };

    const renderFullPage = () => {
      return (
        <>
          <NavBar main hideNavButton fixed onBack
title="Header Title">
            Action
          </NavBar>
          {renderDefault()}
        </>
      );
    };

    return (
      <div className="container">
        {typeRender !== 'FullPage' && (
          <Tips margin="16px 0px">
            Change to <b>Knobs</b> tab on addon panel to dynamically interact with the props.
          </Tips>
        )}

        <div className="section">
          <h2 className="section__title">Global Error ({typeRender})</h2>
          {typeRender === 'default'
            ? renderDefault()
            : typeRender === 'onBottomSheet'
            ? renderonBottomSheet()
            : renderFullPage()}
        </div>
      </div>
    );
  },
  storyOptions,
);
