import React, { Component, Fragment } from 'react';
import { G500, R400 } from 'unify-token/build/v2/colors';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, date, select, radios, boolean, number } from '@storybook/addon-knobs';
import markdownNotes from 'unify-react-mobile/build/Datepicker/Datepicker.md';
import Datepicker from 'unify-react-mobile/build/Datepicker';
import Button from 'unify-react-mobile/build/Button';

const datepickerStories = storiesOf('Compositions/DatePicker', module);

datepickerStories.addDecorator(withKnobs);

class PickerStateful extends Component {
  state = {
    display: false,
    firstDate: new Date(),
    // firstDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    secondDate: new Date(),
  };

  handleBtnClick = () => {
    this.setState(({ display }) => ({ display: !display }));
  };

  handleClose = () => {
    this.setState({
      display: false,
    });
    action('onClose');
  };

  handlePickerClick = value => {
    this.setState({ firstDate: value });
    action('onClick');
  };

  handlePickerSecondClick = value => {
    this.setState({ secondDate: value });
    action('onClickDouble');
  };

  render() {
    const { title, lang } = this.props;

    return (
      <Fragment>
        <Datepicker
          title={title}
          lang={lang}
          firstDate={this.state.firstDate}
          secondDate={this.state.secondDate}
          onClick={this.handlePickerClick}
          onClickDouble={this.handlePickerSecondClick}
          onClose={this.handleClose}
          display={this.state.display}
          {...this.props}
        />
        <Button primary block onClick={this.handleBtnClick}>
          Open Date Picker
        </Button>
      </Fragment>
    );
  }
}

