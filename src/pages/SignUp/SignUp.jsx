import { Link, useNavigate } from "react-router-dom";
import signUpImg from "../../assets/others/authentication1.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import showSuccess from "../../utilities/showSuccess";
import showError from "../../utilities/showError";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
  const { createUser, logOut, updateUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    const { email, password, displayName, photoURL } = data;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const userInfo = { displayName, photoURL };
        updateUser(userInfo)
          .then(() => {
            const userData = { name: displayName, email };
            axiosPublic.post("/users", userData).then((response) => {
              if (response.data.insertedId) {
                navigate("/login");
                showSuccess(
                  "Congratulations!!!",
                  "Sign up is successful. Now you can login"
                );
                logOut()
                  .then(() => {})
                  .catch((err) => showError(err.message));
              }
            });
          })
          .catch((err) => showError(err.message));
      })
      .catch((err) => {
        showError(err.message);
      });
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
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
                  {...register("displayName", { required: true })}
                />
                {errors.displayName && (
                  <span className="text-red-600">Name field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="url"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  {...register("photoURL", { required: true })}
                />
                {errors.photoURL && (
                  <span className="text-red-600">
                    PhotoURL field is required
                  </span>
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
                  <span className="text-red-600">
                    Password field is required
                  </span>
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
                <button className="btn bg-amber-500 text-white">Sign Up</button>
              </div>
              <div className="divider">OR</div>
              <SocialLogin></SocialLogin>
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
    </>
  );
};

export default SignUp;
