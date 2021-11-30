import React, { useState, useEffect } from "react";
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
  const [errors, setErrors] = useState({
    firstNameErr: "",
    lastNameErr: "",
    emailErr: "",
    phoneErr: "",
  });
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (isValid === true) {
      console.log(isValid);
      dispatch(addContact(formData));
      setAdd(true);

      setTimeout(function () {
        history.push("/");
      }, 1000);
    }
  }, [isValid]);

  function validate(values) {
    let errors = {
      firstNameErr: "",
      lastNameErr: "",
      emailErr: "",
      phoneErr: "",
    };

    if (!values.firstName.trim()) {
      errors.firstNameErr = "Required";
    }
    if (!values.lastName.trim()) {
      errors.lastNameErr = "Required";
    }
    if (!values.email) {
      errors.emailErr = "Required";
      setIsValid(false);
    } else if (!values.email.match(/\S+@\S+\.\S+/)) {
      errors.emailErr = "Email address is invalid";
    }
    if (!values.phone.trim()) {
      errors.phoneErr = "Required";
      setIsValid(false);
    } else if (!values.phone.match(/^[0-9]\d{9}$/)) {
      errors.phoneErr = "phone no is invalid";
    }
    if (
      errors.firstNameErr === "" &&
      errors.lastNameErr === "" &&
      errors.emailErr === "" &&
      errors.phoneErr === ""
    ) {
      setIsValid(true);
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
              className={
                errors.firstNameErr ? "form-control error" : "form-control"
              }
              value={FormData.firstName}
              onChange={handleChange}
            />
            {errors.firstNameErr ? (
              <div className="text-danger">{errors.firstNameErr}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword4">Last Name</label>

            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="LastName"
              className={
                errors.lastNameErr ? "form-control error" : "form-control"
              }
              value={FormData.lastName}
              onChange={handleChange}
            />
            {errors.lastNameErr ? (
              <div className="text-danger">{errors.lastNameErr}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Enter Email"
              className={
                errors.emailErr ? "form-control error" : "form-control"
              }
              value={FormData.email}
              onChange={handleChange}
            />
            {errors.emailErr ? (
              <div className="text-danger">{errors.emailErr}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter Phone Number"
              className={
                errors.phoneErr ? "form-control error" : "form-control"
              }
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phoneErr ? (
              <div className="text-danger">{errors.phoneErr}</div>
            ) : null}
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
