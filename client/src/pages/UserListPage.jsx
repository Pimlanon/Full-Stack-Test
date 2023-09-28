import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Layout from "../layouts/Layout";
import UserListHead from "../components/UserListHeads/UserListHead";
import UserListTable from "../components/UserListTables/UserListTable";

function UserListPage() {
  const navigateTo = useNavigate();
  const [users, setUsers] = useState([]);

  //format date
  const formatDate = (date) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    const [month, day, year] = new Date(date)
      .toLocaleDateString(undefined, options)
      .split(" ");
    return `${parseInt(day)} ${month} ${year}`;
  };

  const getUsersData = async () => {
    try {
      const response = await axios.get("http://localhost:3800/users");
      console.log(response.data.data);
      const formattedUsers = response.data.data.map((user) => ({
        ...user,
        birthDate: formatDate(user.birthDate),
      }));
      setUsers(formattedUsers);
    } catch (error) {
      console.error("Failed to fetch users:", error);
      setUsers([]);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const confirmed = await Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to recover this user",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "DELETE",
        cancelButtonText: "CANCEL",
      });

      if (confirmed.isConfirmed) {
        await axios.delete(`http://localhost:3800/users/${id}`);
        console.log("User deleted successfully!");

        // Reload the data after successful delete
        getUsersData();
      }
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  const handleEdit = (id) => {
    navigateTo(`/users/${id}`);
  };

  return (
    <Layout>
      <UserListHead />
      <UserListTable
        users={users}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </Layout>
  );
}

export default UserListPage;
