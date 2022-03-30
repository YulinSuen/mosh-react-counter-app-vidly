import React from "react";
const ListGroup = (props) => {
  const { items, textProperties, valueProperties } = props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li key={item[valueProperties]} className="list-group-item">
          {item[textProperties]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
