import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, object, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

/**
 * Component(s)
 */
import TotalAmount from 'unify-react-mobile/build/TotalAmount';
import NavBar from 'unify-react-mobile/build/NavBar';
import Button from 'unify-react-mobile/build/Button';
import Card from 'unify-react-mobile/build/Card';
import BottomSheetV2 from 'unify-react-mobile/build/BottomSheetV2';
import List from 'unify-react-mobile/build/List';

/**
 * Notes
 */
import README from 'unify-react-mobile/build/TotalAmount/TotalAmount.md';

/**
 * Storybook Constructor
 */
const totalAmountStories = storiesOf('Compositions/TotalAmount', module);

/**
 * Storybook Decorator
 */
totalAmountStories.addDecorator(withKnobs);

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

const _gridSty = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: '16px',
  rowGap: '16px',
  padding: '16px',
};

const _cardSty = {
  height: '150px',
  margin: 0,
  zIndex: 10,
};

const Thumbnail = (props) => <Card style={_cardSty} {...props} />;
const SamplePage = () => (
  <>
    <NavBar main fixed title="Unify" onBurgerClick={() => alert('burger clicked')}>
      <Button style={{ marginRight: '16px', borderRadius: '50%' }} filled main id="navBar-button">
        a
      </Button>
    </NavBar>
    <div style={_gridSty}>
      {new Array(20).fill(0).map((x, i) => (
        <Thumbnail key={i} />
      ))}
    </div>
  </>
);

const MenuPopup = ({ show, onClose }) => {
  const texts = 'Text Goes Here';
  const description = 'Description goes here';

  return (
    <BottomSheetV2
      display={show}
      dynamicContent
      full={false}
      initialPos={0}
      padding={0}
      title="BottomSheet Title"
      withClose={true}
      withKnob={false}
      withOverlay={true}
      onActionClick={() => alert('action clicked')}
      onClose={onClose}
    >
      <List
        items={[
          {
            text: texts,
            description: description,
            arrow: true,
            onClick: action('onClick'),
          },
          {
            text: texts,
            description: description,
            arrow: true,
            onClick: action('onClick'),
          },
          {
            text: texts,
            description: description,
            arrow: true,
            onClick: action('onClick'),
          },
        ]}
      />
    </BottomSheetV2>
  );
};

totalAmountStories.add(
  'Default',
  () => {
    const [showMenu, setShowMenu] = useState(false);

    const amount = text('amount', 'Rp100.000');
    const amountSuffix = text('amountSuffix', '');
    const amountWithChevron = boolean('amountWithChevron', true);
    const onClickAmount = () => setShowMenu(true);
    const bottom = number('bottom', 0, { min: 0 });
    const buttonProps = object('buttonProps', {
      filled: true,
      main: true,
      children: 'CTA Here (2)',
      image: 'https://picsum.photos/24',
      onClick: action('buttonProps.onClick'),
    });
    const disabled = boolean('disabled', false);
    const fixed = boolean('fixed', true);
    const labelOrder = object('labelOrder', ['title', 'subtitle', 'amount', 'text']);
    const loading = boolean('loading', false);
    const title = text('title', '');
    const titleSuffix = text('titleSuffix', '');
    const subTitle = text('subTitle', '');
    const zIndex = number('zIndex', 40);

    return (
      <>
        <SamplePage />
        <TotalAmount
          {...{
            amount,
            amountSuffix,
            amountWithChevron,
            onClickAmount,
            bottom,
            buttonProps,
            disabled,
            fixed,
            labelOrder,
            loading,
            title,
            titleSuffix,
            subTitle,
            zIndex,
          }}
        />
        <MenuPopup show={showMenu} onClose={() => setShowMenu(false)} />
      </>
    );
  },
  storyOptions,
);

totalAmountStories.add(
  'Type 1: Simple',
  () => {
    const [showMenu, setShowMenu] = useState(false);

    const amount = text('amount', 'Rp100.000');
    const amountWithChevron = boolean('amountWithChevron', true);
    const onClickAmount = () => setShowMenu(true);
    const bottom = number('bottom', 0, { min: 0 });
    const buttonProps = object('buttonProps', {
      filled: true,
      main: true,
      children: 'CTA Here (2)',
      image: 'https://picsum.photos/24',
    });
    const disabled = boolean('disabled', false);
    const fixed = boolean('fixed', true);
    const loading = boolean('loading', false);

    return (
      <>
        <SamplePage />
        <TotalAmount {...{ disabled, fixed, buttonProps, loading, bottom, amount, amountWithChevron, onClickAmount }} />
        <MenuPopup show={showMenu} onClose={() => setShowMenu(false)} />
      </>
    );
  },
  storyOptions,
);

