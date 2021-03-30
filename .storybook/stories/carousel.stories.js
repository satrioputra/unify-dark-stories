import React, { useState } from 'react';
import markdownNotes from 'unify-react-mobile/build/Carousel/Carousel.md';
import markdownNotes2 from 'unify-react-mobile/build/CarouselV2/CarouselV2.md';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number, text, select } from '@storybook/addon-knobs';
import Carousel from 'unify-react-mobile/build/Carousel';
import CarouselV2 from 'unify-react-mobile/build/CarouselV2';
import Button from 'unify-react-mobile/build/Button';
import Tips from 'unify-react-mobile/build/Tips';

const carouselStories = storiesOf('Compositions/Carousel', module);

carouselStories.addDecorator(withKnobs);

carouselStories.add(
  'Default',
  () => {
    const autoPlay = boolean('autoPlay', false);
    const infinite = boolean('infinite', true);
    const inverted = boolean('inverted', false);
    const link = text('link', '');
    const linkText = text('linkText', 'See All Promo');
    const padding = text('padding', '16px');
    const width = number('width');
    const useContainerWidth = boolean('useContainerWidth', false);
    const onChange = action('onChange event');
    const props = { autoPlay, infinite, inverted, link, linkText, padding, useContainerWidth, onChange, width };

    return (
      <React.Fragment>
        <Tips>
          Switch to <b>Knobs</b> tab on addon panel to dynamically interact with props.
        </Tips>
        <div className="container">
          <div className="section">
            <h2 className="section__title">Carousel</h2>
          </div>
        </div>
        <div>
          <Carousel {...props}>
            <img
              alt={''}
              src="https://ecs7.tokopedia.net/img/cache/480/attachment/2019/3/26/5516010/5516010_575f6cf4-7e25-4dbd-b211-10553e11b640.jpg"
            />
            <img
              alt={''}
              src="https://ecs7.tokopedia.net/img/cache/480/attachment/2019/3/26/5516010/5516010_575f6cf4-7e25-4dbd-b211-10553e11b640.jpg"
            />
            <img
              alt={''}
              src="https://ecs7.tokopedia.net/img/cache/480/attachment/2019/3/26/5516010/5516010_575f6cf4-7e25-4dbd-b211-10553e11b640.jpg"
            />
            <img
              alt={''}
              src="https://ecs7.tokopedia.net/img/cache/480/attachment/2019/3/26/5516010/5516010_575f6cf4-7e25-4dbd-b211-10553e11b640.jpg"
            />
            <img
              alt={''}
              src="https://ecs7.tokopedia.net/img/cache/480/attachment/2019/3/26/5516010/5516010_575f6cf4-7e25-4dbd-b211-10553e11b640.jpg"
            />
          </Carousel>
        </div>
      </React.Fragment>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

carouselStories.add(
  'new Design',
  () => {
    const infinite = boolean('inifite', true);
    const linkText = text('linkText', 'See All Promo');

    return (
      <Carousel padding="32px" autoPlay={false} infinite={infinite} link={() => console.log('asd')} linkText={linkText}>
        <img
          alt={''}
          src="https://ecs7.tokopedia.net/img/cache/480/attachment/2019/3/26/5516010/5516010_575f6cf4-7e25-4dbd-b211-10553e11b640.jpg"
        />
        <img
          alt={''}
          src="https://ecs7.tokopedia.net/img/cache/480/attachment/2019/3/26/5516010/5516010_575f6cf4-7e25-4dbd-b211-10553e11b640.jpg"
        />
        <img
          alt={''}
          src="https://ecs7.tokopedia.net/img/cache/480/attachment/2019/3/26/5516010/5516010_575f6cf4-7e25-4dbd-b211-10553e11b640.jpg"
        />
        <img
          alt={''}
          src="https://ecs7.tokopedia.net/img/cache/480/attachment/2019/3/26/5516010/5516010_575f6cf4-7e25-4dbd-b211-10553e11b640.jpg"
        />
        <img
          alt={''}
          src="https://ecs7.tokopedia.net/img/cache/480/attachment/2019/3/26/5516010/5516010_575f6cf4-7e25-4dbd-b211-10553e11b640.jpg"
        />
      </Carousel>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

carouselStories.add(
  'with Inverted style',
  () => {
    const autoPlay = boolean('autoPlay', true);
    const infinite = boolean('inifite', true);
    const linkText = text('linkText', 'See All Promo');

    return (
      <div style={{ backgroundColor: 'green' }}>
        <Carousel
          autoPlay={autoPlay}
          infinite={infinite}
          link={() => console.log('asd')}
          linkText={linkText}
          inverted
          padding="16px"
        >
          <img
            alt={''}
            src="https://ecs7.tokopedia.net/img/cache/480/attachment/2019/3/26/5516010/5516010_575f6cf4-7e25-4dbd-b211-10553e11b640.jpg"
          />
          <img
            alt={''}
            src="https://ecs7.tokopedia.net/img/cache/480/attachment/2019/3/26/5516010/5516010_575f6cf4-7e25-4dbd-b211-10553e11b640.jpg"
          />
        </Carousel>
      </div>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

carouselStories.add(
  'with data-testid',
  () => {
    const dataTestWrapper = text('dataTest wrapper', 'wrapperUnfCarousel');
    const dataTestImage = text('dataTest image', 'imageUnfCarousel');
    const dataTestLink = text('dataTest link', 'linkUnfCarousel');
    const dataTestIndicatorsWrapper = text('dataTest indicatorsWrapper', 'indicatorsWrapperUnfCarousel');
    const dataTestIndicatorsDot = text('dataTest indicatorsDot', 'indicatorsDotUnfCarousel');
    const linkText = text('linkText', 'See All Promo');

    return (
      <React.Fragment>
        <Tips>
          Switch to <b>Knobs</b> tab on addon panel to dynamically interact with props.
        </Tips>
        <div className="container">
          <div className="section">
            <h2 className="section__title">Carousel</h2>
          </div>
        </div>
        <div>
          <Carousel
            dataTest={{
              wrapper: dataTestWrapper,
              image: dataTestImage,
              link: dataTestLink,
              indicatorsWrapper: dataTestIndicatorsWrapper,
              indicatorsDot: dataTestIndicatorsDot,
            }}
            linkText={linkText}
          >
            <img
              alt={''}
              src="https://ecs7.tokopedia.net/img/cache/480/attachment/2019/3/26/5516010/5516010_575f6cf4-7e25-4dbd-b211-10553e11b640.jpg"
            />
            <img
              alt={''}
              src="https://ecs7.tokopedia.net/img/cache/480/attachment/2019/3/26/5516010/5516010_575f6cf4-7e25-4dbd-b211-10553e11b640.jpg"
            />
            <img
              alt={''}
              src="https://ecs7.tokopedia.net/img/cache/480/attachment/2019/3/26/5516010/5516010_575f6cf4-7e25-4dbd-b211-10553e11b640.jpg"
            />
            <img
              alt={''}
              src="https://ecs7.tokopedia.net/img/cache/480/attachment/2019/3/26/5516010/5516010_575f6cf4-7e25-4dbd-b211-10553e11b640.jpg"
            />
            <img
              alt={''}
              src="https://ecs7.tokopedia.net/img/cache/480/attachment/2019/3/26/5516010/5516010_575f6cf4-7e25-4dbd-b211-10553e11b640.jpg"
            />
          </Carousel>
        </div>
      </React.Fragment>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);
carouselStories.add(
  'CarouselV2 Default',
  () => {
    const activeIndex = number('activeIndex', 0);
    const autoPlay = boolean('autoPlay', false);
    const autoPlaySpeed = number('autoPlaySpeed(ms)', 3000);
    const breakPoint = number('breakPoint(%)', 50);
    const centerMode = boolean('centerMode', true);
    const sneakPeekWidth = text('sneakPeekWidth', '25px');
    const height = number('height', 0);
    const indicatorAlign = select('indicatorAlign', ['left', 'center', 'right'], 'left');
    const loop = select('loop', ['infinite', 'jump', 'none'], 'infinite');
    const showIndicator = boolean('showIndicator', true);
    const slideToScroll = number('slideToScroll', 2);
    const slideToShow = number('slideToShow', 1);
    const useContentWidth = boolean('useContentWidth', false);
    const freeScrolling = boolean('freeScrolling', false);
    const onSlideChange = action('onSlideChange event');
    const onSwipe = action('onSwipe event');

    const props = {
      activeIndex,
      autoPlay,
      autoPlaySpeed,
      breakPoint,
      centerMode,
      freeScrolling,
      height,
      indicatorAlign,
      showIndicator,
      slideToScroll,
      slideToShow,
      sneakPeekWidth,
      loop,
      useContentWidth,
      dataTest: { carouselIndicator: 'indicator' },
      onSlideChange,
      onSwipe,
    };

    return (
      <React.Fragment>
        <Tips>
          Switch to <b>Knobs</b> tab on addon panel to dynamically interact with props.
        </Tips>
        <div className="container">
          <div className="section">
            <h2 className="section__title">Carousel</h2>
          </div>
        </div>
        <div>
          <CarouselV2 {...props}>
            <img
              alt={''}
              width="60px"
              style={{ padding: '0 4px' }}
              src="https://ecs7.tokopedia.net/img/banner/2020/3/17/85531617/85531617_d4d3f14d-22a2-4af1-b487-b25c6baf6aee.jpg"
            />
            <img
              alt={''}
              width="65px"
              style={{ padding: '0 4px' }}
              src="https://ecs7.tokopedia.net/img/banner/2020/3/17/85531617/85531617_36b9a1d1-b059-409a-a38f-fd97b9060193.jpg"
            />
            <img
              alt={''}
              width="50px"
              style={{ padding: '0 4px' }}
              src="https://ecs7.tokopedia.net/img/banner/2020/3/17/85531617/85531617_727db60f-bd58-4a25-bb1c-066a4bb42163.jpg"
            />
            <a href="http://www.tokopedia.com" style={{ display: 'block' }}>
              <img
                alt={''}
                style={{ padding: '0 4px' }}
                src="https://ecs7.tokopedia.net/img/attachment/2019/11/11/8966428/8966428_b8d6e226-0889-4e6d-be1c-292f63e1cea1.png"
              />
            </a>
            <img
              alt={''}
              width="70px"
              style={{ padding: '0 4px' }}
              src="https://ecs7.tokopedia.net/img/banner/2020/3/17/85531617/85531617_0c04e389-a167-4208-8428-7fd00e227bb7.jpg"
            />
            <a href="http://www.tokopedia.com" width="70px" style={{ display: 'block' }}>
              <img
                alt={''}
                style={{ padding: '0 4px' }}
                src="https://ecs7.tokopedia.net/img/banner/2020/3/17/85531617/85531617_36b9a1d1-b059-409a-a38f-fd97b9060193.jpg"
              />
            </a>
          </CarouselV2>
        </div>
      </React.Fragment>
    );
  },
  {
    notes: { markdown: markdownNotes2 },
  },
);

carouselStories.add(
  'CarouselV2 Variable Width Test',
  () => {
    const activeIndex = number('activeIndex', 0);
    const autoPlay = boolean('autoPlay', false);
    const autoPlaySpeed = number('autoPlaySpeed(ms)', 2000);
    const breakPoint = number('breakPoint(%)', 50);
    const centerMode = boolean('centerMode', true);
    const sneakPeekWidth = text('sneakPeekWidth', '3%');
    const indicatorAlign = select('indicatorAlign', ['left', 'center', 'right'], 'left');
    const height = number('height', 0);
    const loop = select('loop', ['infinite', 'jump', 'none'], 'infinite');
    const showIndicator = boolean('showIndicator', false);
    const slideToScroll = number('slideToScroll', 1);
    const slideToShow = number('slideToShow', 4);
    const useContentWidth = boolean('useContentWidth', true);
    const freeScrolling = boolean('freeScrolling', false);
    const onSlideChange = action('onSlideChange event');
    const onSwipe = action('onSwipe event');

    const props = {
      activeIndex,
      autoPlay,
      autoPlaySpeed,
      breakPoint,
      centerMode,
      freeScrolling,
      height,
      indicatorAlign,
      showIndicator,
      slideToScroll,
      slideToShow,
      sneakPeekWidth,
      loop,
      useContentWidth,
      onSlideChange,
      onSwipe,
    };

    return (
      <React.Fragment>
        <Tips>
          Switch to <b>Knobs</b> tab on addon panel to dynamically interact with props.
        </Tips>
        <div className="container">
          <div className="section">
            <h2 className="section__title">Carousel</h2>
          </div>
        </div>
        <div>
          <CarouselV2 {...props}>
            <div width="40px">
              <img
                alt={''}
                style={{ display: 'block' }}
                width="45px"
                src="https://www.psdgraphics.com/file/red-number-0.jpg"
              />
              <img
                alt={''}
                style={{ display: 'block' }}
                width="50px"
                src="https://www.psdgraphics.com/file/red-number-1.jpg"
              />
            </div>
            <img alt={''} width="55px" src="https://www.psdgraphics.com/file/red-number-2.jpg" />
            <img alt={''} width="60px" src="https://www.psdgraphics.com/file/red-number-3.jpg" />
            <img alt={''} width="65px" src="https://www.psdgraphics.com/file/red-number-4.jpg" />
            <img alt={''} width="70px" src="https://www.psdgraphics.com/file/red-number-5.jpg" />
            <img alt={''} width="75px" src="https://www.psdgraphics.com/file/red-number-6.jpg" />
            <img alt={''} width="80px" src="https://www.psdgraphics.com/file/red-number-7.jpg" />
            <img alt={''} width="65px" src="https://www.psdgraphics.com/file/red-number-8.jpg" />
          </CarouselV2>
        </div>
      </React.Fragment>
    );
  },
  {
    notes: { markdown: markdownNotes2 },
  },
);
