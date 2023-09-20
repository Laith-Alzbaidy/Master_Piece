import Users from "./User/User.jsx";
import Exercise from "./Exercise/Exercise.jsx";
import AddExercise from "./Exercise/AddExercise.jsx";
import EditExercise from "./Exercise/EditExercise.jsx";
import AddTraining from "./Training/AddTraninig.js";
import Training from "./Training/Training.js";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Header from "./Header/Header.jsx";
import DashBoardIn from "./Home/DashBoard.jsx";
import Login from "../Login/Login.js";
import { Route, Routes } from "react-router-dom";
// import Cookies from "js-cookie";
import { AdminContext } from "../../context.js";
import { useContext } from "react";
const DashBoard = () => {
  const { isAuthenticated } = useContext(AdminContext);

  return (
    <>
      {isAuthenticated ? (
        <>
          <Routes>
            <Route path="/Users" element={<Users />} />
            <Route path="/Exercise" element={<Exercise />} />
            <Route path="/AddExercise" element={<AddExercise />} />
            <Route path="/EditExercise/:id" element={<EditExercise />} />
            <Route path="/Home" element={<DashBoardIn />} />
            <Route path="/AddTraining" element={<AddTraining />} />
            <Route path="/Training" element={<Training />} />
          </Routes>
          <Header />
          <Sidebar />
        </>
      ) : (
        <>
          <Routes>
            <Route path="/AdminDashboard" element={<Login />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default DashBoard;
