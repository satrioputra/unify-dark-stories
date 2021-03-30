import React, { useState, useEffect, useRef } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, radios, number, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

/**
 * Component(s)
 */
import CoachmarkV2, { CoachmarkStep } from 'unify-react-mobile/build/CoachmarkV2';
import Card from 'unify-react-mobile/build/Card';
import Button from 'unify-react-mobile/build/Button';
import NavBar from 'unify-react-mobile/build/NavBar';
import Chip from 'unify-react-mobile/build/Chip';
import BottomSheetV2 from 'unify-react-mobile/build/BottomSheetV2';

/**
 * Notes
 */
import README from 'unify-react-mobile/build/CoachmarkV2/README.md';
import README_STEPS from 'unify-react-mobile/build/CoachmarkV2/README.steps.md';
import { colorPageBackground, N700 } from 'unify-token/build/v2/colors';

/**
 * Storybook Constructor
 */
const coachmarkV2Stories = storiesOf('Compositions/CoachmarkV2', module);

/**
 * Storybook Decorator
 */
coachmarkV2Stories.addDecorator(withKnobs);

/**
 * Other(s)
 */
const storyOptions = {
  notes: {
    markdown: README,
  },
};
const storyOptionsSteps = {
  notes: {
    markdown: README_STEPS,
  },
};

const cardStyle = {
  display: 'block',
  padding: '16px',
  margin: '8px 16px',
  border: 'none',
  backgroundColor: 'white',
  borderRadius: 5,
  boxShadow: '0 0 8px rgba(0,0,0,0.1)',
};

const ScrollableContent = () => (
  <div style={{ color: '#999' }}>
    <p id="coachmark-0">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ullam aut possimus deleniti provident vel
      excepturi modi expedita repellendus quaerat, cumque molestias repellat a omnis. Laudantium fuga optio deserunt
      dolor?
    </p>
    <p>
      Fugiat saepe facilis, eligendi impedit error officia optio tenetur ut molestias nisi, dolor est sequi quasi
      blanditiis voluptas animi, sed reprehenderit nostrum ipsam temporibus eaque. Natus facere in neque tenetur?
    </p>
    <p>
      Quisquam architecto, culpa temporibus repudiandae consectetur vitae laboriosam nostrum alias voluptates molestias
      ducimus voluptas libero magni totam pariatur deserunt odit aliquid corrupti neque debitis tempora aperiam? Rem
      nesciunt explicabo accusamus!
    </p>
    <p>
      Mollitia labore voluptates quas aliquid beatae provident nesciunt, laborum quasi? Quidem ullam officia, quod
      veritatis distinctio eaque autem corporis hic soluta optio possimus. Delectus deserunt voluptatem exercitationem
      nulla illo porro!
    </p>
    <p>
      Commodi magni alias quasi necessitatibus amet, deserunt consequatur fugiat adipisci, deleniti voluptates facilis
      laudantium! Cupiditate corrupti delectus laboriosam dolorem, ad explicabo? Iure tenetur, esse repellendus sequi
      laudantium omnis eveniet laborum?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, expedita obcaecati totam omnis molestias ratione
      quidem sequi asperiores labore suscipit ipsa accusantium sint esse illum cupiditate ea tempore est necessitatibus.
    </p>
  </div>
);

coachmarkV2Stories.add(
  'simple: default',
  () => {
    const title = text('title', 'Title to give the main context');
    const description = text(
      'description',
      'Body text to describe the highlighted feature, make it concise, no more than 2 lines.',
    );
    const show = boolean('show', true);
    const darkMode = boolean('darkMode', false);
    const offsets = object('offsets', { x: 0, y: 0, arrow: 0 });
    const placement = radios('placement', ['top', 'bottom'], 'bottom');
    const width = number('width');
    const onClose = action('onClose event');

    return (
      <div
        style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: darkMode ? N700 : colorPageBackground }}
      >
        <Button
          id="button"
          filled
          main
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          button
        </Button>
        <CoachmarkV2
          selector="#button"
          title={title}
          show={show}
          placement={placement}
          darkMode={darkMode}
          width={width}
          onClose={onClose}
          offsets={offsets}
        >
          {description}
        </CoachmarkV2>
      </div>
    );
  },
  storyOptions,
);

