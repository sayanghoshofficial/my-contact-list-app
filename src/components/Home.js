import Styles from "../Styles/Home.module.css";
import ContactList from "./ContactList";
import ContactListForm from "./ContactListForm";

const Home = () => {
  return (
    <div className={Styles.contactContainer}>
      <h1>
        <img
          src="https://cdn-icons-png.flaticon.com/512/7945/7945013.png"
          alt="contact-list-icon"
        />
        My Contact List
      </h1>
      <ContactListForm/>
      <ContactList/>
    </div>
  );
};
export default Home;
