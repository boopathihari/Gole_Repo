import React, { useState } from "react";
import Input from "../Input/Input";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useDispatch } from "react-redux";
import { storeProfile } from "../../constants/actions";
import { useNavigate } from "react-router-dom";
export default function Auth() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignup, setisSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // Access token obtained after successful login
      const accessToken = tokenResponse.access_token;

      // Make a request using Axios to retrieve data
      try {
        const response = await axios.get(
          "https://www.googleapis.com/oauth2/v2/userinfo",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const profileObj = response.data; // Data received from the API
        dispatch(storeProfile(profileObj));
        console.log(profileObj);
        

        try {
          const response = await axios.post("http://localhost:8000/api/users", profileObj);
        
          const userId = response.data._id; 
          
          localStorage.setItem('userId', userId);


        } catch (error) {
          console.error("Error creating user:", error);
        }

        closeModal();
        window.location.reload();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    scope: "profile", // Specify the profile scope
  });

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const signUpHandler = () => {
    setisSignup(!isSignup);
  };

  return (
    <div>
      <button
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={openModal}
      >
        Login
      </button>

      {isModalOpen && (
        <div
          id="authentication-modal"
          tabindex="-1"
          aria-hidden="true"
          class=" fixed top-0 right-0 left-0 z-50 flex justify-center items-center  bg-black bg-opacity-50 md:inset-0 h-full  max-h-full"
        >
          <div class="relative p-4 w-full max-w-md max-h-full ">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 p-4 md:p-5">
              <div class="rounded-t dark:border-gray-600  flex">
                <button
                  type="button"
                  class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                  onClick={closeModal}
                >
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              <h3 class="text-xl text-center font-bold text-[26px] text-gray-900 dark:text-white">
                {isSignup ? "Sign Up" : "Sign in"}
              </h3>
              <div class="text-sm  text-center font-medium mt-4 text-gray-500 dark:text-gray-300">
                {isSignup
                  ? "Already have an account ? "
                  : "Don't have an account yet ? "}{" "}
                <a
                  class="text-blue-700 hover:underline dark:text-blue-500"
                  onClick={signUpHandler}
                >
                  {isSignup ? "Sign in here" : "Sign up here"}
                </a>
              </div>

              <div className=" mt-4">
                <button
                  type="button"
                  className="text-gray-900  justify-center mx-auto w-full text-[20px] bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
                  onClick={() => login()}
                >
                  <span className="flex">
                    <FcGoogle className="text-[20px] mr-2" />
                    Continue with Google
                  </span>
                </button>
                {/* <GoogleLogin
                  clientId="369088499996-k3qne6tl257dk1vkea5dvj5mohadsfhd.apps.googleusercontent.com"
                  onSuccess={googleSuccess}
                  onFailure={googleFailure}
                  cookiePolicy={"single_host_origin"}
                  isSignedIn={true}
                /> */}
              </div>
              <div class="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                Or
              </div>

              <div class="">
                <form class="space-y-4" action="#">
                  <div>
                    <Input
                      tag="input"
                      label="Email"
                      type="email"
                      ErrorMsg=""
                      // value={Email}
                      // onchange={Emailhandler}
                      // onBlur={blurHandler}
                      isError={true}
                      // showIcon={showIcon}
                      // isSuccess={isSuccess}
                    />
                  </div>
                  <div>
                    <Input
                      tag="input"
                      label="Password"
                      type="password"
                      ErrorMsg=""
                      // value={Email}
                      // onchange={Emailhandler}
                      // onBlur={blurHandler}
                      isError={true}
                      // showIcon={showIcon}
                      // isSuccess={isSuccess}
                    />
                  </div>

                  {isSignup && (
                    <div>
                      <Input
                        tag="input"
                        label="Confirm Password"
                        type="password"
                        ErrorMsg=""
                        // value={Email}
                        // onchange={Emailhandler}
                        // onBlur={blurHandler}
                        isError={true}
                        // showIcon={showIcon}
                        // isSuccess={isSuccess}
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {isSignup ? "Sign up" : "Sign in"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
