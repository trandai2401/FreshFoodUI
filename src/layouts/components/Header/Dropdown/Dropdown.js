import classNames from "classnames/bind";

import { Link } from "react-router-dom";

import styles from "./Dropdown.module.scss";
const cx = classNames.bind(styles);
function DropDown({
  list = [],
  avatarDropdown,
  location = "",
  to = "",
  children,
  classNameWrapper = "",
  ...props
}) {
  return (
    <div
      {...props}
      className={cx(
        "nav-item dropdown",
        "item-nav",
        { avatarDropdown },
        classNameWrapper
      )}
    >
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
      <ul className={cx(`dropdown-menu ${location}`, "dropdown-popper")}>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={`${to}/${item.to}`}
                className={cx("dropdown-item", "item-dropdown")}
                href="#"
              >
                {item.icon ? (
                  <div className={cx("icon-navigation")}> {item.icon}</div>
                ) : null}

                <div className={cx("title-item-dropdown")}> {item.title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DropDown;
