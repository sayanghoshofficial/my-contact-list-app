import { useEffect, useState, useRef } from "react";
import Styles from "../Styles/Home.module.css";

const ContactList = (props) => {
  const [contactList, setContactList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState({
    name: "",
    phone: "",
    email: "",
    id: "",
  });
  const ref = useRef(null);

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
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    });
    const newJsonData = contactList.filter((item) => item.id !== id);
    setContactList(newJsonData);
  };

  const editContact = (contact) => {
    ref.current.click();
    setValue(contact);
  };
  const onChangeEdit = (e) => {
    e.preventDefault();
    // setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleEditOnClick = (e) => {
    console.log("Updating value...", value);
    e.preventDefault();
    // setValue(e.target.value);
  };

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <>
      {/* modal */}
      {/* <!-- Button trigger modal --> */}
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      ></button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Contact
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    value={value.name}
                    // defaultValue={''}
                    className="form-control"
                    placeholder="Edit Your Name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    // onChange={onChangeEdit}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={value.phone}
                    className="form-control"
                    placeholder="Edit Your Number"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={onChangeEdit}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    value={value.email}
                    className="form-control"
                    placeholder="Edit Your Email"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={onChangeEdit}
                  />
                </div>

                <div className="mb-3 form-check"></div>
              </div>
            </form>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleEditOnClick}
                type="button"
                className="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
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
                <button
                  className={Styles.editAndDeleteBtn}
                  onClick={() => editContact(contact)}
                >
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
    </>
  );
};
export default ContactList;
