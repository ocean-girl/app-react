import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from './routes/routes';
import CartContextProvider from "./context/CartContext";
import Layout from "./components/layout/Layout";
import NotFound from "./components/pages/404NotFound/404NotFound";
import LoginFormik from "./components/pages/Login/LoginFormik";


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            {routes.map(({ id, path, Element }) => (
                <Route path={path} key={id} element={<Element />} />
            ))}
          </Route>    
          <Route path="/LoginFormik" element={<LoginFormik />} />
          <Route path="*" element={<NotFound />} />
        
        </Routes>
      </CartContextProvider>  
    </BrowserRouter>
  );
}

export default App