coachmarkV2Stories.add(
  'simple: timeout',
  () => {
    const title = text('title', 'using coachmark timeout props');
    const description = text('description', 'Use timeout props to auto close specified delay in milliseconds');
    const darkMode = boolean('darkMode', false);
    const placement = radios('placement', ['top', 'bottom'], 'bottom');
    const width = number('width');
    const timeout = number('timeout', 3000);

    const [show, setShow] = useState(true);

    const onClose = () => {
      setShow(false);
    };

    const buttonClick = () => {
      if (!show) {
        setShow(true);
      }
    };

    return (
      <div
        style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: darkMode ? '#26292E' : '#ffffff' }}
      >
        <Button
          id="button"
          filled
          main
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          onClick={buttonClick}
        >
          button
        </Button>
        <CoachmarkV2
          selector="#button"
          title={title}
          show={show}
          placement={placement}
          darkMode={darkMode}
          width={width}
          timeout={timeout}
          onClose={onClose}
        >
          {description}
        </CoachmarkV2>
      </div>
    );
  },
  storyOptions,
);

coachmarkV2Stories.add(
  'simple: out of viewport',
  () => {
    const title = text('title', 'close after out of viewport');
    const description = text(
      'description',
      'This coachmark will auto close after out of viewport specified delay in milliseconds',
    );
    const darkMode = boolean('darkMode', false);
    const placement = radios('placement', ['top', 'bottom'], 'bottom');
    const width = number('width');
    const hiddenTimeout = number('hiddenTimeout', 3000);

    const [show, setShow] = useState(false);

    // mount
    useEffect(() => {
      const el = document.getElementById('button');

      el.scrollIntoView({ behavior: 'smooth', block: 'center' });

      setTimeout(() => {
        setShow(true);
      }, 500);

      return () => {
        document.removeEventListener('scroll', getCmarkPos);
      };
    }, []);

    const handleClick = () => {
      if (!show) {
        setShow(true);
      }
    };

    return (
      <div
        style={{
          width: '100%',
          height: '2000px',
          backgroundColor: darkMode ? '#26292E' : '#ffffff',
        }}
      >
        <Button
          id="button"
          filled
          main
          style={{ position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          onClick={handleClick}
        >
          button
        </Button>
        <CoachmarkV2
          selector="#button"
          title={title}
          show={show}
          placement={placement}
          darkMode={darkMode}
          width={width}
          onClose={() => {
            setShow(false);
            alert('close');
          }}
          id="coachmark-1"
          hiddenTimeout={hiddenTimeout}
        >
          {description}
        </CoachmarkV2>
      </div>
    );
  },
  storyOptions,
);

coachmarkV2Stories.add(
  'simple: Handle Document Height changes',
  () => {
    const title = text('title', 'Title to give the main context');
    const description = text(
      'description',
      'Body text to describe the highlighted feature, make it concise, no more than 2 lines.',
    );
    const show = boolean('show', true);
    const darkMode = boolean('darkMode', false);
    const offsets = object('offsets', { x: 0, y: 0, arrow: 0 });
    const placement = radios('placement', ['top', 'bottom'], 'bottom');
    const width = number('width');
    const onClose = action('onClose event');

    const [ShowDynamicContent, setShowDynamicContent] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setShowDynamicContent(true);
      }, 3000);

      setTimeout(() => {
        setShowDynamicContent(false);
      }, 8000);
    }, []);

    return (
      <div style={{ padding: '8px', backgroundColor: darkMode ? '#26292E' : '#ffffff' }}>
        {ShowDynamicContent && (
          <div style={{ marginBottom: '8px' }}>
            <b>CoachmarkV2 will automatically recalculate it's position when Document height changed.</b> Ut dolor est
            nulla ea exercitation eu excepteur irure dolore ad. Dolor velit fugiat nostrud laborum exercitation qui
            laborum velit nostrud ullamco duis reprehenderit eiusmod eiusmod. Veniam quis ullamco excepteur do Lorem
            irure consectetur culpa in. Amet dolor officia pariatur qui proident non officia dolor. Nisi mollit est
            tempor sit aute.
          </div>
        )}
        <Button id="button" filled main>
          button
        </Button>
        <CoachmarkV2
          selector="#button"
          title={title}
          show={show}
          placement={placement}
          darkMode={darkMode}
          width={width}
          onClose={onClose}
          offsets={offsets}
        >
          {description}
        </CoachmarkV2>
      </div>
    );
  },
  storyOptions,
);

