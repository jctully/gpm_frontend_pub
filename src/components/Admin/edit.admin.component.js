import React, { Component } from "react";
import axios from "axios";

export default class EditAdmin extends Component {
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

  componentDidMount() {
    axios
      .get("http://localhost:4000/admins/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          admin_name: response.data.admin_name,
          admin_username: response.data.admin_username,
          western_id: response.data.western_id
        });
      })
      .catch(function(error) {
        console.log(error);
      });
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
    const obj = {
      admin_name: this.state.admin_name,
      admin_username: this.state.admin_username,
      western_id: this.state.western_id
    };
    console.log(obj);
    axios
      .post(
        "http://localhost:4000/admins/update/" + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

    this.props.history.push("/admin/");
  }

  render() {
    return (
      <div>
        <h3 align="center">Update Admin</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Admin Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.admin_name}
              onChange={this.onChangeAdminName}
            />
          </div>

          <div className="form-group">
            <label>Admin Username: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.admin_username}
              onChange={this.onChangeAdminUsername}
            />
          </div>

          <div className="form-group">
            <label>Western Id: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.western_id}
              onChange={this.onChangeWesternId}
            />
          </div>

          <br />
          <br />

          <br />

          <div className="form-group">
            <input
              type="submit"
              value="Update Admin"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