totalAmountStories.add(
  'Type 2: With Title',
  () => {
    const [showMenu, setShowMenu] = useState(false);

    const amount = text('amount', 'Rp100.000');
    const amountWithChevron = boolean('amountWithChevron', true);
    const onClickAmount = () => setShowMenu(true);
    const bottom = number('bottom', 0, { min: 0 });
    const buttonProps = object('buttonProps', {
      filled: true,
      main: true,
      children: 'CTA Here (2)',
      image: 'https://picsum.photos/24',
    });
    const disabled = boolean('disabled', false);
    const fixed = boolean('fixed', true);
    const labelOrder = object('labelOrder', ['title', 'subtitle', 'amount', 'text']);
    const loading = boolean('loading', false);
    const title = text('title', 'Title Here');

    return (
      <>
        <SamplePage />
        <TotalAmount
          {...{
            disabled,
            fixed,
            buttonProps,
            labelOrder,
            loading,
            bottom,
            title,
            amount,
            amountWithChevron,
            onClickAmount,
          }}
        />
        <MenuPopup show={showMenu} onClose={() => setShowMenu(false)} />
      </>
    );
  },
  storyOptions,
);

totalAmountStories.add(
  'Type 3: With Label Title & Link',
  () => {
    const [showMenu, setShowMenu] = useState(false);

    const amount = text('amount', 'Rp100.000');
    const amountWithChevron = boolean('amountWithChevron', true);
    const onClickAmount = () => setShowMenu(true);
    const bottom = number('bottom', 0, { min: 0 });
    const buttonProps = object('buttonProps', {
      filled: true,
      main: true,
      children: 'CTA Here (2)',
      image: 'https://picsum.photos/24',
    });
    const disabled = boolean('disabled', false);
    const fixed = boolean('fixed', true);
    const labelOrder = object('labelOrder', ['amount', 'title']);
    const loading = boolean('loading', false);
    const title = text('title', 'Label Text');
    const titleLinkText = text('titleLinkText', 'Text Link');
    const titleLinkUrl = text('titleLinkUrl', '#');

    return (
      <>
        <SamplePage />
        <TotalAmount
          {...{
            disabled,
            fixed,
            buttonProps,
            labelOrder,
            loading,
            bottom,
            amount,
            amountWithChevron,
            title,
            titleLinkText,
            titleLinkUrl,
            onClickAmount,
          }}
        />
        <MenuPopup show={showMenu} onClose={() => setShowMenu(false)} />
      </>
    );
  },
  storyOptions,
);

totalAmountStories.add(
  'Type 4: With Title, Amount, suffix',
  () => {
    const [showMenu, setShowMenu] = useState(false);

    const amount = text('amount', 'Rp10.000');
    const amountSuffix = text('amountSuffix', 'suffix');
    const amountWithChevron = boolean('amountWithChevron', true);
    const bottom = number('bottom', 0, { min: 0 });
    const buttonProps = object('buttonProps', {
      filled: true,
      main: true,
      children: 'CTA Here (2)',
      image: 'https://picsum.photos/24',
    });
    const disabled = boolean('disabled', false);
    const fixed = boolean('fixed', true);
    const labelOrder = object('labelOrder', ['title', 'subtitle', 'amount', 'text']);
    const loading = boolean('loading', false);
    const title = text('title', 'Title Here');
    const titleSuffix = text('titleSuffix', 'suffix');

    const onClickAmount = () => setShowMenu(true);

    return (
      <>
        <SamplePage />
        <TotalAmount
          {...{
            disabled,
            fixed,
            buttonProps,
            labelOrder,
            loading,
            bottom,
            title,
            titleSuffix,
            amount,
            amountSuffix,
            amountWithChevron,
            onClickAmount,
          }}
        />
        <MenuPopup show={showMenu} onClose={() => setShowMenu(false)} />
      </>
    );
  },
  storyOptions,
);

totalAmountStories.add(
  'Type 5: With Description',
  () => {
    const [showMenu, setShowMenu] = useState(false);

    const amount = text('amount', 'Rp10.000');
    const bottom = number('bottom', 0, { min: 0 });
    const buttonProps = object('buttonProps', {
      filled: true,
      main: true,
      children: 'CTA Here (2)',
      image: 'https://picsum.photos/24',
    });
    const disabled = boolean('disabled', false);
    const fixed = boolean('fixed', true);
    const labelOrder = object('labelOrder', ['title', 'subtitle', 'amount', 'text']);
    const loading = boolean('loading', false);
    const description = object('description', {
      text: 'This is Description',
      linkText: 'Click Me',
      linkUrl: 'https://m.tokopedia.com/234/detail',
    });
    const title = text('title', 'Title Here');

    const onClickAmount = () => setShowMenu(true);

    return (
      <>
        <SamplePage />
        <TotalAmount
          {...{ disabled, fixed, buttonProps, description, labelOrder, loading, bottom, amount, title, onClickAmount }}
        />
        <MenuPopup show={showMenu} onClose={() => setShowMenu(false)} />
      </>
    );
  },
  storyOptions,
);

