import classNames from 'classnames/bind';
import styles from './Header.moudle.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>

        <div className={cx('logo')}>
          <img src={images.logo.default} alt="Logo" />
        </div>

        <div className={cx('search')}>
          <input placeholder='Search name' spellCheck={false}></input>
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
          </button>
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>

          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          </button>
        </div>

        <div className={cx('actions')}>
          
        </div>
      </div>
    </header>
  );
}

export default Header;
