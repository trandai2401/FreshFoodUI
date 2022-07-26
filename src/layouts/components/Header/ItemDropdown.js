import classNames from "classnames/bind";

import styles from "./Header.module.scss";
const cx = classNames.bind(styles);
function ItemDropDown({ list, title }) {
  return (
    <div className={cx("nav-item dropdown")}>
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
        Sản phẩm
      </span>
      <ul className="dropdown-menu">
        {list.map((item) => {
          return (
            <li>
              <a className="dropdown-item" href="#">
                {item.icon}
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ItemDropDown;
