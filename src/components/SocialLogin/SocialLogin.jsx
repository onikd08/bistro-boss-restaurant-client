import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin } = useAuth();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
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
