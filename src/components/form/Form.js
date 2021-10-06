import axios from "axios";
import {useState} from "react";
import displayMsg from "../Message";
import "./form.css";
function Form() {
  const [formData, setformData] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const onInputChange = e => {
    const {name, value} = e.target;
    setformData({...formData, [name]: value});
  };
  const submitForm = async e => {
    e.preventDefault();
    setisLoading(true);
    try {
      const response = await axios.post(
        "https://formcarry.com/s/eCzrxfEm8DW",
        formData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      console.log(response, formData);
      displayMsg(
        response.data.status,
        response.data?.title + " " + response.data.message
      );
    } catch (err) {
      console.log(err);
      displayMsg("error", "Something went wrong, please try again :)");
    } finally {
      setisLoading(false);
      setformData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
  };
  return (
    <form
      method="post"
      name="contact_tomiwa"
      className="form"
      onSubmit={submitForm}
    >
      {/* <input type="hidden" name="form-name" value="contact_tomiwa" /> */}
      <div className="flex-form-grp">
        <div className="form-group">
          <label htmlFor="fName">Firstname:</label>
          <input
            type="text"
            id="fName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={onInputChange}
            placeholder="John"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lName">Lastname:</label>
          <input
            type="text"
            name="lastName"
            id="lName"
            value={formData.lastName}
            onChange={onInputChange}
            required
            placeholder="Doe"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={onInputChange}
          required
          placeholder="johndoe@gmail.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="msg">Message:</label>

        <textarea
          name="message"
          placeholder="Leave A Message..."
          id="msg"
          required
          minLength="10"
          onChange={onInputChange}
          value={formData.message}
        ></textarea>
      </div>
      <button type="submit" className="btn">
        {isLoading ? <i className="fas fa-spinner fa-spin"></i> : "Submit"}
      </button>
    </form>
  );
}

export default Form;
