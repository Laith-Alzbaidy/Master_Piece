import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
// Create a context to hold admin-related data and functions
export const AdminContext = createContext();
function AdminProvidor({ children }) {
  const navigate = useNavigate();
  // State to hold fetched admin data

  const jwtCookie = Cookies.get("jwt");
  const isAuthenticated = jwtCookie !== undefined;

  // useEffect(() => {}, [isAuthenticated]);
  const [admins, setAdmins] = useState([]);
  const [users, setUsers] = useState([]);
  const [training, setTraining] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [profileadmin, setProfileAdmin] = useState({});
  const [contactus, setContactUs] = useState([]);

  const GetAllContact = async () => {
    try {
      const response = await axios.get("api/v1/contact");

      setContactUs(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const DeleteContact = async () => {
    try {
      const response = await axios.delete("api/v1/contact");
      GetAllContact();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetAllContact();
  }, []);

  // State to manage form data
  // -----------admins--------------------------------------------------------------------------------------------------------------
  const [DataFormsAdmins, SetDataFormsAdmins] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // Function to update form data
  const GetDataFormsAdmins = (event) => {
    const { name, value } = event.target;
    SetDataFormsAdmins((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  // Fetch all admin data on initial render
  useEffect(() => {
    GetAllAdmin();
    getAllUsers();
    getAllTraining();
    getAllExercises();
    if (isAuthenticated) {
      profileAdmin();
    }
  }, []);

  // Function to fetch all admin data
  const GetAllAdmin = async () => {
    try {
      const response = await axios.get("/api/v1/Admin/");
      setAdmins(response.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  // Function to log in an admin
  const loginAdmin = async () => {
    try {
      const response = await axios.post("/api/v1/Admin/login", {
        email: DataFormsAdmins.email,
        password: DataFormsAdmins.password,
      });

      const token = response.data.token;
      profileAdmin();
      // Set the JWT token
      // Cookies.set("jwt", token);
      navigate("/Home");

      // Navigate to the home page after setting the token and updating the state
    } catch (err) {
      console.log(err);
    }
  };

  // Function to log in an admin
  const profileAdmin = async () => {
    try {
      const data = await axios.get("/api/v1/Admin/profile");
      setProfileAdmin(data.data.admin);
      // navigate("/Home");
      // Navigate to the home page after setting the token and updating the state
    } catch (err) {
      console.log(err.message);
    }
  };
  // Function to create a new admin
  const createAdmin = async () => {
    try {
      const response = await axios.post(
        "/api/v1/Admin/signup",
        DataFormsAdmins
      );
      // console.log("response", response);
    } catch (err) {
      console.log(err.message);
    }
  };
  // -----------admins--------------------------------------------------------------------------------------------------------------

  // -----------Users--------------------------------------------------------------------------------------------------------------

  const getAllUsers = async () => {
    try {
      const response = await axios.get("/api/v1/users");
      setUsers(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUsers = async (idUser) => {
    try {
      const response = await axios.delete(`api/v1/users/${idUser}`);
      getAllUsers();
    } catch (err) {
      console.log(err);
    }
  };
  // -----------Users--------------------------------------------------------------------------------------------------------------
  // -----------Training--------------------------------------------------------------------------------------------------------------

  const [DataFormsTraining, SetDataFormsTraining] = useState({
    name: "",
    image: "",
    time: "",
  });

  // Function to update form data
  const GetDataFormsTraining = (event) => {
    const { name, value, type } = event.target;

    if (type === "file") {
      const file = event.target.files[0]; // Assuming it's a single file input
      SetDataFormsTraining((prevdata) => ({
        ...prevdata,
        [name]: file,
      }));
    }

    // Handle file input
    else {
      // Handle other input types
      SetDataFormsTraining((prevdata) => ({
        ...prevdata,
        [name]: value,
      }));
    }
  };

  const getAllTraining = async () => {
    try {
      const response = await axios.get("/api/v1/training");
      setTraining(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTraining = async (idTraining) => {
    try {
      const response = await axios.delete(`api/v1/training/${idTraining}`);
      getAllTraining();
      getAllExercises();
    } catch (err) {
      console.log(err);
    }
  };

  const createTraning = async () => {
    const form = new FormData();
    form.append("name", DataFormsTraining.name);
    form.append("time", DataFormsTraining.time);
    form.append("image", DataFormsTraining.image);
    try {
      const response = await axios.post("/api/v1/training", form);
      getAllTraining();
    } catch (err) {
      console.log(err);
    }
  };

  // -----------Training--------------------------------------------------------------------------------------------------------------
  // -----------Exercises--------------------------------------------------------------------------------------------------------------

  const [DataFormsExercise, SetDataFormsExercise] = useState({
    name: "",
    image: "",
    repeat: "",
    description: "",
    idTraining: "",
    video: "",
  });

  // Function to update form data
  const GetDataFormsExercise = (event) => {
    const { name, value, type } = event.target;
    if (type === "file") {
      const file = event.target.files[0]; // Assuming it's a single file input
      console.log(file);
      SetDataFormsExercise((prevdata) => ({
        ...prevdata,
        [name]: file,
      }));
    }

    // Handle file input
    else {
      // Handle other input types
      SetDataFormsExercise((prevdata) => ({
        ...prevdata,
        [name]: value,
      }));
    }
  };

  const getAllExercises = async () => {
    try {
      const response = await axios.get("/api/v1/exercise/");
      setExercises(response.data.data);
      // console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const createExercise = async () => {
    const form = new FormData();
    form.append("name", DataFormsExercise.name);
    form.append("repeat", DataFormsExercise.repeat);
    form.append("description", DataFormsExercise.description);
    form.append("idTraining", DataFormsExercise.idTraining);
    form.append("image", DataFormsExercise.image);
    form.append("video", DataFormsExercise.video);

    try {
      const response = await axios.post("/api/v1/exercise", form, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
        },
      });
      console.log(response);
      getAllTraining();

      getAllExercises();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteExercise = async (idExercise) => {
    try {
      const response = await axios.delete(`api/v1/exercise/${idExercise}`);
      getAllExercises();
    } catch (err) {
      console.log(err);
    }
  };

  const editExercise = async (idExercise) => {
    const form = new FormData();
    form.append("name", DataFormsExercise.name);
    form.append("repeat", DataFormsExercise.repeat);
    form.append("description", DataFormsExercise.description);
    form.append("idTraining", DataFormsExercise.idTraining);
    form.append("image", DataFormsExercise.image);
    form.append("video", DataFormsExercise.video);

    try {
      const response = await axios.patch(
        `/api/v1/exercise/${idExercise}`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
          },
        }
      );

      getAllExercises();
    } catch (err) {
      console.log(err);
    }
  };

  
  // -----------Exercises--------------------------------------------------------------------------------------------------------------

  // Object to Share Data in Comment
  const data = {
    DataFormsAdmins,
    GetDataFormsAdmins,
    createAdmin,
    loginAdmin,
    users,
    deleteUsers,
    training,
    deleteTraining,
    GetDataFormsTraining,
    DataFormsTraining,
    createTraning,
    exercises,
    DataFormsExercise,
    GetDataFormsExercise,
    createExercise,
    deleteExercise,
    editExercise,
    SetDataFormsExercise,
    profileadmin,
    isAuthenticated,
    contactus,
    DeleteContact,
  };

  // Wrap children components with the context provider
  return <AdminContext.Provider value={data}>{children}</AdminContext.Provider>;
}

export default AdminProvidor;
