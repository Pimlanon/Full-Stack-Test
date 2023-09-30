import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Layout from "../layouts/Layout";
import UserListHead from "../components/UserListHeads/UserListHead";
import UserListTable from "../components/UserListTables/UserListTable";
import { Page } from "../components/UserListTables/UserListTable.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleLeft,
  faCircleRight,
} from "@fortawesome/free-regular-svg-icons";

function UserListPage() {
  const navigateTo = useNavigate();
  const [users, setUsers] = useState([]);
  const [limit, setLimit] = useState(3); //page limit
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
      const response = await axios.get("http://localhost:3800/users", {
        params: {
          page,
          limit,
        },
      });
      console.log(" pls ", response.data.data);

      console.log("API response:", response.data);

      //Get total of document in database and calculate total pages.
      const totalDocs = response.data.totalDocs;
      console.log(totalDocs);
      const totalPages = Math.ceil(totalDocs / limit);
      setTotalPages(totalPages);

      console.log("totalPages", totalPages);

      const formattedUsers = response.data.data.map((user) => {
        const formattedBirthDate =
          user.birthDate !== "Prefer-not-to-say"
            ? formatDate(user.birthDate)
            : "Prefer-not-to-say";
        return {
          ...user,
          birthDate: formattedBirthDate,
        };
      });

      setUsers(formattedUsers);
    } catch (error) {
      console.error("Failed to fetch users:", error);
      setUsers([]);
    }
  };

  //Handler page change
  const handlerPrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handlerNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    getUsersData();
  }, [page, limit]);

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

      {/* page */}
      {totalPages > 1 && (
        <Page>
          <div>
            <FontAwesomeIcon
              onClick={handlerPrevPage}
              icon={faCircleLeft}
              className="faCircle"
              style={{ color: page !== 1 ? "4a7dff" : "ababab" }}
            />
            <span>{page}</span>
            <FontAwesomeIcon
              onClick={handlerNextPage}
              icon={faCircleRight}
              className="faCircle"
              style={{ color: page !== totalPages ? "4a7dff" : "ababab" }}
            />
          </div>
        </Page>
      )}
    </Layout>
  );
}

export default UserListPage;
