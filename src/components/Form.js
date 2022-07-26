import React, { useState } from "react";

export default function Form() {

  const styles = {
    formContainer: {
      width: "40%",
      height: "40%",
      fontSize: "30px"
    },
    formStyle: {
      display: "flex",
      flexDirection: "column"
    }
  }
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`Sumbitted! Thank you!`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={styles.formContainer}>
      <p>You can contact me by filling out the form below:</p>
      <form className="form" style={styles.formStyle}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
