import { Component } from "react";

import FormSignup from "./FormSignup";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <div className="container login">
        <div className="row login-content p-0 m-0">
          <div className="col-xl-6 col-lg-6 col-md-4 col-sm-12  login-content-itemone ">
            <div className="login-content-item-introduce">
              <h3 className="content-item-heading">Hãy đến với chúng tôi</h3>
              <p className="content-item-introduce">
                Đăng kí ngay để nhận những phần quà hấp dẫn cho gia đình bạn
              </p>

              <div className="content-img-introduce">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/fruit-selling-fruits-to-customer-4650786-3860595.png"
                  alt="nền"
                  className="img-introduce"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12 login-content-itemtwo">
            <h3 className="content-heading-signin">Đăng kí</h3>
            <FormSignup />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
