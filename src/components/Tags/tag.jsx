import classNames from "classnames";
import React from "react";
import "../../components/Tags/tag.scss";

function Tag({
  tagname,
  type = "default",
  display = "default",
  color = "default",
  background = "default",
  icon,
}) {
  return (
    <div className="tag">
      <ol>
        <li>
          <a href="#">
            <div
              className={classNames(
                "btntag",
                `type-${type}`,
                `display-${display}`,
                `color-${color}`,
                `background-${background}`
              )}
            >
              {tagname}
              {icon}
            </div>
          </a>
        </li>
      </ol>
    </div>
  );
}

export default Tag;
