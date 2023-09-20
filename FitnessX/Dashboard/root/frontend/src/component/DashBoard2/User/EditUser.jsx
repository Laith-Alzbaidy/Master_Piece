// import React from "react";
// import { useContext } from "react";
// import { AdminContext } from "../../../context";
// const EditUsers = () => {
//   const { GetDataFormsEditUsers, EditUser } = useContext(AdminContext);

//   const handleFormEdit = (event) => {
//     event.preventDefault();
//     console.log("---------", EditUser);
//   };
//   return (
//     <div className="main-wrapper">
//       <div className="page-wrapper">
//         <div className="content container-fluid">
//           <div className="page-header">
//             <div className="row align-items-center">
//               <div className="col-sm-12">
//                 <div className="page-sub-header">
//                   <h3 className="page-title">Edit User</h3>
//                   <ul className="breadcrumb">
//                     <li className="breadcrumb-item">
//                       <a href="students.html">User</a>
//                     </li>
//                     <li className="breadcrumb-item active">Edit User</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="row">
//             <div className="col-sm-12">
//               <div className="card comman-shadow">
//                 <div className="card-body">
//                   <form onSubmit={handleFormEdit}>
//                     <div className="row">
//                       <div className="col-12">
//                         <h5 className="form-title student-info">
//                           User Information{" "}
//                           <span>
//                             <a href="javascript:;">
//                               <i className="feather-more-vertical"></i>
//                             </a>
//                           </span>
//                         </h5>
//                       </div>
//                       <div className="col-12 col-sm-4">
//                         <div className="form-group local-forms">
//                           <label>
//                             First Name <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             onChange={(e) => GetDataFormsEditUsers(e)}
//                             name="firstname"
//                             value={EditUser.firstname}
//                             className="form-control"
//                             type="text"
//                             placeholder="Enter First Name"
//                           />
//                         </div>
//                       </div>
//                       <div className="col-12 col-sm-4">
//                         <div className="form-group local-forms">
//                           <label>
//                             Last Name <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             onChange={(e) => GetDataFormsEditUsers(e)}
//                             name="lastname"
//                             value={EditUser.lastname}
//                             className="form-control"
//                             type="text"
//                             placeholder="Enter Last Name"
//                           />
//                         </div>
//                       </div>
//                       <div className="col-12 col-sm-4">
//                         <div className="form-group local-forms">
//                           <label>
//                             Gender <span className="login-danger">*</span>
//                           </label>
//                           <select
//                             onChange={(e) => GetDataFormsEditUsers(e)}
//                             name="gender"
//                             value={EditUser.gender}
//                             className="form-control select"
//                           >
//                             <option>Select Gender</option>
//                             <option>Female</option>
//                             <option>Male</option>
//                             <option>Others</option>
//                           </select>
//                         </div>
//                       </div>
//                       <div className="col-12 col-sm-4">
//                         <div className="form-group local-forms calendar-icon">
//                           <label>
//                             Date Of Birth{" "}
//                             <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             onChange={(e) => GetDataFormsEditUsers(e)}
//                             name="birthdate"
//                             value={EditUser.birthdate}
//                             className="form-control datetimepicker"
//                             type="date"
//                             placeholder="DD-MM-YYYY"
//                           />
//                         </div>
//                       </div>
//                       <div className="col-12">
//                         <div className="form-group students-up-files">
//                           <label>Upload Student Photo (150px X 150px)</label>
//                           <div className="uplod">
//                             <label
//                               className="file-upload image-upbtn mb-0"
//                               htmlFor="studentPhoto"
//                             >
//                               Choose File{" "}
//                               <input
//                                 onChange={(e) => GetDataFormsEditUsers(e)}
//                                 name="birthdate"
//                                 value={EditUser.birthdate}
//                                 type="file"
//                                 id="studentPhoto"
//                               />
//                             </label>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="col-12 col-sm-4">
//                         <div className="form-group local-forms">
//                           <label>
//                             E-Mail <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             onChange={(e) => GetDataFormsEditUsers(e)}
//                             name="email"
//                             value={EditUser.email}
//                             className="form-control"
//                             type="email"
//                             placeholder="Enter Email Editress"
//                           />
//                         </div>
//                       </div>
//                       <div className="col-12 col-sm-4">
//                         <div className="form-group local-forms">
//                           <label>
//                             weight <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="text"
//                             placeholder="Enter Email Editress"
//                           />
//                         </div>
//                       </div>
//                       <div className="col-12 col-sm-4">
//                         <div className="form-group local-forms">
//                           <label>
//                             height <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="text"
//                             placeholder="Enter Email Editress"
//                           />
//                         </div>
//                       </div>

//                       <div className="col-12">
//                         <div className="student-submit">
//                           <button type="submit" className="btn btn-primary">
//                             Submit
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditUsers;
