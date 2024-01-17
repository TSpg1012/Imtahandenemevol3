import App from "../App";
import Add from "../components/Add/Add";
import Detail from "../components/Detail/Detail";
import Wishlist from "../components/wishlist/Wishlist";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/basket",
    element: <App />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/:id",
    element: <Detail />,
  },
  {
    path: "/add",
    element: <Add />,
  },
];
