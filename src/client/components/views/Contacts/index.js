import React from "react";
import { connect } from "react-redux";
//import {useHistory} from 'react-router-dom';
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { getContacts, deleteContact } from "./action";
import "./style.scss";

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.deleteContact = this.deleteContact.bind(this);
  }

  async deleteContact(id) {
    console.log(`contact id=,${id}`);
    await this.props.deleteContact(id);
    this.props.getContacts();
  }

  editContact(id) {
    console.log(`zaman,${id}`);
    useHistory().push(`/contacts/edit/${id}`);
  }
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return (
      <div className="contact-wrapper nav-container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props &&
              this.props.contacts &&
              this.props.contacts.length > 0 &&
              this.props.contacts.map((contacts, index) => (
                <tr key={index}>
                  <td>{contacts.firstName || "-"}</td>
                  <td>{contacts.lastName || "-"}</td>
                  <td>{contacts.email || "-"}</td>
                  <td>{contacts.phone || "-"}</td>
                  <td>
                    <Link to={`/contacts/${contacts.id}`}>
                      <button
                        type="button"
                        className="btn btn-outline-primary mx-2"
                      >
                        Edit
                      </button>
                    </Link>
                    {/* <button
                      type="button"
                      className="btn btn-outline-primary mx-2"
                      onClick={() => this.editContact(contacts.id)}
                    >
                      Edit
                    </button> */}

                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => this.deleteContact(contacts.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contactsReducer.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  getContacts: bindActionCreators(getContacts, dispatch),
  deleteContact: bindActionCreators(deleteContact, dispatch),
});

// function loadContactData({ store }) {
//   return Promise.all([
//     store.dispatch(getContacts()) /* store.dispatch(getWhatWeDoList()) */,
//   ]);
// }
// export { loadContactData };

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
