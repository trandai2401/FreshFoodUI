import { Component } from "react";
import classNames from "classnames/bind";
import styles from "./Input.module.scss";
const cx = classNames.bind(styles);
class InputNeedToCheck extends Component {
  render() {
    let {
      input,
      placeholder,
      type,
      classWrapper,
      meta: { touched, error, warning },
    } = this.props;

    return (
      <div className={classWrapper}>
        {touched && error && <span>{error}</span>}
        <input
          className="form-control"
          {...input}
          placeholder={placeholder}
          type={type}
        />
      </div>
    );
  }
}

export default InputNeedToCheck;
