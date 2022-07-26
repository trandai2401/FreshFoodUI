import classNames from "classnames/bind";
import { Children } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
const cx = classNames.bind(styles);
function ItemDropDown({
  list = [],
  avatarDropdown,
  location = "",
  to,
  children,
  ...props
}) {
  return (
    <div {...props} className={cx("nav-item dropdown", { avatarDropdown })}>
      <span
        className={cx(
          "nav-link dropdown-toggle",

          "item-menu-dropdown",
          "item-nav"
        )}
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {children}
      </span>
      <ul className={`dropdown-menu ${location}`}>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <Link to={`${to}/${item.id}`} className="dropdown-item" href="#">
                {item.icon}
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ItemDropDown;
