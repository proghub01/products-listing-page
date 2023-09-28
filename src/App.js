import React from "react";
import ProductList from "./components/productList/ProductList";
import ProductDetails from "./components/productDetails/ProductDetails";
import "./styles/app.css";

import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Outlet, 
  Route, 
  RouterProvider } from "react-router-dom";


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<ProductList />}/>
        <Route path="/productDetails/:productId" element={<ProductDetails />} />
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

const Root = () => {
  return(
    <>
      <div>
        <Outlet />
      </div>
    </>
  )
}



