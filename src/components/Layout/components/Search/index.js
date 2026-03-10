import { useEffect, useState, useRef } from "react";
import { faDeleteLeft, faSpinner, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import {Wrapper as PopperWrapper} from '~/components/Popper';
import AccountItem from "~/components/AccountItem";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
 
    const inputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 3000);
  }, []);


  const handleHideResult = () => {
    setShowResult(false);
  }

    return (
         <HeadlessTippy
          interactive
          visible={showResult && searchResult.length > 0}
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
          onClickOutside={handleHideResult}
         >
          <div className={cx('search')}>
            <input 
              ref={inputRef} 
              value={searchValue} 
              placeholder="Search name" 
              spellCheck={false} 
              onChange={e => setSearchValue(e.target.value)}
              onFocus={() => setShowResult(true)}
            />
            
            {!!searchValue &&
            <button className={cx('clear')} onClick={() => {setSearchValue(''); inputRef.current.focus();}}>
              <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
            </button>
            }
            {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon> */}

            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </button>
          </div>
        </HeadlessTippy>
    )
}

export default Search;