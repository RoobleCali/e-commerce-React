import React from "react";
import contact from "../assets/contact.jpg";
import "../styles/contact.css";
function Contact() {
  return (
    <div>
      <div className="contact">
        <div
          className="left"
          style={{ backgroundImage: `url(${contact})` }}
        ></div>
        <div className="rightSide">
          <h1>COTACT US</h1>
          <form>
            <label htmlFor="name">name</label>
            <input type="text" placeholder="enter your name" />
            <label htmlFor="name">Email</label>
            <input type="email" placeholder="Enter your email" />
            <label htmlFor="name">Message</label>
            <textarea rows="8" placeholder="message"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
