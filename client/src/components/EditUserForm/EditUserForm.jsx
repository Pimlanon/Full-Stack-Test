import {
  Container,
  Form,
  ImageContainer,
  InputContainer,
  NameContainer,
} from "../CreateuserForms/CreateUserForm.styled";

function EditUserForm({
  handleFormSubmit,
  handleInputChange,
  userData,
  handleCancel,
}) {
  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <div className="check">
          <ImageContainer>
            <figure></figure>
            <div className="image-btn">
              <button>Upload Profile Picture</button>
              <button>Delete Picture</button>
            </div>
          </ImageContainer>
          <InputContainer>
            <NameContainer>
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Please enter First name"
                  onChange={handleInputChange}
                  required
                  value={userData.firstName}
                ></input>
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Please enter Last name"
                  onChange={handleInputChange}
                  required
                  value={userData.lastName}
                ></input>
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  onChange={handleInputChange}
                  required
                  value={userData.gender}
                >
                  <option value="" disabled={false}>
                    -- Please select Gender --
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
              <div>
                <label htmlFor="birthDate">Birthday</label>
                <input
                  type="date"
                  name="birthDate"
                  id="birthday"
                  onChange={handleInputChange}
                  required
                  value={userData.birthDate}
                ></input>
              </div>
            </NameContainer>
          </InputContainer>
        </div>
        <div className="btn-container">
          <button onClick={handleCancel}>CANCEL</button>
          <button type="submit">SAVE</button>
        </div>
      </Form>
    </Container>
  );
}

export default EditUserForm;
