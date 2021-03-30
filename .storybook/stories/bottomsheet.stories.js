import React, { Component, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import bottomSheetNotes from 'unify-react-mobile/build/BottomSheet/BottomSheet.md';
import bottomSheetv2Notes from 'unify-react-mobile/build/BottomSheetV2/BottomSheetV2.md';
import Button from 'unify-react-mobile/build/Button';
import BottomSheet from 'unify-react-mobile/build/BottomSheet';
import BottomSheetV2 from 'unify-react-mobile/build/BottomSheetV2';
import SearchBar from 'unify-react-mobile/build/SearchBar';
import Dialog from 'unify-react-mobile/build/Dialog';
import Toaster from 'unify-react-mobile/build/Toaster';
import TextField from 'unify-react-mobile/build/TextField';
import TextArea from 'unify-react-mobile/build/TextArea';
import Typography from 'unify-react-mobile/build/Typography';
import Checkbox from 'unify-react-mobile/build/Checkbox';
import Radio from 'unify-react-mobile/build/Radio';
import { colorCard, colorShadow, colorTextHigh } from 'unify-token/build/v2/colors';

const bottomsheetStories = storiesOf('Components/BottomSheet', module);

bottomsheetStories.addDecorator(withKnobs);

const storyOptionV1 = {
  notes: { markdown: bottomSheetNotes },
};

const storyOptionV2 = {
  notes: { markdown: bottomSheetv2Notes },
};

const cardStyle = {
  display: 'block',
  padding: '16px',
  margin: '8px 16px',
  border: 'none',
  backgroundColor: colorCard,
  color: colorTextHigh,
  borderRadius: 5,
  boxShadow: `0 1px 6px ${colorShadow}`,
};

const ScrollableContent = () => (
  <div style={{ color: '#999' }}>
    <p>
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

bottomsheetStories.add(
  'Default (V2)',
  () => (
    <div className="container">
      <div className="section">
        <h2 className="section__title">Unify BottomSheetV2</h2>
        <p>
          If a knob do not update as expected, please try to toggle the <strong>display</strong> knob. Or if the display
          knob also did not work, just...reload you browser and try again ;)
        </p>
        <ScrollableContent />
      </div>

      <BottomSheetV2
        actionText={text('actionText', '')}
        display={boolean('display', true)}
        dynamicContent
        full={boolean('full', false)}
        initialPos={number('initialPos', 0)}
        padding={text('padding', '0')}
        title={text('title', 'Tokopedia DNA')}
        withClose={boolean('withClose', true)}
        withKnob={boolean('withKnob', false)}
        withOverlay={boolean('withOverlay', true)}
        onActionClick={action('Action Clicked')}
        // onClose={action('Closed')}
      >
        <div style={cardStyle}>Focus on Consumer</div>
        <div style={cardStyle}>Growth Mindset</div>
        <div style={cardStyle}>Make It Happen, Make It Better</div>
      </BottomSheetV2>
    </div>
  ),
  storyOptionV2,
);

bottomsheetStories.add(
  'Default (V1)',
  () => (
    <div className="container">
      <div className="section">
        <h2 className="section__title">Unify BottomSheet</h2>
        <p>Good old simple BottomSheet</p>
        <ScrollableContent />
      </div>
      <BottomSheet
        actionText={text('actionText', '')}
        border={boolean('border', true)}
        display={boolean('display', true)}
        full={boolean('full', false)}
        inverted={boolean('inverted', false)}
        noPadding={boolean('noPadding', false)}
        padding={text('padding', '16px')}
        subTitle={text('subTitle', '')}
        title={text('title', '')}
      >
        <div style={{ ...cardStyle, margin: 0 }}>Tokopedia Unify is Awesome</div>
      </BottomSheet>
    </div>
  ),
  storyOptionV1,
);

class StackedBottomSheet extends Component {
  state = {
    firstSheetDisplay: false,
    secondSheetDisplay: false,
    dialogDisplay: false,
    toasterDisplay: false,
    isFetching: false,
    searchValue: '',
    userInfo: {
      name: '',
      email: '',
    },
    userData: [
      { email: 'furitzuki@daruman.com', name: 'Fritzki Darman' },
      { email: 'ray@yapari.com', name: 'Ray Yapari' },
    ],
  };

  handleBodyPadding = () => {
    const { firstSheetDisplay } = this.state;

    if (firstSheetDisplay) {
      document.body.style.paddingBottom = '300px';
    } else {
      document.body.style.paddingBottom = '';
    }
  };

  handleLoad = () => {
    this.setState({ isFetching: true });
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        this.setState((prevState) => {
          const userData = [...prevState.userData, ...json];

          return {
            isFetching: false,
            toasterDisplay: true,
            userData,
          };
        });
      });
  };

  handleFirstSheetDisplay = () => {
    this.setState(
      ({ firstSheetDisplay }) => ({
        firstSheetDisplay: !firstSheetDisplay,
      }),
      this.handleBodyPadding,
    );
  };

  handleSecondSheetDisplay = () => {
    this.setState(({ secondSheetDisplay }) => ({
      secondSheetDisplay: !secondSheetDisplay,
    }));
  };

  handleNameClick = ({ name, email }) => {
    this.setState(({ secondSheetDisplay }) => ({
      secondSheetDisplay: !secondSheetDisplay,
      userInfo: { name, email },
    }));
  };

  handleDialogDisplay = () => {
    this.setState(({ dialogDisplay }) => ({
      dialogDisplay: !dialogDisplay,
    }));
  };

  handleToasterDisplay = () => {
    this.setState(({ toasterDisplay }) => ({
      toasterDisplay: !toasterDisplay,
    }));
  };

  handleInputChange = (event) => {
    const { value } = event.target;

    this.setState({ searchValue: value });
  };

  handleClearSearch = () => {
    this.setState({ searchValue: '' });
  };

  render() {
    const {
      dialogDisplay,
      firstSheetDisplay,
      isFetching,
      isMaximized,
      searchValue,
      secondSheetDisplay,
      toasterDisplay,
      userData,
      userInfo,
    } = this.state;
    const stickySearchStyle = {
      position: 'sticky',
      top: 0,
      margin: '0 -16px',
      padding: '4px 0',
    };
    const stickyCTAStyle = {
      position: 'sticky',
      bottom: 0,
      margin: '0 -16px',
      padding: '8px 16px',
      backgroundColor: colorCard,
      boxShadow: `0 4px 16px ${colorShadow}`,
    };

    return (
      <div className="container">
        <div className="section">
          <h2 className="section__title">BottomSheetV2 with Stacked Case</h2>
          <p>
            This case happened when you maintain one BottomSheetV2 component displayed while opening another
            BottomSheetV2 or a Dialog component. Making it stacked on top of each other.
          </p>
          <Button block ghost transaction onClick={this.handleFirstSheetDisplay}>
            Toggle Bottom Sheet
          </Button>
          <ScrollableContent />
        </div>

        <BottomSheetV2
          display={firstSheetDisplay}
          padding="0 16px"
          withKnob
          withOverlay={false}
          onClose={this.handleFirstSheetDisplay}
          {...this.props}
        >
          <div style={stickySearchStyle}>
            <SearchBar
              placeholder="Search User"
              value={searchValue}
              onChange={this.handleInputChange}
              onClear={this.handleClearSearch}
            />
          </div>
          {userData.map(({ name, email }, index) => {
            const userData = { name: name, email: email };
            const cardBtnStyle = {
              ...cardStyle,
              marginLeft: 0,
              marginRight: 0,
              width: '100%',
              cursor: 'pointer',
              textAlign: 'left',
            };

            return (
              <button key={`${email}-${index}`} style={cardBtnStyle} onClick={() => this.handleNameClick(userData)}>
                {name}
              </button>
            );
          })}

          <div style={isMaximized ? stickyCTAStyle : { paddingBottom: 16 }}>
            <Button block loading={isFetching} ghost main onClick={this.handleLoad}>
              Load More
            </Button>
          </div>
        </BottomSheetV2>

        <Toaster display={toasterDisplay} actionText={'OK'} onActionClick={this.handleToasterDisplay}>
          User has been fetched
        </Toaster>

        <BottomSheetV2
          display={secondSheetDisplay}
          padding="16px"
          title="User Detail"
          onClose={this.handleSecondSheetDisplay}
          actionText="Add Contact"
          onActionClick={this.handleDialogDisplay}
        >
          <h3 style={{ marginTop: 0 }}>{userInfo.name}</h3>
          <p>{userInfo.email}</p>
        </BottomSheetV2>

        <Dialog
          title="Congratulations!"
          display={dialogDisplay}
          actionPrimaryText="Close"
          onActionPrimaryClick={this.handleDialogDisplay}
        >
          Contact has been added.
        </Dialog>
      </div>
    );
  }
}

