import { Container } from './UserListTable.styled';

function UserListTable() {
  return (
    <Container>
      <table>
        <tr>
          <th>Profile picture</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Gender</th>
          <th>Birthday</th>
          <th>Action</th>
        </tr>
        <tr>
          <td className="col1">
            <div>
              <figure></figure>
            </div>
          </td>
          <td className="col2">Rattapong</td>
          <td className="col3">Sukjai</td>
          <td className="col4">Male</td>
          <td className="col5">13 Jun 2023</td>
          <td className="col6">
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </td>
        </tr>
        <tr>
          <td className="col1">
            <div>
              <figure></figure>
            </div>
          </td>
          <td className="col2">Rattapong</td>
          <td className="col3">Sukjai</td>
          <td className="col4">Male</td>
          <td className="col5">13 Jun 2023</td>
          <td className="col6">
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </td>
        </tr>
      </table>
    </Container>
  );
}

export default UserListTable;
