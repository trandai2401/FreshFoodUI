import { Component } from "react";
import { checkUsername } from "../../services";

class InputNeedToCheck extends Component {
  state = {
    error: true,
  };

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
        <p>{error}</p>
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
