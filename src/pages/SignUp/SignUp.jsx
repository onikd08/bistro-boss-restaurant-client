import { Link } from "react-router-dom";
import signUpImg from "../../assets/others/authentication1.png";

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
  };
  return (
    <div className="hero min-h-[calc(100vh-220px)] bg-base-200  my-[110px]">
      <div className="hero-content flex-col lg:flex-row lg:justify-around">
        <div className="lg:w-1/2">
          <img src={signUpImg} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:w-1/2">
          <form className="card-body" onSubmit={handleSignUp}>
            <h3 className="text-3xl font-semibold text-center">Sign Up</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
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

            <div className="form-control mt-6">
              <button className="btn bg-amber-500 text-white">Login</button>
            </div>
          </form>
          <div className="text-center mb-10">
            <small className="text-amber-500">
              Already have an account?
              <Link className="underline ml-1" to={"/login"}>
                Login here.
              </Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
