import { useEffect, useRef, useState } from "react";
import loginImg from "../../assets/others/authentication1.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = () => {
    if (validateCaptcha(captchaRef.current.value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="hero min-h-[calc(100vh-220px)] bg-base-200  my-[110px]">
      <div className="hero-content flex-col lg:flex-row lg:justify-around">
        <div className="lg:w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:w-1/2">
          <form className="card-body" onSubmit={handleLogin}>
            <h3 className="text-3xl font-semibold text-center">Login</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate></LoadCanvasTemplate>
              </label>
              <div className="flex justify-between">
                <input
                  type="text"
                  maxLength={6}
                  placeholder="Type Here"
                  className="input input-bordered mt-2"
                  required
                  ref={captchaRef}
                />

                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-info btn-sm mt-4 "
                >
                  Validate
                </button>
              </div>
            </div>
            <div className="form-control mt-6">
              <button
                disabled={disabled}
                className="btn bg-amber-500 text-white"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
