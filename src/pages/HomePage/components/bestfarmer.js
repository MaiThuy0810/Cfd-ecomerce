import React from "react";
// import WrapCard from "../../components/WrapCard/wrapcard"
import WrapCard from "../../../components/WrapCard/wrapcard";
import WrapProduct from "../../../components/WrapProduct/wrapproduct";
import Card from "../../../components/Card/card";
import "./wrapbestproduct.scss"

function BestFarmer() {
  return (
    <div className="wrapcontentcard">
      <div className="wrapcontentcard__left">
        <WrapProduct
               titleProduct="Best from farmers"
          itemProduct1="Carrots"
          itemProduct2="Tomatoes"
          itemProduct3="Potatoes"
          itemProduct4="Chicken"
          itemProduct5="Pork"
        />
      </div>
      <div className="wrapcontentcard__right">

            <Card cardTitle="product4" cardDes="Space for a small product description " cardPrice="100" />
        <Card cardTitle="product5" cardDes="Space for a small product description " cardPrice="100" tagname="-10%" discount="1055" />
        <Card cardTitle="product6" cardDes="Space for a small product description " cardPrice="100" tagname="-10%" />
      </div>
    </div>
  );
}

export default BestFarmer;