bottomsheetStories.add('Case: Stacked', () => <StackedBottomSheet />, storyOptionV2);

bottomsheetStories.add(
  'Case: Full Sheet',
  () => {
    const [sheetDisplay, setSheetDisplay] = useState(false);

    const handleSheetDisplay = () => {
      setSheetDisplay(!sheetDisplay);
    };

    return (
      <div className="container">
        <div className="section">
          <h2 className="section__title">BottomSheetV2: Case Full Sheet</h2>
          <p>
            If BottomSheet dragged down slightly, it will minimize the sheet. But if the sheet dragged down from
            maxizimized / full state to bottom, it will trigger close event.
          </p>
          <Button filled main block onClick={handleSheetDisplay}>Toggle Sheet</Button>
          <ScrollableContent />
        </div>
        <BottomSheetV2 full title="Drag me Down" display={sheetDisplay} onClose={handleSheetDisplay} padding="0 16px 16px" withKnob>
          <p style={{ marginTop: 0 }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci magni fugiat sed aliquam quidem eos
            tempore est vel, modi repudiandae repellat saepe! Distinctio, recusandae aperiam earum ipsam praesentium
            debitis molestias?
          </p>
        </BottomSheetV2>
      </div>
    );
  },
  storyOptionV2,
);

bottomsheetStories.add(
  'Case: Rolling',
  () => {
    const [display1, setDisplay1] = useState(false);
    const [display2, setDisplay2] = useState(false);

    const handleBottomSheet1 = () => {
      setDisplay1(!display1);
    };

    const handleBottomSheet2 = () => {
      setDisplay1(false);
      setDisplay2(!display2);
    };

    const handleCloseAll = () => {
      setDisplay2(false);
    };

    return (
      <div className="container">
        <div className="section">
          <h2 className="section__title">BottomSheetV2 with Rolling Case</h2>
          <p>
            This case happened if you close one BottomSheetV2 component when opening another BottomSheetV2 component.
          </p>
          <Button block ghost transaction onClick={handleBottomSheet1}>
            Toggle Bottom Sheet
          </Button>
          <ScrollableContent />
        </div>

        <BottomSheetV2 title="Hello" display={display1} padding="0 16px 16px" onClose={handleBottomSheet1}>
          <p>Some content inside Bottom Sheet 1</p>
          <Button filled main block onClick={handleBottomSheet2}>
            Open Bottom Sheet 2
          </Button>
        </BottomSheetV2>
        <BottomSheetV2 display={display2} padding={'0 16px 16px'} onClose={handleCloseAll}>
          Some content inside Bottom Sheet 2
        </BottomSheetV2>
      </div>
    );
  },
  storyOptionV2,
);

bottomsheetStories.add(
  'Case: Conditional Rendering',
  () => {
    const [renderSheet, renderSheetSet] = useState(false);
    const [renderAnotherSheet, renderAnotherSheetSet] = useState(false);

    const toggleSheet = () => {
      renderSheetSet(!renderSheet);
    };

    const toggleAnotherSheet = () => {
      renderAnotherSheetSet(!renderAnotherSheet);
    };

    return (
      <div className="container">
        <div className="section">
          <h2 className="section__title">BottomSheetV2 with Conditional Rendering</h2>
          <p>This case happened when you wrap BottomSheetV2 component inside conditional statement logic.</p>
          <Button block ghost transaction onClick={toggleSheet}>
            Toggle Bottom Sheet
          </Button>
          <ScrollableContent />
        </div>

        {renderSheet ? (
          <BottomSheetV2
            display
            onClose={toggleSheet}
            title="Some Title"
            closeProps={{ 'data-testid': 'unf-sheet-close' }}
            data-testid="unf-bottomsheet"
            titleProps={{ 'data-testid': 'unf-sheet-title' }}
          >
            <div style={cardStyle}>
              <p>Hello this is Bottom Sheet content.</p>
              <Button block filled main onClick={toggleAnotherSheet}>
                Open Another Sheet
              </Button>
            </div>
          </BottomSheetV2>
        ) : null}

        {renderAnotherSheet ? (
          <BottomSheetV2
            display
            actionText="Action"
            title="Some Title"
            onClose={toggleAnotherSheet}
            onActionClick={() => console.log('Action')}
          >
            <div style={cardStyle}>Hello this is Bottom Sheet content.</div>
          </BottomSheetV2>
        ) : null}
      </div>
    );
  },
  storyOptionV2,
);

bottomsheetStories.add('Case: Input Handling', () => {
  const [display, displaySet] = useState(false);
  const [withKnob, withKnobSet] = useState(false);

  const handleSheetDisplay = () => {
    displaySet(!display);
  };

  const handleToggleKnob = () => {
    withKnobSet(!withKnob);
  };

  return (
    <div className="container">
      <div className="section">
        <div>
          <h2 className="section__title">BottomSheetV2 with Input Children</h2>
        </div>
        <p>
          This case showcase how it handle input inside bottom sheet. For Android, if bottomsheet is not full or
          maximized, it will go full if there is input being focused. The iPhone just doing fine without making the
          sheet full.
        </p>
        <Button block ghost transaction onClick={handleSheetDisplay}>
          Toggle Sheet
        </Button>
        <ScrollableContent />

        <BottomSheetV2
          display={display}
          padding="0 16px 16px"
          title="Create an Account"
          actionText="Knob?"
          onActionClick={handleToggleKnob}
          withKnob={withKnob}
          onClose={handleSheetDisplay}
        >
          <TextField label="Full Name" required />
          <TextField label="Email" type="email" required />
          <TextField label="Phone Number" type="tel" required />
          <TextField label="Password" type="password" />
          <Typography tag={4}>Gender</Typography>
          <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
            <label htmlFor="gender-man">
              <Radio id="gender-man" name="gender" /> <span>Man</span>
            </label>
            <label htmlFor="gender-woman">
              <Radio id="gender-woman" name="gender" /> <span>Woman</span>
            </label>
          </div>
          <TextArea label="Address" />
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="maillist">
              <Checkbox /> <span>Receive latest information from us?</span>
            </label>
          </div>
          <Button block main filled>
            Submit
          </Button>
        </BottomSheetV2>
      </div>
    </div>
  );
});

bottomsheetStories.add('Case: Dynamic Content', () => {
  const imageURL = 'https://api.adorable.io/avatars/285';

  const [sheetDisplay, sheetDisplaySet] = useState(false);
  const [cardDisplay, cardDisplaySet] = useState(false);
  const [someData, someDataSet] = useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      someDataSet([...new Array(6)]);
    }, 800);
  }, []);

  return (
    <div className="container">
      <div className="section">
        <h3 className="section__title">BottomSheetV2 with Image Content</h3>
        <p>This case is to cater image content loading inside bottom sheet.</p>
        <Button block ghost main onClick={() => sheetDisplaySet(!sheetDisplay)}>
          Toggle Sheet
        </Button>
        <ScrollableContent />

        {sheetDisplay && (
          <div style={{ zIndex: 70 }}>
            <BottomSheetV2
              display={sheetDisplay}
              title="Choose Your Avatar"
              onClose={() => sheetDisplaySet(!sheetDisplay)}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {sheetDisplay &&
                  someData.map((_, id) => (
                    <div key={id} style={{ flexBasis: '33%', width: '33%' }}>
                      <img src={`${imageURL}/${id}.png`} alt="" style={{ maxWidth: '100%' }} />
                    </div>
                  ))}
              </div>
              <div style={{ padding: 16 }}>
                <Button ghost block main onClick={() => cardDisplaySet(!cardDisplay)}>
                  Some More Content
                </Button>
                {cardDisplay && (
                  <div style={{ ...cardStyle, margin: '16px 0', textAlign: 'center' }}>
                    <img src={`${imageURL}/100`} alt="" width="100" />
                    <Typography tag={3} main margin="0">
                      Boo
                    </Typography>
                    <Typography body={2} margin="0">
                      Put some good copy here.
                    </Typography>
                  </div>
                )}
              </div>
            </BottomSheetV2>
          </div>
        )}
      </div>
    </div>
  );
});
