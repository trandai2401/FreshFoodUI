import classNames from "classnames/bind";
import styles from "./Avatar.module.scss";

const cx = classNames.bind(styles);

function Avatar({ size, src, avatarDropdown, alt = "default" }) {
  return (
    <div className={cx("avatar", { avatarDropdown })}>
      <img width={`${size}px`} src={src} alt={alt} />
    </div>
  );
}

export default Avatar;