const SamplePage = () => (
  <>
    <NavBar main fixed title="Unify" onBurgerClick={() => alert('burger clicked')}>
      <Button style={{ marginRight: '16px', borderRadius: '50%' }} filled main id="navBar-button">
        a
      </Button>
    </NavBar>
    <Card style={{ height: '100px' }} id="coachmark1">
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card style={{ height: '100px' }} id="coachmark2">
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card style={{ height: '100px' }} id="coachmark3">
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card style={{ height: '100px' }}>
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card style={{ height: '100px' }}>
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card style={{ height: '100px' }}>
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card style={{ height: '100px' }}>
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card id="card-scroll" style={{ display: 'flex', overflow: 'scroll' }}>
      <Chip>chip 1</Chip>
      <Chip>chip 2</Chip>
      <Chip>chip 3</Chip>
      <Chip>chip 4</Chip>
      <Chip>chip 5</Chip>
      <Chip>chip 6</Chip>
      <Chip id="chip-7">chip 7</Chip>
      <Chip>chip 8</Chip>
      <Chip>chip 9</Chip>
      <Chip>chip 10</Chip>
      <Chip>chip 11</Chip>
      <Chip>chip 12</Chip>
      <Chip>chip 13</Chip>
      <Chip>chip 14</Chip>
      <Chip id="chip-15">chip 15</Chip>
    </Card>

    <Card style={{ height: '100px' }}>
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card style={{ height: '100px' }} id="coachmark4">
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <div style={{ position: 'relative', zIndex: 40 }}>
      <Card id="coachmark5">
        <div>This is Text Just pure Text With heavy Content</div>
        <Button filled main id="submit-button" style={{ marginTop: '8px' }}>
          Some Action
        </Button>
      </Card>
    </div>

    <Card style={{ height: '100px' }} id="coachmark6">
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>
  </>
);

coachmarkV2Stories.add(
  'simple: working example',
  () => {
    const title = text('title', 'Open knobs tabs to change the title');
    const description = text('description', 'Body text to describe the highlighted feature, no more than 2 lines');

    const [queue, setQueue] = useState({ next: 0, show: true });

    const handleNext = (next, show) => {
      setQueue({ next, show });
    };

    useEffect(() => {
      document.addEventListener('scroll', trackCoachmark4);

      return () => {
        document.removeEventListener('scroll', trackCoachmark4);
      };
    }, [queue]);

    const trackCoachmark4 = () => {
      if (queue.next === 2) {
        const target = document.getElementById(`coachmark4`);

        const { top, height } = target.getBoundingClientRect();

        if (top > 0 && top + height < window.innerHeight) {
          setQueue((state) => ({ ...state, show: true }));
        }
      }
    };

    return (
      <>
        <SamplePage />
        <Button filled main onClick={() => handleNext(0, true)} style={{ margin: '16px', width: 'calc(100% - 32px)' }}>
          reset coachmark
        </Button>
        <CoachmarkV2
          selector="#navBar-button"
          show={queue.next === 0 && queue.show}
          onClose={() => handleNext(1, true)}
        >
          Simple coachmark without title
        </CoachmarkV2>
        <CoachmarkV2
          selector="#coachmark2"
          show={queue.next === 1 && queue.show}
          title={title}
          zIndex={30}
          onClose={() => handleNext(2, false)}
        >
          {description}
        </CoachmarkV2>
        <CoachmarkV2
          selector="#coachmark4"
          show={queue.next === 2 && queue.show}
          title="Placement Top & custom width"
          placement="top"
          width={250}
          id="coachmark-3"
          onClose={() => handleNext(3, true)}
        >
          coachmark with placement top & width = 250px
        </CoachmarkV2>
        <CoachmarkV2
          selector="#submit-button"
          show={queue.next === 3 && queue.show}
          onClose={() => handleNext(null, false)}
        >
          Small description
        </CoachmarkV2>
      </>
    );
  },
  storyOptions,
);

