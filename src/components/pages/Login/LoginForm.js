import React from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { login } from "../../../services";

class LoginForm extends React.Component {
  state = {};

  renderInput = ({ input, label, meta, placeholder, type }) => {
    const className = `field `;
    return (
      <div className="col-sm-12">
        <input
          className="form-control"
          {...input}
          placeholder={placeholder}
          type={type}
        />
      </div>
    );
  };

  onFormSubmit = async (data) => {
    // console.log(process.env.REACT_APP_BASE_URL);
    let d = await login(data);
    localStorage.setItem("tokenType", d.tokenType);
    localStorage.setItem("accessToken", d.accessToken);

    console.log(d);
  };
  render() {
    return (
      <>
        <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
          <div className=" row">
            <div className="col-sm-12">
              <Field
                value="admin"
                label="Enter Title"
                name="username"
                type="text"
                component={this.renderInput}
                placeholder="Tên đăng nhập"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-sm-12">
              <Field
                value={123456}
                label="Enter Title"
                name="password"
                type="password"
                component={this.renderInput}
                placeholder="Mật khẩu"
              />
            </div>
          </div>

          <div className="forgot-remeber d-flex justify-content-between">
            <Link to="/forgotpassword" className="forgot-pass">
              Quên mật khẩu
            </Link>
            <label>
              <input type="checkbox" name="" />
              Nhớ mật khẩu
            </label>
          </div>
          <div className="btn-login d-flex justify-content-center mr-0">
            <button className="btn btn-primary">Đăng nhập</button>
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
