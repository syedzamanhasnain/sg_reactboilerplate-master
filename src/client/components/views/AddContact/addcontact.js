import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addContact } from "../Contacts/action";
import "./style.scss";

const AddContact = () => {
  let history = useHistory();
  let dispatch = useDispatch();
  let [add, setAdd] = useState(false);

  return (
    <div className="card mx-auto card-width border-info">
      <div className="card-header">
        <h4>Add Contact</h4>
      </div>
        <div className="card-body">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text" 
              placeholder="First Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword4">Last Name</label>

            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="LastName"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Enter Phone Number"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            {add ? "Adding..." : "Add Contact"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddContact;
