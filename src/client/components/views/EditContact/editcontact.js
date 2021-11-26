import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory, useParams } from "react-router-dom";
import { getContact, editContact } from "../Contacts/action";
import "./style.scss";

const EditContact = (props) => {
  let history = useHistory();
  let { id } = useParams();
  let dispatch = useDispatch();
  let [contact, setContact] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  let [edit, setEdit] = useState(false);

  useEffect(() => {
    console.log(id);
    dispatch(getContact(id));
  }, []);
  useEffect(() => {
    // console.log(props.contact);
    if (props.contact.length != 0) {
      setContact(props.contact);  
    }
  }, [props.contact]);

  const formik = useFormik({
    initialValues: {
      id: Number(contact.id),
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
      phone: contact.phone,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string()
        .matches(/^[0-9]\d{9}$/, "Phone number is not valid")
        .required("Required"),
    }),

    onSubmit: (values) => {
      console.log(values);
      const userData = values;
      dispatch(editContact(userData));
      setEdit(true);
      // setTimeout(function () {
      //   history.push("/");
      // }, 1000);
    },
  });

  return (
    <div className="card mx-auto card-width border-info">
      <div className="card-header">
        <h4>Edit Contact</h4>
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
              className={
                formik.touched.firstName && formik.errors.firstName
                  ? "form-control error"
                  : "form-control"
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-danger">{formik.errors.firstName}</div>
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
                formik.touched.lastName && formik.errors.lastName
                  ? "form-control error"
                  : "form-control"
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-danger">{formik.errors.lastName}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Email"
              className={
                formik.touched.email && formik.errors.email
                  ? "form-control error"
                  : "form-control"
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
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
                formik.touched.phone && formik.errors.phone
                  ? "form-control error"
                  : "form-control"
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-danger">{formik.errors.phone}</div>
            ) : null}
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            {edit ? "Editing..." : "Edit Contact"}
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return { contact: state.contactsReducer.contact };
};
const mapDispatchToProps = (dispatch) => ({
  getContact: bindActionCreators(getContact, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
