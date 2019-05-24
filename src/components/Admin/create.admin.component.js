import React, { Component } from "react";
import axios from "axios";

export default class CreateAdmin extends Component {
  constructor(props) {
    super(props);

    this.onChangeAdminName = this.onChangeAdminName.bind(this);
    this.onChangeAdminUsername = this.onChangeAdminUsername.bind(this);
    this.onChangeWesternId = this.onChangeWesternId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      admin_name: "",
      admin_username: "",
      western_id: ""
    };
  }

  onChangeAdminName(e) {
    this.setState({
      admin_name: e.target.value
    });
  }

  onChangeAdminUsername(e) {
    this.setState({
      admin_username: e.target.value
    });
  }

  onChangeWesternId(e) {
    this.setState({
      western_id: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Admin Name: ${this.state.admin_name}`);
    console.log(`Admin Username: ${this.state.admin_username}`);
    console.log(`Western Id: ${this.state.western_id}`);

    const newAdmin = {
      admin_name: this.state.admin_name,
      admin_username: this.state.admin_username,
      western_id: this.state.western_id
    };

    axios
      .post("http://localhost:4000/admins/add", newAdmin)
      .then(res => console.log(res.data));

    this.setState({
      admin_name: "",
      admin_username: "",
      western_id: ""
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Admin</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.admin_name}
              onChange={this.onChangeAdminName}
            />
          </div>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.admin_username}
              onChange={this.onChangeAdminUsername}
            />
          </div>
          <div className="form-group">
            <label>W#: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.western_id}
              onChange={this.onChangeWesternId}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Admin"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
