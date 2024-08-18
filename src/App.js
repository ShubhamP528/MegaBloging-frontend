import Main from "./components/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Show from "./components/Show";
import New from "./components/New";
import SignupForm from "./components/Signup";
import SigninForm from "./components/Signin";
import { Provider } from "react-redux";
import store from "./utils/store"; // Import the store you just configured
import Blogs from "./components/Blogs";
import { useEffect } from "react";
import { retrieveBlogAuth } from "./utils/auth";
import About from "./components/About";
import ContactUs from "./components/Contactus";
import PrivacyPolicy from "./components/PrivacyPolicy";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Blogs />,
      },
      {
        path: "blog/:id",
        element: <Show />,
      },
      {
        path: "write",
        element: <New />,
      },
      {
        path: "signup",
        element: <SignupForm />,
      },
      {
        path: "signin",
        element: <SigninForm />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    // store.dispatch(retrieveAuth());
    store.dispatch(retrieveBlogAuth());
  }, []);

  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}></RouterProvider>
    </Provider>
  );
}

export default App;
