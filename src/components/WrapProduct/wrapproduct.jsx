import { React, useState } from "react";
import BtnEmtyBack from "../Button/BtnEmtyBack";
import "./wrapproduct.scss";
import { IconArrowRight } from "../Icons/icon";
// import classnames from "classnames";

// function Wrapproduct({ titleProduct, wrap }) {
//   return (
//     <div className="wrapproduct">
//       <h3>{titleProduct}</h3>
//       <ol>
//         <li>{wrap}</li>
//         {/* <li>Careers</li>
//         <li>Press Releases</li>
//         <li>Blog</li> */}
//       </ol>
//     </div>
//   );
// }

// export default Wrapproduct;

const Wrapproduct = ({
  titleProduct,
  itemProduct1,
  itemProduct2,
  itemProduct3,
  itemProduct4,
  itemProduct5,
}) => {
  const [isOpen, setIsOpen] = useState();
  return (
    <div className="wrapproduct">
      <h3>{titleProduct}</h3>
      <ol>
        <li>
          <a href="#">{itemProduct1}</a>
        </li>
        <li>
          <a href="#">{itemProduct2}</a>
        </li>
        <li>
          <a href="#">{itemProduct3}</a>
        </li>
        <li>
          <a href="#">{itemProduct4}</a>
        </li>
        <li>
          <a href="#">{itemProduct5}</a>
        </li>
      </ol>

      <BtnEmtyBack
        color="gray"
        size="large"
        type="icon-right"
        icon={<IconArrowRight />}
      >
        Read recepies
      </BtnEmtyBack>
    </div>
  );
};

export default Wrapproduct;
