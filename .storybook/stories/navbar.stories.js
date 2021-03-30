import React, { Fragment, PureComponent } from 'react';
import styled, { css } from 'react-emotion';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs';
import markdownNotes from 'unify-react-mobile/build/NavBar/NavBar.md';
import sidebarNotes from 'unify-react-mobile/build/SideBar/SideBar.md';

import Tips from 'unify-react-mobile/build/Tips';
import NavBar from 'unify-react-mobile/build/NavBar';
import SideBar from 'unify-react-mobile/build/SideBar';
import SearchBar from 'unify-react-mobile/build/SearchBar';
import Image from 'unify-react-mobile/build/Image';

import ic_love from '../assets/ic_love.svg';
import ic_mail from '../assets/ic_mail.svg';
import ic_bell from '../assets/ic_bell.svg';
import ic_love_white from '../assets/ic_love_white.svg';
import ic_mail_white from '../assets/ic_mail_white.svg';
import ic_bell_white from '../assets/ic_bell_white.svg';

const navbarStories = storiesOf('Compositions/Navigation Bar', module);

navbarStories.addDecorator(withKnobs);

navbarStories.add(
  'Default',
  () => {
    const children = text('children (string)', 'Children');
    const content = text('content (string)', 'Content');
    const fixed = boolean('fixed', false);
    const hideSubtitle = boolean('hideSubtitle', false);
    const hideTitle = boolean('hideTitle', false);
    const main = boolean('main', false);
    const noShadow = boolean('noShadow', false);
    const numberOfStep = number('numberOfStep', 3);
    const selectable = object('selectable');
    const shadow = boolean('shadow', false);
    const step = number('step', 1);
    const subTitle = text('subTitle', 'Subtitle');
    const title = text('title', 'Title');
    const transparent = boolean('transparent', false);
    const onBack = action('onBack event');
    const onBurgerClick = action('onBurgerClick event');
    const heading = number('heading');

    const props = {
      children,
      content,
      fixed,
      hideSubtitle,
      hideTitle,
      main,
      noShadow,
      numberOfStep,
      selectable,
      shadow,
      step,
      subTitle,
      heading,
      title,
      transparent,
      onBack,
      onBurgerClick,
    };

    return (
      <React.Fragment>
        <NavBar {...props} />
        <Tips>
          Switch to <b>Knobs</b> tab on addon panel to dynamically interact with props.
        </Tips>
      </React.Fragment>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

const NavButton = props => {
  const { count, image } = props;

  const Btn = styled.button`
    position: relative;
    height: 52px;
    width: 32px;
    background-image: url("${image}");
    background-repeat: no-repeat;
    background-position: center;
    border: 0;
    outline: 0;
    background-color: transparent;

    &::before {
      content: ${count ? `'${count}'` : ''};
      position: absolute;
      top: 8px;
      right: -2px;
      font-weight: 600;
      background-color: #EA212D;
      color: white;
      height: 16px;
      padding: 2px ${count.length > 1 ? 4 : 6}px;
      font-size: 10px;
      border-radius: 8px;
    }
  `;

  return <Btn {...props} />;
};

class Drawer extends PureComponent {
  state = {
    displaySideBar: false,
    searchValue: '',
    message: '',
    menuList: [
      { text: 'Info Partner', onClick: () => console.log('info partner') },
      { text: 'Syarat dan Ketentuan', onClick: () => console.log('Syarat dan ketentuan') },
      { text: 'FAQ', onClick: 'https://www.tokopedia.com' },
      { text: 'FAQ', onClick: 'https://www.tokopedia.com' },
      { text: 'FAQ', onClick: 'https://www.tokopedia.com' },
      { text: 'FAQ', onClick: 'https://www.tokopedia.com' },
      { text: 'FAQ', onClick: 'https://www.tokopedia.com' },
      { text: 'FAQ', onClick: 'https://www.tokopedia.com' },
      { text: 'FAQ', onClick: 'https://www.tokopedia.com' },
      { text: 'FAQ', onClick: 'https://www.tokopedia.com' },
      { text: 'FAQ', onClick: 'https://www.tokopedia.com' },
      { text: 'FAQ', onClick: () => console.log('faq'), noBorder: true },
    ],
    displaySub: false,
    transparent: true,
    // transparent: {
    //   offset: 125,
    //   persist: true,
    // },
    hideBurger: false,
  };

  handleToggleSidebar = () => {
    this.setState(({ displaySideBar }) => ({ displaySideBar: !displaySideBar }));
  };

  handleSearchChange = e => {
    action('text changed');
    this.setState({ searchValue: e.target.value });
  };

  handleSearchClear = () => {
    this.setState({ searchValue: '' });
  };

  handleSearchClick = () => {
    console.log('search clicked');
    action('search clicked');
  };

  handleToggleSubNavBar = () => {
    this.setState({
      displaySub: !this.state.displaySub,
    });
  };

  handleHideBurger = () => {
    this.setState({
      hideBurger: !this.state.hideBurger,
    });
  };

  handleTransparent = () => {
    this.setState(({ transparent }) => ({ transparent: !transparent }));
  };

  handleTransparentChange = isTransparent => {
    this.setState({
      navbarTransparent: isTransparent,
    });
  };

  get searchBannerProps() {
    const { hideBurger } = this.state;

    return (
      <SearchBar
        // block
        onClick={this.handleSearchClick}
        onChange={this.handleSearchChange}
        onClear={this.handleSearchClear}
        value={this.state.searchValue}
        margin={hideBurger ? '0 8px 0 16px' : '0 8px 0 0'}
        className="unf-searchbar--nav"
        placeholder="Cari di Tokopedia"
      />
    );
  }

  renderSocialButton = () => {
    const SocialLink = styled.button`
      width: 72px;
      height: 72px;
      outline: none;
      border-style: none;
      border-radius: 50%;
      background-color: #FFFFFF;
      margin-right: 24px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
      cursor: pointer;
      object-fit: none;
      margin-bottom: 0;

      &::before {
          content: '';
          background-image: url("${props => props.img}");
          display: inline-block;
          width: 40px;
          height: 40px;
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
      }

      &:last-child {
          margin-right: 0 !important;
      }
    `;

    return [
      <SocialLink key="fb" onClick={() => console.log('fb')} img="http://placehold.it/300x300" />,
      <SocialLink key="gplus" onClick={() => console.log('gplus')} img="http://placehold.it/300x300" />,
      <SocialLink key="phone" onClick={() => console.log('phone')} img="http://placehold.it/300x300" />,
    ];
  };

  render() {
    const { hideBurger, transparent, navbarTransparent } = this.state;

    return (
      <Fragment>
        <div style={{ height: '100vh', backgroundColor: 'gray' }}>
          <NavBar
            main
            hideNavButton
            // title="Akun Saya"
            content={this.searchBannerProps}
            fixed
            transparent={transparent}
            // onBack={this.handleToggleSidebar}
            onBurgerClick={hideBurger ? null : this.handleToggleSidebar}
            onTransparentChange={this.handleTransparentChange}
          >
            <NavButton count="2" image={navbarTransparent ? ic_love_white : ic_love} />
            <NavButton count="5" image={navbarTransparent ? ic_mail_white : ic_mail} />
            <NavButton count="99+" image={navbarTransparent ? ic_bell_white : ic_bell} style={{ marginRight: 8 }} />
          </NavBar>
          <SideBar
            noAnim
            display={this.state.displaySideBar}
            onClose={this.handleToggleSidebar}
            userData={{ username: '', wallet: '700.000.000', points: '62.750' }}
            promoBanner={[
              {
                image: 'http://placehold.it//1000x1000',
                url: () => (window.location.href = ''),
                props: { 'data-impression': 'banner1' },
              },
              {
                image: 'http://placehold.it//1000x1000',
                url: () => (window.location.href = ''),
                props: { 'data-impression': 'banner2' },
              },
              {
                image: 'http://placehold.it//1000x1000',
                url: () => (window.location.href = ''),
                props: { 'data-impression': 'banner3' },
              },
            ]}
            listItems={[
              {
                text: 'Belanja',
                description:
                  'Beli segala macam produk kebutuhanmu pertama kedua ketiga keempat kelima keenam ketujuh kedelapan kesembilan kesepuluh kesebelas keduableas',
                arrow: true,
                props: { 'data-cy': 'Shopping' },
              },
              {
                text: 'Top up & Tagihan',
                description:
                  'Isi ulang pulsa, voucher game, dan lain lain iageoa ieio jieajgio ejaio jioeajgioeaji ogjeiaogj ieoaj igoejaio jgieoaj ioaejio',
                arrow: true,
                props: { 'data-cy': 'TopUp' },
              },
              {
                text: 'Travel',
                description:
                  'Bayar tagihan BPJS, air PDAM, dan lain lain ageoh aeguahg iueahiu geahiug aehuighuieahguuighu ieahgiueahui gaeuhgiueaiu geuhugi',
                arrow: true,
                props: { 'data-cy': 'Travel' },
              },
              {
                onClick: () => console.log('haha'),
                text: 'Entertainment',
                description: 'Pesan tiket perjalanan hingga tiket event',
                arrow: true,
                props: { 'data-cy': 'Entertainment' },
              },
              {
                text: 'Pinjaman & Investasi',
                description: 'Cek deals terbaik untuk semua aktivitas',
                arrow: true,
                props: { 'data-cy': 'Invest' },
              },
              {
                text: 'Pengajuan',
                description: 'Ajukan pinjaman, kartu kredit, dan asuransi',
                arrow: true,
                props: { 'data-cy': 'Submission' },
              },
              {
                text: 'Donasi',
                description: 'Mulai berdonasi dan berzakat untuk segala',
                arrow: true,
                props: { 'data-cy': 'Donate' },
              },
              {
                text: 'Gold Merchant & TopAds',
                description: 'Berinvestasi Reksadana dan Emas',
                arrow: true,
                props: { 'data-cy': 'GMTopAds' },
              },
            ]}
            props={{
              close: { 'data-cy': 'close' },
              help: { 'data-cy': 'help' },
              home: { 'data-cy': 'home' },
              logout: { 'data-cy': 'logout' },
              googleLogin: { 'data-cy': 'google' },
              fbLogin: { 'data-cy': 'fb' },
              phoneLogin: { 'data-cy': 'phone' },
              otherLogin: { 'data-cy': 'other login' },
              profile: { 'data-cy': 'profile' },
              register: { 'data-cy': 'register' },
              tokopoints: { 'data-cy': 'Tokopoints' },
              username: { 'data-cy': 'username' },
              wallet: { 'data-cy': 'wallet' },
            }}
            url={{
              home: () => (window.location.href = 'https://m.tokopedia.com/'),
              profile: 'https://m.tokopedia.com/user/profile',
              register: 'https://m.tokopedia.com/register',
              wallet: {
                img: 'http://placehold.it/100x100',
                title: 'OVO',
                url: 'https://www.ovo.id/',
              },
              otherLogin: 'https://m.tokopedia.com/login',
              // wallet: 'https://www.tokocash.com/topup',
              tokopoints: 'https://m.tokopedia.com/tokopoints',
              promo: 'https://www.tokopedia.com/promo/',
              contactUs: 'https://m.tokopedia.com/help/problem',
              help: 'https://m.tokopedia.com/help',
              logout: 'https://m.tokopedia.com/logout',
              referral: 'https://www.tokopedia.com/referral/',
            }}
          >
            {this.renderSocialButton()}
          </SideBar>
          <div style={{ width: '100%', height: 2000, padding: 16 }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure rerum sint quis qui recusandae animi ipsa?
              Blanditiis minima excepturi porro, quaerat ea, cumque debitis iure placeat ipsa mollitia nobis deserunt!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis unde, expedita magnam alias dolorum
              voluptatem fugit autem voluptates excepturi, dolor nihil tempore, eveniet odio mollitia natus architecto
              suscipit odit saepe?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nemo ea laborum hic sit natus earum
              debitis doloremque tempora aperiam inventore minima ab reiciendis impedit nihil expedita, incidunt
              nesciunt molestiae!
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button onClick={this.handleTransparent}>Toggle Transparent</button>
              <button onClick={this.handleHideBurger}>Toggle Button hide</button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

navbarStories.add(
  'as Drawer',
  () => {
    return <Drawer />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

navbarStories.add(
  'as Drawer with searchbar',
  () => {
    return <Drawer />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

class WithImage extends PureComponent {
  state = {
    searchValue: '',
    hideBurger: false,
  };

  handleSearchChange = e => {
    action('text changed');
    this.setState({ searchValue: e.target.value });
  };

  handleSearchClear = () => {
    this.setState({ searchValue: '' });
  };

  handleSearchClick = () => {
    console.log('search clicked');
    action('search clicked');
  };

  get searchBannerProps() {
    const { hideBurger } = this.state;

    return (
      <SearchBar
        onClick={this.handleSearchClick}
        onChange={this.handleSearchChange}
        onClear={this.handleSearchClear}
        value={this.state.searchValue}
        margin={hideBurger ? '0 8px 0 16px' : '0'}
        className="unf-searchbar--nav"
        placeholder="Cari di Tokopedia"
      />
    );
  }

  render() {
    return (
      <Fragment>
        <div style={{ height: '100vh', backgroundColor: 'gray' }}>
          <NavBar main hideNavButton content={this.searchBannerProps} fixed onBack>
            <div style={{ width: '24px', height: '24px', margin: '0px 16px 0 8px' }}>
              <Image user src="https://ecs7.tokopedia.net/img/blog/promo/2018/08/Thumbnail_600x3282.jpg" />
            </div>
          </NavBar>
        </div>
      </Fragment>
    );
  }
}

navbarStories.add(
  'with image user',
  () => {
    return <WithImage />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

navbarStories.add(
  'with stepper',
  () => {
    const step = number('step', 0);
    const numberOfStep = number('numberOfStep', 3);

    return <NavBar title="Buka Toko" step={step} numberOfStep={numberOfStep} inverted />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

navbarStories.add(
  'with subTitle',
  () => {
    const title = text('title', 'Title Goes Here');
    const subTitle = text('subTitle', 'Sub-text goes here');

    return <NavBar inverted title={title} subTitle={subTitle} onBack />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

navbarStories.add(
  'with subTitle and action',
  () => {
    const title = text('title', 'Title Goes Here');
    const subTitle = text('subTitle', 'Sub-text goes here');
    const iconChild = css`
      display: inline-block;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 10px;
      margin: auto;
      width: 20px;
      height: 20px;
      background-image: url('http://placehold.it/20x20');
    `;

    return (
      <NavBar
        inverted
        title={title}
        subTitle={subTitle}
        onBack
        onClick={e => {
          console.log(e.currentTarget);
        }}
      >
        <i className={iconChild} />
      </NavBar>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

class TransparentNavPlayground extends React.Component {
  state = {
    display: true,
    isTransparent: true,
  };

  handleTransparencyToggle = () => {
    this.setState(prevState => ({
      isTransparent: !prevState.isTransparent,
    }));
  };

  handleDisplayToggle = () => {
    this.setState(prevState => ({
      display: !prevState.display,
    }));
  };

  render() {
    return (
      <div>
        {this.state.display && (
          <NavBar
            title={this.props.title}
            subTitle={this.props.subTitle}
            transparent={this.state.isTransparent}
            // main
            fixed
            inverted
            // onBurgerClick={() => console.log('Burger clicked')}
            onBack={() => console.log('Back')}
          />
        )}
        <div style={{ width: '100%', height: 2000, padding: 16 }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure rerum sint quis qui recusandae animi ipsa?
            Blanditiis minima excepturi porro, quaerat ea, cumque debitis iure placeat ipsa mollitia nobis deserunt!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis unde, expedita magnam alias dolorum
            voluptatem fugit autem voluptates excepturi, dolor nihil tempore, eveniet odio mollitia natus architecto
            suscipit odit saepe?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nemo ea laborum hic sit natus earum debitis
            doloremque tempora aperiam inventore minima ab reiciendis impedit nihil expedita, incidunt nesciunt
            molestiae!
          </p>
          <button onClick={this.handleTransparencyToggle}>Toggle Transparent</button>
          <button onClick={this.handleDisplayToggle}>Toggle Display</button>
        </div>
      </div>
    );
  }
}

navbarStories.add(
  'as Transparent',
  () => {
    const title = text('title', 'Title Goes Here');
    const subTitle = text('subTitle', 'Sub-text goes here');
    // const transparent = boolean('transparent', true);

    return <TransparentNavPlayground title={title} subTitle={subTitle} />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);

navbarStories.add(
  'with action',
  () => {
    const title = text('title', 'Title Goes Here');

    return (
      <NavBar inverted title={title}>
        <span key="action" onClick={action('children onClick')} onKeyDown={() => {}} role="button" tabIndex={0}>
          Action
        </span>
      </NavBar>
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

navbarStories.add(
  'as sidebar only',
  () => {
    // const loading = boolean('loading', false);

    return (
      <SideBar
        noAnim
        display
        onClose={() => console.log('close')}
        userData={{ username: 'Zunio', wallet: '700.000.000', points: '62.750', membershipName: 'Gold Member', membershipIcon: 'http://via.placeholder.com/24' }}
        promoBanner={[
          {
            image: 'http://placehold.it//1000x1000',
            url: () => (window.location.href = ''),
            props: { 'data-impression': 'banner1' },
          },
          {
            image: 'http://placehold.it//1000x1000',
            url: () => (window.location.href = ''),
            props: { 'data-impression': 'banner2' },
          },
          {
            image: 'http://placehold.it//1000x1000',
            url: () => (window.location.href = ''),
            props: { 'data-impression': 'banner3' },
          },
        ]}
        listItems={[
          {
            text: 'Belanja',
            description: 'Beli segala macam produk kebutuhanmu',
            arrow: true,
            props: { 'data-cy': 'Shopping' },
          },
          {
            text: 'Top up & Tagihan',
            description: 'Isi ulang pulsa, voucher game, dan lain lain',
            arrow: true,
            props: { 'data-cy': 'TopUp' },
          },
          {
            text: 'Travel',
            description: 'Bayar tagihan BPJS, air PDAM, dan lain lain',
            arrow: true,
            props: { 'data-cy': 'Travel' },
          },
          {
            text: 'Entertainment',
            description: 'Pesan tiket perjalanan hingga tiket event',
            arrow: true,
            props: { 'data-cy': 'Entertainment' },
          },
          {
            text: 'Pinjaman & Investasi',
            description: 'Cek deals terbaik untuk semua aktivitas',
            arrow: true,
            props: { 'data-cy': 'Invest' },
          },
          {
            text: 'Pengajuan',
            description: 'Ajukan pinjaman, kartu kredit, dan asuransi',
            arrow: true,
            props: { 'data-cy': 'Submission' },
          },
          {
            text: 'Donasi',
            description: 'Mulai berdonasi dan berzakat untuk segala',
            arrow: true,
            props: { 'data-cy': 'Donate' },
          },
          {
            text: 'Gold Merchant & TopAds',
            description: 'Berinvestasi Reksadana dan Emas',
            arrow: true,
            props: { 'data-cy': 'GMTopAds' },
          },
        ]}
        url={{
          home: () => (window.location.href = 'https://m.tokopedia.com/'),
          profile: 'https://m.tokopedia.com/user/profile',
          register: 'https://m.tokopedia.com/register',
          googleLogin: 'https://m.tokopedia.com/login',
          fbLogin: () => console.log('login'),
          phoneLogin: 'https://m.tokopedia.com/login',
          otherLogin: 'https://m.tokopedia.com/login',
          wallet: {
            img: 'http://placehold.it/100x100',
            title: 'OVO',
            url: 'https://www.ovo.id/',
          },
          // wallet: 'https://www.tokocash.com/topup',
          tokopoints: 'https://m.tokopedia.com/tokopoints',
          promo: 'https://www.tokopedia.com/promo/',
          contactUs: 'https://m.tokopedia.com/help/problem',
          help: 'https://m.tokopedia.com/help',
          logout: 'https://m.tokopedia.com/logout',
          referral: 'https://www.tokopedia.com/referral/',
        }}
      />
    );
  },
  {
    notes: { markdown: sidebarNotes },
  },
);

navbarStories.add(
  'selectable',
  () => {
    const title = text('title', 'Title Goes Here');
    const heading = number('heading');
    const transparent = boolean('transparent', false);

    return (
      <NavBar
        heading={heading}
        transparent={transparent}
        selectable={{
          value: 'hi',
          onClick: () => console.log('hello'),
        }}
        onSelectClick={() => console.log('hehe')}
        title={title}
      />
    );
  },
  {
    notes: { markdown: markdownNotes },
  },
);

class SearchBarWithCamera extends React.Component {
  state = {
    searchVal: '',
  };

  handleChange = e => {
    this.setState({ searchVal: e.target.value });
  };

  handleClear = () => {
    this.setState({ searchVal: '' });
  };

  render() {
    const { searchVal } = this.state;

    return (
      <SearchBar
        camera={!searchVal.length}
        autoComplete="off"
        placeholder="Cari di tokopedia"
        onChange={this.handleChange}
        value={searchVal}
        onKeyUp={() => {}}
        onClear={this.handleClear}
      />
    );
  }
}

navbarStories.add(
  'withCamera',
  () => {
    return <SearchBarWithCamera />;
  },
  {
    notes: { markdown: markdownNotes },
  },
);
