import React from "react";
import { useContext } from "react";
import { AdminContext } from "../../../context";
import { useParams } from "react-router-dom";
const EditExercise = () => {
  const {
    GetDataFormsExercise,
    DataFormsExercise,
    editExercise,
    SetDataFormsExercise,
  } = useContext(AdminContext);
  const params = useParams();
  const idExercise = params.id;

  const handleFormsExercise = (event) => {
    event.preventDefault();
    // console.log(DataFormsExercise);
    // console.log(idExercise);
    editExercise(idExercise);
    SetDataFormsExercise({
      name: "",
      image: "",
      repeat: "",
      description: "",
    });
  };
  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Add Exercises</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a>Exercises</a>
                  </li>
                  <li className="breadcrumb-item active">Add Exercises</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleFormsExercise}>
                    <div className="row">
                      <div className="col-12">
                        <h5 className="form-title">
                          <span>Basic Details</span>
                        </h5>
                      </div>

                      <div className="col-12 col-sm-4">
                        <div className="form-group local-forms">
                          <label>
                            Name <span className="login-danger">*</span>
                          </label>
                          <input
                            onChange={(e) => GetDataFormsExercise(e)}
                            name="name"
                            value={DataFormsExercise.name}
                            type="text"
                            className="form-control"
                            placeholder="Enter Name"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-4">
                        <div className="form-group local-forms">
                          <label>
                            repeat <span className="login-danger">*</span>
                          </label>
                          <input
                            onChange={(e) => GetDataFormsExercise(e)}
                            name="repeat"
                            value={DataFormsExercise.repeat}
                            type="text"
                            className="form-control"
                            placeholder="Enter Time"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-sm-4">
                        <div className="form-group local-forms">
                          <label>
                            Description
                            <span className="login-danger">*</span>
                          </label>
                          <input
                            onChange={(e) => GetDataFormsExercise(e)}
                            name="description"
                            value={DataFormsExercise.description}
                            type="string"
                            className="form-control"
                            placeholder="Enter description"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-4">
                        <div className="col-12">
                          <div className="form-group">
                            <label>Upload photo</label>
                            <div className="uplod">
                              <label className="file-upload image-upbtn mb-0">
                                Choose File{" "}
                                <input
                                  onChange={(e) => GetDataFormsExercise(e)}
                                  name="image"
                                  type="file"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-4">
                        <div className="col-12">
                          <div className="form-group">
                            <label>Upload video</label>
                            <div className="uplod">
                              <label className="file-upload image-upbtn mb-0">
                                Choose File{" "}
                                <input
                                  onChange={(e) => GetDataFormsExercise(e)}
                                  name="video"
                                  type="file"
                                />
                              </label>
                            </div>
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

export default EditExercise;
