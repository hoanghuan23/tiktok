import style from './Sidebar.module.scss';
import classNames from "classnames/bind"; 
import Menu, {MenuItem} from './Menu';
import { HomeIcon, UserGroupIcon, LiveIcon, HomeActiveIcon, UserGroupActiveIcon, LiveActiveIcon } from '~/components/Icons';
import config from '~/config';

const cx = classNames.bind(style);

function Sidebar() {
    console.log(cx('wrapper'));
    return <aside className={cx('wrapper')}>
        {<Menu>
            <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
            <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
            <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
        </Menu>}
    </aside>
}

export default Sidebar;