import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import showSuccess from "../../utilities/showSuccess";
import showError from "../../utilities/showError";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const { displayName, email } = result.user;
        axiosPublic
          .post("/users", { name: displayName, email: email })
          .then((response) => {
            console.log(response.data);
            navigate("/");
            showSuccess(
              `Welcome ${displayName.toUpperCase()}!!!`,
              "Login is successful"
            );
          })
          .catch((err) => {
            showError(err.message);
          });
      })
      .catch((err) => {
        showError(err.message);
      });
  };
  return (
    <div
      onClick={handleGoogleLogin}
      className="btn py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
    >
      <FaGoogle />
      Google
    </div>
  );
};

export default SocialLogin;
