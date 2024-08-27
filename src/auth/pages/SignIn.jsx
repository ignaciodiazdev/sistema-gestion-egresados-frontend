import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { SignInForm } from "../components/SignInForm";

export const SignIn = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.me.is_staff) {
      navigate("/dashboard");
    } else if (auth?.me.is_staff === false) {
      console.log("eres alumno");
      navigate("/usuario-inicio");
    }
  }, [auth]);

  if (auth) return null;

  return (
    <div className="mx-auto p-4 md:p-6 2xl:p-10 bg-body h-screen flex items-center justify-center">
      <div className="flex flex-wrap items-center bg-white shadow-md">
        <div className="hidden w-full xl:block xl:w-1/2 bg-indigo-700 text-white">
          <div className="px-24 py-16 text-center">
            <div className="mb-5 flex justify-center gap-2">
              <img src="/assets/svgs/logo.svg" alt="Logo" className="w-7" />
              <span className="text-3xl lg:text-3xl font-bold">
                Universidad
              </span>
            </div>
            <p className="font-medium 2xl:px-20 text-gray-200">
              Accede para gestionar eficientemente el proceso de egreso
              universitario.
            </p>

            <span className="mt-14 inline-block">
              <img
                src="/assets/svgs/signin-ilustration.svg"
                alt="illustration"
              />
            </span>
          </div>
        </div>
        <div className="w-full border-stroke xl:w-1/2 xl:border-l-2">
          <div className="w-full p-7 sm:p-12 xl:p-16">
            <span className="mb-1.5 block font-medium text-black2">
              Ingresa tus datos!
            </span>

            <h2 className="mb-9 text-xl font-bold text-black sm:text-3xl">
              Bienvenido al Sistema
            </h2>
            {!auth ? <SignInForm /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};
