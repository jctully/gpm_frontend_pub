import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Admin = props => (
  <tr>
    <td>{props.admin.admin_username}</td>
    <td>{props.admin.western_id}</td>
    <td>{props.admin.admission_qtr}</td>
    <td>
      <Link to={"/admin/admins/edit/" + props.admin._id}>Edit</Link>
    </td>
  </tr>
);

export default class AdminList extends Component {
  constructor(props) {
    super(props);
    this.state = { admins: [] };
  }

  handleClick(qtr) {
    axios
      .get("http://localhost:4000/admins?qtr=" + qtr, {})
      .then(response => {
        this.setState({ admins: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
    this.forceUpdate();
  }

  handleSearch(qry) {
    console.log("AAAAAAAAAAAAAA" + qry);
    axios
      .get("http://localhost:4000/admins?search=" + qry, {})
      .then(response => {
        this.setState({ admins: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
    this.forceUpdate();
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/admins", {})
      .then(response => {
        this.setState({ admins: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  adminList() {
    return this.state.admins.map(function(currentAdmin, i) {
      return <Admin admin={currentAdmin} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Admin List</h3>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <input
          id="filter-search"
          className="inline"
          type="text"
          ref="username"
          placeholder="Name, ID, or W#"
        />
        <button
          id="submit-filter"
          type="submit"
          className="submit"
          onClick={() => {
            this.handleSearch(document.getElementById("filter-search").value);
          }}
        >
          <i className="fa fa-search" />
        </button>

        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Admin Name</th>
              <th>Username</th>
              <th>Western #</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>{this.adminList()}</tbody>
        </table>
      </div>
    );
  }
}
