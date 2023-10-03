import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AdminContext } from "../../../context";
import axios from "axios";
import Swal from "sweetalert2";
const Users = () => {
  const { users, deleteUsers } = useContext(AdminContext);
  // console.log("users", users);

  const [statusAccount, setStatusAccount] = useState("");

  const statusAccountOnChange = (status, userId) => {
    setStatusAccount(status);
    console.log(status, userId);
    updateStatusAcount(userId, status);
  };

  const updateStatusAcount = (userId, status) => {
    try {
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const response = await axios.patch(`api/v1/users/${userId}`, {
              statusAccount: status,
            });

            Swal.fire("Saved!", "", "success");
          } catch (error) {
            console.error(error);
          }
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-sub-header">
                  <h3 className="page-title">Users</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a>Users</a>
                    </li>
                    <li className="breadcrumb-item active">All Users</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="student-group-form">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by ID ..."
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by Name ..."
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by Phone ..."
                  />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="search-student-btn">
                  <button type="btn" className="btn btn-primary">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="card card-table comman-shadow">
                <div className="card-body">
                  <div className="page-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h3 className="page-title">Users</h3>
                      </div>
                      <div className="col-auto text-end float-end ms-auto download-grp">
                        <a className="btn btn-outline-gray me-2 active">
                          <i className="feather-list"></i>
                        </a>
                        <a className="btn btn-outline-gray me-2">
                          <i className="feather-grid"></i>
                        </a>
                        <a className="btn btn-outline-primary me-2">
                          <i className="fas fa-download"></i> Download
                        </a>
                        <a className="btn btn-primary">
                          <i className="fas fa-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <table className="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
                      <thead className="student-thread">
                        <tr>
                          <th>
                            <div className="form-check check-tables">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="something"
                              />
                            </div>
                          </th>
                          <th>ID</th>
                          <th>Name</th>
                          <th>DOB</th>
                          <th>Email</th>
                          <th>Active/No Active</th>
                          <th className="text-end">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user, index) => {
                          console.log(user);
                          return (
                            <tr key={user._id}>
                              <td>
                                <div className="form-check check-tables">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="something"
                                  />
                                </div>
                              </td>
                              <td>{++index}</td>
                              <td>
                                <h2 className="table-avatar">
                                  <a className="avatar avatar-sm me-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={user.image}
                                      alt="User Image"
                                    />
                                  </a>
                                  <a>{user.firstname + " " + user.lastname}</a>
                                </h2>
                              </td>
                              {user.birthdate ? (
                                <td>{user.birthdate}</td>
                              ) : (
                                <td>----</td>
                              )}
                              <td>{user.email}</td>
                              <td>
                                <div className="container">
                                  <label htmlFor="tutorialSelect">
                                    Tutorials:
                                  </label>
                                  <select
                                    defaultValue={user.statusAccount}
                                    id="tutorialSelect"
                                    className="form-control"
                                    onChange={(e) =>
                                      statusAccountOnChange(
                                        e.target.value,
                                        user._id
                                      )
                                    }
                                  >
                                    <option value="active">
                                      <i className="fas fa-circle fa-xs"></i>{" "}
                                      Active
                                    </option>
                                    <option value="disabled">
                                      <i className="fas fa-circle fa-xs"></i>{" "}
                                      Disabled
                                    </option>
                                  </select>
                                </div>
                              </td>
                              <td className="text-end">
                                <div className="actions">
                                  <a className="btn btn-sm bg-success-light me-2">
                                    <i
                                      onClick={() => deleteUsers(user._id)}
                                      className="fa-solid fa-trash-can"
                                    ></i>
                                  </a>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
