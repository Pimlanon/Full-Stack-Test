import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Layout from "../layouts/Layout";
import UserListHead from "../components/UserListHeads/UserListHead";
import UserListTable from "../components/UserListTables/UserListTable";

function UserListPage() {
  const [users, setUsers] = useState([]);

  const getUsersData = async () => {
    try {
      const response = await axios.get("http://localhost:3800/users");
      console.log(response.data.data);
      setUsers(response.data.data);
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

  return (
    <Layout>
      <UserListHead />
      <UserListTable users={users} handleDelete={handleDelete} />
    </Layout>
  );
}

export default UserListPage;
