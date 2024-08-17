import Header from "./components/Header";
import Main from "./components/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Show from "./components/Show";
import New from "./components/New";
import SignupForm from "./components/Signup";
import SigninForm from "./components/Signin";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./utils/store"; // Import the store you just configured
import Blogs from "./components/Blogs";

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
        path: "new",
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
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <RouterProvider router={appRouter} />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
