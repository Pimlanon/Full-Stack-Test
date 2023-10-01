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
  const [image, setImage] = useState(null);
  const [isSending, setIsSending] = useState(false);
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
    console.log("Delete Picture button clicked!");
    setUserData({ ...userData, picture: null });
    setImage(null);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (const [key, value] of Object.entries(userData)) {
      formData.append(key, value);
    }

    console.log("formData ; ", formData);

    try {
      setIsSending(true);

      const response = await axios.put(
        `http://localhost:3800/users/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("completed", response);

      setIsSending(false);

      //show alert if successfully updated
      Swal.fire({
        icon: "success",
        title: "User Updated",
        text: "User has been updated successfully!",
      }).then(() => {
        console.log("Swal pop-up displayed");
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
        handleFileChange={handleFileChange}
        image={image}
        handleDeleteImage={handleDeleteImage}
        isSending={isSending}
      />
    </Layout>
  );
}

export default EditUserPage;
