import React from "react";
const ListGroup = (props) => {
  const { items, textProperties, valueProperties, onItemSelect, selectedItem } =
    props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperties]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperties]}
        </li>
      ))}
    </ul>
  );
};

// 给参数默认值，这样在定义时可以不用传入参数
ListGroup.defaultProps = {
  textProperties: "name",
  valueProperties: "_id",
};

export default ListGroup;
