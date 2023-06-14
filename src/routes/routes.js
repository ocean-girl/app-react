import Home from "../components/pages/home/Home";
import Login from "../components/pages/login/Login";
import ProductsList from "../components/pages/productsList/ProductsList";
import Cart from "../components/pages/Cart/Cart";
import LoginFormik from "../components/pages/Login/LoginFormik";


export const routes = [ 
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "login",
    path: "/Login",
    Element: Login,
  },
  {
    id: "loginFormik",
    path: "/LoginFormik",
    Element: LoginFormik,
  },
  {
    id: "productList",
    path: "/products",
    Element: ProductsList,
  },
  {
    id: "cart",
    path: "/cart",
    Element: Cart
  },
 
];
