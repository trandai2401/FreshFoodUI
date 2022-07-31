import { Component } from "react";
import { checkUsername } from "../../services";

class InputNeedToCheck extends Component {
  render() {
    let {
      input,
      placeholder,
      type,
      classWrapper,
      meta: { touched, error, warning },
    } = this.props;
    console.log(error);

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
