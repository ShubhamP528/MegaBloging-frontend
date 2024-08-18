import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { NODE_API_ENDPOINT } from "../utils/utils";

function SigninForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false); // Loader state

  const navigate = useNavigate();
  const user = useSelector((store) => store.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.username !== undefined) {
      navigate("/");
    }
  }, [user, navigate]);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setIsLoading(true); // Set loading to true when API call starts
      try {
        const response = await fetch(`${NODE_API_ENDPOINT}/api/v1/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.log(errorData.error);
          throw new Error(
            errorData.error || "Failed to login. Please try again."
          );
        }

        const data = await response.json();
        dispatch(setUser(data));
        setIsSubmitted(true);
        toast.success("Login successful");
        navigate("/");
      } catch (error) {
        toast.error(error.message || "An unexpected error occurred");
      } finally {
        setIsLoading(false); // Set loading to false after the API call is complete
      }
    } else {
      setFormErrors(errors);
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
      <div className="w-full max-w-md p-8 mx-[10%] bg-white rounded-lg shadow-lg ring-1 ring-gray-900/5 animate-fadeIn">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Sign In
        </h2>

        {isSubmitted && (
          <div className="text-green-600 mb-4 text-center">
            Sign-in successful!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            {formErrors.password && (
              <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className={`w-full bg-blue-500 text-white p-3 rounded-lg transition transform ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            } ${isLoading ? "animate-spin" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    d="M4 12a8 8 0 018-8V4a10 10 0 00-10 10h2z"
                    fill="currentColor"
                  />
                </svg>
                <span>Signing In...</span>
              </div>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SigninForm;
