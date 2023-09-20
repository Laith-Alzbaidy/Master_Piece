// import "./App.css";
import "./css/bootstrap-datetimepicker.min.css";
import "./css/style.css";
import Login from "./component/Login/Login";
// import SugnUp from "./Component/SignUp/SignUp";
import AdminDashboard from "./component/DashBoard2/AdminDashBoard";
import AdminProvidor from "./context";

function App() {
  return (
    <>
      <AdminProvidor>
        <AdminDashboard />

        {/* <Login /> */}
      </AdminProvidor>
      {/* <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SugnUp />} /> */}
    </>
  );
}

export default App;