totalAmountStories.add(
  'Type 6: With Collapsible info',
  () => {
    const [showMenu, setShowMenu] = useState(false);

    const amount = text('amount', 'Rp10.000');
    const bottom = number('bottom', 0, { min: 0 });
    const buttonProps = object('buttonProps', {
      filled: true,
      main: true,
      children: 'CTA Here (2)',
      image: 'https://picsum.photos/24',
    });
    const collapsibleInfo = (
      <Card margin="0" hasBorder={true}>
        Hello!
      </Card>
    );
    const disabled = boolean('disabled', false);
    const fixed = boolean('fixed', true);
    const labelOrder = object('labelOrder', ['title', 'subtitle', 'amount', 'text']);
    const loading = boolean('loading', false);
    const title = text('title', 'Title Here');

    const onClickAmount = () => setShowMenu(true);

    return (
      <>
        <SamplePage />
        <TotalAmount
          {...{
            disabled,
            fixed,
            buttonProps,
            labelOrder,
            loading,
            bottom,
            collapsibleInfo,
            amount,
            title,
            onClickAmount,
          }}
        />
        <MenuPopup show={showMenu} onClose={() => setShowMenu(false)} />
      </>
    );
  },
  storyOptions,
);

totalAmountStories.add(
  'Type 7: With Title, Amount & SubTitle',
  () => {
    const [showMenu, setShowMenu] = useState(false);

    const amount = text('amount', 'Rp10.000');
    const buttonProps = object('buttonProps', {
      filled: true,
      main: true,
      children: 'CTA Here (2)',
      image: 'https://picsum.photos/24',
    });
    const bottom = number('bottom', 0, { min: 0 });
    const disabled = boolean('disabled', false);
    const fixed = boolean('fixed', true);
    const labelOrder = object('labelOrder', ['title', 'subtitle', 'amount', 'text']);
    const loading = boolean('loading', false);
    const subTitle = text('subTitle', 'SubTitle Here');
    const title = text('title', 'Title Here');

    const onClickAmount = () => setShowMenu(true);

    return (
      <>
        <SamplePage />
        <TotalAmount
          {...{ disabled, fixed, buttonProps, labelOrder, loading, bottom, amount, title, subTitle, onClickAmount }}
        />
        <MenuPopup show={showMenu} onClose={() => setShowMenu(false)} />
      </>
    );
  },
  storyOptions,
);

totalAmountStories.add(
  'Disable Button',
  () => {
    const [showMenu, setShowMenu] = useState(false);

    const fixed = true;
    const labelOrder = object('labelOrder', ['title', 'subtitle', 'amount', 'text']);
    const loading = false;
    const buttonProps = {
      filled: true,
      main: true,
      children: 'CTA Here (2)',
      image: 'https://picsum.photos/24',
      disabled: boolean('disabled Button', true),
      onClick: action('button.onClick'),
    };
    const title = 'Title Here';
    const amount = 'Rp10.000';
    const subTitle = 'SubTitle Here';

    const onClickAmount = () => setShowMenu(true);

    return (
      <>
        <SamplePage />
        <TotalAmount {...{ fixed, buttonProps, labelOrder, loading, title, amount, onClickAmount, subTitle }} />
        <MenuPopup show={showMenu} onClose={() => setShowMenu(false)} />
      </>
    );
  },
  storyOptions,
);

totalAmountStories.add(
  'Using Container',
  () => {
    const [showMenu, setShowMenu] = useState(false);

    const fixed = true;
    const loading = false;
    const buttonProps = {
      filled: true,
      main: true,
      children: 'CTA Here (2)',
      image: 'https://picsum.photos/24',
      onClick: action('button.onClick'),
    };
    const title = 'Title Here';
    const amount = 'Rp10.000';
    const onClickAmount = () => setShowMenu(true);
    const subTitle = 'SubTitle Here';

    return (
      <>
        <SamplePage />
        <TotalAmount.Container {...{ fixed, buttonProps, loading }}>
          <TotalAmount.Title>{title}</TotalAmount.Title>
          <TotalAmount.Amount onClick={onClickAmount}>{amount}</TotalAmount.Amount>
          <TotalAmount.SubTitle>{subTitle}</TotalAmount.SubTitle>
        </TotalAmount.Container>
        <MenuPopup show={showMenu} onClose={() => setShowMenu(false)} />
      </>
    );
  },
  storyOptions,
);
