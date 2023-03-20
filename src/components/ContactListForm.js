import Styles from "../Styles/Home.module.css";

const ContactListForm = () => {
  return (
    <div className={Styles.contactListForm}>
      <form>
        <input type="text" placeholder="Full Name" required/>
        <input type="number" placeholder="Phone No." required/>
        <input type="email" placeholder="Email id" required/>
        <button type="submit" className={Styles.contactListFormbtn}>
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
