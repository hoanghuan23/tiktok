import {
  faCircleQuestion,
  faCoins,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faLanguage,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import images from '~/assets/images';
import Button from '~/components/Button/Button';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons/Icons';
import Image from '~/components/Image/Image';
import Menu from '~/components/Popper/Menu/Menu';
import styles from './Header.moudle.scss';

import Search from '../Search/Search';
import config from '~/config';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'jp',
          title: '日本語',
        },
      ],
    },
  },

  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },

  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

function Header() {
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        // Handle change language
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@huan',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/feedback',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },

    ...MENU_ITEMS,

    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  const currrentUser = true;

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo-link')}>
          <img src={images.logo.default} alt="Logo" />
        </Link>

        <Search />

        <div className={cx('actions')}>
          {currrentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>

              <Tippy delay={[0, 200]} content="Send message" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>

              <Tippy delay={[0, 200]} content="notification" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>23</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu items={currrentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currrentUser ? (
              <Image
                className={cx('user-avatar')}
                src="https://yt3.googleusercontent.com/OXbxyxi7XaDta1HS8rAUWzgLcegQxXf4clltpIUE3qCzuO3LxFhRqqatphRP788cVqYiRWWKPXQ=s900-c-k-c0x00ffffff-no-rj"
                alt="User Avatar"
                fallBack="https://i.pinimg.com/originals/83/66/93/836693415ad27ca44de777e408c3808e.png"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
