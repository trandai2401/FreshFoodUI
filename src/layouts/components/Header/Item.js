import classNames from "classnames/bind";

import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);
function Item({ icon, to = "/", children }) {
  return (
    <Link to={to} className={cx("nav-link", "item-nav")}>
      {children}
    </Link>
  );
}

export default Item;
