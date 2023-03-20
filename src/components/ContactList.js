import Styles from "../Styles/Home.module.css";
import { data as contactList } from "../data";
// import { fetchContactData} from "../actions";

const ContactList = () => {
  const jsonData = fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error(error));

  const List = jsonData;
  console.log("Contact List", List);

  return (
    <div className={Styles.contactCointainer}>
      <ul>
        <li className={Styles.contactListHeading}>
          <div className={Styles.contactNameHeading}>
            <h6>
              <img
                alt="icon"
                src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                className={Styles.contactIcons}
              />
              Name
            </h6>
          </div>
          <div className={Styles.contactPhoneNoHeading}>
            <h6>
              <img
                alt="icon"
                src="https://cdn-icons-png.flaticon.com/512/4213/4213179.png"
                className={Styles.contactIcons}
              />
              Phone No.
            </h6>
          </div>
          <div className={Styles.contactEmailHeading}>
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
