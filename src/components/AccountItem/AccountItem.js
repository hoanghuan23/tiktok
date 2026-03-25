import classNames from 'classnames/bind';
import styles from './AccountItem.moudle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Image from '~/components/Image/Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  const user = data.user_info;

  return (
    <Link className={cx('wrapper')} to={`/@${user.unique_id}`}>
      <Image
        className={cx('avatar')}
        src={
          user.avatar_thumb.url_list[0] ||
          'https://cdn.hellojob.jp/upload/hellojobv5/job-crawled/images/1770351572529376.jpg'
        }
        alt="avatar"
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>{user.nickname || 'Unknown User'}</span>
          {user.custom_verify && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        </p>
        <span className={cx('username')}>{user.unique_id || 'unknown'}</span>
      </div>
    </Link>
  );
}

export default AccountItem;
