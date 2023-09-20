import React from "react";
import BarChart from "../Chartjs/BarChart";
import { AdminContext } from "../../../context";
import { useContext } from "react";
import PipeChart from "../Chartjs/PipeChart";
import facebook from "../Image/Icon-social/social-icon-01.svg";
import twitter from "../Image/Icon-social/social-icon-02.svg";
import instagram from "../Image/Icon-social/social-icon-03.svg";
import linkedin from "../Image/Icon-social/social-icon-04.svg";
import imgTraining from "../Image/ImgeDashboardHome/training.jpg";
import imgExercises from "../Image/ImgeDashboardHome/exercises.png";
import imgUsers from "../Image/ImgeDashboardHome/users.jfif";
const DashBoardIn = () => {
  const { exercises, training, users } = useContext(AdminContext);
  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-sub-header">
                  <h3 className="page-title">Welcome Admin!</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a>Home</a>
                    </li>
                    <li className="breadcrumb-item active">Admin</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-4 col-sm-6 col-12 d-flex">
              <div className="card bg-comman w-100">
                <div className="card-body">
                  <div className="db-widgets d-flex justify-content-between align-items-center">
                    <div className="db-info">
                      <h6>Users</h6>
                      <h3>{`${users.length - 1}+`}</h3>
                    </div>
                    <div className="db-icon">
                      <img src={imgUsers} alt="Dashboard Icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6 col-12 d-flex">
              <div className="card bg-comman w-100">
                <div className="card-body">
                  <div className="db-widgets d-flex justify-content-between align-items-center">
                    <div className="db-info">
                      <h6>Training</h6>
                      <h3>{training.length}</h3>
                    </div>
                    <div className="db-icon">
                      <img src={imgTraining} alt="Dashboard Icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6 col-12 d-flex">
              <div className="card bg-comman w-100">
                <div className="card-body">
                  <div className="db-widgets d-flex justify-content-between align-items-center">
                    <div className="db-info">
                      <h6>Exercises</h6>
                      <h3>{exercises.length}</h3>
                    </div>
                    <div className="db-icon">
                      <img src={imgExercises} alt="Dashboard Icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <h5 className="card-title">Overview</h5>
                    </div>
                    <div className="col-6">
                      <ul className="chart-list-out">
                        <li>
                          <span className="circle-blue"></span>Users
                        </li>
                        <li>
                          <span className="circle-green"></span>Training
                        </li>
                        <li>
                          <span className="circle-red"></span> Exercises
                        </li>
                        <li className="star-menus">
                          <a href="javascript:;">
                            <i className="fas fa-ellipsis-v"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <BarChart />
              </div>
            </div>

            <div className="col-md-12 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <h5 className="card-title">Number of Students</h5>
                    </div>
                    <div className="col-6">
                      <ul className="chart-list-out">
                        <li>
                          <span className="circle-femail"></span>Femail
                        </li>
                        <li>
                          <span className="circle-mail"></span>Mail
                        </li>
                        <li className="star-menus">
                          <a href="javascript:;">
                            <i className="fas fa-ellipsis-v"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <PipeChart />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card flex-fill fb sm-box">
                <div className="social-likes">
                  <p>Like us on facebook</p>
                  <h6>50,095</h6>
                </div>
                <div className="social-boxs">
                  <img src={facebook} alt="Social Icon" />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card flex-fill twitter sm-box">
                <div className="social-likes">
                  <p>Follow us on twitter</p>
                  <h6>48,596</h6>
                </div>
                <div className="social-boxs">
                  <img src={twitter} alt="Social Icon" />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card flex-fill insta sm-box">
                <div className="social-likes">
                  <p>Follow us on instagram</p>
                  <h6>52,085</h6>
                </div>
                <div className="social-boxs">
                  <img src={instagram} alt="Social Icon" />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card flex-fill linkedin sm-box">
                <div className="social-likes">
                  <p>Follow us on linkedin</p>
                  <h6>69,050</h6>
                </div>
                <div className="social-boxs">
                  <img src={linkedin} alt="Social Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashBoardIn;
