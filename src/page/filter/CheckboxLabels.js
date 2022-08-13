import React, { useState } from "react";
import "./CheckboxLabels.css";
import {Container,Header} from '../../styled_components/Search-header'
function CheckboxLabels() {
  const [checkedList, setCheckedList] = useState([]);
  const listData = [
    { id: "1", value: "โรคเบาหวาน" },
    { id: "2", value: "โรคหัวใจ" },
    { id: "3", value: "โรคไต " },
    { id: "4", value: "โรคความดันโลหิตสูง" },
  ];
  const listData2 = [
    { id: "1", value: "ถั่ว" },
    { id: "2", value: "ปลา" },
    { id: "3", value: "หอย" },
    { id: "4", value: "กุ้ง" },
    { id: "5", value: "นม" },
    { id: "6", value: "ไข่" },
  ];
  const listData3 = [
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
    <Container>
        <Header>
        </Header><br/>
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
        </div><br/>

        <div className="container">
            <div className="card">
                <div className="card-header">
                    <p className="title">โปรดระบุอาหารที่คุณแพ้</p>
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
          {listData2.map((item, index) => {
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
    </div><br/>

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
          {listData3.map((item, index) => {
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
    </div><br/>

      </Container>
    
  );
}
 
export default CheckboxLabels;