import React, { useState } from "react";
import "./CheckboxLabels.css";

export default function Filter2() {
  const [checkedList, setCheckedList] = useState([]);
  const listData = [
    { id: "1", value: "เนื้อหมู" },
    { id: "2", value: "เนื้อไก่" },
    { id: "3", value: "เนื้อปลา" },
    { id: "4", value: "เนื้อวัว" },
    { id: "5", value: "เนื้อเป็ด" },
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
                    <p className="title">โปรดเนื้อสัตว์ที่คุณชื่นชอบ</p>
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