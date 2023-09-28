import Layout from "../layouts/Layout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import CreateUserHead from "../components/CreateUserHeads/CreateUserHead";
import EditUserForm from "../components/EditUserForm/EditUserForm";

function EditUserPage() {
  const { id } = useParams();
  const NavigateTo = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    picture: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3800/users/${id}`, userData);

      //show alert if successfully updated
      Swal.fire({
        icon: "success",
        title: "User Updated",
        text: "User has been updated successfully!",
      }).then(() => {
        NavigateTo("/users");
      });
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  const handleCancel = () => {
    NavigateTo("/users");
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3800/users/${id}`);
        setUserData(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [id]);

  console.log("userDataInEdit :", userData);

  return (
    <Layout>
      <CreateUserHead />
      <EditUserForm
        userData={userData}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        handleCancel={handleCancel}
      />
    </Layout>
  );
}

export default EditUserPage;
