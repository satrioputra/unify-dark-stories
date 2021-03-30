import React, { useState, useEffect  } from 'react';
import { css } from 'react-emotion';
import { storiesOf } from '@storybook/react';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import { withKnobs, boolean, number, text, radios } from '@storybook/addon-knobs';

/**
 * Component(s)
 */
import Accordion from 'unify-react-mobile/build/Accordion';
import NavBar from 'unify-react-mobile/build/NavBar';
import Typography from 'unify-react-mobile/build/Typography';

/**
 * Notes
 */
import README from 'unify-react-mobile/build/Accordion/Accordion.md';
import { colorTextHigh, G500, N50 } from 'unify-token/build/v2/colors';

/**
 * Storybook Constructor
 */
const accordionStories = storiesOf('Components/Accordion', module);

/**
 * Storybook Decorator
 */
accordionStories.addDecorator(withKnobs);

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

const nodeContent = () => {
  return (
    <Accordion
      title="Nested Accordion"
    >
      <div style={{ padding: '8px 16px', color: colorTextHigh }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum leo sit amet ex convallis, at dapibus odio consequat. Aliquam nunc nisi, sodales at est a, vestibulum auctor nisi.
      </div>
    </Accordion>
  )
}

const listItems = [
  {
    icon: 'https://ecs7.tokopedia.net/img/blog/promo/2020/03/color%403x.png',
    title: 'Accordion Title 1',
    subTitle: 'subtitle 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum leo sit amet ex convallis, at dapibus odio consequat. Aliquam nunc nisi, sodales at est a, vestibulum auctor nisi. Nunc ut nibh enim. Integer risus justo, porttitor ut odio tristique, euismod maximus ipsum.'
  },
  {
    icon: 'https://ecs7.tokopedia.net/img/blog/promo/2020/03/color%403x.png',
    title: 'Accordion Title 2',
    subTitle: 'subtitle 2',
    content: nodeContent()
  },
  {
    icon: 'https://ecs7.tokopedia.net/img/blog/promo/2020/03/color%403x.png',
    title: 'Accordion Title 3',
    subTitle: 'subtitle 3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum leo sit amet ex convallis, at dapibus odio consequat. Aliquam nunc nisi, sodales at est a, vestibulum auctor nisi. Nunc ut nibh enim. Integer risus justo, porttitor ut odio tristique, euismod maximus ipsum.'
  },
  {
    icon: 'https://ecs7.tokopedia.net/img/blog/promo/2020/03/color%403x.png',
    title: 'Accordion Title 4',
    subTitle: 'subtitle 4',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum leo sit amet ex convallis, at dapibus odio consequat. Aliquam nunc nisi, sodales at est a, vestibulum auctor nisi. '
  },
  {
    icon: 'https://ecs7.tokopedia.net/img/blog/promo/2020/03/color%403x.png',
    title: 'Accordion Title 5',
    subTitle: 'subtitle 5',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
];

const BlockQuote = props => {
  const { children } = props;

  const blockquote = css`
    margin: 16px 0;
    padding: 4px 8px;
    border-radius: 4px;
    border-left: 4px solid ${G500};
    background-color: ${N50};
    color: ${colorTextHigh};
  `;

  return (
    <blockquote className={blockquote}>
      {children}
    </blockquote>
  );
};

const AccordionEmulation = props => {
  const { titleTag, disabled } = props;

  const typeIs = {
    'Has Boolean': 'bool',
    'Has Object': 'obj',
  };

  const typeSticky = radios('sticky', typeIs, 'bool');

  const stickyTop = typeSticky === 'obj' ? number('sticky.top', 0) : null
  const stickyZindex = typeSticky === 'obj' ? number('sticky.zIndex', 1) : null
  const stickyWidth = typeSticky === 'obj' ? text('sticky.maxWidth', '100%') : null

  const stickyOf = typeSticky === 'bool'
    ? true
    : { top: stickyTop < 0 ? 0 : stickyTop, maxWidth: stickyWidth, zIndex: stickyZindex }

  if (stickyTop < 0) {
    console.log('nilai mines')
  }

  return (
    <div style={{ height: '300vh', maxWidth: '500px', margin: 'auto' }}>
      <div style={{ padding: '0 16px' }}>
        <BlockQuote>
          <Typography margin="0" bold>Note:</Typography>
          <Typography margin="0" >The sticky property has a default value `0` (top: 0). but you can change the value in the following way: <br /><b>sticky=&#x0007B;&#x0007B; top: number &#x0007D;&#x0007D;</b> </Typography><br/>
          <Typography margin="0">You can see it in the story tab, find <b>AccordionEmulationNavbar</b>, line code 191</Typography>
        </BlockQuote>
      </div>

      {listItems.map((item, key) => {
        const dividerStat = key + 1;

        return (
          <Accordion
            key={key}
            sticky={stickyOf}
            disabled={disabled}
            hasDivider={listItems.length !== dividerStat}
            icon={item.icon}
            titleTag={titleTag}
            title={item.title}
            subTitle={item.subTitle}
          >
            <div style={{ padding: '8px 16px', color: colorTextHigh }}>
              {item.content}
            </div>
          </Accordion>
        )
      })}
    </div>
  )
};

const AccordionEmulationNavbar = props => {
  const { titleTag } = props;

  const [indexActive, setIndexActive] = useState(0);
  const [navHeight, setNavHeight] = useState(0);

  const getContentHeight = () => {
    if (canUseDOM) {
      setNavHeight(
        document.getElementsByClassName('unf-navbar-container')[0].getBoundingClientRect().height
      );
    }
  };

  const handleClick = key => {
    setIndexActive(key);
  }

  useEffect(() => getContentHeight());

  return (
    <div style={{ paddingBottom: '100vh', maxWidth: '500px', margin: 'auto' }}>
      <NavBar
        title="This Navbar is just an example"
        subTitle="Subtitle"
        numberOfStep={3}
        step={3}
        fixed
      />
      <div style={{ padding: '0 16px', color: colorTextHigh }}>
        <BlockQuote>
          <Typography margin="0" bold>Note:</Typography>
          <Typography margin="0" >The sticky property has a default value `0` (top: 0). but you can change the value in the following way: <br /><b>sticky=&#x0007B;&#x0007B; top: number &#x0007D;&#x0007D;</b> </Typography><br/>
          <Typography margin="0">You can see it in the story tab, find <b>AccordionEmulationNavbar</b>, line code 191</Typography>
        </BlockQuote>
      </div>
      {listItems.map((item, key) => {
        const dividerStat = key + 1;

        return (
          <Accordion
            key={key}
            sticky={{
              top: navHeight,
              maxWidth: 500
            }}
            collapsed={indexActive !== key}
            hasDivider={listItems.length !== dividerStat}
            icon={item.icon}
            titleTag={titleTag}
            title={item.title}
            subTitle={item.subTitle}
            onClick={() => handleClick(key)}
          >
            <div style={{ padding: '8px 16px', color: colorTextHigh }}>
              {item.content}
            </div>
          </Accordion>
        )
      })}
    </div>
  )
};

accordionStories.add(
  'Default',
  () => {
    const collapsed = boolean('collapsed', false);
    const hasDivider = boolean('hasDivider', false);
    const icon = text('icon', 'https://via.placeholder.com/1600x1200');
    const titleTag = number('titleTag', 6);
    const title = text('title', 'Accordion Title');
    const subTitle = text('subTitle', 'Accordion Subtitle');
    const children = text('children', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum leo sit amet ex convallis, at dapibus odio consequat. Aliquam nunc nisi, sodales at est a, vestibulum auctor nisi. Nunc ut nibh enim. Integer risus justo, porttitor ut odio tristique, euismod maximus ipsum. Aliquam nec leo laoreet, tincidunt risus non, ultricies sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras gravida velit vitae quam ultrices, eu rhoncus odio accumsan. Suspendisse vel bibendum ligula, id euismod orci.');

    const log = () => {
      console.log('onClick');
    }

    const otherProps = { 'data-testid': 'accordion1'}

    return (
      <div>
        <div className="container">
          <h2 className="section__title">Accordion</h2>
        </div>
        <Accordion
          collapsed={collapsed}
          hasDivider={hasDivider}
          icon={icon}
          subTitle="Accordion Subtitle"
          title="Accordion Title"
          titleTag={titleTag}
          onClick={log}
          {...otherProps}
        >
          <div style={{ padding: '8px 16px' }}>
            <Accordion
              collapsed
              title="Nested Accordion"
            >
              <div style={{ padding: '8px 16px', color: colorTextHigh }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut vestibulum leo sit amet ex convallis, at dapibus odio consequat.
                Aliquam nunc nisi, sodales at est a, vestibulum auctor nisi. Nunc ut nibh enim.
                Integer risus justo, porttitor ut odio tristique, euismod maximus ipsum.
              </div>
            </Accordion>
          </div>
        </Accordion>
        <Accordion
          collapsed={collapsed}
          hasDivider={hasDivider}
          icon={icon}
          subTitle={subTitle}
          title={title}
          titleTag={titleTag}
          {...otherProps}
        >
          <div style={{ padding: '8px 16px', color: colorTextHigh }}>
            {children}
          </div>
        </Accordion>
      </div>
    );
  },
  storyOptions,
);

accordionStories.add(
  'Emulation Sticky',
  () => {
    const titleTag = number('titleTag', 6);

    return <AccordionEmulation titleTag={titleTag}/>;
  },
  storyOptions,
);

accordionStories.add(
  'Emulation with navbar',
  () => {
    const titleTag = number('titleTag', 6);

    return <AccordionEmulationNavbar titleTag={titleTag} />;
  },
  storyOptions,
);

accordionStories.add(
  'Modular Header',
  () => {
    const collapsed = boolean('collapsed', false);
    const icon = text('icon', 'https://via.placeholder.com/1600x1200');
    const titleTag = number('titleTag', 6);
    const title = text('title', 'Accordion Title');
    const subTitle = text('subTitle', 'Accordion Subtitle');

    const log = () => {
      console.log('onClick');
    }

    return (
      <Accordion.Header
        collapsed={collapsed}
        icon={icon}
        subTitle={subTitle}
        title={title}
        titleTag={titleTag}
        onClick={log}
      />
    );
  },
  storyOptions,
);

accordionStories.add(
  'Emulation with navbar',
  () => {
    const titleTag = number('titleTag', 6);

    return <AccordionEmulationNavbar titleTag={titleTag} />;
  },
  storyOptions,
);

accordionStories.add(
  'Custom Accordion with Modular Header',
  () => {
    const [expand, setExpand] = useState(false);

    const collapsed = boolean('collapsed', false);
    const icon = text('icon', 'https://via.placeholder.com/1600x1200');
    const titleTag = number('titleTag', 6);
    const title = text('title', 'Accordion Title');
    const subTitle = text('subTitle', 'Accordion Subtitle');

    const isClick = () => {
      setExpand(!expand);
    }

    return (
      <div className="accordion-custom">
        <Accordion.Header
          collapsed={collapsed}
          icon={icon}
          subTitle={subTitle}
          title={title}
          titleTag={titleTag}
          onClick={isClick}
        />
        <div
          className="accordion-custom__body"
          style={{
            padding: '16px',
            height: 'auto',
            display: expand ? 'block' : 'none',
            color: colorTextHigh
          }}
        >
          For example, see the story tab and find 'Custom Accordion with Modular Header'
        </div>
      </div>
    );
  },
  storyOptions,
);
