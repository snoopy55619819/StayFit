import * as React from "react";
import Item from "./Item";
import BackButton from "./BackButton";


export default function ItemList(props) {
  const { header, exerciseList, onClick } = props;
  const nameList = exerciseList.map((element) => (
    <Item
      key={exerciseList.indexOf(element)}
      exerciseItem={element}
      onClick={onClick}
    />
  ));

  return (
    <div className='itemList'>
      <div className='heading-container'>
        <span>
          {header !== "List of Exercises" && <BackButton />}
        </span>
        <h2>
          {header}
        </h2>
      </div>
      <div className="item-container">
        {nameList}
      </div>
    </div>
  );
}
