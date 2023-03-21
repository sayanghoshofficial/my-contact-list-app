import { useState } from "react";
import Styles from "../Styles/Home.module.css";

const ContactListForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const getContactValues = (e) => {
    e.preventDefault();
    creatingContact(name, number, email);
    setName('');
    setEmail('');
    setNumber('');
    // console.log('props.data/length',props.data.length)
  };
  const creatingContact = (name, number, email) => {
    props.contactTempData({
      name: name,
      phone: number,
      email: email,
      id: Date.now(),
    })
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <div className={Styles.contactListForm}>
      <form>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Phone No."
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          className={Styles.contactListFormbtn}
          onClick={(e)=>{getContactValues(e)}}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1057/1057240.png"
            alt="Add Contact"
            className={Styles.contactIconsbtn}
          />
        </button>
      </form>
    </div>
  );
};

export default ContactListForm;
