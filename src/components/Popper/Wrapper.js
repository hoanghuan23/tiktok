import classNames from "classnames";
import styles from './Popper.moudle.scss';

const cx = classNames.bind(styles)

function Wrapper({children, className}) {
    return <div className={cx('Wrapper', className)}>{children}</div>
}

export default Wrapper