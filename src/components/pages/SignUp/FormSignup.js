import { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { checkEmail, checkUsername, signup } from "../../../services";
import Input from "../../Input";
import config from "../../../config";
import history from "../../../history";

class FormSignup extends Component {
  state = {};
  onFormSubmit = async (data) => {
    console.log(data);
    let d = await signup(data);
    history.push(config.routes.login);
    console.log(d);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
        <Field
          name="email"
          type="email"
          component={Input}
          placeholder="Email"
        />
        <Field
          name="username"
          type="text"
          component={Input}
          placeholder="Tên đăng nhập"
        />

        <Field
          name="fullName"
          type="text"
          component={Input}
          placeholder="Họ tên"
        />

        <div className="row form-haft">
          <Field
            name="password"
            type="password"
            component={Input}
            placeholder="Mật khẩu"
            classWrapper="col-xl-6 col-lg-6 col-md-12 col-sm-12"
          />
          <Field
            name="address"
            type="text"
            component={Input}
            placeholder="Địa chỉ"
            classWrapper="col-xl-6 col-lg-6 col-md-12 col-sm-12"
          />
        </div>
        <div className="row form-haft">
          <Field
            name="phone"
            type="text"
            component={Input}
            placeholder="Số điện Thoại"
            classWrapper="col-xl-6 col-lg-6 col-md-12 col-sm-12"
          />
          <Field
            name="doB"
            type="date"
            component={Input}
            placeholder="Date of birth"
            classWrapper="col-xl-6 col-lg-6 col-md-12 col-sm-12"
          />
        </div>

        <div className="btn-login d-flex justify-content-center mr-0">
          <button type="submit" className="btn btn-primary">
            Đăng ký
          </button>
        </div>
      </form>
    );
  }
}

const validate = (values) => {
  console.log(values);
  const errors = {};
  if (!values.email) {
    errors.email = "*Required";
  }
  if (!values.username) {
    errors.username = "*Required";
  }

  if (!values.password) {
    errors.password = "*Required";
  }

  if (!values.fullName) {
    errors.fullName = "*Required";
  }

  if (!values.address) {
    errors.address = "*Required";
  }

  if (!values.phone) {
    errors.phone = "*Required";
  }

  if (!values.doB) {
    errors.doB = "*Required";
  }

  return errors;
};

const asyncValidate = async ({ username, email } /*, dispatch */) => {
  console.log(username, email);
  const checkU = username
    ? checkUsername(username).then((value) => {
        if (!value) return { username: "Tài khoản người dùng đã tồn tại" };
      })
    : null;

  const checkE = email
    ? checkEmail(email).then((value) => {
        if (!value) return { email: "Email người dùng đã tồn tại" };
      })
    : null;

  return Promise.all([checkU, checkE]).then(async (values) => {
    const error = values.reduce((pre, cur) => {
      return { ...pre, ...cur };
    }, {});
    if (Object.keys(error).length > 0) {
      throw error;
    }
  });
};
export default reduxForm({
  form: "SignupForm",
  validate,
  asyncValidate,
  asyncBlurFields: ["username", "email"],
})(FormSignup);