coachmarkV2Stories.add(
  'steps: default',
  () => {
    const show = boolean('show', true);
    const darkMode = boolean('darkMode', false);
    const lang = radios('lang', ['en', 'id'], 'id');
    const items = [
      {
        selector: '#navBar-button',
        title: 'Title to give the main context',
        description: 'Body text to describe the highlighted feature, make it clear and concise.',
      },
      {
        selector: '#coachmark2',
        title: 'step 2',
        description: 'this is a coachmark step number 2',
      },
      {
        selector: '#coachmark4',
        title: 'step 3',
        description: 'this is a coachmark step number 3',
      },
      {
        selector: '#submit-button',
        title: 'finish',
        description: 'this is the end of steps',
      },
    ];
    const activeIndex = number('activeIndex', 0, { min: -1, max: items.length });

    const props = { activeIndex, show, darkMode, items, lang };

    return (
      <>
        <SamplePage />
        <CoachmarkStep {...props} />
      </>
    );
  },
  storyOptionsSteps,
);

coachmarkV2Stories.add(
  'steps: working example',
  () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [show, setShow] = useState(true);
    const darkMode = boolean('darkMode', false);
    const lang = radios('lang', ['en', 'id'], 'id');
    const items = [
      {
        selector: '#navBar-button',
        title: 'Step 1: Navbar Button Right',
        description: 'this is a NavBar button',
      },
      {
        selector: '#coachmark2',
        title: 'Step 2',
        description: 'this is a coachmark step number 2, with long descriptions',
      },
      {
        selector: '#chip-7',
        title: 'Step 3: Chip 7',
        description: 'this is a coachmark step number 3, with long descriptions',
      },
      {
        selector: '#chip-15',
        title: 'Step 4: Chip 15',
        description: 'this is a coachmark step number 4, with long descriptions',
      },
      {
        selector: '#coachmark4',
        title: 'Step 5',
        description: 'this is a coachmark step number 5',
        placement: 'top',
      },
      {
        selector: '#submit-button',
        title: 'Finish',
        description: 'this is the end of steps, close the coachmark by clicking `mengerti` or `Got it` button.',
      },
    ];

    const handleChange = (e, index) => {
      if (index === 2) {
        document.getElementById('card-scroll').scrollTo(350, 0);
      } else if (index === 3) {
        document.getElementById('card-scroll').scrollTo(900, 0);
      }

      setActiveIndex(index);
    };

    const handleClose = (e, index) => {
      setShow(false);
      setTimeout(() => {
        alert('coachmark closed on index number: ', index);
      }, 500);
    };

    const handleFinish = (e) => {
      setShow(false);
      setTimeout(() => {
        alert('user completed the coachmark');
      }, 500);
    };

    const handleOpen = () => {
      setShow(true);
      setActiveIndex(0);
    };

    const props = { activeIndex, show, darkMode, items, lang };

    return (
      <>
        <SamplePage />
        <Button filled transaction onClick={handleOpen}>
          open coachmark
        </Button>
        <CoachmarkStep {...props} onChange={handleChange} onClose={handleClose} onFinish={handleFinish} />
      </>
    );
  },
  storyOptionsSteps,
);

