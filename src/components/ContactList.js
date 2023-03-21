import { useEffect, useState } from "react";
import Styles from "../Styles/Home.module.css";

const ContactList = (props) => {
  const [contactList, setContactList] = useState([]);
  const [editContact, setEditContact] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.data.length !== 0) {
      setContactList([...props.data, ...contactList]);
    } else {
      fetchingContact();
    }
  }, [props.data]);

  const fetchingContact = async () => {
    setLoading(true);
    const jsonData = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(error));
    setContactList(jsonData);
    setLoading(false);
  };
  const deleteContactFromTheList = (id) => {
    // console.log("delete btn clicked",typeof id);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    });
    const newJsonData = contactList.filter((item) => item.id !== id);
    // console.log(newJsonData);
    setContactList(newJsonData);
    console.log(id);
  };

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <div className={Styles.contactCointainer}>
      <ul>
        <li className={Styles.contactListHeading}>
          <div className={Styles.contacHeadingElement}>
            <h6>
              <img
                alt="icon"
                src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                className={Styles.contactIcons}
              />
              Name
            </h6>
          </div>
          <div className={Styles.contacHeadingElement}>
            <h6>
              <img
                alt="icon"
                src="https://cdn-icons-png.flaticon.com/512/4213/4213179.png"
                className={Styles.contactIcons}
              />
              Phone No.
            </h6>
          </div>
          <div className={`${Styles.contacHeadingElement} ${Styles.hidden}`}>
            <h6>
              <img
                alt="icon"
                src="https://cdn-icons-png.flaticon.com/512/3059/3059989.png"
                className={Styles.contactIcons}
              />
              Email
            </h6>
          </div>
          <div className={Styles.BtnDiv}></div>
        </li>
        {contactList.map((contact, index) => (
          <li
            className={Styles.contactList}
            key={`contact-${index}-${Date.now()}`}
          >
            <div className={Styles.contactElement}>{contact.name}</div>
            <div className={Styles.contactElement}>{contact.phone}</div>
            <div className={`${Styles.contactElement} ${Styles.hidden}`}>
              {contact.email}
            </div>
            <div className={Styles.BtnDiv}>
              <button className={Styles.editAndDeleteBtn}>
                <img
                  alt="edit-btn"
                  src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                  className={Styles.contactIcons}
                />
              </button>
              <button
                className={Styles.editAndDeleteBtn}
                onClick={() => deleteContactFromTheList(contact.id)}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3178/3178384.png"
                  alt="delet-btn"
                  className={Styles.contactIcons}
                />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
