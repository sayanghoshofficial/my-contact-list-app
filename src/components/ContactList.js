import { useEffect, useState } from "react";
import Styles from "../Styles/Home.module.css";
// import { data as contactList } from "../data";
// import { fetchContactData} from "../actions";

const ContactList = () => {
  const [contactList, setContactList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchingContact();
  }, []);

  const fetchingContact = async () => {
    setLoading(true);
    const jsonData = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(error));
    setContactList(jsonData);
    setLoading(false);
  };

  if(loading){
    return (
      <div className="loader"></div>
    )
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
          <div className={Styles.contacHeadingElement}>
            <h6>
              <img
                alt="icon"
                src="https://cdn-icons-png.flaticon.com/512/3059/3059989.png"
                className={Styles.contactIcons}
              />
              Email
            </h6>
          </div>
        </li>
        {contactList.map((contact) => (
          <li className={Styles.contactList} key={`contact-${contact.id}`}>
            <div className={Styles.contactElement}>{contact.name}</div>
            <div className={Styles.contactElement}>{contact.phone}</div>
            <div className={Styles.contactElement}>{contact.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
