import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { reduxForm } from "redux-form";
import config from "../../../config";

import styles from "./Login.module.scss";
import LoginForm from "./LoginForm";

const cx = classNames.bind(styles);
function Login() {
  return (
    <>
      <div className="container login">
        <div className="row login-content p-0 m-0">
          <div className="col-xl-7 col-lg-6 col-md-4 col-sm-12  login-content-itemone ">
            <div className="login-content-item-introduce">
              <h3 className="content-item-heading">Hãy đến với chúng tôi</h3>
              <p className="content-item-introduce">
                Để trở thành khách hàng thành viên của shop
              </p>

              <div className="content-img-introduce">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/online-shopping-3736818-3122116.png"
                  alt="nền"
                  className="img-introduce"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 col-md-8 col-sm-12 login-content-itemtwo">
            <h3 className="content-heading-login">Đăng nhập</h3>
            <LoginForm />

            <div className="d-flex justify-content-between">
              <p>Bạn chưa có tài khoản?</p>
              <Link to={config.routes.signup} className="sign-in mx-1">
                Đăng kí ngay
              </Link>
            </div>

            <div className="btn-login d-flex justify-content-center mr-0">
              <a href="{{ route('loginRedirect') }}">
                <div
                // style="background-color: #E34133;color: #ffffff;padding: 7px;padding-left: 25px;padding-right: 25px;border-radius: 50px"
                >
                  Đăng nhập với tài khoản Google
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
// export default
// export default Login;
