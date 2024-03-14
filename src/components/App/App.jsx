import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import AppRoutes from "../../components/Routes/Routes";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/SideBar/Sidebar";

import { getCategories } from "../../features/categories/categoriesSlice";
import { getProducts } from "../../features/products/productsSlice";
import UserForm from "../User/UserForm";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <UserForm />
      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
