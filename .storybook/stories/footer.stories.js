import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

/**
 * Component(s)
 */
import Footer from 'unify-react-mobile/build/Footer';
import FooterV2 from 'unify-react-mobile/build/FooterV2';
import Tips from 'unify-react-mobile/build/Tips';

/**
 * Notes
 */
import footerNotes from 'unify-react-mobile/build/Footer/Footer.md';
import footerV2Notes from 'unify-react-mobile/build/FooterV2/FooterV2.md';

/**
 * Storybook Constructor
 */
const footerStories = storiesOf('Compositions/Footer', module);

/**
 * Storybook Decorator
 */
footerStories.addDecorator(withKnobs);

footerStories.add(
  'Default (V2)',
  () => {
    const androidURL = text('androidURL', '');
    const iosURL = text('iosURL', '');
    const lang = select('lang', ['id', 'en'], 'id');
    const langSwitcherHeading = select('langSwitcherHeading', [1, 2, 3, 4, 5, 6], 5);
    const privacyURL = text('privacyURL', '');
    const termConditionsURL = text('termConditionsURL', '');
    const tokopediaCareURL = text('tokopediaCareURL', '');
    const withLangSwitcher = boolean('withLangSwitcher', false);
    const onAndroidURLClicked = action('onAndroidURLClicked event');
    const onIosURLClicked = action('onIosURLClicked event');
    const onLangSwitcherChange = action('onLangSwitcherChange event');
    const onPrivacyURLClicked = action('onPrivacyURLClicked event');
    const onTermConditionsURLClicked = action('onTermConditionsURLClicked event');
    const onTokopediaCareURLClicked = action('onTokopediaCareURLClicked event');

    const props = {
      androidURL,
      iosURL,
      lang,
      langSwitcherHeading,
      privacyURL,
      termConditionsURL,
      tokopediaCareURL,
      withLangSwitcher,
      onAndroidURLClicked,
      onIosURLClicked,
      onLangSwitcherChange,
      onPrivacyURLClicked,
      onTermConditionsURLClicked,
      onTokopediaCareURLClicked,
    };

    return (
      <React.Fragment>
        <Tips>
          Switch to <b>Knobs</b> tab on addon panel to dynamically interact with props.
        </Tips>
        <div className="container">
          <div className="section">
            <h2 className="section__title">Footer V2</h2>
          </div>
        </div>
        <FooterV2 {...props} />
      </React.Fragment>
    );
  },
  {
    notes: { markdown: footerV2Notes },
  },
);

footerStories.add(
  'Default (V1)',
  () => {
    const androidURL = text('androidURL', '');
    const categoryURL = text('categoryURL', '');
    const desktopURL = text('desktopURL', '');
    const hotlistURL = text('hotlistURL', '');
    const iosURL = text('iosURL', '');
    const lang = select('lang', ['id', 'en'], 'id');
    const officialStoreURL = text('officialStoreURL', '');
    const privacyURL = text('privacyURL', '');
    const termConditionsURL = text('termConditionsURL', '');
    const tokopediaCareURL = text('tokopediaCareURL', '');
    const onCategoryURLClicked = action('onCategoryURLClicked event');
    const onDesktopURLClicked = action('onDesktopURLClicked event');
    const onHotlistURLClicked = action('onHotlistURLClicked event');
    const onIosURLClicked = action('onIosURLClicked event');
    const onLanguageChange = action('onLanguageChange event');
    const onOfficialStoreURLClicked = action('onOfficialStoreURLClicked event');
    const onPrivacyURLClicked = action('onPrivacyURLClicked event');
    const onTermConditionsURLClicked = action('onTermConditionsURLClicked event');
    const onTokopediaCareURLClicked = action('onTokopediaCareURLClicked event');

    const props = {
      androidURL,
      categoryURL,
      desktopURL,
      hotlistURL,
      iosURL,
      lang,
      officialStoreURL,
      privacyURL,
      termConditionsURL,
      tokopediaCareURL,
      onCategoryURLClicked,
      onDesktopURLClicked,
      onHotlistURLClicked,
      onIosURLClicked,
      onLanguageChange,
      onOfficialStoreURLClicked,
      onPrivacyURLClicked,
      onTermConditionsURLClicked,
      onTokopediaCareURLClicked,
    };

    return (
      <React.Fragment>
        <Tips>
          Switch to <b>Knobs</b> tab on addon panel to dynamically interact with props.
        </Tips>
        <div className="container">
          <div className="section">
            <h2 className="section__title">Footer</h2>
          </div>
        </div>
        <Footer {...props} />
      </React.Fragment>
    );
  },
  {
    notes: { markdown: footerNotes },
  },
);
