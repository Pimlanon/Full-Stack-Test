import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Layout from "../layouts/Layout";
import CreateUserHead from "../components/CreateUserHeads/CreateUserHead";
import CreateUserForm from "../components/CreateuserForms/CreateUserForm";

function CreateNewUserPage() {
  const [invalidIMG, setInvalidIMG] = useState(false);
  const [image, setImage] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    gender: "Prefer-not-to-say",
    birthDate: "Prefer-not-to-say",
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

  const handleDeleteImage = (e) => {
    e.preventDefault();
    setUserData({ ...userData, picture: null });
    setImage(null);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    for (const [key, value] of Object.entries(userData)) {
      //check valid file of image
      if (
        key === "picture" &&
        value instanceof File &&
        !value.type.startsWith("image")
      ) {
        setInvalidIMG(true);
        return;
      }

      formData.append(key, value);
    }

    try {
      setIsSending(true);

      await axios.post("http://localhost:3800/users", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setIsSending(false);

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
        invalidIMG={invalidIMG}
        isSending={isSending}
      />
    </Layout>
  );
}

export default CreateNewUserPage;
