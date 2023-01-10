import { useState } from "react";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    const contactUsInfo = {
      name,
      email,
      phone,
      submittedOn: new Date()
    };

    console.log(contactUsInfo);

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input id='name' onChange={e => setName(e.target.value)} type='text' value={name} />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input id='email' onChange={e => setEmail(e.target.value)} type='text' value={email} />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input id='phone' onChange={e => setPhone(e.target.value)} type='text' value={phone} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;