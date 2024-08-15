import Header from "./components/header";
import Blog from "./components/blog";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Show from "./components/show";
import { Card } from "./components/card";
import New from "./components/New";
import SignupForm from "./components/Signup";
import SigninForm from "./components/signin";
import Footer from "./components/footer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Blog />,
    children: [
      {
        path: "/",
        element: <Card />,
      },
      {
        path: "show",
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
    <div className="App">
      <Header />
      <RouterProvider router={appRouter} />
      <Footer />
    </div>
  );
}

export default App;
