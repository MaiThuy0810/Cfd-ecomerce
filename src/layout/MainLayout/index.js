import { React, Outlet } from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
