import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Layout from "../layouts/Layout";
import CreateUserHead from "../components/CreateUserHeads/CreateUserHead";
import CreateUserForm from "../components/CreateuserForms/CreateUserForm";

function CreateNewUserPage() {
  const [image, setImage] = useState(null);
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

  const handleFileChange = (e) => {
    const { files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      setImage(URL.createObjectURL(file));
      setUserData((prevInputs) => ({ ...prevInputs, picture: file }));
    }
  };

  console.log(image);

  console.log("userData : ", userData);

  const handleDeleteImage = (e) => {
    e.preventDefault();
    setUserData({ ...userData, picture: null });
    setImage(null);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    for (const [key, value] of Object.entries(userData)) {
      formData.append(key, value);
    }

    try {
      const response = await axios.post(
        "http://localhost:3800/users",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
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

  const handleCancel = () => {
    NavigateTo("/users");
  };

  return (
    <Layout>
      <CreateUserHead />
      <CreateUserForm
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        handleCancel={handleCancel}
        handleFileChange={handleFileChange}
        image={image}
        handleDeleteImage={handleDeleteImage}
      />
    </Layout>
  );
}

export default CreateNewUserPage;