datepickerStories.add(
  'Default',
  () => {
    const title = text('title', 'Title of Information');
    const lang = select('lang', ['id', 'en'], 'id');

    const onClose = action('onClose event');
    const onClick = action('onClick event');
    const onClickDouble = action('onClickDouble event');

    const props = {
      title,
      lang,
      onClick,
      onClickDouble,
      onClose,
    };

    return <Datepicker display {...props} />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

datepickerStories.add(
  'With price',
  () => {
    const otherPanel = {
      Default: '',
      'With panelRange': 'panelRange',
      'With panelInfo': 'panelInfo',
    };

    const title = text('title', 'Title of Information');
    const messageInfo = text('Message Info if you use panelInfo', 'Your message info in here');
    const alternateTitle = text('Title Info if you use panelInfo & alternateTitle', 'Your alternate title');
    const panel = radios(`panel`, otherPanel, '');
    const showPriceToggle = boolean('showPriceToggle', false);
    const textColor = text('textColor', '');
    const titlePriceToggle = text('You can change title the bottom panel', 'Custom Title');
    const lang = select('lang', ['id', 'en'], 'id');
    
    return (
      <PickerStateful
        title={title}
        panelRange={panel === `panelRange`}
        panelInfo={panel === `panelInfo`}
        lang={lang}
        messageInfo={messageInfo}
        alternateTitle={alternateTitle}
        showPriceToggle={showPriceToggle}
        showPrice
        titlePriceToggle={titlePriceToggle}
        price={[
          { 
            date: new Date(), 
            price: 200,
            textColor: textColor,
          },
          {
            date: new Date(new Date().setDate(new Date().getDate() + 1)),
            price: 240,
            textColor: textColor,
          },
          {
            date: new Date(new Date().setDate(new Date().getDate() + 2)),
            price: 241,
            textColor: textColor,
          },
          {
            date: new Date(new Date().setDate(new Date().getDate() + 3)),
            price: 150,
            textColor: G500,
          },
        ]}
      />
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

datepickerStories.add(
  'With info',
  () => {
    const otherPanel = {
      Default: '',
      'With panelRange': 'panelRange',
      'With panelInfo': 'panelInfo',
    };

    const title = text('title', 'Title of Information');
    const messageInfo = text('Message Info if you use panelInfo', 'Your message info in here');
    const alternateTitle = text('Title Info if you use panelInfo & alternateTitle', 'Your alternate title');
    const panel = radios(`panel`, otherPanel, '');
    const specialDate = boolean('with specialDate field', false);
    const lang = select('lang', ['id', 'en'], 'id');

    return (
      <PickerStateful
        title={title}
        panelRange={panel === `panelRange`}
        panelInfo={panel === `panelInfo`}
        lang={lang}
        messageInfo={messageInfo}
        alternateTitle={alternateTitle}
        infoDate={[
          {
            date: new Date(new Date().setDate(new Date().getDate() + 1)),
            text: specialDate ? 'only in this month' : 'Not Special Date',
            specialDate: specialDate,
          },
          {
            date: new Date(new Date().setDate(new Date().getDate() + 2)),
            text: specialDate ? 'only in this month' : 'Not Special Date',
            specialDate: specialDate,
          },
          {
            date: new Date(new Date().setDate(new Date().getDate() + 3)),
            text: specialDate ? 'only in this month' : 'Not Special Date',
            specialDate: specialDate,
          },
        ]}
      />
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

datepickerStories.add(
  'Alternate Date',
  () => {
    const otherPanel = {
      Default: '',
      'With panelRange': 'panelRange',
      'With panelInfo': 'panelInfo',
    };

    const title = text('title', 'Title of Information');
    const messageInfo = text('Message Info if you use panelInfo', 'Your message info in here');
    const alternateTitle = text('Title Info if you use panelInfo & alternateTitle', 'Your alternate title');
    const panel = radios(`panel`, otherPanel, '');
    const specialDate = boolean('with specialDate field', false);
    const lang = select('lang', ['id', 'en'], 'id');

    return (
      <PickerStateful
        title={title}
        panelRange={panel === `panelRange`}
        panelInfo={panel === `panelInfo`}
        lang={lang}
        messageInfo={messageInfo}
        alternateTitle={alternateTitle}
        alternateDate={[
          {
            date: new Date(new Date().setDate(new Date().getDate() + 1)),
            specialDate: specialDate,
          },
          {
            date: new Date(new Date().setDate(new Date().getDate() + 2)),
            specialDate: specialDate,
          },
        ]}
      />
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

datepickerStories.add(
  'Disabled Date',
  () => {
    const otherPanel = {
      Default: '',
      'With panelRange': 'panelRange',
      'With panelInfo': 'panelInfo',
    };

    const title = text('title', 'Title of Information');
    const messageInfo = text('Message Info if you use panelInfo', 'Your message info in here');
    const alternateTitle = text('Title Info if you use panelInfo & alternateTitle', 'Your alternate title');
    const panel = radios(`panel`, otherPanel, '');
    const specialDate = boolean('with specialDate field', false);
    const lang = select('lang', ['id', 'en'], 'id');

    return (
      <PickerStateful
        title={title}
        panelRange={panel === `panelRange`}
        panelInfo={panel === `panelInfo`}
        lang={lang}
        messageInfo={messageInfo}
        alternateTitle={alternateTitle}
        disabledDate={[
          {
            date: new Date(new Date().setDate(new Date().getDate() + 1)),
            specialDate: specialDate,
          },
          {
            date: new Date(new Date().setDate(new Date().getDate() + 2)),
            specialDate: specialDate,
          },
        ]}
      />
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

datepickerStories.add(
  'Enabled Date',
  () => {
    const otherPanel = {
      Default: '',
      'With panelRange': 'panelRange',
      'With panelInfo': 'panelInfo',
    };

    const title = text('title', 'Title of Information');
    const messageInfo = text('Message Info if you use panelInfo', 'Your message info in here');
    const alternateTitle = text('Title Info if you use panelInfo & alternateTitle', 'Your alternate title');
    const panel = radios(`panel`, otherPanel, '');
    const specialDate = boolean('with specialDate field', true);
    const lang = select('lang', ['id', 'en'], 'id');

    return (
      <PickerStateful
        title={title}
        panelRange={panel === `panelRange`}
        panelInfo={panel === `panelInfo`}
        lang={lang}
        messageInfo={messageInfo}
        alternateTitle={alternateTitle}
        enabledDate={[
          {
            date: new Date(new Date().setDate(new Date().getDate() + 1)),
            specialDate: specialDate,
          },
          {
            date: new Date(new Date().setDate(new Date().getDate() + 2)),
            specialDate: specialDate,
          },
        ]}
      />
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

datepickerStories.add(
  'Range Date',
  () => {
    const otherPanel = {
      Default: '',
      'With panelRange': 'panelRange',
      'With panelInfo': 'panelInfo',
    };

    const title = text('title', 'Title of Information');
    const messageInfo = text('Message Info if you use panelInfo', 'Your message info in here');
    const alternateTitle = text('Title Info if you use panelInfo & alternateTitle', 'Your alternate title');
    const panel = radios(`panel`, otherPanel, '');
    const lang = select('lang', ['id', 'en'], 'id');

    const firstDateOn = boolean('with props firstDate', true);
    const secondDateOn = boolean('with props secondDate', true);

    const minDateOn = boolean('with props minDate', false);
    const maxDateOn = boolean('with props maxDate', false);

    const minDate = date('value minDate', new Date(new Date().setDate(new Date().getDate() - 1)));
    const maxDate = date('value maxDate', new Date(new Date().setMonth(new Date().getMonth() + 1)));

    const props = {
      title,
      panelRange: panel === `panelRange`,
      panelInfo: panel === `panelInfo`,
      lang,
      messageInfo,
      alternateTitle,
    };

    if (firstDateOn) {
      props.firstDate = new Date();
    }

    if (secondDateOn) {
      props.secondDate = new Date(new Date().setDate(new Date().getDate() + 5));
    }

    if (minDateOn) {
      props.minDate = new Date(minDate);
    }

    if (maxDateOn) {
      props.maxDate = new Date(maxDate);
    }

    return <Datepicker display {...props} />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

datepickerStories.add(
  'DatepickerScroll Default',
  () => {
    const type = select('type', ['date', 'datetime', 'time'], 'date');
    const format = text('format', 'd-MMMM-yyyy');
    const description = text('description', 'Description');
    const display = boolean('display', true);
    const initialDate = date('initialDate', new Date());
    const lang = select('lang', ['id', 'en'], 'id');
    const title = text('title', 'Title');
    const minuteInterval = number('minuteinterval', 1);
    const minDate = date('minDate', new Date(2019, 2, 17, 2, 5));
    const maxDate = date('maxDate', new Date(2021, 2, 17, 3, 6));
    const onChangeDate = action('onChangeDate event');
    const onChangeMonth = action('onChangeMonth event');
    const onChangeYear = action('onChangeYear event');
    const onChangeHour = action('onChangeHour event');
    const onChangeMinute = action('onChangeMinute event');
    const onClick = action('onClick event');
    const onClose = action('onClose event');

    const props = {
      description,
      display,
      format,
      initialDate: new Date(initialDate),
      lang,
      maxDate: new Date(maxDate),
      minDate: new Date(minDate),
      minuteInterval,
      onChangeDate,
      onChangeHour,
      onChangeMinute,
      onChangeMonth,
      onChangeYear,
      onClick,
      onClose,
      title,
      type,
    };

    return <Datepicker scrollMode {...props} />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

datepickerStories.add(
  'DatepickerScroll Default with min and max time',
  () => {
    const description = text('description', 'Description');
    const display = boolean('display', true);
    const initialDate = date('initialDate', new Date());
    const lang = select('lang', ['id', 'en'], 'id');
    const maxDate = date('maxDate', new Date(2021, 2, 17, 3, 6));
    const maxTime = date('maxTime', new Date(0, 0, 0, 15, 10));
    const minDate = date('minDate', new Date(2019, 2, 17, 2, 5));
    const minTime = date('minTime', new Date(0, 0, 0, 4, 20));
    const minuteInterval = number('minuteinterval', 30);
    const title = text('title', 'Title');
    const type = select('type', ['date', 'datetime', 'time'], 'datetime');

    const onChangeDate = action('onChangeDate event');
    const onChangeHour = action('onChangeHour event');
    const onChangeMinute = action('onChangeMinute event');
    const onChangeMonth = action('onChangeMonth event');
    const onChangeYear = action('onChangeYear event');
    const onClick = action('onClick event');
    const onClose = action('onClose event');

    const props = {
      description,
      display,
      initialDate: new Date(initialDate),
      lang,
      maxDate: new Date(maxDate),
      maxTime: new Date(maxTime),
      minDate: new Date(minDate),
      minTime: new Date(minTime),
      minuteInterval,
      title,
      type,
      onChangeDate,
      onChangeHour,
      onChangeMinute,
      onChangeMonth,
      onChangeYear,
      onClick,
      onClose,
    };

    return <Datepicker scrollMode {...props} />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

datepickerStories.add(
  'DatepickerScroll with min & max years & initialDate',
  () => {
    return (
      <PickerStateful
        scrollMode
        description={'Datepicker scroll with min & max years & initialDate'}
        minDate={new Date(1993, 6, 5)}
        maxDate={new Date(1995, 6, 26)}
        initialDate={new Date(1994, 6, 25)}
      />
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);
