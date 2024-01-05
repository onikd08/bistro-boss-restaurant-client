import { Link } from "react-router-dom";
import signUpImg from "../../assets/others/authentication1.png";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="hero min-h-[calc(100vh-220px)] bg-base-200  my-[110px]">
      <div className="hero-content flex-col lg:flex-row lg:justify-around">
        <div className="lg:w-1/2">
          <img src={signUpImg} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:w-1/2">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-3xl font-semibold text-center">Sign Up</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600">Name field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">Email field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                })}
              />
              {errors.password?.type === "required" && (
                <span className="text-red-600">Password field is required</span>
              )}
              {(errors.password?.type === "minLength" ||
                errors.password?.type === "maxLength") && (
                <span className="text-red-600">
                  Password must be between 6 to 20 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-600">
                  Password must have at least 1 uppercase, 1 lowercase and 1
                  special characters (!@#$&*)
                </span>
              )}
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
