import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Favourite from "./pages/Favourite/Favourite";
import Home from "./pages/Home/Home";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUP/SignUp";
import AuthProvider from "./context/AuthContext";
import PrivateRoute from "./rout/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "favourite",
        element: <PrivateRoute element={<Favourite />} />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
