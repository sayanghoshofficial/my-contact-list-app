import { useState } from "react";
import Styles from "../Styles/Home.module.css";
import ContactList from "./ContactList";
import ContactListForm from "./ContactListForm";

const Home = () => {
  const [newData,setNewData] = useState([]);

  const fetchNewData = (data)=>{
    const newArray = [];
    newArray.push(data);
    setNewData(newArray);
  }
  return (
    <div className={Styles.contactContainer}>
      <h1>
        <img
          src="https://cdn-icons-png.flaticon.com/512/7945/7945013.png"
          alt="contact-list-icon"
        />
        My Contact List
      </h1>
      <ContactListForm contactTempData = {fetchNewData} data={newData}/>
      <ContactList data={newData}/>
    </div>
  );
};
export default Home;
