
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getContacts } from "./action";
import "./style.scss";

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    /* 
            //Only use if you want to render the component with SSR
            loadHomeData();
        */
  }

  componentDidMount() {
    this.props.getContacts();
    //console.log(this.props.contacts[0]);
  }

  render() {
    return (
      <div className="contact-wrapper nav-container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>First</th>
              <th>Last</th>
              <th>Phone No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.contacts.map((el, index) => (
              <tr key={index}>
                <th>{el.id || 0}</th>
                <td>{el.firstName || "-"}</td>
                <td>{el.lastName || "-"}</td>
                <td>{el.phone || "-"}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary mx-2"
                  >
                    Edit
                  </button>
                  <button type="button" className="btn btn-outline-danger">
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
});

function loadContactData({ store }) {
  return Promise.all([
    store.dispatch(getContacts()) /* store.dispatch(getWhatWeDoList()) */,
  ]);
}
export { loadContactData };

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
