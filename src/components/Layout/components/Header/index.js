import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.moudle.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1,2,3]);
    }, 3000);
  });

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo.default} alt="Logo" />

        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <h4 className={cx('search-title')}>Accounts</h4>
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                </PopperWrapper>
              </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search name" spellCheck={false}></input>
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>

            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </button>
          </div>
        </Tippy>
        <div className={cx('actions')}></div>
      </div>
    </header>
  );
}

export default Header;
