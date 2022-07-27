import React from "react";
import { Field, reduxForm } from "redux-form";

class LoginForm extends React.Component {
  state = {};

  renderInput = ({ input, label, meta }) => {
    const className = `field ${!meta.touched && meta.error ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>

        <input {...input} />
      </div>
    );
  };
  render() {
    return (
      <>
        <form>
          <div class=" row">
            <div class="col-sm-12">
              <input
                type="text"
                class="form-control"
                id="staticEmail"
                placeholder="Tên đăng nhập"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <div class="col-sm-12">
              <Field
                label="Enter Title"
                name="title"
                component={this.renderInput}
              />
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                placeholder="Mật khẩu"
              />
            </div>
          </div>

          <div className="forgot-remeber d-flex justify-content-between">
            <a href="d" className="forgot-pass">
              Quên mật khẩu
            </a>
            <label>
              <input type="checkbox" name="" />
              Nhớ mật khẩu
            </label>
          </div>
          <div className="btn-login d-flex justify-content-center mr-0">
            <button type="button" class="btn btn-primary">
              Đăng nhập
            </button>
          </div>
        </form>
      </>
    );
  }
}
export default reduxForm({
  form: "StreamForm",
  validate: null,
})(LoginForm);
// export default LoginForm;
