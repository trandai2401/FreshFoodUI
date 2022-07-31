import { wait } from "@testing-library/user-event/dist/utils";
import { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { checkUsername, login, signup } from "../../../services";
import Input from "../../Input";
import InputNeedToCheck from "../../Input/InputNeedTiCheck";

class FormSignup extends Component {
  state = {};
  onFormSubmit = async (data) => {
    console.log(data);
    let d = await signup(data);
    // Viết lệnh quay về trang Đăng nhập
    // code ....
    console.log(d);
  };

  render() {
    // console.log("render Form");
    return (
      <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
        <Field
          name="email"
          type="email"
          component={InputNeedToCheck}
          placeholder="Email"
        />
        <Field
          name="username"
          type="text"
          component={InputNeedToCheck}
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
  console.log(1);
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const asyncValidate = async ({ username, email } /*, dispatch */) => {
  console.log(username, email);
  const checkUsernam = username
    ? checkUsername(username).then((value) => {
        if (!value) return { username: "Tài khoản người dùng đã tồn tại" };
      })
    : null;

  const checkEmail = email
    ? checkUsername(email).then((value) => {
        if (!value) return { email: "Email người dùng đã tồn tại" };
      })
    : null;

  return Promise.all([checkUsernam, checkEmail]).then(async (values) => {
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
  // asyncValidate,
  // asyncBlurFields: ["username", "email"],
})(FormSignup);
