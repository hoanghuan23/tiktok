import classNames from 'classnames/bind';
import styles from './AccountItem.moudle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <Image
        className={cx('avatar')}
        src="https://cdn.hellojob.jp/upload/hellojobv5/job-crawled/images/1770351572529376.jpg"
        alt="avatar"
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Hoàng Văn Huấn</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
        </p>
        <span className={cx('username')}>huanto</span>
      </div>
    </div>
  );
}

export default AccountItem;
