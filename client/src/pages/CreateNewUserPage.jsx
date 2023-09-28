import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Layout from "../layouts/Layout";
import CreateUserHead from "../components/CreateUserHeads/CreateUserHead";
import CreateUserForm from "../components/CreateuserForms/CreateUserForm";

function CreateNewUserPage() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    picture: "",
  });

  const NavigateTo = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserData({ ...userData, [name]: value });
  };

  console.log("formData : ", userData);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3800/users",
        userData
      );
      console.log("User created successfully:", response.data);

      //show alert if successfuly created
      Swal.fire({
        icon: "success",
        title: "User Created",
        text: "User has been created successfully!",
      }).then(() => {
        NavigateTo("/users");
      });
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  };

  return (
    <Layout>
      <CreateUserHead />
      <CreateUserForm
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
    </Layout>
  );
}

export default CreateNewUserPage;
