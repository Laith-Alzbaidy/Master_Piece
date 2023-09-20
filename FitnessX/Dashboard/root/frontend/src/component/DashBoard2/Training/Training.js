import React from "react";
import { useContext } from "react";
import { AdminContext } from "../../../context";
const Training = () => {
  const { training, deleteTraining } = useContext(AdminContext);

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Training</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a>Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Training</li>
                </ul>
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
              <div className="card card-table">
                <div className="card-body">
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
                          <th>Image</th>
                          <th>Name</th>
                          <th>Time</th>
                          <th>Number exe</th>
                          <th className="text-end">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {training.map((training, index) => {
                          return (
                            <tr key={training._id}>
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
                                      src={training.image}
                                      alt="User Image"
                                    />
                                  </a>
                                </h2>
                              </td>
                              <td>{training.name}</td>
                              <td>{training.time}</td>
                              <td>{training.numexercise}</td>

                              <td className="text-end">
                                <div className="actions">
                                  <i
                                    onClick={() => deleteTraining(training._id)}
                                    className="fa-solid fa-trash-can"
                                  ></i>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                        {/* Add more rows here */}
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

export default Training;
