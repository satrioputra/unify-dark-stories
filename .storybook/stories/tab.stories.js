import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import markdownNotes from 'unify-react-mobile/build/Tab/Tab.md';
import { withKnobs, boolean, number, object, text } from '@storybook/addon-knobs';

import Tab from 'unify-react-mobile/build/Tab';
import TabContent from 'unify-react-mobile/build/TabContent';
import Tips from 'unify-react-mobile/build/Tips';

const tabStories = storiesOf('Components/Tabs', module);

tabStories.addDecorator(withKnobs);

class TabStateful extends Component {
  state = {
    activeTab: 0,
  };

  handleTabClick = (_, tabItem) => {
    const { index } = tabItem;

    this.setState({ activeTab: index });
    action('onItemClick');
  };
  
  render() {
    return <Tab {...this.props} indexActive={this.state.activeTab} onItemClick={this.handleTabClick} />;
  }
}


tabStories.add(
  'Default',
  () => {
    const flat = boolean('flat', false);
    const noShadow = boolean('noShadow', false);
    const withClickTrigger = boolean('onClickToggle', false);
    const indexActive = number('indexActive', 0);
    const items = object('items', [
      { key: 0, text: 'Tab 1', count: 3, notification: true },
      { key: 1, text: 'Tab 2', count: 10, dataTest: { tabItem: 'Tab#2' } },
      { key: 2, text: 'Tab 3', count: 12, notification: true, dataTest: { tabItem: 'Tab#3' } },
      { key: 3, text: 'Tab 4', count: 1, dataTest: { tabItem: 'Tab#4' } },
      { key: 4, text: 'Tab 5', count: 5, notification: true, dataTest: { tabItem: 'Tab#5' } },
    ]);

    const onItemClick = action('onItemClick event');
    const handleClickTrigger = () => {
      console.log('click trigger');
    }

    const props = { 
      flat, 
      indexActive, 
      items, 
      noShadow, 
      onItemClick,
      onClickToggle: withClickTrigger ? handleClickTrigger : null
    };

    return (
      <React.Fragment>
        <Tips>
          Switch to <b>Knobs</b> tab on addon panel to dynamically interact with props.
        </Tips>
        <div className="container">
          <div className="section">
            <h2 className="section__title">Tab</h2>
          </div>
        </div>
        <Tab {...props} />
      </React.Fragment>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

tabStories.add(
  'with data-testId',
  () => {
    const TabItem1 = text('dataTest tabItem 1', 'TabItem#1');
    const TabItem2 = text('dataTest tabItem 2', 'TabItem#2');
    const TabItem3 = text('dataTest tabItem 3', 'TabItem#3');

    return (
      <TabStateful
        items={[
          { key: 'Inbox', text: 'Inbox', dataTest: { tabItem: TabItem1 } },
          { key: 'Sent', text: 'Sent', dataTest: { tabItem: TabItem2 } },
          { key: 'Trash', text: 'Trash', dataTest: { tabItem: TabItem3 } },
        ]}
        primary
      />
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

tabStories.add(
  'as main tab',
  () => {
    const flat = boolean('flat', false);
    const noShadow = boolean('noShadow', false);
    const withClickTrigger = boolean('onClickToggle', false);

    const handleClickTrigger = () => {
      console.log('click trigger');
    }

    const props = {
      flat,
      noShadow,
      onClickToggle: withClickTrigger ? handleClickTrigger : null
    };

    return (
      <TabStateful
        items={[
          { key: 'Inbox', text: 'Inbox', count: 3, props: { 'data-cy': 'test' } },
          { key: 'Sent', text: 'Sent' },
          { key: 'Trash', text: 'Trash' },
        ]}
        primary
        {...props}
      />
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

tabStories.add(
  'with TabContent',
  () => {
    const flat = boolean('flat', false);
    const noShadow = boolean('noShadow', false);
    const withClickTrigger = boolean('onClickToggle', false);

    const handleClickTrigger = () => {
      console.log('click trigger');
    }

    const props = { 
      flat,
      noShadow,
      onClickToggle: withClickTrigger ? handleClickTrigger : null
    };

    return (
      <TabStateful
        secondary
        items={[
          { key: 'Inbox', text: 'Inbox', count: 3, props: { 'data-cy': 'test' } },
          { key: 'Sent', text: 'Sent' },
          { key: 'Trash', text: 'Trash' },
        ]}
        {...props}
      >
        <TabContent>
          <h1>Inbox Content</h1>
        </TabContent>
        <TabContent>
          <h1>Sent Content</h1>
        </TabContent>
        <TabContent>
          <h1>Trash Content</h1>
        </TabContent>
      </TabStateful>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

tabStories.add(
  'custom tabcontent',
  () => {
    const noShadow = boolean('noShadow', false);
    const withClickTrigger = boolean('onClickToggle', false);

    let tabs = [
      { key: 0, text: 'Informasi' },
      { key: 1, text: 'Dokumen & Syarat Ketentuan' },
      { key: 2, text: 'Biaya' },
    ]; 

    const handleClickTrigger = () => {
      console.log('click trigger');
    }

    const props = {
      noShadow,
      onClickToggle: withClickTrigger ? handleClickTrigger : null
    };

    return (
      <TabStateful secondary items={tabs} {...props}>
        <TabContent>
          <h1>Informasi</h1>
        </TabContent>
        <TabContent>
          <h1>Dokumen</h1>
        </TabContent>
        <TabContent>
          <h1>Biaya</h1>
        </TabContent>
      </TabStateful>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

tabStories.add(
  'with icon',
  () => {
    const flat = boolean('flat', true);
    const noShadow = boolean('noShadow', true);
    const withClickTrigger = boolean('onClickToggle', false);

    let tabs = [
      { key: 0, text: 'Tab 1', icon: 'http://placehold.it/300x300' },
      { key: 1, text: 'Tab 2', icon: 'http://placehold.it/300x300' },
      { key: 2, text: 'Tab 3', icon: 'http://placehold.it/300x300' },
    ];

    const handleClickTrigger = () => {
      console.log('click trigger');
    }

    const props = {
      flat, 
      noShadow,
      onClickToggle: withClickTrigger ? handleClickTrigger : null
    };

    return <TabStateful secondary items={tabs} {...props} />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

tabStories.add(
  'with new notification',
  () => {
    const flat = boolean('flat', false);
    const noShadow = boolean('noShadow', true);
    const withClickTrigger = boolean('onClickToggle', false);

    let tabs = [
      { key: 0, text: 'Tab 1' },
      { key: 1, text: 'Tab 2' },
      { key: 2, text: 'Tab 3', newNotification: true, lang: 'en' },
    ];

    const handleClickTrigger = () => {
      console.log('click trigger');
    }

    const props = { 
      flat,
      noShadow,
      onClickToggle: withClickTrigger ? handleClickTrigger : null
    };

    return <TabStateful flat noShadow secondary items={tabs} {...props} />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

tabStories.add(
  'new redesign Tab',
  () => {
    const flat = boolean('flat', true);
    const noShadow = boolean('noShadow', true);
    const withClickTrigger = boolean('onClickToggle', false);

    let tabs = [
      { key: 0, text: 'Tab 1', count: 3, notification: true },
      { key: 1, text: 'Tab 2', count: 10 },
      { key: 1, text: 'Tab 3', count: 12, notification: true },
    ];

    const handleClickTrigger = () => {
      console.log('click trigger');
    }

    const props = { 
      flat,
      noShadow,
      onClickToggle: withClickTrigger ? handleClickTrigger : null
    };

    return <TabStateful items={tabs} {...props} />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

tabStories.add(
  'custom redesign Tab with gradient',
  () => {
    const noShadow = boolean('noShadow', true);
    const withClickTrigger = boolean('onClickToggle', false);

    let tabs = [
      { key: 0, text: 'Tab 1', count: 3, notification: true },
      { key: 1, text: 'Tab 2', count: 10 },
      { key: 2, text: 'Tab 3', count: 12, notification: true },
      { key: 3, text: 'Tab 4', count: 1 },
      { key: 4, text: 'Tab 5', count: 5, notification: true },
    ];

    const handleClickTrigger = () => {
      console.log('click trigger');
    }

    const props = {
      noShadow,
      onClickToggle: withClickTrigger ? handleClickTrigger : null
    };

    return (
      <div style={{ marginTop: '50px', padding: '16px' }}>
        <TabStateful items={tabs} {...props} />
      </div>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);
