import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import WrapTitleView from "../../components/WrapTitleView/WrapTitleView";
import WrapCheckRadio from "../../components/WrapCheckRadio/WrapCheckRadio";
import LinkToPage from "../../components/LinkToPage/LinkToPage";

function Category() {
  return (
    <div className="category">
      <Header />
      <LinkToPage />
      <WrapTitleView />
      <WrapCheckRadio />
      <Footer />
    </div>
  );
}

export default Category;
