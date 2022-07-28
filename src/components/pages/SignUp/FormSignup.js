import { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { signup } from "../../../services";

class FormSignup extends Component {
  state = {};
  renderInput = ({ input, placeholder, type, classWrapper }) => {
    const className = `field `;
    return (
      <div className={classWrapper}>
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
    let d = await signup(data);

    console.log(d);
  };
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
        <Field
          name="email"
          type="email"
          component={this.renderInput}
          placeholder="Email"
        />
        <Field
          name="username"
          type="text"
          component={this.renderInput}
          placeholder="Tên đăng nhập"
        />

        <Field
          name="fullName"
          type="text"
          component={this.renderInput}
          placeholder="Họ tên"
        />

        <div className="row form-haft">
          <Field
            name="password"
            type="password"
            component={this.renderInput}
            placeholder="Mật khẩu"
            classWrapper="col-xl-6 col-lg-6 col-md-12 col-sm-12"
          />
          <Field
            name="address"
            type="text"
            component={this.renderInput}
            placeholder="Địa chỉ"
            classWrapper="col-xl-6 col-lg-6 col-md-12 col-sm-12"
          />
        </div>
        <div className="row form-haft">
          <Field
            name="phone"
            type="text"
            component={this.renderInput}
            placeholder="Số điện Thoại"
            classWrapper="col-xl-6 col-lg-6 col-md-12 col-sm-12"
          />
          <Field
            name="doB"
            type="date"
            component={this.renderInput}
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
export default reduxForm({
  form: "SignupForm",
  validate: null,
})(FormSignup);
