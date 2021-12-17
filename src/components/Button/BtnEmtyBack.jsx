import classnames from "classnames";
import "./BtnEmtyBack.scss"

const BtnEmtyBack = ({
  children,
  color = "none",
  size = "small",
  type = "default",
  round = false,
  colorborder="default",
  padding="default",
  icon,
}) => {
  return (
    <button
      className={classnames(
        "btnButton",
        `color-${color}`,
        `size-${size}`,
        `type-${type}`,
        `colorborder-${colorborder}`,
        `padding-${padding}`,

        { round }
      )}
    >

    {type === "icon-left" && icon}
      <p> {children}</p>
      {type === "icon-right" && icon}

    </button>
  );
};
export default BtnEmtyBack;
