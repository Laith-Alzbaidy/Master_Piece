import React from "react";
import { AdminContext } from "../../../context";
import { useContext } from "react";
import { Link } from "react-router-dom";
const TeachersPage = () => {
  const { exercises, deleteExercise, editExercise } = useContext(AdminContext);

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Exercises</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a>Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Exercises</li>
                </ul>
              </div>
              <div className="col-auto text-end float-end ms-auto download-grp">
                <a className="btn btn-outline-gray me-2 active">
                  <i className="feather-list"></i>
                </a>
                <a
                  href="teachers-grid.html"
                  className="btn btn-outline-gray me-2"
                >
                  <i className="feather-grid"></i>
                </a>
                <a href="#" className="btn btn-outline-primary me-2">
                  <i className="fas fa-download"></i> Download
                </a>
                <a href="add-teacher.html" className="btn btn-primary">
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
                          <th>repeat</th>

                          <th>description</th>
                          <th className="text-end">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {exercises.map((exercise, index) => {
                          return (
                            <tr>
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
                                  <a
                                    href="teacher-details.html"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={exercise.image}
                                      alt="User Image"
                                    />
                                  </a>
                                </h2>
                              </td>
                              <td>{exercise.name}</td>
                              <td>{exercise.repeat}</td>
                              <td>
                                <div className="scroll-auto">
                                  {exercise.description}
                                </div>
                              </td>
                              <td className="text-end">
                                <div className="actions">
                                  <Link
                                    to={`/editExercise/${exercise._id}`}
                                    href="javascript:;"
                                    className="btn btn-sm bg-success-light me-2"
                                  >
                                    <i className="fa-solid fa-pen-to-square"></i>
                                  </Link>
                                  <a className="btn btn-sm bg-success-light me-2">
                                    <i
                                      onClick={() =>
                                        deleteExercise(exercise._id)
                                      }
                                      className="fa-solid fa-trash-can"
                                    ></i>
                                  </a>
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

export default TeachersPage;
