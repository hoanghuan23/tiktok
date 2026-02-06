import classNames from "classnames";
import styles from './Popper.moudle.scss';

const cx = classNames.bind(styles)

function Wrapper({children}) {
    return <div className={cx('Wrapper')}>{children}</div>
}

export default Wrapper