coachmarkV2Stories.add(
  'steps: with BottomSheet',
  () => {
    const [coachmarkShow, setCoachmarkShow] = useState(false);
    const [activeState, setActiveState] = useState(0);
    const [bottomSheetShow, setBottomSheetShow] = useState(true);

    useEffect(() => {
      if (bottomSheetShow) {
        setTimeout(() => {
          setCoachmarkShow(true);
          setActiveState(0);
        }, 1000);
      } else if (!bottomSheetShow) {
        setCoachmarkShow(false);
      }
    }, [bottomSheetShow]);

    const items = [
      {
        selector: '#coachmark-1',
        title: 'Target in a scrollable element',
        description:
          'If the target is in a scrollable element like this BottomSheet content, you need to add the showDelay value to wait scroll animation end.',
        placement: 'top',
      },
      {
        selector: '#coachmark-2',
        title: 'step 2',
        description: 'this is a coachmark step number 2',
      },
      {
        selector: '#coachmark-3',
        title: 'step 3',
        description: 'this is a coachmark step number 3',
      },
    ];

    const handleChange = (e, i) => {
      if (i === 2) {
        setCoachmarkShow(false);
        setBottomSheetShow(false);
        setTimeout(() => {
          setCoachmarkShow(true);
        }, 500);
      } else if (i === 1 && !bottomSheetShow) {
        setCoachmarkShow(false);
        setBottomSheetShow(true);
        setTimeout(() => {
          setCoachmarkShow(true);
        }, 500);
      }

      setActiveState(i);
    };

    const showBottomSheet = (val) => {
      setBottomSheetShow(val);
    };

    const handleCloseCoachmark = () => {
      setCoachmarkShow(false);
    };

    const handleFinish = () => {
      setCoachmarkShow(false);
      alert('coachmark finished!');
    };

    return (
      <div className="container">
        <div className="section">
          <h2 className="section__title">CoachmarkSteps on BottomSheetV2</h2>
          <p id="coachmark-3">Paragraph, coachmark 3rd target, See Story tab for detail implementation.</p>
          <Button filled main onClick={() => showBottomSheet(true)}>
            show bottomSheet
          </Button>
          <ScrollableContent />
        </div>

        <BottomSheetV2
          display={bottomSheetShow}
          dynamicContent
          title="BottomSheet Title"
          withClose={true}
          withOverlay={true}
          onClose={() => showBottomSheet(false)}
        >
          <div style={cardStyle}>Card</div>
          <div style={cardStyle}>Card</div>
          <div style={cardStyle}>Card</div>
          <div style={cardStyle}>Card</div>
          <div id="coachmark-1" style={cardStyle}>
            `coachmark 1st target`
          </div>
          <div style={cardStyle}>Card</div>
          <div style={cardStyle}>Card</div>
          <div style={cardStyle}>Card</div>
          <div style={cardStyle}>Card</div>
          <div style={cardStyle}>Card</div>
          <div id="coachmark-2" style={cardStyle}>
            'coachmark 2nd target'
          </div>
          <div style={cardStyle}>Card</div>
          <div style={cardStyle}>Card</div>
          <div style={cardStyle}>Card</div>
          <div style={cardStyle}>Card</div>
          <div style={cardStyle}>Card</div>
          <div style={cardStyle}>Card</div>
          <div style={cardStyle}>Card</div>
          <div style={cardStyle}>Card</div>
          <div style={cardStyle}>Card</div>
        </BottomSheetV2>
        <CoachmarkStep
          show={coachmarkShow}
          showDelay={100}
          items={items}
          zIndex={70}
          activeIndex={activeState}
          onChange={handleChange}
          onClose={handleCloseCoachmark}
          onFinish={handleFinish}
        />
      </div>
    );
  },
  storyOptionsSteps,
);
