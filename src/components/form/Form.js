import "./form.css";
function Form() {
  return (
    <form className="form">
      <div className="flex-form-grp">
        <div className="form-group">
          <label htmlFor="fName">Firstname:</label>
          <input
            type="text"
            id="fName"
            name="firstname"
            required
            placeholder="John"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lName">Lastname:</label>
          <input
            type="text"
            name="lastname"
            id="lName"
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
        ></textarea>
      </div>
      <button type="submit" className="btn">
        Login
      </button>
    </form>
  );
}

export default Form;
