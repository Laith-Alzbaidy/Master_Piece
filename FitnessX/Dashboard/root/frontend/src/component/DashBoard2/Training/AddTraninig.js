import React from "react";
import { useContext } from "react";
import { AdminContext } from "../../../context";
const AddTraining = () => {
  const { GetDataFormsTraining, DataFormsTraining, createTraning } =
    useContext(AdminContext);

  console.log("DataFormsTraining.numexercise", DataFormsTraining.numexercise);
  const handleFormsTraining = (event) => {
    event.preventDefault();
    console.log(DataFormsTraining);
    createTraning();
  };
  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Add Training</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a>Training</a>
                  </li>
                  <li className="breadcrumb-item active">Add Training</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleFormsTraining}>
                    <div className="row">
                      <div className="col-12">
                        <h5 className="form-title">
                          <span>Basic Details</span>
                        </h5>
                      </div>
                      {/* <div className="col-12 col-sm-4">
                        <div className="form-group local-forms">
                          <label>
                            Training ID <span className="login-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Teacher ID"
                          />
                        </div>
                      </div> */}
                      <div className="col-12 col-sm-4">
                        <div className="form-group local-forms">
                          <label>
                            Name <span className="login-danger">*</span>
                          </label>
                          <input
                            onChange={(e) => GetDataFormsTraining(e)}
                            name="name"
                            value={DataFormsTraining.name}
                            type="text"
                            className="form-control"
                            placeholder="Enter Name"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-4">
                        <div className="form-group local-forms">
                          <label>
                            Time <span className="login-danger">*</span>
                          </label>
                          <input
                            onChange={(e) => GetDataFormsTraining(e)}
                            name="time"
                            value={DataFormsTraining.time}
                            type="text"
                            className="form-control"
                            placeholder="Enter Time"
                          />
                        </div>
                      </div>

                      {/* <div className="col-12 col-sm-4">
                        <div className="form-group local-forms">
                          <label>
                            Number exercise{" "}
                            <span className="login-danger">*</span>
                          </label>
                          <input
                            onChange={(e) => GetDataFormsTraining(e)}
                            name="numexercise"
                            value={DataFormsTraining.numexercise}
                            type="number"
                            className="form-control"
                            placeholder="Enter Number"
                          />
                        </div>
                      </div> */}
                      <div className="col-12">
                        <div className="form-group">
                          <label>Upload Student Photo (150px X 150px)</label>
                          <div className="uplod">
                            <label className="file-upload image-upbtn mb-0">
                              Choose File{" "}
                              <input
                                onChange={(e) => GetDataFormsTraining(e)}
                                name="image"
                                type="file"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="student-submit">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTraining;
