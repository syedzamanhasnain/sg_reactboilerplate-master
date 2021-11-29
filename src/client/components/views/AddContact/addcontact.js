import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addContact } from "../Contacts/action";
import "./style.scss";

const AddContact = () => {
  let history = useHistory();
  let dispatch = useDispatch();
  const [add, setAdd] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  function validate(values) {
    let errors = {};

    if (!values.firstName.trim()) {
      errors.firstName = "Required";
    }
    if (!values.lastName.trim()) {
      errors.lastName = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.phone.trim()) {
      errors.phone = "Required";
    }

    return errors;
  }

  const handleChange = (e) => {
    e.persist();
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setErrors(validate(formData));
    console.log(errors);
  };

  return (
    <div className="card mx-auto card-width border-info">
      <div className="card-header">
        <h4>Add Contact</h4>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              className="form-control"
              value={FormData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p>{errors.firstName}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword4">Last Name</label>

            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="LastName"
              className="form-control"
              value={FormData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p>{errors.lastName}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Email"
              className="form-control"
              value={FormData.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Enter Phone Number"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p>{errors.phone}</p>}
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
