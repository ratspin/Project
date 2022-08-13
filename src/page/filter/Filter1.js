import React, { useState } from "react";
import "./CheckboxLabels.css";

export default function Filter1() {
  const [checkedList, setCheckedList] = useState([]);
  const listData = [
    { id: "1", value: "โรคเบาหวาน" },
    { id: "2", value: "โรคหัวใจ" },
    { id: "3", value: "โรคไต " },
    { id: "4", value: "โรคความดันโลหิตสูง" },
  ];
 
  const handleSelect = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setCheckedList([...checkedList, value]);
    } else {
      const filteredList = checkedList.filter((item) => item !== value);
      setCheckedList(filteredList);
    }
  };
  return (
   
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <p className="title">โปรดระบุโรคของคุณ</p>
                </div>
        <div className="list-container">
              {checkedList.map((item, index) => {
                  return (
        <div className="chip">
              <p className="chip-label">{item}</p>
        </div>);
          })}
        </div>
        <div className="card-body">
          {listData.map((item, index) => {
            return (
              <div key={item.id} className="checkbox-container">
                <input
                  type="checkbox"
                  name="languages"
                  value={item.value}
                  onChange={handleSelect}
                />
                <label>{item.value}</label>
              </div>
            );
          })}
        </div>
      </div>
        </div>
 
  );
}