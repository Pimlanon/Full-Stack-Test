import { Container } from "./UserListTable.styled";
import PropTypes from "prop-types";

function UserListTable({ users, handleDelete, handleEdit }) {
  console.log(users);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Profile picture</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Gender</th>
            <th>Birthday</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="col1">{user.picture}</td>
              <td className="col2">{user.firstName}</td>
              <td className="col3">{user.lastName}</td>
              <td className="col4">{user.gender}</td>
              <td className="col5">{user.birthDate}</td>
              <td className="col6">
                <div>
                  <button onClick={() => handleEdit(user._id)}>Edit</button>
                  <button onClick={() => handleDelete(user._id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

UserListTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UserListTable;
