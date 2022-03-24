import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const PostData = () => {
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [name, setName] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    let details = {
      email,
      message,
      name,
    };
    axios.post(
      " https://admin.srkprojects.com/web/api/client/v1/contact-us/",
      details
    );
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="emial">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <input
          type="text"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <button>submit</button>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Back</Link>
          </li>
        </ul>
      </div>
    </form>
  );
};

export default PostData;
