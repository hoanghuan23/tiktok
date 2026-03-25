import { useEffect, useState, useRef } from 'react';
import proptypes from 'prop-types';
import { faDeleteLeft, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    const q = searchValue.trim();
    if (!q) {
      setSearchResult([]);
      return;
    }

    setLoading(true);

    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/users/search?q=${encodeURIComponent(q)}`);
        const data = await res.json();
        setSearchResult(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Lỗi khi gọi API:', error);
        setSearchResult([]);
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  return (
    // using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
    <div>
      <HeadlessTippy
        interactive
        appendTo={() => document.body}
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              {searchResult.map((user) => (
                <AccountItem key={user.user_info?.uid} data={user} />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx('search')}>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Search name"
            spellCheck={false}
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
          />

          {!!searchValue && !loading && (
            <button
              className={cx('clear')}
              onClick={() => {
                setSearchValue('');
                inputRef.current.focus();
              }}
            >
              <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
            </button>
          )}
          {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>}

          <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

AccountItem.propTypes = {
  data: proptypes.object,
};

export default Search;
