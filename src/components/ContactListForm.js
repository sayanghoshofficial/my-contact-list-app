import { useState } from "react";
import Styles from "../Styles/Home.module.css";

const ContactListForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const getContactValues = () =>{
    setName(name);
    console.log(name);
    setEmail(email);
    console.log(email);
    setNumber(number);
    console.log(number)
  }

  return (
    <div className={Styles.contactListForm}>
      <form>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => e.target.value}
          required
        />
        <input
          type="number"
          placeholder="Phone No."
          value={email}
          onChange={(e) => e.target.value}
          required
        />
        <input
          type="email"
          placeholder="Email id"
          value={number}
          onChange={(e) => e.target.value}
          required
        />
        <button
          type="submit"
          className={Styles.contactListFormbtn}
          onClick={getContactValues}
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
