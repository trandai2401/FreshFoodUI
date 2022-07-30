import { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { checkUsername, login, signup } from "../../../services";
import Input from "../../Input";
import InputNeedToCheck from "../../Input/InputNeedTiCheck";

class FormSignup extends Component {
  state = {};
  onFormSubmit = async (data) => {
    // console.log(data);
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

const validate = async (values) => {
  // let d = sleep(1000)
  //   .then(() => {
  //     // simulate server latency
  //     console.log(idTimeOutUsername);
  //     clearTimeout(idTimeOutUsername);
  //     checkUsername(values.username).then((value) => {
  //       // if (!value) {
  //       //   throw { username: "Tài khoản người dùng đã tồn tại" };
  //       // }
  //       console.log({ username: "Tài khoản người dùng đã tồn tại" });
  //       return { username: "Tài khoản người dùng đã tồn tại" };
  //     });
  //   })
  //   .then((v) => v);
  // console.log(d);
  return {};
};

const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const asyncValidate = async (values /*, dispatch */) => {
  // console.log(a);

  return sleep(0).then(async (i) => {
    // simulate server latency

    await checkUsername(values.username).then((value) => {
      if (!value) {
        throw { username: "Tài khoản người dùng đã tồn tại" };
      }
      return { username: "Tài khoản người dùng đã tồn tại" };
    });
  });
};
export default reduxForm({
  form: "SignupForm",
  validate,
  asyncValidate,
  asyncBlurFields: ["username"],
})(FormSignup);
